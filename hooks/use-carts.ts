"use client";

import { CartContext } from "@/components/cart-provider";
import { useContext } from "react";

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
