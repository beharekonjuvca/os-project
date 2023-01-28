import { PowerButton } from "@components/PowerButton/PowerButton";
import { useAuthContext } from "@context/AuthContext/AuthContext";
import { useState } from "react";
import { Login } from "./pages";
import { Home } from "./pages";
import { useDarkModeContext } from "@context/DarkMode/DarkModeContext";

function App() {
  const { isAuthenticated } = useAuthContext();
  const { darkMode } = useDarkModeContext();

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div
        className={`w-full flex bg-gradient-to-b from-primary to-seconadry dark:from-[#23272f] dark:to-[#3D4452] h-screen `}
      >
        {!isAuthenticated ? <Login /> : <Home />}

        <PowerButton />
      </div>
    </div>
  );
}

export default App;
