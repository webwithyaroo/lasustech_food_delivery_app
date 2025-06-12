import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase } from "lucide-react";

const benefits = [
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
    icon: "🏥",
  },
  {
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options",
    icon: "⚖️",
  },
  {
    title: "Growth",
    description: "Professional development and learning opportunities",
    icon: "📈",
  },
  {
    title: "Team Events",
    description: "Regular team building and social activities",
    icon: "🎉",
  },
];

const openings = [
  {
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description:
      "We're looking for a Senior Frontend Developer to help build and improve our customer-facing applications.",
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Hybrid",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Join our design team to create beautiful and intuitive user experiences for our platform.",
  },
  {
    title: "Operations Manager",
    department: "Operations",
    location: "On-site",
    type: "Full-time",
    experience: "4+ years",
    description:
      "Lead and optimize our delivery operations to ensure excellent service quality.",
  },
  {
    title: "Customer Support Specialist",
    department: "Customer Service",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    description:
      "Help our customers have the best possible experience with our platform.",
  },
];

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 font-inter">
          Join Our Team
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Help us revolutionize the food delivery industry while working with a
          team of passionate individuals.
        </p>
        <Button className="bg-accent text-white hover:bg-accent/90">
          View All Positions
        </Button>
      </div>

      {/* Culture Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Life at Ordery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-gray-600">
              At Ordery, we believe in creating an environment where everyone
              can thrive. Our culture is built on innovation, collaboration, and
              a shared passion for delivering exceptional experiences.
            </p>
            <p className="text-gray-600">
              We value diversity, encourage creativity, and support personal and
              professional growth. Join us in shaping the future of food
              delivery!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team collaboration"
              className="rounded-lg w-full h-48 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
              alt="Office culture"
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <Card key={benefit.title}>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div>
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Open Positions
        </h2>
        <div className="space-y-6">
          {openings.map((job) => (
            <Card key={job.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge
                        variant="secondary"
                        className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {job.department}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </Badge>
                    </div>
                  </div>
                  <Button className="bg-accent text-white hover:bg-accent/90">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
