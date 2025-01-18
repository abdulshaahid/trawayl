import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Search } from 'lucide-react';

const HelpCenter = () => {
  const navigate = useNavigate();
  const faqCategories = [
    { title: 'Account Management', count: 5 },
    { title: 'Booking Process', count: 8 },
    { title: 'Payment & Commissions', count: 6 },
    { title: 'Package Management', count: 4 },
    { title: 'Customer Support', count: 7 }
  ];

  return (
    <div className="mt-16 mb-12 min-h-screen bg-[#000000] text-white p-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => navigate('/agent/agentprofile')} className="text-[#37e5a5]">
          <ArrowLeft />
        </button>
        <h1 className="text-xl font-bold">Help Center</h1>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search help articles..."
          className="w-full bg-[#111111] rounded-lg pl-10 pr-4 py-3  focus:border-[#37e5a5] focus:outline-none text-white"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      </div>

      {/* Categories */}
      <div className="space-y-3">
        {faqCategories.map((category, index) => (
          <button
            key={index}
            className="w-full bg-[#111111] rounded-xl p-4 flex items-center justify-between hover:bg-opacity-80 transition-colors"
          >
            <div>
              <h3 className="font-medium text-white">{category.title}</h3>
              <p className="text-sm text-gray-400">{category.count} articles</p>
            </div>
            <ChevronRight className="text-[#37e5a5]" />
          </button>
        ))}
      </div>

      {/* Contact Support */}
      <div className="mt-8 bg-[#111111] rounded-xl p-6 text-center">
        <h3 className="font-semibold mb-2">Need more help?</h3>
        <p className="text-gray-400 text-sm mb-4">Contact our support team for assistance</p>
        <button className="bg-[#37e5a5] text-black font-semibold px-6 py-2 rounded-lg">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default HelpCenter;