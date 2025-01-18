import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  text: string;
}

const FeatureCard = ({ icon, text }: FeatureCardProps) => {
  return (
    <div className="bg-[#171717] p-2 rounded-3xl flex items-center space-x-3 hover:border-[#37e5a5] hover:border-2 transition-all cursor-pointer">
      {icon}
      <span className="text-sm">{text}</span>
    </div>
  );
};

export default FeatureCard;