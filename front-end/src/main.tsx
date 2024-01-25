import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { theme } from "../src/theme.ts";
import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
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
