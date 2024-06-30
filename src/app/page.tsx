"use client";
import { useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className={classNames('transition-colors duration-500', { 'bg-gradient-dark': isDarkMode, 'bg-light': !isDarkMode })}>
      <div className="fixed top-4 right-4">
        <button 
          onClick={toggleDarkMode} 
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white hover:bg-gray-700 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300 transition-colors duration-500"
        >
          <FontAwesomeIcon 
            icon={isDarkMode ? faLightbulb : faMoon} 
            className="text-xl transition-transform duration-500 animate-fade" 
            style={{ animation: 'rotate 0.5s linear' }}
          />
        </button>
      </div>
      <div className={classNames("flex flex-col items-center justify-center min-h-screen py-2 text-center transition-colors duration-500", { 'text-white': isDarkMode, 'text-black': !isDarkMode })}>
        <h1 className="text-6xl font-bold from-purple-500 to-red-500 bg-clip-text text-transparent bg-gradient-to-r">Ankit is Nooooooob</h1>
      </div>
    </main>
  );
}