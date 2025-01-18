import { MapPin, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProfileHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHn5zv2cwm9fsus0Mxan9ib1sSbEaVkiysCg&s"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Shahid</h1>
          <p className="text-gray-400 flex items-center">
            <MapPin className="w-4 h-4 mr-1" /> New York, USA
          </p>
        </div>
      </div>
      <Link to="/settings" className="p-2 hover:bg-card rounded-full">
        <Settings className="w-6 h-6" />
      </Link>
    </div>
  );
}