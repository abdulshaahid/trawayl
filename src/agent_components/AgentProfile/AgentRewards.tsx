import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Gift, Award, Ticket } from 'lucide-react';

const Rewards = () => {
  const navigate = useNavigate();
  const rewards = {
    points: 2450,
    tier: 'Gold',
    nextTier: 'Platinum',
    pointsToNext: 550
  };

  const rewardItems = [
    {
      title: 'Premium Listing',
      points: 500,
      description: 'Feature your packages at the top of search results',
      icon: <Award className="text-[#37e5a5]" />
    },
    {
      title: 'Commission Boost',
      points: 1000,
      description: '2% extra commission for a month',
      icon: <Gift className="text-[#37e5a5]" />
    },
    {
      title: 'Priority Support',
      points: 750,
      description: 'Get priority customer support for 3 months',
      icon: <Ticket className="text-[#37e5a5]" />
    }
  ];

  return (
    <div className="mt-16 mb-12 min-h-screen bg-[#000000] text-white p-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => navigate('/agent/agentprofile')} className="text-[#37e5a5]">
          <ArrowLeft />
        </button>
        <h1 className="text-xl font-bold">Rewards</h1>
      </div>

      {/* Points Overview */}
      <div className="bg-[#111111] rounded-xl p-6 mb-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#37e5a5]">{rewards.points}</h2>
          <p className="text-gray-400">Available Points</p>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span>{rewards.tier}</span>
            <span>{rewards.nextTier}</span>
          </div>
          <div className="w-full bg-[#000000] rounded-full h-2">
            <div className="bg-[#37e5a5] h-2 rounded-full" style={{ width: '80%' }} />
          </div>
          <p className="text-sm text-gray-400 mt-2">
            {rewards.pointsToNext} points to {rewards.nextTier}
          </p>
        </div>
      </div>

      {/* Available Rewards */}
      <h2 className="text-lg font-semibold mb-4">Available Rewards</h2>
      <div className="space-y-4">
        {rewardItems.map((item, index) => (
          <div key={index} className="bg-[#111111] rounded-xl p-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#000000] rounded-lg">{item.icon}</div>
              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-[#37e5a5] font-medium">{item.points} points</span>
                  <button className="bg-[#37e5a5] text-black text-sm font-semibold px-4 py-2 rounded-lg">
                    Redeem
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rewards;