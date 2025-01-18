import React from "react";
import { useParams } from "react-router-dom";
import {
  Calendar,
  DollarSign,
  Users,
  Truck,
  Home,
  Activity,
  MapPin,
  AirVent,
  Utensils,
  CheckCircle,
  XCircle,
  Clock,
  Package,
  ArrowLeft,
} from "lucide-react";

const mockOrders = [
  {
    id: "1",
    customerId: "c1",
    customerName: "John Doe",
    packageId: "p1",
    packageName: "Mountain Trek Adventure",
    date: "2024-03-20",
    status: "pending",
    amount: 299,
    offerAmount: 50,
    totalAmount: 249,
    modeOfTransportation: "Bus",
    accommodation: "3-star Hotel",
    adventures: "Trekking, Rock Climbing",
    activities: "Photography, Guided Tours",
    mealPlan: "All-inclusive meals",
    travelStyle: "Adventure, Group Travel",
    adults: 2,
    children: 1,
    startingDate: "2024-04-01",
    numberOfPersons: 3,
    customerEmail: "john@example.com",
    customerPhone: "+1234567890",
    packageDetails:
      "A thrilling 7-day trek through the Himalayas with guided tours and accommodation.",
    location: "Himalayas, Nepal",
  },
];

const statusColors: { [key: string]: string } = {
  pending: "bg-[#37e5a5]/10 text-[#37e5a5]",
  shipped: "bg-blue-500/10 text-blue-400",
  completed: "bg-[#37e5a5]/10 text-[#37e5a5]",
  canceled: "bg-red-500/10 text-red-400",
};

export default function OrderDetails() {
  const { id } = useParams<{ id: string }>();
  const order = mockOrders.find((order) => order.id === id);

  if (!order) {
    return (
      <div className="min-h-screen bg-[#151515] flex items-center justify-center">
        <div className="text-white text-center">
          <Package className="w-16 h-16 mx-auto mb-4 text-[#37e5a5]" />
          <h2 className="text-2xl font-bold">Order Not Found</h2>
        </div>
      </div>
    );
  }

  const handleAccept = () => {
    console.log(`Order ${order.id} accepted.`);
  };

  const handleReject = () => {
    console.log(`Order ${order.id} rejected.`);
  };

  return (
    <div className="mt-10 mb-16 min-h-screen bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-white text-lg font-bold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
        </div>

        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Order #{order.id}
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                Package ID: {order.packageId}
              </p>
            </div>
            <span
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                statusColors[order.status]
              }`}
            >
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <p className="text-[#37e5a5] flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Order placed on {order.date}
            </p>
            <p className="text-black flex items-center gap-2">
              <div className="flex items-center gap-2 bg-[#37e5a5] text-black py-1 px-2 rounded-full">
                <Calendar className="w-4 h-4" />
                Start date: {order.startingDate}
              </div>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Customer Card */}
          <div className="bg-[#151515] p-6 rounded-2xl ">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#37e5a5]" />
              Customer Details
            </h3>
            <div className="space-y-3">
              <p className="text-gray-300">Customer ID: {order.customerId}</p>
              <p className="text-gray-300">{order.customerName}</p>
              <p className="text-gray-400">{order.customerEmail}</p>
              <p className="text-gray-400">{order.customerPhone}</p>
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="w-4 h-4 text-[#37e5a5]" />
                <span>Total Persons: {order.numberOfPersons}</span>
              </div>
              <div className="flex gap-4">
                <p className="text-gray-400">Adults: {order.adults}</p>
                <p className="text-gray-400">Children: {order.children}</p>
              </div>
            </div>
          </div>

          {/* Package Summary Card */}
          <div className="bg-[#151515] p-6 rounded-2xl ">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-[#37e5a5]" />
              Package Summary
            </h3>
            <div className="space-y-3">
              <p className="text-gray-300 font-medium">{order.packageName}</p>
              <p className="text-gray-400 text-sm">{order.packageDetails}</p>
              <p className="text-gray-400 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#37e5a5]" />
                {order.location}
              </p>
            </div>
          </div>
        </div>

        {/* Travel Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-[#151515] p-6 rounded-2xl ">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#37e5a5]/10 rounded-lg">
                <Truck className="w-6 h-6 text-[#37e5a5]" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Transportation</p>
                <p className="text-white font-medium">
                  {order.modeOfTransportation}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#151515] p-6 rounded-2xl ">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#37e5a5]/10 rounded-lg">
                <Home className="w-6 h-6 text-[#37e5a5]" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Accommodation</p>
                <p className="text-white font-medium">{order.accommodation}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#151515] p-6 rounded-2xl ">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#37e5a5]/10 rounded-lg">
                <Activity className="w-6 h-6 text-[#37e5a5]" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Adventures</p>
                <p className="text-white font-medium">{order.adventures}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#151515] p-6 rounded-2xl ">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#37e5a5]/10 rounded-lg">
                <Activity className="w-6 h-6 text-[#37e5a5]" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Activities</p>
                <p className="text-white font-medium">{order.activities}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#151515] p-6 rounded-2xl ">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#37e5a5]/10 rounded-lg">
                <Utensils className="w-6 h-6 text-[#37e5a5]" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Meal Plan</p>
                <p className="text-white font-medium">{order.mealPlan}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#151515] p-6 rounded-2xl ">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#37e5a5]/10 rounded-lg">
                <AirVent className="w-6 h-6 text-[#37e5a5]" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Travel Style</p>
                <p className="text-white font-medium">{order.travelStyle}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Details */}
        <div className="mt-6 bg-[#151515] rounded-2xl  p-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            Pricing Details
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Original Amount</span>
              <span className="text-white font-medium">${order.amount}</span>
            </div>
            <div className="flex justify-between items-center text-[#37e5a5]">
              <span>Discount Applied</span>
              <span>-${order.offerAmount}</span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-gray-800">
              <span className="text-white font-medium">Total Amount</span>
              <span className="text-2xl font-bold text-[#37e5a5]">
                ${order.totalAmount}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleAccept}
            className="flex-1 py-4 px-6 bg-[#37e5a5] text-black rounded-full font-medium hover:bg-[#37e5a5]/90 transition-colors flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-5 h-5" />
            Accept Order
          </button>
          <button
            onClick={handleReject}
            className="flex-1 py-4 px-6 bg-[#151515] text-red-500 rounded-full font-medium hover:bg-[#151515]/80 transition-colors flex items-center justify-center gap-2"
          >
            <XCircle className="w-5 h-5 text-red-500" />
            Reject Order
          </button>
        </div>
      </div>
    </div>
  );
}
