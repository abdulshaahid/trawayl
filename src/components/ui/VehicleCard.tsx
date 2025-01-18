import { Star, Users } from 'lucide-react';

interface VehicleCardProps {
  image: string;
  title: string;
  seats: number;
  features: string[];
  price: number;
  rating: number;
  reviews: number;
}

export function VehicleCard({ image, title, seats, features, price, rating, reviews }: VehicleCardProps) {
  return (
    <div className="flex-none w-72">
      <div className="bg-card rounded-lg overflow-hidden group">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <button className="absolute top-4 right-4 p-2 rounded-full bg-background/50 hover:bg-background/80 transition-colors">
            <Star className="w-5 h-5 text-white" />
          </button>
        </div>
        <div className="p-4">
          <h3 className="font-semibold mb-1 line-clamp-2">{title}</h3>
          <div className="flex items-center space-x-1 text-sm text-gray-400 mb-2">
            <Users className="w-4 h-4" />
            <span>{seats} seats</span>
            <span>•</span>
            <span>{features.join(' • ')}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1 text-sm">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span>{rating.toFixed(1)}</span>
              <span className="text-gray-400">({reviews})</span>
            </div>
            <p className="text-primary font-bold">${price}/day</p>
          </div>
        </div>
      </div>
    </div>
  );
}