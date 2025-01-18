import React from 'react';

interface AddOnCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: number;
  isSelected: boolean;
  onClick: () => void;
}

const AddOnCard = ({ icon, title, description, price, isSelected, onClick }: AddOnCardProps) => {
  return (
    <div
      className={`bg-[#181414] p-4 rounded-3xl cursor-pointer transition-all ${
        isSelected ? 'border-2 border-[#37e5a5]' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {icon}
          <div>
            <p className="font-semibold text-white">{title}</p>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>
        <p className="text-[#37e5a5]">+₹{price}</p>
      </div>
    </div>
  );
};

export default AddOnCard;