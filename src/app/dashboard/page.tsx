"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const DashBoard = () => {
  const session = useSession();
  const router = useRouter();
  console.log(session.status)
 
  return (
    <div>
      {
        (() => {
          switch (session.status) {
            case "loading":
              return <div>...Loading</div>;
    
            case "unauthenticated":
              router.push("/dashboard/login");
              break; // Don't forget the break statement
    
            case "authenticated":
              console.log('sda');
              return <div>page</div>;
    
            default:
              return null; // Return a default value in case none of the cases match
          }
        })()
      }
    </div>
  );
  
};

export default DashBoard;
