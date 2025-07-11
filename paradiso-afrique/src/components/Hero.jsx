import React from "react"
import { Link } from 'react-router-dom';
import{FaArrowCircleLeft} from "react-icons/fa"
import{FaArrowCircleRight} from "react-icons/fa"
import HeroImage1 from "../assets/hero-carousel-1.jpeg";
import HeroImage2 from "../assets/hero-carousel-2.jpeg";
import HeroImage3 from "../assets/hero-carousel-3.jpeg";
import HeroImage4 from "../assets/hero-carousel-4.jpeg";
export default function Hero() {
  //Setting index to states
  const [index, setIndex] = React.useState(0);

  const carouselRef = React.useRef(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const slides = carouselRef.current?.children.length || 1;
      setIndex((previousIndex) => (previousIndex + 1) % slides);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    if (carouselRef.current){
      carouselRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);


  const fullWord = "Paradiso Afrique";
  //Setting index and the displayed characters to states
  const [displayedCharacter, setDisplayedCharacter] = React.useState("");
  const [characterIndex, setCharacterIndex] = React.useState(0);

  React.useEffect(() => {
    if (characterIndex < fullWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedCharacter((prev) => prev + fullWord.charAt(characterIndex));
        setCharacterIndex((prev) => prev + 1);//Incrementing the previous index by 1
      }, 100);//Interval of animation

      return () => clearTimeout(timeout);
    }
  }, [characterIndex]);

  const nextBtn = () => {
    const slidesCount = carouselRef.current?.children.length || 1;
    setIndex((previousIndex) => (previousIndex + 1)% slidesCount);
  };

  const previousBtn = () => {
    const slidesCount = carouselRef.current?.children.length || 1;
    setIndex((previousIndex) =>
    previousIndex === 0? slidesCount -1: previousIndex -1
    );
  };

  return (
    <section id="hero" className="relative w-screen h-screen scroll-mt-40 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-3/4 left-4 z-20 transform -translate-y-1/2">
          <button
            onClick={previousBtn}
            className="text-black p-2 rounded-full hover:text-white"
            aria-label="Previous slide"
          >
            <FaArrowCircleLeft className="text-6xl"  />
          </button>
        </div>

        <div className="absolute top-3/4 right-4 z-20 transform -translate-y-1/2">
          <button
            onClick={nextBtn}
            className="text-black p-2 rounded-full hover:text-white"
            aria-label="Next slide"
          >
            <FaArrowCircleRight className="text-6xl" />
          </button>
        </div>

        <div
          ref={carouselRef}
          className="flex w-screen h-screen"
        >
          <img
            src={HeroImage1}
            className="w-screen h-screen object-cover flex-shrink-0"
          />
          <img
            src={HeroImage2}
            className="w-screen h-screen object-cover flex-shrink-0"
          />
          <img
            src={HeroImage3}
            className="w-screen h-screen object-cover flex-shrink-0"
          />
          <img
            src={HeroImage4}
            className="w-screen h-screen object-cover flex-shrink-0"
          />
        </div>
      </div>

      <div className="z-10 absolute inset-0 flex flex-col items-center justify-center text-center gap-6 px-4 py-8">
        <h2 className="font-italianno text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-white">
          {displayedCharacter}
        </h2>
        <Link
          to="/reservation"
          className="inline-block bg-orange-100 text-black dark:bg-gray-800 dark:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg"
        >
          RESERVE A SEAT
        </Link>
      </div>
    </section>  
  );
}