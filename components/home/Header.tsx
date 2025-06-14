"use client";

import { useState, useEffect } from "react";
import { navbarLinks } from "@/components/constants";
import { Button } from "../ui/button";
import { Menu, X, Sun, Moon, ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCart } from "@/hooks/use-carts";
import { Badge } from "../ui/badge";
import Link from "next/link";

const NavigationBar = () => {
  const pathname = usePathname();
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { items } = useCart();

  // CartBadge component
  const CartBadge = () => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    if (totalItems === 0) return null;

    return (
      <Badge
        variant="destructive"
        className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 text-xs">
        {totalItems}
      </Badge>
    );
  };

  // Set active link based on pathname
  useEffect(() => {
    const currentIndex = navbarLinks.findIndex(
      (link) => link.href === pathname
    );
    setActive(currentIndex !== -1 ? currentIndex : 0);
  }, [pathname]);

  // On mount, check saved preference or system preference
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) {
      const isDark = saved === "true";
      setDarkMode(isDark);
      if (isDark) {
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
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("darkMode", newMode.toString());
      return newMode;
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 dark:bg-black bg-white">
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
            {navbarLinks.map((link, i) => (
              <li onClick={() => setActive(i)} key={link.href}>
                <a
                  href={link.href}
                  className={`text-lg transition-colors duration-300 ${
                    active === i
                      ? "text-accent font-semibold"
                      : "text-gray-600 hover:text-accent dark:text-white"
                  }`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Shopping Cart */}
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-600 dark:text-white hover:text-accent transition-colors duration-300" />
              <CartBadge />
            </Link>
            {/* Dark Mode Toggle */}
            <button
              aria-label="Toggle Dark Mode"
              onClick={toggleDarkMode}
              className="relative w-24 h-12 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full cursor-pointer transition-colors duration-300 hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none border-2">
              <div
                className={`w-12 h-12 rounded-full shadow-md transform transition-transform duration-300 ${
                  darkMode
                    ? "translate-x-12 bg-white"
                    : "-translate-x-1 bg-black"
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
              className="text-lg hover:text-primary dark:hover:text-white/30 transition-colors">
              Sign In
            </a>
            <Button
              size={"lg"}
              className="bg-dark text-white hover:bg-primary/90 dark:bg-secondary-foreground hover:text-white/30 dark:text-dark">
              Start Ordering Now
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Shopping Cart */}
            <Link href="/cart" className="relative p-2">
              <ShoppingCart className="w-6 h-6 text-gray-600 dark:text-white hover:text-accent transition-colors duration-300" />
              <CartBadge />
            </Link>
            {/* Dark Mode Toggle */}
            <button
              aria-label="Toggle Dark Mode"
              onClick={toggleDarkMode}
              className="relative w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-[2px] cursor-pointer transition-colors duration-300 hover:bg-gray-400 dark:hover:bg-gray-600 border-2">
              <div
                className={`w-7 h-7 rounded-full shadow-md transform transition-transform duration-300 ${
                  darkMode
                    ? "translate-x-6 bg-white"
                    : "-translate-x-1 bg-black"
                }`}
              />
              <span className="absolute left-[3px] text-yellow-400 dark:text-gray-900 pointer-events-none">
                <Sun size={15} />
              </span>
              <span className="absolute right-[3px] text-gray-700 dark:text-yellow-300 pointer-events-none">
                <Moon size={15} />
              </span>
            </button>

            {/* Hamburger */}
            <button
              className="text-gray-700 dark:text-gray-300 focus:outline-none z-[51]"
              onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Blur Overlay */}
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-[45] bg-black/30 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          />
        )}

        {/* Mobile Slide Menu */}
        <div
          className={`lg:hidden bg-white dark:bg-dark fixed top-0 left-0 w-full z-[50] shadow-md transform transition-transform duration-300 ease-out pt-10 ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-[200%] opacity-0 pointer-events-none"
          }`}>
          <div className="flex flex-col gap-4 py-4 px-6">
            {navbarLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActive(i);
                  setMenuOpen(false);
                }}
                className={`text-base block transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-accent font-semibold"
                    : "text-black dark:text-white"
                }`}>
                {link.label}
              </a>
            ))}
            <hr className="border-gray-300 dark:border-gray-700" />
            <a
              href="/signin"
              className="text-base text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors">
              Sign In
            </a>
            <Button className="bg-white dark:bg-white dark:text-white text-black w-full">
              Start Ordering Now
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
