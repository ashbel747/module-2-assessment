export default function OurStory() {
  return (
    <section className="bg-[#f6ecd9] py-0 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" id="our-story">
      <div className="flex flex-col md:flex-row w-full h-full min-h-[350px]">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/about-us-image.jpeg"
            alt="Paradiso Afrique Interior"
            className="w-full h-full object-cover object-center"
            style={{ minHeight: 250, maxHeight: 450 }}
          />
        </div>
        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-start px-6 py-8 md:py-0">
          <div className="bg-yellow-800 px-6 py-2 rounded w-max mb-6 mx-auto md:mx-0">
            <h2 className="text-2xl md:text-3xl font-semibold italic text-white font-serif tracking-wide text-center md:text-left">
              Paradiso Afrique Story
            </h2>
          </div>
          <div className="text-gray-800 text-base md:text-lg">
            <p className="mb-4">
              At Paradiso Afrique, we bring Africa to your plate—one soulful dish at a time. Inspired by the warmth of home and the rhythm of our roots, our space is a celebration of culture, flavor, and connection.
            </p>
            <p className="mb-4">
              From Nigerian jollof to Kenyan chapati, every recipe tells a story and every visit feels like a journey through the heart of the continent.
            </p>
            <p>
              Pull up a chair. You’re home.
            </p>
            {/* Chat Button */}
            <div className="mt-6 flex justify-end">
              <a
                href="#chat"
                className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded hover:bg-yellow-100 transition"
              >
                <span>💬</span>
                <span className="text-sm">Chat with our bot</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}