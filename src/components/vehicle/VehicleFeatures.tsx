import React from 'react';
import {
  Car,
  Fuel,
  User,
  MapPin,
  Shield,
  Wifi,
  Music,
  Snowflake,
  Clock,
  Phone
} from 'lucide-react';
import FeatureCard from '../features/FeatureCard';

const features = [
  { icon: <Car className="w-6 h-6 text-[#37e5a5]" />, text: 'Latest Model' },
  { icon: <Fuel className="w-6 h-6 text-[#37e5a5]" />, text: 'Fuel Included' },
  { icon: <User className="w-6 h-6 text-[#37e5a5]" />, text: 'Expert Driver' },
  { icon: <MapPin className="w-6 h-6 text-[#37e5a5]" />, text: 'GPS Tracking' },
  { icon: <Shield className="w-6 h-6 text-[#37e5a5]" />, text: 'Insurance' },
  { icon: <Wifi className="w-6 h-6 text-[#37e5a5]" />, text: 'Free Wi-Fi' },
  { icon: <Music className="w-6 h-6 text-[#37e5a5]" />, text: 'Music System' },
  { icon: <Snowflake className="w-6 h-6 text-[#37e5a5]" />, text: 'AC' },
  { icon: <Clock className="w-6 h-6 text-[#37e5a5]" />, text: '24/7 Support' },
  { icon: <Phone className="w-6 h-6 text-[#37e5a5]" />, text: 'Phone Mount' },
];

const VehicleFeatures = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};

export default VehicleFeatures;