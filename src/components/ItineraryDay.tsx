import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ItineraryDayProps {
  day: number;
  title: string;
  activities: string[];
  icon: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

const ItineraryDay = ({ day, title, activities, icon, isSelected, onClick }: ItineraryDayProps) => {
  return (
    <div
      className={`bg-[#181414] p-4 rounded-3xl cursor-pointer transition-all ${
        isSelected ? 'border-2 border-[#37e5a5]' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        {icon}
        <div>
          <h3 className="font-bold">Day {day}</h3>
          <p className="text-gray-400">{title}</p>
        </div>
      </div>
      {isSelected && (
        <div className="mt-4 ml-9 space-y-2">
          {activities.map((activity, index) => (
            <p key={index} className="text-gray-400">• {activity}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItineraryDay;