"use client";
export type modeType = "dark" | "light";

export interface returnTypes {
  darkMode: modeType;
  toggleDarkMode: () => void;
}
import { useState } from "react";

const useTheme = () => {
  const [darkMode, setDarkMode] = useState<modeType>(
    (localStorage?.getItem("theme") as modeType) || "dark"
  );
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newState = prev == "dark" ? "light" : "dark";
      localStorage.setItem("theme", newState);
      return newState;
    });
  };

  return [darkMode, toggleDarkMode] as [modeType, () => void];
};
export default useTheme;
