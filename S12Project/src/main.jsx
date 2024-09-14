import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/themeContext"; // ThemeProvider import edin
import { LanguageProvider } from "./context/LanguageContext"; // LanguageProvider import edin

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      {" "}
      {/* ThemeProvider ile App'i sarmalayın */}
      <LanguageProvider>
        {" "}
        {/* LanguageProvider ile App'i sarmalayın */}
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);
