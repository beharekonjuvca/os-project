import React from "react";
import ReactDOM from "react-dom";

import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";

import "./styles/index.css";
import { AuthContextProvider } from "@context/AuthContext/AuthContextProvider";
import { WindowContextProvider } from "@context/WindowContext/WindowContextProvider";
import { DarkModeContextProvider } from "@context/DarkMode/DarkModeContextProvider";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DarkModeContextProvider>
        <AuthContextProvider>
          <WindowContextProvider>
            <App />
          </WindowContextProvider>
        </AuthContextProvider>
      </DarkModeContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
