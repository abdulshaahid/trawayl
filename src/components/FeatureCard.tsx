import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  text: string;
}

const FeatureCard = ({ icon, text }: FeatureCardProps) => {
  return (
    <div className="bg-[#181414] p-4 rounded-3xl flex items-center space-x-3 hover:border-[#37e5a5] hover:border-2 transition-all cursor-pointer">
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default FeatureCard;