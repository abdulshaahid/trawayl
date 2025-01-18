import React from 'react';
import { Car, Mountain } from 'lucide-react';
import type { PartnerType } from '../types';

interface PartnerTypeModalProps {
  onSelect: (type: PartnerType) => void;
  onClose: () => void;
}

export function PartnerTypeModal({ onSelect, onClose }: PartnerTypeModalProps) {
  const options = [
    {
      type: 'tour' as const,
      title: 'Tour Package Partner',
      description: 'Offer complete tour packages to travelers.',
      icon: Mountain,
    },
    {
      type: 'vehicle' as const,
      title: 'Tourist Vehicle Partner',
      description: 'Provide transportation services.',
      icon: Car,
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-[#171717] rounded-xl max-w-sm w-full p-6 shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-lg font-bold text-[#d0d0d0] mb-4">
          Select the service you want to register for
        </h2>

        {/* Options */}
        <div className="space-y-4">
          {options.map(({ type, title, description, icon: Icon }) => (
            <div
              key={type}
              className="flex items-center gap-4 p-4 rounded-xl bg-[#111111] border border-[#111111] hover:border-[#37e5a5] hover:bg-[#1f1f1f] shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => onSelect(type)}
            >
              <div className="flex-shrink-0 p-2 bg-[#2c2c2c] rounded-full">
                <Icon className="w-6 h-6 text-[#37e5a5]" />
              </div>
              <div>
                <h3 className="font-medium text-white">{title}</h3>
                <p className="text-sm text-gray-400">{description}</p>
                <span className="text-sm text-[#37e5a5] font-medium mt-2 block hover:underline">
                  Register now
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}