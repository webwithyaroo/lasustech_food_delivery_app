"use client";

import { foodItems } from "@/components/constants";
import { useCart } from "@/hooks/use-carts";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function MenuPage() {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id.toString(),
      name: item.title,
      price: 9.99, // You might want to add prices to your foodItems array
      image: item.image,
      quantity: 1,
    });

    toast({
      title: "Added to cart",
      description: `${item.title} has been added to your cart.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-4xl font-bold text-center mb-8 font-inter dark:text-white">
        Our Menu
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto dark:text-gray-300 font-montserrat">
        Explore our carefully curated menu featuring fresh ingredients and
        delicious combinations. From healthy options to indulgent treats, we have
        something for everyone.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {foodItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 transition-transform duration-300 hover:scale-105">
            <div className="relative h-48 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 font-inter dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4 font-montserrat dark:text-gray-300">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-primary dark:text-accent">
                  $9.99
                </span>
                <Button
                  onClick={() => handleAddToCart(item)}
                  className="bg-primary text-white hover:bg-primary/90 dark:bg-accent dark:hover:bg-accent/90">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}