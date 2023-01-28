import { useState } from "react";
import { DarkModeContextValues, DarkModeContext } from "./DarkModeContext";

interface Props {
  children: React.ReactNode;
}
export const DarkModeContextProvider = (props: Props) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") == "dark"
  );
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("theme", darkMode ? "light" : "dark");
      return !darkMode;
    });
  };
  const context: DarkModeContextValues = {
    darkMode,
    toggleDarkMode,
  };
  return (
    <DarkModeContext.Provider value={context}>
      {props.children}
    </DarkModeContext.Provider>
  );
};
