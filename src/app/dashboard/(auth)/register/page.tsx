"use client";
import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
const Register = () => {
  const router = useRouter();
  const handleSumbit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/dashboard/login?sucess=Account created");
    } catch (err) {
      throw new Error(err as string);
    }
  };
  return (
    <form
      className="flex flex-col justify-center
      gap-10 w-[50%] m-auto
      
    "
      onSubmit={handleSumbit}
      action=""
    >
      <input
        type="text"
        className={styles.input}
        placeholder="Username"
        required
      />

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
        Sign up
      </button>
    </form>
  );
};

export default Register;
