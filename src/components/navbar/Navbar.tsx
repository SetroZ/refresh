"use client";

import React, { Children } from "react";

import linkList from "./data";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();
  return (
    <nav
      className="flex
     flex-row justify-between items-center
     h-24
     
     "
    >
      <h1 className="ml-2 font-bold text-xl">Lamamia</h1>
      <ul className=" mr-2 flex flex-row justify-end gap-6 items-center font-semibold text-lg  ">
        {children}

        {linkList.map((link) => (
          <li className="" key={link.id}>
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}

        {session.status == "authenticated" ? (
          <li
            className="font-semibold p-1 bg-green-700  rounded-sm cursor-pointer text-white "
            onClick={()=>signOut()}
          >
            Logout
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
