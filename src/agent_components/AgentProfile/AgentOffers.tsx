import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Calendar, Users, DollarSign } from 'lucide-react';

const Offers = () => {
  const navigate = useNavigate();
  const activeOffers = [
    {
      title: 'Summer Beach Package',
      discount: '20%',
      validUntil: '2024-08-31',
      bookings: 12,
      revenue: 4500
    },
    {
      title: 'City Break Special',
      discount: '15%',
      validUntil: '2024-07-15',
      bookings: 8,
      revenue: 3200
    }
  ];

  return (
    <div className="mt-16 mb-12 min-h-screen bg-[#000000] text-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/agent/agentprofile')} className="text-[#37e5a5]">
            <ArrowLeft />
          </button>
          <h1 className="text-xl font-bold">Active Offers</h1>
        </div>
        <button className="bg-[#37e5a5] text-black p-2 rounded-lg">
          <Plus size={20} />
        </button>
      </div>

      {/* Offers List */}
      <div className="space-y-4">
        {activeOffers.map((offer, index) => (
          <div key={index} className="bg-[#111111] rounded-xl p-4">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold">{offer.title}</h3>
                <span className="text-[#37e5a5] text-lg font-bold">{offer.discount} OFF</span>
              </div>
              <button className="text-sm text-[#37e5a5]">Edit</button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar size={16} />
                <span>Valid until {offer.validUntil}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Users size={16} />
                <span>{offer.bookings} bookings</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <DollarSign size={16} />
                <span>${offer.revenue} revenue</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between">
              <button className="text-red-500">End Offer</button>
              <button className="text-[#37e5a5]">View Details</button>
            </div>
          </div>
        ))}
      </div>

      {/* Create Offer CTA */}
      <div className="mt-6 bg-[#111111] rounded-xl p-6 text-center">
        <h3 className="font-semibold mb-2">Create New Offer</h3>
        <p className="text-gray-400 text-sm mb-4">Set up special deals for your packages</p>
        <button className="bg-[#37e5a5] text-black font-semibold px-6 py-2 rounded-lg">
          Create Offer
        </button>
      </div>
    </div>
  );
};

export default Offers;