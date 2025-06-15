"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { restaurants } from "@/components/constants";
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

  useEffect(() => {
    let updatedList = [...restaurants];

    // Search filter
    if (searchTerm.trim() !== "") {
      updatedList = updatedList.filter((restaurant) =>
        `${restaurant.name} ${restaurant.description} ${restaurant.cuisine.join(
          " "
        )}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    // Cuisine filter
    if (selectedCuisine !== "all") {
      updatedList = updatedList.filter((restaurant) =>
        restaurant.cuisine.includes(selectedCuisine)
      );
    }

    // Sorting logic
    updatedList.sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "deliveryTime") {
        const timeA = parseInt(a.deliveryTime);
        const timeB = parseInt(b.deliveryTime);
        return timeA - timeB;
      }
      if (sortBy === "distance") {
        const distA = parseFloat(a.distance);
        const distB = parseFloat(b.distance);
        return distA - distB;
      }
      if (sortBy === "priceRange") {
        const priceToNumber = (price: string) => price.length; // e.g. "$$$" => 3
        return priceToNumber(a.priceRange) - priceToNumber(b.priceRange);
      }
      return 0;
    });

    setFilteredRestaurants(updatedList);
  }, [searchTerm, selectedCuisine, sortBy]);

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative pt-10">
        <Image
          src="https://images.unsplash.com/photo-1615361200141-f45040f367be?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Food Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="relative container mx-auto px-4 pb-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl  text-white md:text-6xl font-bold mb-6">
              Discover Amazing Restaurants
            </h1>
            <p className=" max-sm:text-base font-medium font-montserrat text-white  text-2xl mb-8 opacity-90">
              From local favorites to trending hotspots, find the perfect meal
              for any craving.
            </p>
            <div className="flex  flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search restaurants or dishes..."
                  className="pl-10  text-gray-900 placeholder:text-gray-500 placeholder:text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button
                // size="lg"
                className="bg-white text-primary hover:bg-gray-100  px-8 max-sm:px-4">
                <Filter className="w-4 h-4 " />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
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
              className="cursor-pointer hover:bg-primary">
              Free Delivery
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-primary">
              Under 30 min
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-primary">
              4.5+ Rating
            </Badge>
          </div>
        </div>

        {/* All Restaurants */}
        <section>
          <h2 className="text-2xl font-bold mb-6">All Restaurants</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant) => (
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
                    <Badge className="bg-green-500 p">
                      {restaurant.deliveryFee === "Free"
                        ? "Free Delivery"
                        : restaurant.deliveryFee}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-white/80 hover:bg-white">
                      <Heart fill="red" className="w-4 h-4 outline-none" />
                    </Button>
                  </div>
                  {restaurant.featured && (
                    <Badge className="absolute top-2 left-2 text-white bg-accent">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{restaurant.name}</h3>
                    <span className="text-xl font-medium text-gray-600">
                      {restaurant.priceRange}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {restaurant.description}
                  </p>

                  <div className="flex items-center gap-4 mb-3 text-sm">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-accent text-acfill-accent mr-1" />
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
                    <Button className="w-full dark:bg-white dark:text-primary hover:bg-primary">
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
