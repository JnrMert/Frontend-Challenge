import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import data from "../data/data";

// LanguageContext oluşturulması
export const LanguageContext = createContext();

// LanguageProvider bileşeni
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage("language", "tr"); // Varsayılan olarak 'tr'
  const [isInitialLoad, setIsInitialLoad] = useState(true); // İlk yükleme kontrolü

  // Toast mesajını gösterme fonksiyonu
  const showToast = (message, type = "success") => {
    toast[type](message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      className: "bg-green-500 text-white font-bold py-2 px-4 rounded",
    });
  };

  // useEffect hook'u ile veri çekme işlemi
  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false); // İlk yükleme tamamlandıktan sonra durumu güncelle
    } else {
      showToast(
        `${language === "en" ? "English" : "Türkçe"} successfully changed!`
      );
    }
  }, [language]); // Dil değiştiğinde tetiklenir


  return (
      <ToastContainer />
  );
};

// Custom hook for using the language context
export const useLanguage = () => useContext(LanguageContext);
