import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavigationLinkProps {
  to: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
}

const NavigationLink = ({ to, icon: Icon, label, isActive }: NavigationLinkProps) => {
  return (
    <Link
      to={to}
      className={`flex flex-col items-center ${
        isActive ? 'text-[#00FF9D]' : 'text-gray-400'
      }`}
    >
      <Icon size={24} />
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};

export default NavigationLink;