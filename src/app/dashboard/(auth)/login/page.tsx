"use client";
import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
const Login = () => {
  const router = useRouter();
  const session = useSession();
  const handleSumbit = async (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const email = (target[0] as HTMLInputElement).value;
    const password = (target[1] as HTMLInputElement).value;
    console.log(email, password);
    signIn("credentials", { email, password });
  };
  return (
    <>
      {session.status == "authenticated" ? (
        router.push("/dashboard")
      ) : (
        <form
          className="flex flex-col justify-center
      gap-10 w-[50%] m-auto
      
    "
          onSubmit={handleSumbit}
          action=""
        >
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            required
          />

          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            required
          />

          <button
            className="bg-green-900 p-3 px-10 font-semibold text-center
        text-base text-gray-300 rounded-md 
        "
          >
            Login
          </button>
        </form>
      )}
    </>
  );
};

export default Login;
