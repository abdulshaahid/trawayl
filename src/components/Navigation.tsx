import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, PlusCircle, Wallet } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <NavLink to="/" className="flex flex-col items-center text-gray-400 hover:text-[#37e5a5]">
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </NavLink>
        <NavLink to="/explore" className="flex flex-col items-center text-gray-400 hover:text-[#37e5a5]">
          <Compass size={24} />
          <span className="text-xs mt-1">Explore</span>
        </NavLink>
        <NavLink to="/create" className="flex flex-col items-center text-gray-400 hover:text-[#37e5a5]">
          <PlusCircle size={24} />
          <span className="text-xs mt-1">Create</span>
        </NavLink>
        <NavLink to="/wallet" className="flex flex-col items-center text-gray-400 hover:text-[#37e5a5]">
          <Wallet size={24} />
          <span className="text-xs mt-1">Wallet</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;