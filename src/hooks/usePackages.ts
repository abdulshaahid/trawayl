import { useState } from 'react';
import { Package } from '../types';

const mockPackages: Package[] = [
  {
    id: '1',
    name: 'Adventure Trek to Mountains',
    price: 299,
    duration: '3 days',
    description: 'Experience the thrill of mountain trekking',
    highlights: ['Professional Guide', 'Camping', 'Meals'],
    images: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b'],
    status: 'active',
    rating: 4.8,
    reviews: 24
  }
];

export function usePackages() {
  const [packages] = useState<Package[]>(mockPackages);
  const [isLoading] = useState(false);

  return {
    packages,
    isLoading
  };
}