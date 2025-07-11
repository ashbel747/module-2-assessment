import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../App';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="bg-yellow-800 dark:bg-gray-900 text-black dark:text-white shadow-md sticky top-0 z-50 transition-colors duration-300">
      <nav className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/nav-bar-logo.jpeg" alt="Paradiso Afrique Logo" className="h-10 w-10 rounded-full object-cover" />
          <div>
            <span className="font-bold text-lg dark:text-white">Paradiso Afrique</span>
            <div className="text-xs text-gray-800 dark:text-gray-300">Paradise on every plate</div>
          </div>
        </div>
        
        {/* Nav Links */}
        <ul className="flex items-center space-x-6 font-medium">
          <li>
            <Link to="/" className="hover:text-white dark:hover:text-yellow-400 transition">Home</Link>
          </li>
          <li className="relative">
            <button
              className="hover:text-white dark:hover:text-yellow-400 transition flex items-center"
              onClick={() => setMenuOpen((open) => !open)}
              onBlur={() => setTimeout(() => setMenuOpen(false), 150)}
            >
              Menu <span className="ml-1">▼</span>
            </button>
            {menuOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white dark:bg-gray-800 text-black dark:text-white rounded shadow-lg py-2 z-50">
                <li>
                  <Link to="/menu/main" className="block px-4 py-2 hover:bg-yellow-100 dark:hover:bg-gray-700" onClick={() => setMenuOpen(false)}>
                    Menu Page
                  </Link>
                </li>
                <li>
                  <a href="#our-story" className="block px-4 py-2 hover:bg-yellow-100 dark:hover:bg-gray-700" onClick={() => setMenuOpen(false)}>
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#feedback" className="block px-4 py-2 hover:bg-yellow-100 dark:hover:bg-gray-700" onClick={() => setMenuOpen(false)}>
                    Feedback Form
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#signature-dishes" className="hover:text-white dark:hover:text-yellow-400 transition">Signature Dishes</a>
          </li>
          <li>
            <a href="#chat" className="hover:text-white dark:hover:text-yellow-400 transition">Chat</a>
          </li>
          <li>
            <Link to="/reservation" className="hover:text-white dark:hover:text-yellow-400 transition">Reservations</Link>
          </li>
        </ul>

        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full hover:bg-yellow-700 dark:hover:bg-gray-700 transition" 
          title="Toggle theme"
        >
          {isDarkMode ? (
            <span role="img" aria-label="light mode">🌞</span>
          ) : (
            <span role="img" aria-label="dark mode">🌙</span>
          )}
        </button>
      </nav>
    </header>
  );
}
