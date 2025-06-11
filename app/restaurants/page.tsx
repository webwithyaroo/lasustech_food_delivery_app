"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, Clock, MapPin, Search, Filter, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const restaurants = [
  {
    id: 1,
    name: "FreshDay Kitchen",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    reviewCount: 324,
    deliveryTime: "25-35 min",
    deliveryFee: "Free",
    cuisine: ["Healthy", "Asian", "Vegetarian"],
    distance: "1.2 km",
    description: "Fresh, healthy meals made with organic ingredients",
    priceRange: "$$",
    featured: true,
  },
  {
    id: 2,
    name: "Burger Palace",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    reviewCount: 256,
    deliveryTime: "20-30 min",
    deliveryFee: "$2.99",
    cuisine: ["American", "Fast Food", "Burgers"],
    distance: "0.8 km",
    description: "Gourmet burgers and classic American comfort food",
    priceRange: "$",
    featured: false,
  },
  {
    id: 3,
    name: "Pasta Corner",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    reviewCount: 189,
    deliveryTime: "30-40 min",
    deliveryFee: "$1.99",
    cuisine: ["Italian", "Pasta", "European"],
    distance: "2.1 km",
    description: "Authentic Italian pasta and traditional recipes",
    priceRange: "$$",
    featured: true,
  },
  {
    id: 4,
    name: "Sushi Express",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    reviewCount: 412,
    deliveryTime: "35-45 min",
    deliveryFee: "$3.99",
    cuisine: ["Japanese", "Sushi", "Asian"],
    distance: "3.2 km",
    description: "Fresh sushi and Japanese delicacies",
    priceRange: "$$$",
    featured: true,
  },
  {
    id: 5,
    name: "Taco Fiesta",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    reviewCount: 167,
    deliveryTime: "20-30 min",
    deliveryFee: "$2.49",
    cuisine: ["Mexican", "Tacos", "Spicy"],
    distance: "1.8 km",
    description: "Authentic Mexican flavors and spicy delights",
    priceRange: "$",
    featured: false,
  },
  {
    id: 6,
    name: "Mediterranean Delight",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    reviewCount: 203,
    deliveryTime: "25-35 min",
    deliveryFee: "$2.99",
    cuisine: ["Mediterranean", "Healthy", "Vegetarian"],
    distance: "2.5 km",
    description: "Fresh Mediterranean cuisine with healthy options",
    priceRange: "$$",
    featured: false,
  },
];

export default function RestaurantsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  const cuisineTypes = [
    "all",
    "healthy",
    "asian",
    "american",
    "italian",
    "japanese",
    "mexican",
    "mediterranean",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative bg-gradient-to-tr from-black to-orange-600 text-white py-20">
        <Image
          src="https://media.gettyimages.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.jpg?s=612x612&w=0&k=20&c=SEyObHsbBsrd1XZlgEg389VT86BMFKZKfKReKyVPAk4="
          alt="Food Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 "
        />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Discover Amazing Restaurants
            </h1>
            <p className="text-xl mb-8 opacity-90">
              From local favorites to trending hotspots, find the perfect meal
              for any craving.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search restaurants, cuisines, or dishes..."
                  className="pl-10 h-12 text-gray-900"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 h-12 px-8">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Select value={selectedCuisine} onValueChange={setSelectedCuisine}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Cuisine Type" />
            </SelectTrigger>
            <SelectContent>
              {cuisineTypes.map((cuisine) => (
                <SelectItem key={cuisine} value={cuisine}>
                  {cuisine === "all"
                    ? "All Cuisines"
                    : cuisine.charAt(0).toUpperCase() + cuisine.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="deliveryTime">Fastest Delivery</SelectItem>
              <SelectItem value="distance">Nearest</SelectItem>
              <SelectItem value="priceRange">Price Range</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-2 flex-wrap">
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-orange-100">
              Free Delivery
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-orange-100">
              Under 30 min
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-orange-100">
              4.5+ Rating
            </Badge>
          </div>
        </div>

        {/* Featured Restaurants */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Restaurants</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants
              .filter((r) => r.featured)
              .map((restaurant) => (
                <Card
                  key={restaurant.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative">
                    <Image
                      src={restaurant.image || "/placeholder.svg"}
                      alt={restaurant.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Badge className="bg-green-500">
                        {restaurant.deliveryFee === "Free"
                          ? "Free Delivery"
                          : restaurant.deliveryFee}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="bg-white/80 hover:bg-white">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                    {restaurant.featured && (
                      <Badge className="absolute top-2 left-2 bg-orange-600">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">
                        {restaurant.name}
                      </h3>
                      <span className="text-sm font-medium text-gray-600">
                        {restaurant.priceRange}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      {restaurant.description}
                    </p>

                    <div className="flex items-center gap-4 mb-3 text-sm">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-medium">{restaurant.rating}</span>
                        <span className="text-gray-500 ml-1">
                          ({restaurant.reviewCount})
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {restaurant.deliveryTime}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-3 h-3 mr-1" />
                        {restaurant.distance}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {restaurant.cuisine.slice(0, 3).map((type) => (
                        <Badge
                          key={type}
                          variant="secondary"
                          className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>

                    <Link href={`/restaurant/${restaurant.id}`}>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">
                        View Menu
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

        {/* All Restaurants */}
        <section>
          <h2 className="text-2xl font-bold mb-6">All Restaurants</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant) => (
              <Card
                key={restaurant.id}
                className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <Image
                    src={restaurant.image || "/placeholder.svg"}
                    alt={restaurant.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <Badge className="bg-green-500">
                      {restaurant.deliveryFee === "Free"
                        ? "Free Delivery"
                        : restaurant.deliveryFee}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-white/80 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  {restaurant.featured && (
                    <Badge className="absolute top-2 left-2 bg-orange-600">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{restaurant.name}</h3>
                    <span className="text-sm font-medium text-gray-600">
                      {restaurant.priceRange}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {restaurant.description}
                  </p>

                  <div className="flex items-center gap-4 mb-3 text-sm">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-medium">{restaurant.rating}</span>
                      <span className="text-gray-500 ml-1">
                        ({restaurant.reviewCount})
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {restaurant.deliveryTime}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-3 h-3 mr-1" />
                      {restaurant.distance}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {restaurant.cuisine.slice(0, 3).map((type) => (
                      <Badge key={type} variant="secondary" className="text-xs">
                        {type}
                      </Badge>
                    ))}
                  </div>

                  <Link href={`/restaurant/${restaurant.id}`}>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      View Menu
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
