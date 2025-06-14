"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Star,
  Clock,
  MapPin,
  Heart,
  Share2,
  Phone,
  Info,
  Plus,
  Minus,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import { useCart } from "@/hooks/use-carts";
import { useToast } from "@/hooks/use-toast";
import { restaurants } from "@/components/constants";
import { useParams, useRouter } from "next/navigation";

const menuItems = [
  {
    id: "1",
    name: "Classic Margherita Pizza",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
    description: "Fresh mozzarella, tomatoes, and basil on a crispy crust",
    category: "Popular Items",
  },
  {
    id: "2",
    name: "Grilled Salmon Bowl",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
    description: "Fresh grilled salmon with quinoa and seasonal vegetables",
    category: "Healthy Options",
  },
  {
    id: "3",
    name: "Truffle Mushroom Pasta",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77",
    description: "Handmade pasta with wild mushrooms and truffle oil",
    category: "Specials",
  },
  {
    id: "4",
    name: "Korean BBQ Bowl",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733",
    description: "Marinated beef, kimchi, and rice with house sauce",
    category: "Popular Items",
  },
  {
    id: "5",
    name: "Mediterranean Platter",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1542528180-a1208c5169a5",
    description: "Hummus, falafel, tabbouleh, and warm pita bread",
    category: "Healthy Options",
  },
  {
    id: "6",
    name: "Spicy Tuna Roll",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    description: "Fresh tuna, spicy mayo, avocado, and cucumber",
    category: "Specials",
  },
  {
    id: "7",
    name: "Wagyu Beef Burger",
    price: 26.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    description: "Premium wagyu beef with truffle aioli and aged cheddar",
    category: "Popular Items",
  },
  {
    id: "8",
    name: "Acai Power Bowl",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733",
    description: "Organic acai blend topped with fresh fruits and granola",
    category: "Healthy Options",
  },
];

export default function RestaurantPage() {
  const { addItem, items, updateQuantity } = useCart();
  const { toast } = useToast();
  const router = useRouter();
  const params = useParams();
  const [activeTab, setActiveTab] = useState("menu");
  const [isFavorite, setIsFavorite] = useState(false);

  const restaurant = restaurants.find((r) => r.id.toString() === params.id);

  if (!restaurant) {
    return (
      <div className="container mx-auto px-4 py-8 mt-20 text-center">
        <h1 className="text-2xl font-bold text-red-600">
          Restaurant not found
        </h1>
      </div>
    );
  }

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    });

    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

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
        title: "Added to cart",
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

  return (
    <div className="container mx-auto px-4 py-8 ">
      {/* Restaurant Header */}{" "}
      <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-xl overflow-hidden mb-6">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              {restaurant.name}
            </h1>
            <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-2 text-sm md:text-base">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 stroke-yellow-400" />
                {restaurant.rating}
              </span>
              <span>({restaurant.reviewCount} reviews)</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {restaurant.deliveryTime}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {restaurant.distance}
              </span>
            </div>
            <div className="flex gap-2">
              {restaurant.cuisine.map((type) => (
                <Badge key={type} variant="secondary">
                  {type}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-4 mb-8 justify-between">
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => setIsFavorite(!isFavorite)}>
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? "fill-red-500 stroke-red-500" : ""
              }`}
            />
            {isFavorite ? "Saved" : "Save"}
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Share2 className="w-5 h-5" />
            Share
          </Button>
        </div>
        {items.length > 0 && (
          <Button
            onClick={() => router.push("/cart")}
            className="bg-accent text-white hover:bg-accent/90">
            <ShoppingCart className="w-4 h-4 mr-2" />
            View Cart ({items.reduce((acc, item) => acc + item.quantity, 0)})
          </Button>
        )}
      </div>
      {/* Restaurant Info Tabs */}
      <Tabs defaultValue="menu" className="mb-8">
        <TabsList>
          <TabsTrigger value="menu">Menu</TabsTrigger>
          <TabsTrigger value="info">Information</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>{" "}
        <TabsContent value="menu" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {menuItems.map((item) => (
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
                    <Badge className="bg-white/90 dark:bg-black/80 text-black dark:text-white">
                      ${item.price}
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="outline"
                      className="text-gray-700 dark:text-gray-300">
                      {item.category}
                    </Badge>
                  </div>
                  {getItemQuantity(item.id) > 0 ? (
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(item, -1)}
                        className="h-8 w-8">
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">
                        {getItemQuantity(item.id)}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(item, 1)}
                        className="h-8 w-8">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <Button
                      onClick={() => handleQuantityChange(item, 1)}
                      className="w-full bg-primary dark:bg-white hover:bg-accent dark:text-primary text-white hover:bg-primary/90">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="info" className="mt-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                About {restaurant.name}
              </h3>
              <p className="text-gray-600">{restaurant.description}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Details</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {restaurant.distance} away
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Delivery time: {restaurant.deliveryTime}
                </p>
                <p className="flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Price Range: {restaurant.priceRange}
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="mt-6">
          <div className="text-center py-8">
            <h3 className="text-xl font-semibold mb-2">Reviews Coming Soon</h3>
            <p className="text-gray-600">
              We're working on gathering customer reviews.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
