import React from 'react';
import { MapPin, Star, Users, Clock, Edit, Trash2 } from 'lucide-react';
import { Package as PackageType } from '../../types';

interface PackageCardProps {
  package: PackageType;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function PackageCard({ package: pkg, onEdit, onDelete }: PackageCardProps) {
  const statusColors = {
    active: 'bg-green-500',
    draft: 'bg-gray-500',
    pending: 'bg-yellow-500'
  };

  return (
    <div className="bg-[#111111] rounded-xl overflow-hidden">
      <div className="relative aspect-video">
        <img 
          src={pkg.images[0]} 
          alt={pkg.name}
          className="w-full h-full object-cover"
        />
        <span className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs ${statusColors[pkg.status]}`}>
          {pkg.status}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{pkg.name}</h3>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {pkg.duration}
          </span>
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500" />
            {pkg.rating} ({pkg.reviews})
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {pkg.location}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {pkg.reviews} bookings
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-[#37e5a5]">${pkg.price}</span>
          <div className="flex gap-2">
            <button 
              onClick={() => onEdit(pkg.id)}
              className="p-2 hover:bg-black/20 rounded-lg transition-colors"
            >
              <Edit className="w-5 h-5 text-[#37e5a5]" />
            </button>
            <button 
              onClick={() => onDelete(pkg.id)}
              className="p-2 hover:bg-black/20 rounded-lg transition-colors"
            >
              <Trash2 className="w-5 h-5 text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}