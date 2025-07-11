import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedin} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkIfOpen = () => {
      const currentHour = new Date().getHours();
      const openingHours = 8;
      const closingHours = 22;
      setIsOpen(currentHour >= openingHours && currentHour <= closingHours);
    };

    checkIfOpen();
  }, []);

  //Smooth scroll
  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
  };

  return (
    <footer
      id="footer"
      className="bg-orange-100 dark:bg-gray-800 dark:text-white text-black p-8 mt-12"
    >
      <nav class="hidden md:flex space-x-6 mb-4">
        <button onClick={() => scrollToSection('hero')} className="hover:font-bold ">Home</button>
        <button onClick={() => scrollToSection('dishes')} className="hover:font-bold ">Dishes</button>
        <button onClick={() => scrollToSection('story')} className="hover:font-bold ">Our Story</button>
        <button onClick={() => scrollToSection('feedback')} className="hover:font-bold ">Feedback</button>
      </nav>
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-6">
        
        {/* Right-block */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Contact us:</h3>
          <p>Tel: <a href="tel:+254789634456">+254789634456</a></p>
          <p>Email: <a href="mailto:paradisoafrique@gmail.com">paradisoafrique@gmail.com</a></p>

          <div className="flex gap-4 text-xl">
            <a href="https://www.facebook.com/" className="hover:text-blue-800">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/" className="hover:text-pink-600">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/" className="hover:text-blue-800">
              <FaLinkedin />
            </a>
            <a href="https://x.com/" className="hover:text-white hover:bg-black">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Left block */}
        <div className="text-center md:text-left">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15956.643333263231!2d37.05533825541991!3d-1.0401850999999775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4e8e7564cb69%3A0x3ef373680c00c558!2sEton%20Hotel!5e0!3m2!1sen!2ske!4v1752046272915!5m2!1sen!2ske"
            width="100%"
            height="150"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded"
          ></iframe>
          <p>We are located at Lavington, Nairobi</p>
          <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
          <p>Everyday: 8:00 AM - 10:00 PM</p>
          <p className="font-bold">
            {isOpen ? "We've Opened!" : "We've Closed!"}
          </p>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-6 text-sm">©{new Date().getFullYear()} This Website was built with passion by Paradiso Afrique Restaurant.</p>
    </footer>
  );
}

