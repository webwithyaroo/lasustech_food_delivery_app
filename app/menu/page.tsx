"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Plus, Minus } from "lucide-react";
import { useCart } from "@/hooks/use-carts";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const menuItems = [
  {
    id: "1",
    name: "Classic Margherita Pizza",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
    description: "Fresh mozzarella, tomatoes, and basil on a crispy crust",
    rating: 4.8,
    reviews: 128,
    category: "Pizza",
  },
  {
    id: "2",
    name: "Grilled Salmon Bowl",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
    description: "Fresh grilled salmon with quinoa and seasonal vegetables",
    rating: 4.6,
    reviews: 95,
    category: "Healthy",
  },
  {
    id: "3",
    name: "Truffle Mushroom Pasta",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77",
    description: "Handmade pasta with wild mushrooms and truffle oil",
    rating: 4.7,
    reviews: 156,
    category: "Pasta",
  },
  {
    id: "4",
    name: "Korean BBQ Bowl",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733",
    description: "Marinated beef, kimchi, and rice with house sauce",
    rating: 4.9,
    reviews: 203,
    category: "Asian",
  },
  {
    id: "5",
    name: "Mediterranean Platter",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1542528180-a1208c5169a5",
    description: "Hummus, falafel, tabbouleh, and warm pita bread",
    rating: 4.5,
    reviews: 167,
    category: "Mediterranean",
  },
  {
    id: "6",
    name: "Spicy Tuna Roll",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    description: "Fresh tuna, spicy mayo, avocado, and cucumber",
    rating: 4.6,
    reviews: 142,
    category: "Sushi",
  },
  {
    id: "7",
    name: "Wagyu Beef Burger",
    price: 26.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    description: "Premium wagyu beef with truffle aioli and aged cheddar",
    rating: 4.8,
    reviews: 189,
    category: "Burgers",
  },
  {
    id: "8",
    name: "Acai Power Bowl",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733",
    description: "Organic acai blend topped with fresh fruits and granola",
    rating: 4.7,
    reviews: 134,
    category: "Healthy",
  },
];

export default function MenuPage() {
  const router = useRouter();
  const { items, addItem, updateQuantity } = useCart();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(menuItems.map((item) => item.category))
  );

  const filteredItems = selectedCategory
    ? menuItems.filter((item) => item.category === selectedCategory)
    : menuItems;

  const getItemQuantity = (itemId: string) => {
    const cartItem = items.find((item) => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleQuantityChange = (item: any, change: number) => {
    const currentQuantity = getItemQuantity(item.id);
    const newQuantity = currentQuantity + change;

    if (newQuantity <= 0) {
      updateQuantity(item.id, 0);
      toast({
        title: "Item removed",
        description: `${item.name} has been removed from your cart.`,
      });
      return;
    }

    if (currentQuantity === 0) {
      addItem({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1,
      });
      toast({
        title: "Item added",
        description: `${item.name} has been added to your cart.`,
      });
    } else {
      updateQuantity(item.id, newQuantity);
      toast({
        title: change > 0 ? "Quantity increased" : "Quantity decreased",
        description: `${item.name} quantity updated to ${newQuantity}.`,
      });
    }
  };

  const handleViewCart = () => {
    router.push("/cart");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background overflow-x-hidden">
      <div className="container mx-auto px-4 py-8 ">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">
            Our Menu
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}>
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}>
                  {category}
                </Button>
              ))}
            </div>
            {items.length > 0 && (
              <Button
                onClick={handleViewCart}
                className="bg-accent text-white hover:bg-accent/90">
                <ShoppingCart className="w-4 h-4 mr-2" />
                View Cart ({items.reduce((acc, item) => acc + item.quantity, 0)}
                )
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-green-400/90  text-white">
                    ${item.price}
                  </Badge>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-sm text-gray-700 dark:text-gray-300">
                      {item.rating}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className="text-gray-700 dark:text-gray-300">
                    {item.category}
                  </Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.reviews} reviews
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  {getItemQuantity(item.id) > 0 ? (
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(item, -1)}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">
                        {getItemQuantity(item.id)}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(item, 1)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <Button
                      className="w-full bg-primary dark:bg-white  hover:bg-primary/90"
                      onClick={() => handleQuantityChange(item, 1)}>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
