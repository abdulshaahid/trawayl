import { Calendar } from 'lucide-react';

export function UpcomingTrips() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Upcoming Trips</h2>
      <div className="space-y-4">
        {[1, 2].map((i) => (
          <div key={i} className="bg-card rounded-lg p-4 flex items-center space-x-4">
            <img
              src={`https://images.unsplash.com/photo-1500180675541-ed5e861c7b98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=${i}`}
              alt={`Trip ${i}`}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold">Bali Adventure Package</h3>
              <p className="text-sm text-gray-400 flex items-center">
                <Calendar className="w-4 h-4 mr-1" /> Mar 15 - Mar 22, 2024
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}