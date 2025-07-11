import React, { useState } from "react";
import dishes from "../data/dishes";

export default function SignatureDishes() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [category, setCategory] = useState("All");

  const categories = ["All", "Vegan", "Non-vegan"];

  const filteredDishes =
    category === "All"
    ? dishes.filter(
        (dish) =>
          dish.category === "Vegan" || dish.category === "Non-vegan"
      )
    : dishes.filter((dish) => dish.category === category);

  const visibleDishes = filteredDishes.slice(0, visibleCount);

  return (
    <section className="p-10 bg-orange-100 dark:bg-gray-800" id="dishes">
      <div class="flex justify-center">
        <h2 class="bg-amber-600 dark:bg-gray-900 inline-block px-5 rounded-lg text-5xl font-italianno text-center mb-8">
          Our Signature Dishes
        </h2>
      </div>


      <div className="flex justify-center gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat);
              setVisibleCount(3);
            }}
            className={`px-4 py-2 hover:scale-105 transition ${
              category === cat
                ? "bg-green-500 dark:bg-green-800 text-white"
                : "bg-green-500 dark:bg-green-800 text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>


      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
        {visibleDishes.map((dish) => (
          <div
            key={dish.id}
            className="group"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {dish.name}
              </h3>
            </div>

          
            <div className="bg-opacity-70 text-black dark:text-white p-4 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center">
              <span className="mt-2 font-bold">{dish.price}</span>
              <p>{dish.description}</p>
            </div>
          </div>
        ))}
      </div>


      {visibleCount < filteredDishes.length && (
        <div className="text-center mt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 8)}
            className="px-6 py-2 bg-green-500 dark:bg-green-800 hover:scale-105 text-black"
          >
            Uncover More...
          </button>
        </div>
      )}
    </section>
  );
}

