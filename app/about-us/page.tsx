import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, ThumbsUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "1M+",
    label: "Happy Customers",
    description: "Serving delicious meals to satisfied customers",
  },
  {
    icon: Award,
    value: "500+",
    label: "Restaurant Partners",
    description: "Partnering with top-rated restaurants",
  },
  {
    icon: Clock,
    value: "30min",
    label: "Average Delivery",
    description: "Quick and reliable delivery service",
  },
  {
    icon: ThumbsUp,
    value: "4.8/5",
    label: "Customer Rating",
    description: "Highly rated by our community",
  },
];

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    name: "Emily Rodriguez",
    role: "Customer Experience",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
];

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 font-inter">
          About Ordery
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're on a mission to transform the way people experience food
          delivery, making it more convenient, reliable, and enjoyable for
          everyone.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Founded in 2023, Ordery began with a simple idea: to connect
              people with their favorite restaurants in the most seamless way
              possible.
            </p>
            <p>
              What started as a small startup has grown into a thriving platform
              that serves millions of customers and partners with hundreds of
              restaurants across the country.
            </p>
            <p>
              Our commitment to innovation, quality, and customer satisfaction
              drives everything we do, as we continue to revolutionize the food
              delivery industry.
            </p>
          </div>
        </div>
        <div className="relative h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352"
            alt="Ordery Story"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6 text-center">
              <stat.icon className="h-8 w-8 mx-auto mb-4 text-accent" />
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="font-semibold mb-2">{stat.label}</div>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Values Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quality First</h3>
            <p className="text-gray-600">
              We partner with the best restaurants to ensure every meal meets
              our high standards.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Customer Focus</h3>
            <p className="text-gray-600">
              Your satisfaction is our top priority, driving every decision we
              make.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p className="text-gray-600">
              We continuously improve our platform to provide the best possible
              experience.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name}>
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-accent text-white rounded-lg p-12">
        <h2 className="text-3xl font-semibold mb-6">
          Join Us in Revolutionizing Food Delivery
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Whether you're a restaurant owner looking to expand your reach or a
          food lover seeking convenience, we'd love to have you join our
          community.
        </p>
        <div className="space-x-4">
          <Button
            variant="secondary"
            className="bg-white text-accent hover:bg-gray-100">
            Partner with Us
          </Button>
          <Button
            variant="outline"
            className="text-white bg-transparent border-white">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
