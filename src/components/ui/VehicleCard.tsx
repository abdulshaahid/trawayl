import { Star, Users, Wifi, Thermometer, Navigation, Shield } from 'lucide-react';

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
  const getFeatureIcon = (feature: string) => {
    switch (feature.toLowerCase()) {
      case 'wifi':
        return <Wifi className="w-4 h-4" />;
      case 'ac':
        return <Thermometer className="w-4 h-4" />;
      case 'gps':
        return <Navigation className="w-4 h-4" />;
      default:
        return <Shield className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-card rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex flex-col sm:flex-row h-full">
        {/* Image container with fixed aspect ratio */}
        <div className="w-full sm:w-2/5 lg:w-1/3 relative">
          <div className="aspect-[4/3] sm:h-full">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content container */}
        <div className="w-full sm:w-3/5 lg:w-2/3 p-4 sm:p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-semibold text-lg line-clamp-1 mb-1">{title}</h3>
              <div className="flex items-center text-sm text-gray-400">
                <Users className="w-4 h-4 mr-1" />
                <span>{seats} seats</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span>{rating.toFixed(1)}</span>
              <span className="text-gray-400">({reviews})</span>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-gray-400">
                {getFeatureIcon(feature)}
                <span className="ml-2">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-auto">
            <div>
              <p className="text-sm text-gray-400">Price per day</p>
              <p className="text-primary text-xl font-bold">${price}</p>
            </div>
            <button className="bg-primary text-black py-2 px-6 rounded-full hover:bg-primary/90 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}