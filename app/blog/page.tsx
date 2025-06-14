"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Clock, ChevronRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Food Delivery: Trends to Watch in 2024",
    excerpt:
      "Explore the latest innovations and technologies shaping the future of food delivery services.",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2",
    category: "Industry Insights",
    author: "Sarah Johnson",
    date: "January 15, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Top 10 Most Popular Cuisines Ordered in 2023",
    excerpt:
      "A deep dive into the most ordered cuisines and dishes on our platform over the past year.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    category: "Food Trends",
    author: "Michael Chen",
    date: "January 10, 2024",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Supporting Local Restaurants: Our Community Initiative",
    excerpt:
      "Learn about our efforts to support local restaurants and strengthen community bonds.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
    category: "Community",
    author: "Emily Rodriguez",
    date: "January 5, 2024",
    readTime: "3 min read",
  },
  {
    id: 4,
    title: "Sustainable Food Delivery: Our Environmental Commitment",
    excerpt:
      "Discover how we're working to reduce our environmental impact and promote sustainable practices.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
    category: "Sustainability",
    author: "David Park",
    date: "December 28, 2023",
    readTime: "6 min read",
  },
];

const categories = [
  "All",
  "Industry Insights",
  "Food Trends",
  "Community",
  "Sustainability",
  "Technology",
  "Company News",
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-10">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-start mb-12">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Ordery Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Discover the latest news, insights, and stories from the world of
            food delivery.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gray-200 dark:border-gray-700 focus:ring-primary dark:focus:ring-accent"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-primary text-white hover:bg-primary/90 dark:bg-accent dark:hover:bg-accent/90"
                      : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-accent border-gray-200 dark:border-gray-700"
                  }>
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300  dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-accent/90 text-white ">
                  {post.category}
                </Badge>
              </div>
              <CardContent className="p-6 ">
                <h2 className="text-xl font-semibold mb-3  cursor-pointer hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    By {post.author}
                  </span>
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary/90 dark:text-accent dark:hover:text-accent/90 py-2 px-4">
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              No blog posts found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
