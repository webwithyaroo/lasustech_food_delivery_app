"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "To place an order, browse through our restaurants, select your desired items, add them to cart, and proceed to checkout. You'll need to provide delivery details and payment information to complete your order.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit/debit cards, digital wallets, and cash on delivery in selected areas.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is confirmed, you'll receive an order ID. You can use this ID in our 'Track Order' section to monitor your delivery status in real-time.",
  },
  {
    question: "What if I need to cancel my order?",
    answer:
      "You can cancel your order within 5 minutes of placing it. After that, please contact our customer support for assistance.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery times vary depending on your location and the restaurant's preparation time. Typically, orders are delivered within 30-45 minutes.",
  },
];

const supportCategories = [
  {
    title: "Order Issues",
    icon: "🛍️",
    description: "Help with your current or past orders",
  },
  {
    title: "Account & Payment",
    icon: "💳",
    description: "Manage your account and payment methods",
  },
  {
    title: "Delivery",
    icon: "🚚",
    description: "Questions about delivery timing and tracking",
  },
  {
    title: "Technical Support",
    icon: "🔧",
    description: "Help with app or website issues",
  },
];

export default function HelpCenterPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold mb-8 font-inter text-center">
        How can we help you?
      </h1>

      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for help..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {supportCategories.map((category) => (
          <Card
            key={category.title}
            className="hover:shadow-lg transition-shadow cursor-pointer"
          >
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <Button
                  variant="ghost"
                  className="w-full p-4 flex justify-between items-center text-left"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                >
                  <span className="font-medium">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </Button>
                {expandedFaq === index && (
                  <div className="p-4 pt-0 text-gray-600">{faq.answer}</div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold mb-4">
            Still need help? Contact us
          </h3>
          <div className="space-x-4">
            <Button className="bg-accent text-white hover:bg-accent/90">
              Live Chat
            </Button>
            <Button variant="outline">Email Support</Button>
          </div>
        </div>
      </div>
    </div>
  );
}