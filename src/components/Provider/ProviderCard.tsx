import React from 'react';
import { CheckCircle, Phone, Mail, Award } from 'lucide-react';

interface ProviderCardProps {
  name: string;
  logo: string;
  phone: string;
  email: string;
  tripsCount: number;
  experience: number;
  rating: number;
}

const ProviderCard = ({
  name,
  logo,
  phone,
  email,
  tripsCount,
  experience,
  rating,
}: ProviderCardProps) => {
  return (
    <div className="bg-[#171717] rounded-3xl p-6">
      <div className="flex items-center space-x-4 mb-6">
        <img src={logo} alt={name} className="w-16 h-16 rounded-full object-cover" />
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="text-xl font-bold">{name}</h3>
            <CheckCircle className="w-5 h-5 text-[#37e5a5]" />
          </div>
          <p className="text-gray-400">Verified Travel Provider</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-[#242424] p-4 rounded-2xl">
          <p className="text-gray-400">Total Trips</p>
          <p className="text-2xl font-bold">{tripsCount}+</p>
        </div>
        <div className="bg-[#242424] p-4 rounded-2xl">
          <p className="text-gray-400">Experience</p>
          <p className="text-2xl font-bold">{experience}+ years</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-[#37e5a5]" />
          <p>{phone}</p>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-[#37e5a5]" />
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;