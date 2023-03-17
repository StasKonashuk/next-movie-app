import { ChangeEvent, useCallback, useState } from "react";
import { CustomInput } from "@/components/input";
import { CustomButton } from "@/components/button";

import styles from "@/styles/Home.module.css";

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
            onClickHandler={() => {}}
          />
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
