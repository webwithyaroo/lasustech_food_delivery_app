"use client";
import { Button } from "@/components/ui/button";

import { foodItems } from "@/components/constants";

const FoodPopular = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-start mb-12">
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold font-inter leading-tight">
            {" "}
            We have many Popular <br />
            Menu Choices{" "}
          </h2>
          <p className="text-gray-600 mt-2 text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl font-inter">
            Loved by foodies around the world
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {foodItems.map((food) => (
            <div
              key={food.id}
              className="relative overflow-hidden rounded-2xl shadow-lg group transition-transform duration-500 hover:scale-105">
              <img
                src={food.image}
                alt={food.title}
                className="w-full h-80 object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-2xl font-semibold text-white">
                  {food.title}
                </h3>
                <p className="text-base text-secondary dark:text-white mb-3">
                  {food.description}
                </p>
                <Button
                  size={"lg"}
                  className="w-full bg-white text-black hover:bg-primary hover:text-white transition-colors duration-300">
                  Order Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-10">
          <Button
            size={"lg"}
            className="bg-white text-black w-4/12 hover:bg-primary hover:text-white transition-colors border border-gray-300">
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FoodPopular;
