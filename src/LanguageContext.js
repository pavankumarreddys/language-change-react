import React, { createContext, useContext, useState } from 'react';

// Create a context for the language
const LanguageContext = createContext();

// Create a custom hook to access the language context
export const useLanguage = () => useContext(LanguageContext);

// Language provider component
export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  // Function to update the selected language
  const updateLanguage = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
