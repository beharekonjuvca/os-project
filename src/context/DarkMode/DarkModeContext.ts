import { createContext, useContext } from "react";

export interface DarkModeContextValues {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
export const DarkModeContext = createContext<DarkModeContextValues>({
  darkMode: false,
  toggleDarkMode: () => {},
});
export const useDarkModeContext = () => {
  if (!DarkModeContext) {
    throw new Error("useDarkModeContext must be used within DarkModeContext");
  }
  return useContext(DarkModeContext);
};
