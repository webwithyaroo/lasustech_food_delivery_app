"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Clock, MapPin, Heart, Share2, Phone, Info } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/hooks/use-carts";
import { useToast } from "@/hooks/use-toast";
import { restaurants } from "@/components/constants";
import { useParams } from "next/navigation";

const menuItems = [
  {
    id: "1",
    name: "Classic Margherita Pizza",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
    description: "Fresh mozzarella, tomatoes, and basil on a crispy crust",
    category: "Popular Items"
  },
  {
    id: "2",
    name: "Grilled Salmon Bowl",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
    description: "Fresh grilled salmon with quinoa and seasonal vegetables",
    category: "Healthy Options"
  },
  {
    id: "3",
    name: "Truffle Mushroom Pasta",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77",
    description: "Handmade pasta with wild mushrooms and truffle oil",
    category: "Specials"
  },
  {
    id: "4",
    name: "Korean BBQ Bowl",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733",
    description: "Marinated beef, kimchi, and rice with house sauce",
    category: "Popular Items"
  },
  {
    id: "5",
    name: "Mediterranean Platter",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1542528180-a1208c5169a5",
    description: "Hummus, falafel, tabbouleh, and warm pita bread",
    category: "Healthy Options"
  },
  {
    id: "6",
    name: "Spicy Tuna Roll",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    description: "Fresh tuna, spicy mayo, avocado, and cucumber",
    category: "Specials"
  },
  {
    id: "7",
    name: "Wagyu Beef Burger",
    price: 26.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    description: "Premium wagyu beef with truffle aioli and aged cheddar",
    category: "Popular Items"
  },
  {
    id: "8",
    name: "Acai Power Bowl",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733",
    description: "Organic acai blend topped with fresh fruits and granola",
    category: "Healthy Options"
  }
];

export default function RestaurantPage() {
  const { addItem } = useCart();
  const { toast } = useToast();
  const params = useParams();
  const [activeTab, setActiveTab] = useState("menu");
  const [isFavorite, setIsFavorite] = useState(false);

  const restaurant = restaurants.find(r => r.id.toString() === params.id);

  if (!restaurant) {
    return (
      <div className="container mx-auto px-4 py-8 mt-20 text-center">
        <h1 className="text-2xl font-bold text-red-600">Restaurant not found</h1>
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

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      {/* Restaurant Header */}
      <div className="relative h-[300px] rounded-xl overflow-hidden mb-6">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h1 className="text-4xl font-bold mb-2">{restaurant.name}</h1>
            <div className="flex items-center gap-4 mb-2">
              <span className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
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
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-8">
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 stroke-red-500' : ''}`} />
          {isFavorite ? 'Saved' : 'Save'}
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Share2 className="w-5 h-5" />
          Share
        </Button>
      </div>

      {/* Restaurant Info Tabs */}
      <Tabs defaultValue="menu" className="mb-8">
        <TabsList>
          <TabsTrigger value="menu">Menu</TabsTrigger>
          <TabsTrigger value="info">Information</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="menu" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-2xl shadow-lg group transition-transform duration-500 hover:scale-105"
              >
                <div className="h-80">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
                  <p className="text-base text-secondary dark:text-white mb-3">{item.description}</p>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl font-bold text-white">${item.price}</span>
                  </div>
                  <Button
                    onClick={() => handleAddToCart(item)}
                    size="lg"
                    className="w-full bg-white text-black hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="info" className="mt-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">About {restaurant.name}</h3>
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
            <p className="text-gray-600">We're working on gathering customer reviews.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
