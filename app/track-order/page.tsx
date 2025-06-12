"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Clock, Package, Truck } from "lucide-react";

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [isTracking, setIsTracking] = useState(false);

  // Mock order status for demonstration
  const orderStatus = {
    status: "in_transit",
    estimatedDelivery: "30-40 minutes",
    currentLocation: "On the way to your location",
    orderSteps: [
      { id: 1, title: "Order Confirmed", time: "12:30 PM", completed: true },
      { id: 2, title: "Preparing", time: "12:45 PM", completed: true },
      { id: 3, title: "Out for Delivery", time: "1:15 PM", completed: true },
      { id: 4, title: "Delivered", time: "--", completed: false },
    ],
  };

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTracking(true);
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-4xl font-semibold mb-8 font-inter">
        Track Your Order
      </h1>

      <div className="max-w-2xl mx-auto">
        <Card className="mb-8">
          <CardContent className="p-6">
            <form onSubmit={handleTrackOrder} className="space-y-4">
              <div>
                <label
                  htmlFor="orderId"
                  className="block text-sm font-medium mb-2">
                  Order ID
                </label>
                <Input
                  id="orderId"
                  type="text"
                  placeholder="Enter your order ID"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent text-white hover:bg-accent/90"
                disabled={!orderId}>
                Track Order
              </Button>
            </form>
          </CardContent>
        </Card>

        {isTracking && (
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">
                      Estimated Delivery Time
                    </h2>
                    <p className="text-accent text-lg">
                      {orderStatus.estimatedDelivery}
                    </p>
                  </div>
                  <Clock className="h-12 w-12 text-accent" />
                </div>
                <p className="text-gray-600">{orderStatus.currentLocation}</p>
              </CardContent>
            </Card>

            <div className="relative">
              {orderStatus.orderSteps.map((step, index) => (
                <div key={step.id} className="flex items-start mb-8 relative">
                  <div
                    className={`rounded-full p-2 ${
                      step.completed ? "bg-accent" : "bg-gray-200"
                    } mr-4`}>
                    {step.completed ? (
                      <Check className="h-6 w-6 text-white" />
                    ) : step.id === 2 ? (
                      <Package className="h-6 w-6 text-gray-400" />
                    ) : step.id === 3 ? (
                      <Truck className="h-6 w-6 text-gray-400" />
                    ) : (
                      <Clock className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.time}</p>
                  </div>
                  {index < orderStatus.orderSteps.length - 1 && (
                    <div
                      className={`absolute left-5 top-10 w-0.5 h-12 ${
                        step.completed ? "bg-accent" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
