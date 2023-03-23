import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { signOut, getSession } from "next-auth/react";
import { CustomButton } from "@/components/button";
import { NextPageContext } from "next";
import useCurrentUser from "../hooks/useCurrentUser";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <h1 className="text-2xl text-green-500">Movie app</h1>
      <p className="text-white">Logged in as : {user?.name}</p>
      <CustomButton onClickHandler={() => signOut()} value="Log Out" />
    </>
  );
}
