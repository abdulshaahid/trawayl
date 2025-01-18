import React from 'react';
import { 
  Bed, 
  Coffee, 
  Bus, 
  Wifi, 
  Utensils, 
  Car, 
  Mountain, 
  Compass, 
  Users, 
  Shield 
} from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  { icon: <Bed className="w-6 h-6 text-[#37e5a5]" />, text: '4-Star Hotels' },
  { icon: <Coffee className="w-6 h-6 text-[#37e5a5]" />, text: 'All Meals' },
  { icon: <Bus className="w-6 h-6 text-[#37e5a5]" />, text: 'AC Transport' },
  { icon: <Wifi className="w-6 h-6 text-[#37e5a5]" />, text: 'Free Wi-Fi' },
  { icon: <Utensils className="w-6 h-6 text-[#37e5a5]" />, text: 'Welcome Dinner' },
  { icon: <Car className="w-6 h-6 text-[#37e5a5]" />, text: 'Airport Transfer' },
  { icon: <Mountain className="w-6 h-6 text-[#37e5a5]" />, text: 'Adventure Sports' },
  { icon: <Compass className="w-6 h-6 text-[#37e5a5]" />, text: 'Local Guide' },
  { icon: <Users className="w-6 h-6 text-[#37e5a5]" />, text: 'Small Groups' },
  { icon: <Shield className="w-6 h-6 text-[#37e5a5]" />, text: 'Travel Insurance' },
];

const PackageFeatures = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};

export default PackageFeatures;