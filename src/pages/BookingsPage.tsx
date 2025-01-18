import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";

const BookingsPage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('upcoming');

  const bookings = [
    {
      id: 1,
      title: 'Bali Adventure Package',
      date: 'Mar 15 - Mar 22, 2024',
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400',
    },
    {
      id: 2,
      title: 'Tokyo Explorer',
      date: 'Apr 5 - Apr 12, 2024',
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400',
    },
    {
      id: 3,
      title: 'Paris City Break',
      date: 'Jan 10 - Jan 15, 2024',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400',
    },
  ];


  
  const filteredBookings = bookings.filter(booking => booking.status === activeFilter);

  return (
    <div className="min-h-screen bg-black pb-20">
      <div></div>
      <header className="mt-16 flex items-center p-6 border-b border-gray-800">
      <button onClick={() => navigate(-1)} className="mr-4">
        <ArrowLeft size={24} />
      </button>
      <h1 className="text-xl font-bold">Your Bookings</h1>
    </header>

      <div className="p-4 sm:p-6">
        <div className=" flex flex-wrap gap-2 sm:gap-4 mb-6">
          {['upcoming', 'completed', 'canceled'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === filter
                  ? 'bg-[#00FF9D] text-black'
                  : 'bg-[#111] text-gray-400'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBookings.map((booking) => (
            <div key={booking.id} className="bg-[#111] rounded-lg overflow-hidden">
              <img
                src={booking.image}
                alt={booking.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h3 className="font-bold text-base">{booking.title}</h3>
                <p className="text-gray-400 text-sm">{booking.date}</p>
                <div className="mt-2">
                  <span className="px-2 py-1 rounded-full bg-[#00FF9D] text-black text-xs">
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookingsPage;