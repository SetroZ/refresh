"use client";

import React, { useContext, useState, useEffect } from "react";
import { returnTypes } from "@/app/hooks/useTheme";
const DarkMode = ({darkMode,toggleDarkMode}:returnTypes) => {



  return (
    <div
      className="w-13 h-7 relative
     border-2 border-solid border-green-700 flex
     flex-row
    rounded-2xl
    justify-between
    items-center
    cursor-pointer
    
     "
     onClick={toggleDarkMode}
    >
      <div>🌙</div>
      <div>🔆</div>
      <div
        className={`  transition-all
        rounded-full bg-green-700 absolute w-5 h-5
        ${darkMode == 'dark' ? "left-7" : "left-[3px] "}
        
       
        `}
      ></div>
    </div>
  );
};

export default DarkMode;
