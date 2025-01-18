import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, MapPin } from 'lucide-react';

interface VehicleOption {
  id: string;
  title: string;
  description: string;
  price: number;
  type: 'duration' | 'destination';
}

const VehicleOptions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const options: VehicleOption[] = [
    {
      id: 'full-day',
      title: 'Full Day (12 hours)',
      description: 'Unlimited km within city limits',
      price: 4500,
      type: 'duration'
    },
    {
      id: 'outstation',
      title: 'Outstation Trip',
      description: 'Multiple day booking with driver stay',
      price: 5500,
      type: 'duration'
    },
    {
      id: 'airport',
      title: 'Airport Transfer',
      description: 'Pickup or drop to airport',
      price: 2000,
      type: 'destination'
    }
  ];

  const toggleOption = (id: string) => {
    setSelectedOptions(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="bg-[#171717] rounded-3xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center justify-between"
      >
        <span className="font-semibold">Select Booking Type</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 space-y-4">
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-[#37e5a5]" />
                  Duration Options
                </h4>
                {options
                  .filter(opt => opt.type === 'duration')
                  .map(option => (
                    <button
                      key={option.id}
                      onClick={() => toggleOption(option.id)}
                      className={`w-full p-4 rounded-2xl mb-2 text-left transition-all ${
                        selectedOptions.includes(option.id)
                          ? 'bg-[#242424] border-2 border-[#37e5a5]'
                          : 'bg-[#242424]'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{option.title}</p>
                          <p className="text-sm text-gray-400">{option.description}</p>
                        </div>
                        <p className="text-[#37e5a5]">₹{option.price}</p>
                      </div>
                    </button>
                  ))}
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-[#37e5a5]" />
                  Destination Options
                </h4>
                {options
                  .filter(opt => opt.type === 'destination')
                  .map(option => (
                    <button
                      key={option.id}
                      onClick={() => toggleOption(option.id)}
                      className={`w-full p-4 rounded-2xl mb-2 text-left transition-all ${
                        selectedOptions.includes(option.id)
                          ? 'bg-[#242424] border-2 border-[#37e5a5]'
                          : 'bg-[#242424]'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{option.title}</p>
                          <p className="text-sm text-gray-400">{option.description}</p>
                        </div>
                        <p className="text-[#37e5a5]">₹{option.price}</p>
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VehicleOptions;