import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// LanguageContext
export const LanguageContext = createContext();

// LanguageProvider bileşeni
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage("language", "tr"); // Varsayılan olarak 'tr'
  const [isInitialLoad, setIsInitialLoad] = useState(true); // İlk yükleme kontrolü

  // Toast gösterme
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

  // Dil değiştirme fonksiyonu
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "tr" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
      <ToastContainer />
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
