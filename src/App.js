import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext'; // Import the LanguageProvider
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Header from './components/Header'; // Import Header component

import './App.css';

const App = () => (
  <Router>
    <LanguageProvider> {/* Wrap your application with LanguageProvider */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LanguageProvider>
  </Router>
);

export default App;