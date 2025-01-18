import React from 'react';
import {
  Users,
  Home,
  Shield,
  Map,
  Coffee,
  Camera,
  Phone,
  Heart,
  Wifi,
  UserCheck
} from 'lucide-react';
import FeatureCard from '../features/FeatureCard';

const features = [
  { icon: <Users className="w-6 h-6 text-[#37e5a5]" />, text: 'Small Groups' },
  { icon: <Home className="w-6 h-6 text-[#37e5a5]" />, text: 'Social Stays' },
  { icon: <Shield className="w-6 h-6 text-[#37e5a5]" />, text: 'Safe Travel' },
  { icon: <Map className="w-6 h-6 text-[#37e5a5]" />, text: 'Local Guide' },
  { icon: <Coffee className="w-6 h-6 text-[#37e5a5]" />, text: 'Breakfast' },
  { icon: <Camera className="w-6 h-6 text-[#37e5a5]" />, text: 'Photo Ops' },
  { icon: <Phone className="w-6 h-6 text-[#37e5a5]" />, text: '24/7 Support' },
  { icon: <Heart className="w-6 h-6 text-[#37e5a5]" />, text: 'Solo-friendly' },
  { icon: <Wifi className="w-6 h-6 text-[#37e5a5]" />, text: 'Free Wi-Fi' },
  { icon: <UserCheck className="w-6 h-6 text-[#37e5a5]" />, text: 'Verified Stays' },
];

const SoloFeatures = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};

export default SoloFeatures;