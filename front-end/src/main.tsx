import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { theme } from "../src/theme.ts";
import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <ToastContainer
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      rtl={false}
      theme="dark"
    />
  </React.StrictMode>
);
