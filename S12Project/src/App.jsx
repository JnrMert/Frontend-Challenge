import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { DataProvider } from "./context/DataContext";

function App() {
  const { theme } = useTheme();

  return (
    <>
      <Header />
      <Profile />
      <Skills />
      <Project />
      <Footer />
      <ThemeProvider>
        <LanguageProvider>
          <DataProvider>
            <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
              <Header />
              <Profile />
              <Skills />
              <Project />
              <Footer />
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
              />
            </div>
          </DataProvider>
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
