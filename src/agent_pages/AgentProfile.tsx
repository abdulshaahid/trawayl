import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, MapPin, Edit2, HelpCircle, Gift, Tag } from 'lucide-react';
import AgentStatsCard from '../agent_components/AgentProfile/AgentStatsCard';
import AgentActionButton from '../agent_components/AgentProfile/AgentActionButton';

const AgentProfile = () => {
  const navigate = useNavigate();
  
  const agent = {
    name: 'Sarah Anderson',
    location: 'New York, USA',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    totalTrips: 156,
    rating: 4.8,
    rewards: 2450,
    activeOffers: 8
  };

  return (
    <div className="mb-24 min-h-screen bg-[#000000] text-white">
      {/* Header */}
      <div className="relative h-48 bg-[#000000]">
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <img
            src={agent.avatar}
            alt={agent.name}
            className="w-32 h-32 rounded-full border-2 border-[#000000]"
          />
        </div>
      </div>

      {/* Profile Info */}
      <div className="mt-20 text-center">
        <h1 className="text-2xl font-bold">{agent.name}</h1>
        <div className="flex items-center justify-center gap-2 mt-2 text-gray-400">
          <MapPin size={16} />
          <span>{agent.location}</span>
        </div>
        
        {/* Stats */}
        <div className="flex justify-center gap-8 mt-6">
          <div className="text-center">
            <p className="text-2xl font-bold">{agent.totalTrips}</p>
            <p className="text-sm text-gray-400">Total Trips</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1">
              <span className="text-2xl font-bold">{agent.rating}</span>
              <Star className="w-5 h-5 fill-[#37e5a5] text-[#37e5a5]" />
            </div>
            <p className="text-sm text-gray-400">Rating</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 mt-8 space-y-4">
        <AgentActionButton 
          icon={<Edit2 />}
          text="Edit Profile"
          onClick={() => navigate('/agent/agent-edit-profile')}
        />
        <AgentActionButton 
          icon={<HelpCircle />}
          text="Help Center"
          onClick={() => navigate('/agent/agent-help-center')}
        />
        <AgentActionButton 
          icon={<Gift />}
          text={`Rewards (${agent.rewards} points)`}
          onClick={() => navigate('/agent/agent-rewards')}
        />
        <AgentActionButton 
          icon={<Tag />}
          text={`Active Offers (${agent.activeOffers})`}
          onClick={() => navigate('/agent/agent-offers')}
        />
      </div>

      {/* Quick Stats */}
      <div className="px-4 mt-8 grid grid-cols-2 gap-4">
        <AgentStatsCard
          title="Active Bookings"
          value="156"
          trend="+8%"
          isPositive={true}
        />
        <AgentStatsCard
          title="Monthly Earnings"
          value="$12,450"
          trend="+15%"
          isPositive={true}
        />
      </div>
    </div>
  );
};

export default AgentProfile;