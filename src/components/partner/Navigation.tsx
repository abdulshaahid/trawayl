import React from 'react';
import { useLocation } from 'react-router-dom';
import { Home, Compass, PlusCircle, Wallet } from 'lucide-react';
import NavigationLink from './NavigationLink';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/explore', icon: Compass, label: 'Explore' },
    { path: '/create', icon: PlusCircle, label: 'Create' },
    { path: '/wallet', icon: Wallet, label: 'Wallet' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 px-6 py-3">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {navigationItems.map((item) => (
          <NavigationLink
            key={item.path}
            to={item.path}
            icon={item.icon}
            label={item.label}
            isActive={isActive(item.path)}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navigation;