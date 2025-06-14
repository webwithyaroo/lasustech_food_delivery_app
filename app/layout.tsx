// app/layout.tsx
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import FooterSection from "../components/home/FooterSection";
import NavigationBar from "@/components/home/Header";
import { Car } from "lucide-react";
import { CartProvider } from "@/components/cart-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Ordery - Food Delivery App",
  description: "Your favorite food, delivered fast and fresh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-background text-foreground`}>
        <CartProvider>
          <NavigationBar />
          <main className="pt-20">{children}</main>
          <FooterSection />
        </CartProvider>
      </body>
    </html>
  );
}
