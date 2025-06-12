"use client";

import { navbarLinks } from "@/components/constants";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, ShoppingCart } from "lucide-react";
import { usePathname } from 'next/navigation';
import { useCart } from "@/hooks/use-carts";

const NavigationBar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { items } = useCart();

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  // On mount, check saved preference or system preference
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) {
      setDarkMode(saved === "true");
      if (saved === "true") {
        document.documentElement.classList.add("dark");
      }
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
      if (prefersDark) document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("darkMode", newMode.toString());
      return newMode;
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 dark:bg-black bg-white shadow-sm">
      <nav className="container px-4 mx-auto relative">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary dark:text-white font-inter">
            <a href="/" className="flex items-center">
              Foodqoe.
            </a>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex space-x-6 items-center">
            {navbarLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-lg transition-colors duration-300 ${pathname === link.href
                    ? "text-primary font-semibold dark:text-accent"
                    : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-accent"
                    }`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side (Cart + Buttons + Dark Mode Toggle) Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Cart Icon with Counter */}
            <a href="/cart" className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </a>

            {/* Dark Mode Toggle */}
            <button
              aria-label="Toggle Dark Mode"
              onClick={toggleDarkMode}
              className="relative w-24 h-12 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full cursor-pointer transition-colors duration-300 hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none border-2">
              <div
                className={`w-12 h-12 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  darkMode ? "translate-x-12" : "-translate-x-1 bg-black"
                }`}
              />
              <span className="absolute left-2 text-yellow-400 dark:text-gray-900 pointer-events-none">
                <Sun size={22} />
              </span>
              <span className="absolute right-2 text-gray-700 dark:text-yellow-300 pointer-events-none">
                <Moon size={22} />
              </span>
            </button>

            <a
              href="/signin"
              className="text-lg text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-accent transition-colors">
              Sign In
            </a>
            <Button
              size={"lg"}
              className="bg-primary text-white hover:bg-primary/90 dark:bg-accent dark:hover:bg-accent/90">
              Start Ordering Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-600 dark:text-white hover:text-primary dark:hover:text-accent transition-colors">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-black shadow-lg py-4">
            <ul className="space-y-4">
              {navbarLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block px-4 py-2 text-lg transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-primary font-semibold dark:text-accent"
                        : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-accent"
                    }`}>
                    {link.label}
                  </a>
                </li>
              ))}
              {/* Mobile Cart Link */}
              <li>
                <a
                  href="/cart"
                  className="flex items-center px-4 py-2 text-lg text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-accent transition-colors">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Cart
                  {cartItemCount > 0 && (
                    <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                      {cartItemCount}
                    </span>
                  )}
                </a>
              </li>
              <li>
                <a
                  href="/signin"
                  className="block px-4 py-2 text-lg text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-accent transition-colors">
                  Sign In
                </a>
              </li>
              <li className="px-4">
                <Button
                  size={"lg"}
                  className="w-full bg-primary text-white hover:bg-primary/90 dark:bg-accent dark:hover:bg-accent/90">
                  Start Ordering Now
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavigationBar;
