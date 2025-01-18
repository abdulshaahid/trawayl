import React from 'react';
import { Users, Baby } from 'lucide-react';

interface TravelerSelectionProps {
  adults: number;
  children: number;
  onAdultsChange: (count: number) => void;
  onChildrenChange: (count: number) => void;
}

const TravelerSelection = ({
  adults,
  children,
  onAdultsChange,
  onChildrenChange
}: TravelerSelectionProps) => {
  return (
    <div className="space-y-4">
      {/* Adults */}
      <div className="bg-[#181414] p-4 rounded-3xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Users className="w-6 h-6 text-[#37e5a5]" />
          <div>
            <span className="block">Adults</span>
            <span className="text-sm text-gray-400">Age 12+</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => onAdultsChange(Math.max(1, adults - 1))}
            className="w-8 h-8 rounded-full bg-[#242424] flex items-center justify-center"
          >
            -
          </button>
          <span>{adults}</span>
          <button
            onClick={() => onAdultsChange(adults + 1)}
            className="w-8 h-8 rounded-full bg-[#242424] flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>

      {/* Children */}
      <div className="bg-[#181414] p-4 rounded-3xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Baby className="w-6 h-6 text-[#37e5a5]" />
          <div>
            <span className="block">Children</span>
            <span className="text-sm text-gray-400">Age 2-11</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => onChildrenChange(Math.max(0, children - 1))}
            className="w-8 h-8 rounded-full bg-[#242424] flex items-center justify-center"
          >
            -
          </button>
          <span>{children}</span>
          <button
            onClick={() => onChildrenChange(children + 1)}
            className="w-8 h-8 rounded-full bg-[#242424] flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelerSelection;