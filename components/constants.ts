export const navbarLinks = [
  { label: "Home", href: "/" },
  { label: "Restaurants", href: "/restaurants" },
  { label: "Menu", href: "/menu" },
  { label: "Blog", href: "/blog" },
  { label: "Track Order", href: "/track-order" },
  // { label: "Cart", href: "/cart" },
];
export const footerLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Help Center", href: "/help-center" },
  { label: "About Us", href: "/about-us" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];
export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com" },
  { label: "Twitter", href: "https://www.twitter.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "YouTube", href: "https://www.youtube.com" },
];

export const foodItems = [
  {
    id: 1,
    title: "Fresh Avocado Toast",
    image:
      "https://media.gettyimages.com/id/1311507085/photo/avocado-toast-with-eggs-and-roasted-tomatoes.jpg?s=612x612&w=0&k=20&c=DquSZopXdPOXhJEltAFwaaxZIdiqsxglab25PVX8wf8=",
    description: "Sourdough topped with avocado, tomatoes, and poached eggs.",
  },
  {
    id: 2,
    title: "Pancake Stack",
    image:
      "https://media.gettyimages.com/id/146923058/photo/pancakes.jpg?s=612x612&w=0&k=20&c=B3Xty2YeIajb1wlJSphUHCLHuKmLoNVN2TFa8Z8axhM=",
    description: "Golden pancakes drizzled with honey and topped with berries.",
  },
  {
    id: 3,
    title: "Caprese Salad",
    image:
      "https://media.gettyimages.com/id/1412464690/photo/caprese-salad-with-mozzarella-tomatoes-and-basil.jpg?s=612x612&w=0&k=20&c=Tw7wXYTVUepcYsSZrJB2oBA5hyn2hJEEvzmO58qA3sw=",
    description:
      "Tomatoes, mozzarella, basil and olive oil – simple and fresh.",
  },
  {
    id: 4,
    title: "Smoothie Bowl",
    image:
      "https://media.istockphoto.com/id/1298159858/photo/acai-smoothie-bowl-with-toppings.webp?a=1&b=1&s=612x612&w=0&k=20&c=qZvXDkr2ssOwTgfYrCIwu4M36WwrP0T-k5m5jvQn_j0=",
    description: "A tropical blend of fruits and granola in a vibrant bowl.",
  },
];

//// Restaurant Categories

export const restaurants = [
  {
    id: 1,
    name: "FreshDay Kitchen",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092", // salad bowl
    rating: 4.8,
    reviewCount: 324,
    deliveryTime: "25-35 min",
    deliveryFee: "Free",
    cuisine: ["Healthy", "Asian", "Vegetarian"],
    distance: "1.2 km",
    description: "Fresh, healthy meals made with organic ingredients",
    priceRange: "$$",
    averagePrice: 12.99,
    featured: true,
  },
  {
    id: 2,
    name: "Burger Palace",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349", // burger
    rating: 4.6,
    reviewCount: 256,
    deliveryTime: "20-30 min",
    deliveryFee: "$2.99",
    cuisine: ["American", "Fast Food", "Burgers"],
    distance: "0.8 km",
    description: "Gourmet burgers and classic American comfort food",
    priceRange: "$",
    averagePrice: 8.49,
    featured: false,
  },
  {
    id: 3,
    name: "Pasta Corner",
    image:
      "https://images.unsplash.com/photo-1556761223-4c4282c73f77?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // pasta
    rating: 4.7,
    reviewCount: 189,
    deliveryTime: "30-40 min",
    deliveryFee: "$1.99",
    cuisine: ["Italian", "Pasta", "European"],
    distance: "2.1 km",
    description: "Authentic Italian pasta and traditional recipes",
    priceRange: "$$",
    averagePrice: 13.5,
    featured: true,
  },
  {
    id: 4,
    name: "Sushi Express",
    image:
      "http://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // sushi
    rating: 4.9,
    reviewCount: 412,
    deliveryTime: "35-45 min",
    deliveryFee: "$3.99",
    cuisine: ["Japanese", "Sushi", "Asian"],
    distance: "3.2 km",
    description: "Fresh sushi and Japanese delicacies",
    priceRange: "20$",
    averagePrice: 18.75,
    featured: true,
  },
  {
    id: 5,
    name: "Taco Fiesta",
    image:
      "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // tacos
    rating: 4.5,
    reviewCount: 167,
    deliveryTime: "20-30 min",
    deliveryFee: "$2.49",
    cuisine: ["Mexican", "Tacos", "Spicy"],
    distance: "1.8 km",
    description: "Authentic Mexican flavors and spicy delights",
    priceRange: "40$",
    averagePrice: 9.25,
    featured: false,
  },
  {
    id: 6,
    name: "Mediterranean Delight",
    image:
      "https://images.unsplash.com/photo-1733555387336-51f377259ca3?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // mediterranean platter
    rating: 4.6,
    reviewCount: 203,
    deliveryTime: "25-35 min",
    deliveryFee: "$2.99",
    cuisine: ["Mediterranean", "Healthy", "Vegetarian"],
    distance: "2.5 km",
    description: "Fresh Mediterranean cuisine with healthy options",
    priceRange: "20$",
    averagePrice: 14.0,
    featured: false,
  },
  {
    id: 7,
    name: "Pizza Paradise",
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // pizza
    rating: 4.8,
    reviewCount: 357,
    deliveryTime: "30-40 min",
    deliveryFee: "$2.99",
    cuisine: ["Italian", "Pizza", "Fast Food"],
    distance: "1.5 km",
    description: "Authentic Italian pizza and classic American comfort food",
    priceRange: "10$",
    averagePrice: 12.75,
    featured: true,
  },
  {
    id: 8,
    name: "Asian Bites",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add", // asian noodles
    rating: 4.7,
    reviewCount: 289,
    deliveryTime: "25-35 min",
    deliveryFee: "$3.49",
    cuisine: ["Asian", "Chinese", "Thai"],
    distance: "2.8 km",
    description: "Authentic Asian flavors and traditional recipes",
    priceRange: "20$",
    averagePrice: 11.95,
    featured: false,
  },
];
