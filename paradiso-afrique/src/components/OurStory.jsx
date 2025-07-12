import React from 'react';
import AboutUsImage from '../assets/about-us-image.jpeg'

export default function OurStory() {
  return (
    <section
      className="bg-orange-100 dark:bg-gray-800 py-0 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] transition-colors duration-300"
      id="story"
    >
      <div className="flex justify-center">
        <h2 className="bg-amber-600 dark:bg-gray-900 dark:text-white inline-block px-5 rounded-lg text-5xl font-italianno text-center mb-8">
          Paradiso Afrique Story
        </h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
        {/*Image*/}
        <div>
          <img src={AboutUsImage} className="w-full h-50 object-cover rounded-none border-none shadow-none" />
        </div>
        {/*Text*/}
        <div className="px-4 py-5 mt-20">
          <p className="mb-8 text-base leading-relaxed">
            At Paradiso Afrique, we bring Africa to your plate one soulful dish at a time. Inspired by the warmth of home and the rhythm of our roots, our space is a celebration of culture, flavor, and connection.
          </p>
          <p className="mb-4 text-base leading-relaxed">
            From Nigerian jollof to Kenyan chapati, every recipe tells a story and every visit feels like a journey through the heart of the continent.
          </p>
          <p className="font-semibold text-base">Pull up a chair. You're home.</p>
        </div>  
      </div>    
    </section>
  );
}