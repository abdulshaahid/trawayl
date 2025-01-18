import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface TimelineDayProps {
  day: number;
  title: string;
  activities: string[];
  icon: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
  isLast?: boolean;
}

const TimelineDay = ({ 
  day, 
  title, 
  activities, 
  icon, 
  isSelected, 
  onClick,
  isLast 
}: TimelineDayProps) => {
  return (
    <div className="relative">
      <div className="flex items-start">
        {/* Timeline track */}
        {!isLast && (
          <div className="absolute left-6 top-12 w-0.5 h-full bg-[#242424]" />
        )}
        
        {/* Timeline node */}
        <div 
          className={`relative z-10 rounded-full p-3 ${
            isSelected ? 'bg-[#37e5a5]' : 'bg-[#242424]'
          }`}
        >
          {icon}
        </div>

        {/* Content */}
        <div className="ml-4 flex-1">
          <button
            onClick={onClick}
            className={`w-full text-left p-4 rounded-3xl transition-all ${
              isSelected ? 'bg-[#171717] border-2 border-[#37e5a5]' : 'bg-[#171717]'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">Day {day}</h3>
                <p className="text-gray-400">{title}</p>
              </div>
              <ChevronDown 
                className={`w-5 h-5 transition-transform ${
                  isSelected ? 'rotate-180' : ''
                }`} 
              />
            </div>
          </button>

          <AnimatePresence>
            {isSelected && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="p-4 space-y-2">
                  {activities.map((activity, index) => (
                    <p key={index} className="text-gray-400 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#37e5a5] mr-2" />
                      {activity}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TimelineDay;