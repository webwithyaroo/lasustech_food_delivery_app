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
    <div className="container mx-auto px-4 py-8 mt-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold mb-6 font-inter">Ordery Blog</h1>
        <p className="text-2xl max-sm:text-base text-gray-600  mx-auto">
          Discover the latest news, insights, and stories from the world of food
          delivery.
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
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory == category
                    ? "bg-accent dark:bg-accent"
                    : "bg-transparent"
                }>
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <Card className="mb-12">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-[300px] md:h-auto">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <Badge className="w-fit mb-4">{blogPosts[0].category}</Badge>
              <h2 className="text-2xl font-semibold mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {blogPosts[0].date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {blogPosts[0].readTime}
                </div>
              </div>
              <Button className="w-fit bg-accent text-white hover:bg-accent/90">
                Read More <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.slice(1).map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <Badge className="mb-4">{post.category}</Badge>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="text-accent hover:text-accent/90">
                  Read More <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Newsletter Subscription */}
      <div className="mt-16 text-center bg-accent/10 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Stay updated with our latest articles, food trends, and exclusive
          offers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-grow"
          />
          <Button className="bg-accent text-white hover:bg-accent/90">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
