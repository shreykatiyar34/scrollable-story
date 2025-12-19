import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppErrorBoundary } from "./components/AppErrorBoundary";
import { ThemeProvider } from "./components/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <App />
      </ThemeProvider>
    </AppErrorBoundary>
  </React.StrictMode>
);

