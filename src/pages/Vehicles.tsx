import { SearchBar } from '../components/home/SearchBar';
import { VehicleCard } from '../components/ui/VehicleCard';
import { SlidersHorizontal } from 'lucide-react';

const vehicles = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1706736231665-6f6366568bd0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Mercedes-Benz S-Class',
    seats: 4,
    features: ['AC', 'WiFi', 'Leather'],
    price: 199,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1675668576261-a6c8a627a83f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Toyota Land Cruiser',
    seats: 7,
    features: ['AC', '4x4', 'GPS'],
    price: 149,
    rating: 4.7,
    reviews: 203
  },
  // Add more vehicles...
];

export function Vehicles() {
  return (
    <div className="min-h-screen bg-background text-white pt-20 pb-24">
      <div className="container mx-auto px-4 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Tourist Vehicles</h1>
          <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-card hover:bg-card-hover">
            <SlidersHorizontal className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>

        <SearchBar />

        <div className="flex items-center space-x-4 overflow-x-auto pb-2">
          {['All', 'Luxury', 'SUV', 'Van', 'Sports', 'Electric'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-card hover:bg-card-hover whitespace-nowrap"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
      </div>
    </div>
  );
}