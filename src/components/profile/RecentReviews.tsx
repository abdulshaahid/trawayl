import { Star } from 'lucide-react';

export function RecentReviews() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Recent Reviews</h2>
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-card rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Star className="w-5 h-5 text-primary fill-primary" />
              <Star className="w-5 h-5 text-primary fill-primary" />
              <Star className="w-5 h-5 text-primary fill-primary" />
              <Star className="w-5 h-5 text-primary fill-primary" />
              <Star className="w-5 h-5 text-primary fill-primary" />
            </div>
            <p className="text-sm">Amazing experience! The service was exceptional and the views were breathtaking.</p>
            <p className="text-xs text-gray-400 mt-2">Grand Hyatt Bali • 2 weeks ago</p>
          </div>
        ))}
      </div>
    </div>
  );
}