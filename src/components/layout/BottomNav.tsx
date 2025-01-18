import { Compass, Home, TicketCheck, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function BottomNav() {
  const location = useLocation();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-black/60 backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-around">
        <Link to="/" className={`flex flex-col items-center space-y-1 ${location.pathname === '/' ? 'text-primary' : 'text-white'}`}>
          <Home className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </Link>
        <Link to="/explore" className={`flex flex-col items-center space-y-1 ${location.pathname === '/explore' ? 'text-primary' : 'text-white'}`}>
          <Compass className="w-6 h-6" />
          <span className="text-xs">Explore</span>
        </Link>
        <Link to="/bookings" className={`flex flex-col items-center space-y-1 ${location.pathname === '/bookings' ? 'text-primary' : 'text-white'}`}>
          <TicketCheck className="w-6 h-6" />
          <span className="text-xs">Bookings</span>
        </Link>
        <Link to="/profile" className={`flex flex-col items-center space-y-1 ${location.pathname === '/profile' ? 'text-primary' : 'text-white'}`}>
          <User className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </nav>
  );
}