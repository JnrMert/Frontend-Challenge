import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLanguage } from "../context/LanguageContext";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const { language } = useLanguage(); // currentLang yerine language kullanılmalı
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          `https://reqres.in/api/users?lang=${language}`,
          data[language]
        );
        setData(response.data);
      } catch (error) {
        console.error("Error during POST request:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [language]); // Sadece language'e bağımlı hale getirildi

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};
