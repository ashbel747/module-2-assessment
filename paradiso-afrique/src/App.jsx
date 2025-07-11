import Navbar from './components/Navbar';
import OurStory from './components/OurStory'
import SignatureDishes from './components/SignatureDishes';
import ChatBot from './components/ChatBot';
import FeedbackForm from './components/FeedbackForm'
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  
  return (
    <div>
      <Navbar />
      <main>
        <Hero  />
        <OurStory  />
        <SignatureDishes />
        <FeedbackForm  />
        <ChatBot  />
      </main>
      <footer>
        <Footer  />
      </footer>
      
    </div>
  );
}

export default App;
