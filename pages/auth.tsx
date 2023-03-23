import { ChangeEvent, useCallback, useState } from "react";
import { CustomInput } from "@/components/input";
import { CustomButton } from "@/components/button";
import axios from "axios";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Auth() {
  const [emailValue, setEmailValue] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [authVariant, setAuthVariant] = useState<"login" | "register">("login");

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const toggleAuthVariant = useCallback(() => {
    setAuthVariant((prevValue) =>
      prevValue === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email: emailValue,
        password,
        callbackUrl: "/profiles",
      });
    } catch (error) {
      console.log(error);
    }
  }, [emailValue, password]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email: emailValue,
        name: userName,
        password,
      });

      login();
    } catch (error) {
      console.log(error);
    }
  }, [emailValue, userName, password, login]);

  return (
    <div className="relative w-full h-screen bg-[url('/images/hero1.png')] bg-no-repeat bg-top bg-contain flex items-center justify-center flex-col desktop:pt-40 tablet:pt-20 laptop:pt-40">
      <div className="flex w-1/2 flex-col p-5 bg-modal-bg-dark-color border-4 rounded-md border-solid border-gray-border-color justify-between">
        <div className="mb-5">
          <h2 className="text-white font-semibold text-4xl">
            {authVariant === "login" ? "Sign In" : "Register"}
          </h2>
        </div>
        {authVariant === "register" && (
          <div className="mb-5">
            <CustomInput
              id="username-input"
              value={userName}
              type="text"
              label="Username"
              onChange={onUserNameChange}
            />
          </div>
        )}
        <div className="mb-5">
          <CustomInput
            id="email-input"
            value={emailValue}
            type="text"
            label="Email"
            onChange={onEmailChange}
          />
        </div>
        <div className="mb-5">
          <CustomInput
            id="password-input"
            value={password}
            type="password"
            label="Password"
            onChange={onPasswordChange}
          />
        </div>
        <div className="mb-5">
          <CustomButton
            value={authVariant === "login" ? "Sign In" : "Sign Up"}
            onClickHandler={authVariant === "login" ? login : register}
          />
        </div>
        <div className="flex flex-row items-center gap-4 mb-8 justify-center">
          <div
            onClick={() => signIn("google", { callbackUrl: "/profiles" })}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
          >
            <FcGoogle size={30} />
          </div>
          <div
            onClick={() => signIn("github", { callbackUrl: "/profiles" })}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
          >
            <FaGithub size={30} />
          </div>
        </div>
        <div>
          <p className="text-gray-text-color">
            {authVariant === "login"
              ? "First time using this app?"
              : "Already have an account?"}
            <span
              onClick={toggleAuthVariant}
              className="text-white ml-2 hover:underline cursor-pointer"
            >
              {authVariant === "login" ? "Create an account" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
