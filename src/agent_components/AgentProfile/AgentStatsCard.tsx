import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  trend: string;
  isPositive: boolean;
}

const StatsCard = ({ title, value, trend, isPositive }: StatsCardProps) => {
  return (
    <div className="bg-[#111111] rounded-xl p-4">
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-xl font-bold mt-1">{value}</p>
      <p className={`text-sm ${isPositive ? 'text-[#37e5a5]' : 'text-red-500'}`}>
        {trend}
      </p>
    </div>
  );
}

export default StatsCard;