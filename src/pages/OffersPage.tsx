import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import { ArrowLeft, Tag, Clock } from 'lucide-react';

const OffersPage = () => {

  const navigate = useNavigate();

  const offers = [
    {
      id: 1,
      title: 'Early Bird Special',
      description: 'Get 20% off on bookings made 60 days in advance',
      code: 'EARLY20',
      validUntil: 'Valid until Dec 31, 2024',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
    },
    {
      id: 2,
      title: 'Weekend Getaway',
      description: '15% off on weekend packages',
      code: 'WEEKEND15',
      validUntil: 'Valid until Nov 30, 2024',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400',
    },
    {
      id: 3,
      title: 'Group Discount',
      description: '25% off for groups of 4 or more',
      code: 'GROUP25',
      validUntil: 'Valid until Oct 31, 2024',
      image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400',
    },
  ];

  return (
    <div className="min-h-screen bg-black pb-20">
      <header className="mt-16 flex items-center p-6 border-b border-gray-800">
            <button onClick={() => navigate(-1)} className="mr-4">
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-xl font-bold">Special offers</h1>
          </header>

      <div className="p-4 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-[#111] rounded-lg overflow-hidden">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Tag size={20} className="text-[#00FF9D]" />
                  <h3 className="font-bold">{offer.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <div className="bg-[#222] px-3 py-1 rounded-full">
                    <code className="text-[#00FF9D]">{offer.code}</code>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock size={16} className="mr-1" />
                    {offer.validUntil}
                  </div>
                </div>
                <button className="w-full mt-4 bg-[#00FF9D] text-black font-semibold py-2 rounded-full hover:bg-[#00E88D] transition-colors">
                  Apply Offer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OffersPage;