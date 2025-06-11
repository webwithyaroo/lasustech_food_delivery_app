// app/layout.tsx
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import FooterSection from "../components/home/FooterSection";
import NavigationBar from "@/components/home/Header";
import { Car } from "lucide-react";
import { CartProvider } from "@/components/cart-provider";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <head>
        <title>Ordery</title>
        <meta name="description" content="Ordery - Your Food Ordering App" />
        <link rel="icon" href="/favicon.ico" />
      </head> */}

      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <CartProvider>
          <NavigationBar />
          <main>{children}</main>
          <FooterSection />
        </CartProvider>
      </body>
    </html>
  );
}
