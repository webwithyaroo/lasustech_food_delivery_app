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
    name: "Signature Dish 1",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    description: "A delightful combination of fresh ingredients",
    calories: 420,
    ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3"],
    allergens: ["Dairy"],
    category: "Popular Items"
  },
  {
    id: "2",
    name: "Special Item 2",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
    description: "Our chef's special creation",
    calories: 380,
    ingredients: ["Ingredient 4", "Ingredient 5", "Ingredient 6"],
    allergens: ["Nuts"],
    category: "Specials"
  },
  {
    id: "3",
    name: "Healthy Choice 3",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    description: "A nutritious and delicious option",
    calories: 300,
    ingredients: ["Ingredient 7", "Ingredient 8", "Ingredient 9"],
    allergens: [],
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">${item.price}</span>
                    <Button
                      onClick={() => handleAddToCart(item)}
                      className="bg-primary text-white hover:bg-primary/90"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
