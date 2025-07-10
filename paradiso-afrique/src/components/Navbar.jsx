import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-yellow-800 text-black shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
             <img src="/nav-bar-logo.jpeg" alt="Paradiso Afrique Logo" className="h-10 w-10 rounded-full object-cover" />
          <div>
            <span className="font-bold text-lg">Paradiso Afrique</span>
            <div className="text-xs text-gray-800">Paradise on every plate</div>
          </div>
        </div>
        {/* Nav Links */}
        <ul className="flex items-center space-x-6 font-medium">
          <li>
            <a href="#home" className="hover:text-white transition">Home</a>
          </li>
          <li className="relative">
            <button
              className="hover:text-white transition flex items-center"
              onClick={() => setMenuOpen((open) => !open)}
              onBlur={() => setTimeout(() => setMenuOpen(false), 150)}
            >
              Menu <span className="ml-1">▼</span>
            </button>
            {menuOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg py-2 z-50">
                <li>
                  <a href="#menu" className="block px-4 py-2 hover:bg-yellow-100" onClick={() => setMenuOpen(false)}>
                    Menu Page
                  </a>
                </li>
                <li>
                  <a href="#our-story" className="block px-4 py-2 hover:bg-yellow-100" onClick={() => setMenuOpen(false)}>
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#feedback" className="block px-4 py-2 hover:bg-yellow-100" onClick={() => setMenuOpen(false)}>
                    Feedback Form
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#signature-dishes" className="hover:text-white transition">Signature Dishes</a>
          </li>
          <li>
            <a href="#chat" className="hover:text-white transition">Chat</a>
          </li>
          <li>
            <a href="#reservations" className="hover:text-white transition">Reservations</a>
          </li>
        </ul>
        {/* Theme Toggle */}
        <button className="ml-4 p-2 rounded-full hover:bg-yellow-700 transition" title="Toggle theme">
          <span role="img" aria-label="theme">🌞</span>
        </button>
      </nav>
    </header>
  );
}
