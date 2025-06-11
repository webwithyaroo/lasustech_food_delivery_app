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

// Mock restaurant data
const restaurantData = {
  id: 1,
  name: "FreshDay Kitchen",
  image: "/placeholder.svg?height=300&width=600",
  rating: 4.8,
  reviewCount: 324,
  deliveryTime: "25-35 min",
  deliveryFee: "Free",
  cuisine: ["Healthy", "Asian", "Vegetarian"],
  distance: "1.2 km",
  description:
    "Fresh, healthy meals made with organic ingredients sourced from local farms. Our chefs create nutritious and delicious dishes that fuel your body and satisfy your taste buds.",
  address: "123 Health Street, Wellness District",
  phone: "+1 (555) 123-4567",
  hours: "Mon-Sun: 8:00 AM - 10:00 PM",
  priceRange: "$$",
  categories: [
    {
      name: "Popular Items",
      items: [
        {
          id: 1,
          name: "Quinoa Power Bowl",
          price: 24.99,
          image: "/placeholder.svg?height=150&width=150",
          description:
            "Nutritious quinoa bowl with fresh vegetables, avocado, and tahini dressing",
          calories: 420,
          ingredients: [
            "Quinoa",
            "Avocado",
            "Kale",
            "Cherry Tomatoes",
            "Tahini",
          ],
          allergens: ["Sesame"],
          popular: true,
        },
        {
          id: 2,
          name: "Green Goddess Smoothie",
          price: 12.99,
          image: "/placeholder.svg?height=150&width=150",
          description:
            "Refreshing blend of spinach, mango, banana, and coconut water",
          calories: 180,
          ingredients: [
            "Spinach",
            "Mango",
            "Banana",
            "Coconut Water",
            "Chia Seeds",
          ],
          allergens: [],
          popular: true,
        },
      ],
    },
    {
      name: "Salads & Bowls",
      items: [
        {
          id: 3,
          name: "Mediterranean Bowl",
          price: 22.99,
          image: "/placeholder.svg?height=150&width=150",
          description:
            "Fresh Mediterranean flavors with chickpeas, olives, and feta cheese",
          calories: 380,
          ingredients: ["Chickpeas", "Olives", "Feta", "Cucumber", "Red Onion"],
          allergens: ["Dairy"],
          popular: false,
        },
        {
          id: 4,
          name: "Asian Fusion Salad",
          price: 21.99,
          image: "/placeholder.svg?height=150&width=150",
          description:
            "Crispy vegetables with sesame ginger dressing and edamame",
          calories: 320,
          ingredients: [
            "Mixed Greens",
            "Edamame",
            "Carrots",
            "Sesame",
            "Ginger",
          ],
          allergens: ["Sesame", "Soy"],
          popular: false,
        },
      ],
    },
    {
      name: "Smoothies & Juices",
      items: [
        {
          id: 5,
          name: "Tropical Paradise",
          price: 14.99,
          image: "/placeholder.svg?height=150&width=150",
          description: "Pineapple, mango, and passion fruit with coconut milk",
          calories: 220,
          ingredients: ["Pineapple", "Mango", "Passion Fruit", "Coconut Milk"],
          allergens: [],
          popular: false,
        },
      ],
    },
  ],
};

export default function RestaurantPage({ params }: { params: { id: string } }) {
  const [selectedCategory, setSelectedCategory] = useState("Popular Items");
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id.toString(),
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
    <div className="min-h-screen bg-gray-50">
      {/* Restaurant Header */}
      <div className="relative">
        <Image
          src={restaurantData.image || "/placeholder.svg"}
          alt={restaurantData.name}
          width={600}
          height={300}
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="container mx-auto">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {restaurantData.name}
                </h1>
                <p className="text-lg opacity-90 mb-4">
                  {restaurantData.description}
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">{restaurantData.rating}</span>
                    <span className="ml-1">
                      ({restaurantData.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {restaurantData.deliveryTime}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {restaurantData.distance}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary" size="icon">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button variant="secondary" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Restaurant Info Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Restaurant Info</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {restaurantData.address}
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      {restaurantData.phone}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {restaurantData.hours}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Cuisine Types</h3>
                  <div className="flex flex-wrap gap-1">
                    {restaurantData.cuisine.map((type) => (
                      <Badge key={type} variant="secondary">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Delivery Info</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Delivery time: {restaurantData.deliveryTime}</p>
                    <p>Delivery fee: {restaurantData.deliveryFee}</p>
                    <p>Minimum order: $15.00</p>
                  </div>
                </div>

                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  <Info className="w-4 h-4 mr-2" />
                  More Info
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Menu Content */}
          <div className="lg:col-span-3">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="grid w-full grid-cols-3 mb-8">
                {restaurantData.categories.map((category) => (
                  <TabsTrigger key={category.name} value={category.name}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {restaurantData.categories.map((category) => (
                <TabsContent key={category.name} value={category.name}>
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                    <div className="grid gap-6">
                      {category.items.map((item) => (
                        <Card
                          key={item.id}
                          className="overflow-hidden hover:shadow-lg transition-shadow">
                          <CardContent className="p-0">
                            <div className="flex flex-col md:flex-row">
                              <div className="md:w-48 h-48 md:h-auto">
                                <Image
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.name}
                                  width={150}
                                  height={150}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1 p-6">
                                <div className="flex justify-between items-start mb-2">
                                  <div>
                                    <h3 className="text-xl font-semibold flex items-center">
                                      {item.name}
                                      {item.popular && (
                                        <Badge className="ml-2 bg-orange-600">
                                          Popular
                                        </Badge>
                                      )}
                                    </h3>
                                    <p className="text-gray-600 mt-1">
                                      {item.description}
                                    </p>
                                  </div>
                                  <span className="text-2xl font-bold text-orange-600">
                                    ${item.price}
                                  </span>
                                </div>

                                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                                  <span>{item.calories} cal</span>
                                  {item.allergens.length > 0 && (
                                    <div className="flex items-center">
                                      <span className="mr-1">Allergens:</span>
                                      {item.allergens.map((allergen, index) => (
                                        <Badge
                                          key={allergen}
                                          variant="outline"
                                          className="ml-1 text-xs">
                                          {allergen}
                                        </Badge>
                                      ))}
                                    </div>
                                  )}
                                </div>

                                <div className="mb-4">
                                  <p className="text-sm text-gray-600 mb-1">
                                    Ingredients:
                                  </p>
                                  <p className="text-sm">
                                    {item.ingredients.join(", ")}
                                  </p>
                                </div>

                                <div className="flex justify-between items-center">
                                  <Button
                                    variant="outline"
                                    onClick={() => {
                                      /* Navigate to item detail page */
                                    }}>
                                    View Details
                                  </Button>
                                  <Button
                                    className="bg-orange-600 hover:bg-orange-700"
                                    onClick={() => handleAddToCart(item)}>
                                    Add to Cart
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
