import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";
import data from "../data/data";

// LanguageContext oluşturulması
export const LanguageContext = createContext();

// LanguageProvider bileşeni
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage("language", "tr"); // Varsayılan olarak 'tr'
  const [isInitialLoad, setIsInitialLoad] = useState(true); // İlk yükleme kontrolü

// Custom hook for using the language context
export const useLanguage = () => useContext(LanguageContext);
