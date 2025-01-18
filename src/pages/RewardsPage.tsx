import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Gift } from 'lucide-react';

const RewardsPage = () => {
  const rewards = [
    {
      id: 1,
      title: '10% Off Your Next Trip',
      description: 'Valid on any booking above $500',
      expiryDate: 'Expires Dec 31, 2024',
      isActive: true,
    },
    {
      id: 2,
      title: 'Free Airport Transfer',
      description: 'One-way airport transfer on your next booking',
      expiryDate: 'Expires Nov 30, 2024',
      isActive: true,
    },
    {
      id: 3,
      title: '$50 Travel Credit',
      description: 'Use on any booking',
      expiryDate: 'Expired',
      isActive: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black pb-20">
      <header className="mt-16 sticky top-0 z-10 bg-black flex items-center p-4 sm:p-6 border-b border-gray-800">
        <Link to="/profile" className="mr-4">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-xl font-bold">Rewards</h1>
      </header>

      <div className="p-4 sm:p-6">
        <div className="bg-gradient-to-r from-[#00FF9D] to-[#00CC7E] rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Gift size={24} className="text-black" />
            <h2 className="text-xl font-bold text-black">Your Rewards</h2>
          </div>
          <div className="text-black">
            <div className="text-3xl font-bold mb-2">250</div>
            <div>Points Available</div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Available Rewards</h3>
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className={`bg-[#111] rounded-lg p-4 ${
                !reward.isActive && 'opacity-50'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">{reward.title}</h4>
                {reward.isActive && (
                  <button className="px-3 py-1 bg-[#00FF9D] text-black rounded-full text-sm hover:bg-[#00E88D] transition-colors">
                    Claim
                  </button>
                )}
              </div>
              <p className="text-gray-400 text-sm mb-2">{reward.description}</p>
              <p className="text-sm text-gray-500">{reward.expiryDate}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">How to Earn Points</h3>
          <div className="space-y-4">
            <div className="bg-[#111] rounded-lg p-4">
              <h4 className="font-semibold mb-2">Complete a Trip</h4>
              <p className="text-gray-400 text-sm">Earn 50 points for each completed trip</p>
            </div>
            <div className="bg-[#111] rounded-lg p-4">
              <h4 className="font-semibold mb-2">Write a Review</h4>
              <p className="text-gray-400 text-sm">Earn 10 points for each review</p>
            </div>
            <div className="bg-[#111] rounded-lg p-4">
              <h4 className="font-semibold mb-2">Refer a Friend</h4>
              <p className="text-gray-400 text-sm">Earn 100 points when they complete their first trip</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RewardsPage;