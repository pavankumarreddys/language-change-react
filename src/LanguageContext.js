import React, { createContext, useContext, useState } from 'react'
const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);


export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const updateLanguage = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
