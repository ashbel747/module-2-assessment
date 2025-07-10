import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import SignatureDishes from './components/SignatureDishes';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import FeedbackForm from './components/FeedbackForm';
import ReservationPage from './pages/ReservationPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <section id="home">
                <Hero />
              </section>
              <section id="our-story">
                <OurStory />
              </section>
              <section id="signature-dishes">
                <SignatureDishes />
              </section>
              <section id="chat">
                <ChatBot />
              </section>
              <section id="feedback">
                <FeedbackForm />
              </section>
              <footer id="reservations">
                <Footer />
              </footer>
            </main>
          }
        />
        <Route path="/reservations" element={<ReservationPage />} />
      </Routes>
    </Router>
  );
}

export default App;