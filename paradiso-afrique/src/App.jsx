import{BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import Navbar from './components/Navbar';
import SignatureDishes from './components/SignatureDishes';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import FeedbackForm from './components/FeedbackForm';
import ReservationPage from './pages/ReservationPage';


export const ThemeContext = createContext();

export const useTheme = ()=> {
  const context = useContext(ThemeContext);
  if(!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

function App() {
  const[isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () =>{
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={isDarkMode ? 'dark' : ''}>
        <div>
          <Navbar />
          <main>
            <Hero />
            <OurStory />
            <SignatureDishes />
            <ChatBot />
            <FeedbackForm />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
