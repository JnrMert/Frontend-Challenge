import React, { useEffect, useState } from "react";
import "./App.css";
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
    </>
  );
}

export default App;
