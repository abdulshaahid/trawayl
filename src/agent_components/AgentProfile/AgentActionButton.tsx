import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ActionButtonProps {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}

const ActionButton = ({ icon, text, onClick }: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-[#000000] rounded-xl p-4 flex items-center justify-between hover:bg-opacity-80 transition-colors"
    >
      <div className="flex items-center gap-3">
        <span className="text-[#37e5a5]">{icon}</span>
        <span className="text-white">{text}</span>
      </div>
      <ChevronRight className="text-gray-400" />
    </button>
  );
}

export default ActionButton;