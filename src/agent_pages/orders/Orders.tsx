import React, { useState } from "react";
import { Filter } from "lucide-react";
import SearchBar from "../../agent_components/ui/SearchBar";
import OrderCard from "../../agent_components/orders/OrderCard";
import { Order } from "../../types";

export const mockOrders: Order[] = [
  // Export the mockOrders array
  {
    id: "1",
    customerId: "c1",
    customerName: "John Doe",
    packageId: "p1",
    packageName: "Mountain Trek Adventure",
    date: "2024-03-20",
    status: "pending",
    amount: 299,
  },
  // Add more mock orders as needed
];

export default function Orders() {
  const [orders] = useState<Order[]>(mockOrders);

  return (
    <div className="min-h-screen bg-black pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-white mb-6">Orders</h1>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1">
            <SearchBar placeholder="Search orders..." />
          </div>
          <button className="p-3 bg-[#1f1f1f] rounded-full hover:bg-[#2f2f2f] transition-colors">
            <Filter className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {orders.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              onAccept={(id) => console.log("Accept", id)}
              onReject={(id) => console.log("Reject", id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
