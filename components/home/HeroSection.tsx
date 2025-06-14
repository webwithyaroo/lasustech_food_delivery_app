import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, StarHalf, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-10 ">
      {/* Left Content */}
      <div>
        {/* Top Banner */}
        <div className="bg-secondary pl-2 pr-4 py-1 rounded-full flex items-center space-x-2 w-fit">
          <div className="flex items-center">
            {[
              { src: "https://flagcdn.com/w80/gb.png", fallback: "U1" },
              { src: "https://flagcdn.com/w80/ir.png", fallback: "U2" },
              { src: "https://flagcdn.com/w80/ng.png", fallback: "U3" },
            ].map((user, idx) => (
              <Avatar
                key={idx}
                className={`h-7 w-7 -ml-3 ${idx === 0 ? "ml-0" : ""}`}>
                <AvatarImage src={user.src} alt={`User ${idx + 1}`} />
                <AvatarFallback>{user.fallback}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="font-semibold whitespace-nowrap max-[360px]:text-xs">
            70,000 World Active Users
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold font-inter leading-tight">
          Satisfy Every Craving
          <br />
          🍔Wherever You Are,
          <br />
          Right On{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Time</span>
            <svg
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
              className="absolute bottom-0 left-0 w-full h-2 z-0">
              <path
                d="M0,10 Q10,0 20,10 T40,10 T60,10 T80,10 T100,10"
                fill="none"
                stroke="#ff4500"
                strokeWidth="5"
              />
            </svg>
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-xl font-montserrat">
          Discover local flavors and top-rated restaurants near you. Fast
          delivery, fresh meals, and no hassle — all in one app.
        </p>

        {/* CTA Buttons */}
        <div className="flex max-[420px]:flex-col flex-row items-start sm:items-center gap-4 mt-6">
          <Button
            asChild
            size={"lg"}
            className="dark:bg-white dark:text-black bg-primary text-white hover:bg-primary/90 max-[420px]:w-full">
            <Link href="/">Start Taking Orders</Link>
          </Button>

          <Button
            asChild
            size={"lg"}
            className=" dark:bg-white dark:text-black bg-secondary text-black hover:bg-primary/10 max-[420px]:w-full">
            <Link href="/" className="flex items-center gap-2">
              <PlayCircle className="w-5 h-5" />
              See How It Works
            </Link>
          </Button>
        </div>

        {/* Review Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              rating: "4.8/5",
              users: "250,000+ active users",
              note: "Trusted by eCommerce platforms",
              logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
              alt: "Stripe",
            },
            {
              rating: "4.8/5",
              users: "300,000+ global users",
              note: "Trusted by tech and logistics",
              logo: "https://cdn.worldvectorlogo.com/logos/doordash-1.svg",
              alt: "DoorDash",
            },
          ].map((review, index) => (
            <div key={index} className="w-fit">
              <div className="text-accent flex items-center space-x-1 mt-6">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={20} />
                ))}
                <Star fill="currentColor" size={20} />
              </div>
              <p className="text-muted-foreground text-sm mt-1 font-montserrat">
                <b className=" text-base">{review.rating}</b> rated by{" "}
                {review.users}
              </p>
              <span className="text-sm text-muted-foreground mb-2 block">
                {review.note}
              </span>
              <img src={review.logo} alt={review.alt} className="h-6" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-full max-[1024px]:rounded-lg rounded-r-xl   shadow-sm">
        <div className="w-full h-full clip-crazy-shape">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
            alt="Food Delivery Visual"
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
