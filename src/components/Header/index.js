import React, { useState } from 'react';
import { useLanguage } from '../../LanguageContext' // Import the useLanguage hook
import { Link } from 'react-router-dom';
import './index.css';


const Header = () => {
  const { selectedLanguage, updateLanguage } = useLanguage()

  const handleLanguageChange = (e) => {
    updateLanguage(e.target.value); // Call the updateLanguage function to update the language
  };

  const homeText = {
    english: 'Home',
    telugu: 'హోమ్',
    hindi: 'होम',
  };

  const aboutText = {
    english: 'About',
    telugu: 'అబౌట్',
    hindi: 'अबाउट',
  };

  return (
    <div className="nav-header">
      <div>
        <Link to="/">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
          />
        </Link>
      </div>
      <div className="two-items">
        <Link to="/" className="header-name">{homeText[selectedLanguage]}</Link>
        <Link to ="/about" className="header-name">{aboutText[selectedLanguage]}</Link>
      </div>
      <div className="header-items">
        <select
          id="languageSelect"
          className="language-select"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option value="english">English</option>
          <option value="telugu">Telugu</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>
    </div>
  );
};

export default Header;

