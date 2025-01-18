import React from "react";
import { Calendar, DollarSign, Package } from "lucide-react";
import { Order } from "../../types";
import Card from "../ui/Card";
import { useNavigate } from "react-router-dom"; // useNavigate for React Router v6

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  const statusColors = {
    pending: "bg-[#FFEB3B]/10 text-[#FFEB3B]",
    active: "bg-[#37e5a5]/10 text-[#37e5a5]",
    rejected: "bg-[#F44336]/10 text-[#F44336]",
  };

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleViewOrder = () => {
    // Correct the path to include the slash and dynamic order ID
    navigate(`/agent/orders/${order.id}`);
  };

  return (
    <Card className="p-4">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-white">{order.customerName}</h3>
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              statusColors[order.status]
            }`}
          >
            {order.status}
          </span>
        </div>

        <div className="text-sm text-gray-400">
          <p className="flex items-center gap-2 mb-1">
            <Package className="w-4 h-4" />
            {order.packageName}
          </p>
          <p className="flex items-center gap-2 mb-1">
            <Calendar className="w-4 h-4" />
            {order.date}
          </p>
          <p className="flex items-center gap-2">
            <DollarSign className="w-4 h-4" />${order.amount}
          </p>
        </div>

        <button
          onClick={handleViewOrder}
          className="mt-4 py-2 bg-primary text-black rounded-full hover:bg-primary/90 transition-colors"
        >
          View Order
        </button>
      </div>
    </Card>
  );
}
