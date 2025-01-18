import React from 'react';
import { LayoutGrid, Compass, Plus, ShoppingBag, Wallet } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { icon: LayoutGrid, label: 'Dashboard', path: '/agent/dashboard' },
  { icon: Compass, label: 'Explore', path: '/agent/agentpackages' },
  { icon: Plus, label: '', path: '/agent/addpackage' },
  { icon: ShoppingBag, label: 'Orders', path: '/agent/orders' },
  { icon: Wallet, label: 'Earnings', path: '/agent/earnings' },
];

export default function AgentBottomNav() {
  const location = useLocation();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-black/60 backdrop-blur-md">
      <div className="grid grid-cols-5 h-full max-w-lg mx-auto">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          const isAdd = label === '';
          
          return (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center justify-center gap-1 ${
                isAdd ? '-mt-4' : ''
              }`}
            >
              {isAdd ? (
                <div className="w-12 h-12 rounded-full bg-[#37e5a5] flex items-center justify-center shadow-lg shadow-[#37e5a5]/20">
                  <Icon className="w-6 h-6 text-black" />
                </div>
              ) : (
                <Icon
                  className={`w-5 h-5 ${
                    isActive ? 'text-[#37e5a5]' : 'text-gray-400'
                  }`}
                />
              )}
              <span className={`text-[10px] ${
                isActive ? 'text-[#37e5a5]' : 'text-gray-400'
              }`}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}