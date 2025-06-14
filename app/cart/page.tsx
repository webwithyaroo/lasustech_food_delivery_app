"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-carts";
import { useToast } from "@/hooks/use-toast";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  Check,
  PartyPopper,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";

export default function CartPage() {
  const router = useRouter();
  const { items, updateQuantity, removeItem, clearCart } = useCart();
  const { toast } = useToast();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = total * 0.1;
  const deliveryFee = total > 50 ? 0 : 5.99;
  const grandTotal = total + tax + deliveryFee;

  const handleQuantityChange = (itemId: string, change: number) => {
    const item = items.find((i) => i.id === itemId);
    if (!item) return;

    const newQuantity = item.quantity + change;
    if (newQuantity <= 0) {
      handleRemoveItem(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
      toast({
        title: change > 0 ? "Quantity increased" : "Quantity decreased",
        description: `${item.name} quantity updated to ${newQuantity}.`,
      });
    }
  };

  const handleRemoveItem = (itemId: string) => {
    const item = items.find((i) => i.id === itemId);
    if (!item) return;

    removeItem(itemId);
    toast({
      title: "Item removed",
      description: `${item.name} has been removed from your cart.`,
    });
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);

    // Simulate checkout process
    setTimeout(() => {
      setShowSuccess(true);
      clearCart();

      // Trigger confetti effect
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      // After showing success for 3 seconds, redirect to tracking
      setTimeout(() => {
        router.push("/track-order");
      }, 3000);
    }, 1500);
  };

  // Show success card if checkout is complete
  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-center">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white flex items-center justify-center gap-2">
                Order Confirmed!{" "}
                <PartyPopper className="w-6 h-6 text-yellow-500" />
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Thank you for your order. Your food is being prepared with care!
              </p>
              <div className="space-y-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Redirecting to order tracking...
                </p>
                <div className="animate-pulse w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                  <div className="bg-green-500 h-2 rounded-full w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 mt-20 min-h-screen">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-500" />
          <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Your Cart is Empty
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Add some delicious items to your cart and come back!
          </p>
          <Button
            onClick={() => router.push("/menu")}
            className="bg-primary dark:bg-white  hover:bg-primary/90">
            Browse Menu
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-8 mt-20">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Your Cart
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="  dark:border dark:border-gray-700 rounded-xl p-4 shadow-md flex items-center gap-4">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <Badge
                      variant="secondary"
                      className="absolute top-0 right-0 bg-green-400 text-black dark:bg-gray-700 dark:text-white">
                      ${item.price}
                    </Badge>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                          onClick={() => handleQuantityChange(item.id, -1)}>
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center text-gray-800 dark:text-gray-100">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                          onClick={() => handleQuantityChange(item.id, 1)}>
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900"
                        onClick={() => handleRemoveItem(item.id)}>
                        <Trash2 className="h-6 w-6" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-right font-semibold text-gray-800 dark:text-gray-100">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className=" dark:bg-gray-800 dark:border dark:border-gray-700 rounded-xl p-6 shadow-md sticky top-24">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Order Summary
              </h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">
                    Subtotal
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">
                    Tax (10%)
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    ${tax.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">
                    Delivery Fee
                  </span>
                  <span>
                    {deliveryFee === 0 ? (
                      <span className="text-green-500">FREE</span>
                    ) : (
                      <span className="text-gray-700 dark:text-gray-300">
                        ${deliveryFee.toFixed(2)}
                      </span>
                    )}
                  </span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                  <div className="flex justify-between font-semibold text-lg">
                    <span className="text-gray-900 dark:text-white">Total</span>
                    <span className="text-gray-900 dark:text-white">
                      ${grandTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>              <Button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-primary dark:bg-white hover:bg-primary/90 dark:hover:bg-white/90 relative overflow-hidden"
                disabled={isCheckingOut}>
                {isCheckingOut ? "Processing..." : "Checkout"}
              </Button>
              {total < 50 && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
                  Add ${(50 - total).toFixed(2)} more for free delivery!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
