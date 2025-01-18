import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Home, Map } from 'lucide-react';

interface CustomOption {
  id: string;
  title: string;
  description: string;
  price: number;
  type: 'accommodation' | 'activity';
}

const SoloCustomize = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const options: CustomOption[] = [
    {
      id: 'private-room',
      title: 'Private Room Upgrade',
      description: 'Switch from dorm to private room',
      price: 2000,
      type: 'accommodation'
    },
    {
      id: 'photography',
      title: 'Photography Package',
      description: 'Professional photo session',
      price: 3000,
      type: 'activity'
    },
    {
      id: 'local-food',
      title: 'Local Food Tour',
      description: 'Guided food tasting experience',
      price: 1500,
      type: 'activity'
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
        <span className="font-semibold">Customize Your Experience</span>
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
                  <Home className="w-5 h-5 mr-2 text-[#37e5a5]" />
                  Accommodation Options
                </h4>
                {options
                  .filter(opt => opt.type === 'accommodation')
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
                        <p className="text-[#37e5a5]">+₹{option.price}</p>
                      </div>
                    </button>
                  ))}
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <Map className="w-5 h-5 mr-2 text-[#37e5a5]" />
                  Additional Experiences
                </h4>
                {options
                  .filter(opt => opt.type === 'activity')
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
                        <p className="text-[#37e5a5]">+₹{option.price}</p>
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

export default SoloCustomize;