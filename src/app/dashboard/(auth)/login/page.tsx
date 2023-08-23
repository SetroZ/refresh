
'use client'
import { signIn } from "next-auth/react";
import React from "react";

const Login = () => {
  return (
    <div>
      Login
      <button onClick={() => signIn("google")}>Login with google</button>
    </div>
  );
};

export default Login;
