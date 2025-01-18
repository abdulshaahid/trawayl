import React, { useState } from 'react';
import { LayoutDashboard, Package, UserPlus, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/admin/orders', icon: Package, label: 'Orders' },
  { path: '/admin/OrderSummaryTable', icon: Package, label: 'Order Summary' },
  { path: '/admin/agent-add', icon: UserPlus, label: 'Agent Add' },
  { path: '/admin/settings', icon: Settings, label: 'Settings' },
];

export default function AdminSidebar() {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();

  return (
    <div className={`bg-[#171717] min-h-screen transition-all duration-300 ${expanded ? 'w-64' : 'w-20'}`}>
      <div className="flex justify-between items-center p-4">
        {expanded && (
          <h2 className="text-white font-bold text-xl">Admin</h2>
        )}
        <button
          onClick={() => setExpanded(!expanded)}
          className="p-2 rounded-lg bg-[#37E5A5] hover:bg-[#2bc588] transition-colors"
        >
          {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      <nav className="mt-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 mb-2 transition-colors ${
                isActive 
                  ? 'bg-[#37E5A5] text-black' 
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Icon size={20} />
              {expanded && <span className="ml-4">{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}