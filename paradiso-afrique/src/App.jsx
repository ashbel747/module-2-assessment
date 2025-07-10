import Navbar from './components/Navbar';
import SignatureDishes from './components/SignatureDishes';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import FeedbackForm from './components/FeedbackForm';

function App() {
  
  return (
    <div>
      <Navbar />
      <main>
        <Hero  />
        <OurStory  />
        <SignatureDishes />
        <ChatBot  />
        <FeedbackForm  />
      </main>
      <footer>
        <Footer  />
      </footer> 
    </div>
  );
}

export default App;
