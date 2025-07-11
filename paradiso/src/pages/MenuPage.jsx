import React from "react";
import { useParams } from "react-router-dom";
import dishes from "../data/dishes";

export default function MenuPage() {
  const { type } = useParams();

  const filteredDishes = dishes.filter((dish) => dish.type === type);

  return (
    <div className="p-10  bg-orange-100 dark:bg-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 capitalize text-gray-900 dark:text-white">
        {type} Menu
      </h1>

      {filteredDishes.length === 0 ? (
        <p className="text-center text-gray-500">No dishes found.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-orange-300 dark:bg-gray-900 dark:text-white overflow-hidden"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {dish.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{dish.description}</p>
                <p className="font-bold mt-2 text-black dark:text-white">{dish.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
