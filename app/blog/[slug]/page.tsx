"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";
import Link from "next/link";

const blogPosts = {
  "art-of-food-photography": {
    title: "The Art of Food Photography: Tips from Professional Food Bloggers",
    content: `
      Food photography is more than just taking pictures of meals—it's about telling a story and creating an emotional connection with viewers. Professional food bloggers understand that successful food photography combines several key elements: lighting, composition, styling, and timing.

      ## Natural Lighting is Key
      The best food photos are often taken using natural light. Position your setup near a window, but avoid direct sunlight which can create harsh shadows. Use a diffuser if needed to soften the light.

      ## Composition Techniques
      - Rule of thirds
      - Leading lines
      - Negative space
      - Color harmony
      - Layering and depth

      ## Styling Tips
      - Use fresh ingredients
      - Add garnishes strategically
      - Consider color contrast
      - Include relevant props
      - Keep it natural looking

      ## Equipment Recommendations
      1. A good camera (DSLR or mirrorless)
      2. Macro lens for detail shots
      3. Tripod for stability
      4. Reflectors and diffusers
      5. Styling tools and props

      Remember, practice makes perfect. The more you shoot, the better you'll become at capturing those mouth-watering shots that make viewers want to reach through their screens.
    `,
    image: "https://images.unsplash.com/photo-1606787619248-f301830a5a57",
    date: "June 14, 2025",
    readTime: "5 min read",
    author: "Sarah Johnson",
    category: "Food Photography",
  },
  "sustainable-food-delivery": {
    title: "Sustainable Food Delivery: The Future of Restaurant Services",
    content: `
      As the food delivery industry continues to grow, restaurants are increasingly focused on sustainable practices to reduce their environmental impact. This shift isn't just good for the planet—it's good for business too.

      ## Current Challenges
      - Excessive packaging waste
      - High carbon emissions from delivery vehicles
      - Food waste
      - Energy consumption

      ## Innovative Solutions
      ### Eco-Friendly Packaging
      Many restaurants are switching to biodegradable containers and implementing packaging reduction strategies.

      ### Electric Delivery Vehicles
      The transition to electric delivery vehicles is reducing carbon emissions significantly.

      ### Smart Route Planning
      AI-powered route optimization helps reduce delivery times and fuel consumption.

      ### Food Waste Reduction
      - Better inventory management
      - Composting programs
      - Donation partnerships
      - Portion control

      ## Benefits of Sustainable Practices
      1. Cost savings
      2. Improved brand image
      3. Customer loyalty
      4. Regulatory compliance
      5. Environmental protection

      The future of food delivery lies in sustainability, and restaurants that adapt early will have a competitive advantage.
    `,
    image: "https://images.unsplash.com/photo-1629905679177-4c4e2623654f",
    date: "June 12, 2025",
    readTime: "4 min read",
    author: "Michael Chen",
    category: "Sustainability",
  },
  "rising-food-trends-2025": {
    title: "Rising Food Trends: What's Hot in 2025",
    content: `
      The culinary world is constantly evolving, and 2025 has brought some exciting new trends to the forefront of the food industry.

      ## Plant-Based Innovation
      The plant-based movement continues to grow with new innovations in meat alternatives and dairy-free options.

      ## Tech-Enhanced Dining
      - AR menu experiences
      - AI-powered personalization
      - Smart kitchen appliances
      - Virtual cooking classes

      ## Global Fusion
      Chefs are creating exciting new combinations by blending different cultural cuisines.

      ## Functional Foods
      Foods that offer specific health benefits are becoming increasingly popular:
      - Adaptogenic drinks
      - Probiotic-rich dishes
      - Immunity-boosting ingredients
      - Brain-healthy foods

      ## Sustainability Focus
      - Zero-waste cooking
      - Local sourcing
      - Seasonal menus
      - Regenerative agriculture

      These trends reflect changing consumer preferences and a growing awareness of health and environmental issues.
    `,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    date: "June 10, 2025",
    readTime: "6 min read",
    author: "Emma Wilson",
    category: "Food Trends",
  },
  "psychology-menu-design": {
    title: "The Psychology of Menu Design",
    content: `
      Menu design is a crucial aspect of restaurant success, combining elements of psychology, design, and marketing to influence customer choices.

      ## Color Psychology
      Different colors can evoke different emotions and appetites:
      - Red: Stimulates appetite
      - Blue: Suppresses appetite
      - Green: Suggests healthy options
      - Yellow: Attracts attention
      
      ## Layout Principles
      ### The Golden Triangle
      Eyes typically scan a menu in a triangular pattern, making certain areas more valuable for featured items.

      ### Price Placement
      - Avoid currency symbols
      - Remove price alignment
      - Use appropriate anchoring

      ## Typography
      - Clear, readable fonts
      - Appropriate sizing
      - Hierarchy of information
      - Brand consistency

      ## Description Impact
      - Use evocative language
      - Include origin stories
      - Highlight unique ingredients
      - Create emotional connections

      Understanding these psychological principles can help restaurants optimize their menus for better customer satisfaction and increased revenue.
    `,
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    date: "June 8, 2025",
    readTime: "7 min read",
    author: "David Park",
    category: "Restaurant Business",
  },
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-red-600">Blog post not found</h1>
        <Button asChild className="mt-4">
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Badge variant="outline" className="mb-4">
            {post.category}
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.content.split("\n").map((paragraph, index) => {
            if (paragraph.startsWith("##")) {
              return (
                <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            } else if (paragraph.startsWith("#")) {
              return (
                <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                  {paragraph.replace("### ", "")}
                </h3>
              );
            } else if (paragraph.startsWith("-")) {
              return (
                <li key={index} className="ml-4">
                  {paragraph.replace("- ", "")}
                </li>
              );
            } else {
              return (
                <p
                  key={index}
                  className="text-gray-600 dark:text-gray-300 mb-4">
                  {paragraph}
                </p>
              );
            }
          })}
        </div>

        {/* Share Button */}
        <div className="mt-8 flex justify-end">
          <Button variant="outline" className="flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share Article
          </Button>
        </div>
      </div>
    </div>
  );
}
