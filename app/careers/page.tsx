import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  Briefcase,
  Building2,
  Users2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-purple-400 dark:to-pink-400">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Help us revolutionize the food delivery industry while working
              with a team of passionate individuals who are changing the way
              people experience food.
            </p>
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 dark:bg-accent dark:hover:bg-accent/90">
              View All Positions
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-purple-200/20 dark:bg-purple-900/20 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-40 w-96 h-96 rounded-full bg-pink-200/20 dark:bg-pink-900/20 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary dark:text-accent mb-2">
                50+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Team Members
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary dark:text-accent mb-2">
                15+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary dark:text-accent mb-2">
                4.8★
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Employee Rating
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary dark:text-accent mb-2">
                92%
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Retention Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Join Ordery?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer competitive benefits and a supportive work environment
              that helps you grow and succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-none shadow-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl mb-2">
                    {benefit.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Open Positions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join our growing team and help shape the future of food delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {openings.map((job, index) => (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Building2 className="w-4 h-4" />
                        <span>{job.department}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary dark:text-accent transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-gray-100 dark:bg-gray-700">
                      <MapPin className="w-3 h-3 mr-1" /> {job.location}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-gray-100 dark:bg-gray-700">
                      <Clock className="w-3 h-3 mr-1" /> {job.type}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-gray-100 dark:bg-gray-700">
                      <Briefcase className="w-3 h-3 mr-1" /> {job.experience}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <Card className="relative overflow-hidden border-none bg-gradient-to-r from-primary/90 to-purple-600/90 dark:from-purple-900 dark:to-pink-900">
            <CardContent className="p-12 text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to Join Our Team?
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Take the first step towards an exciting career at Ordery. We're
                always looking for talented individuals to join our team.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary dark:hover:bg-white/90">
                Apply Now
              </Button>
            </CardContent>
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          </Card>
        </div>
      </section>
    </div>
  );
}
