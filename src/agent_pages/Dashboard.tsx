import React from 'react';
import { Package, Users, Calendar, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { 
    icon: Package, 
    label: 'Total Packages', 
    value: '24', 
    trend: 12,
    path: '/stats/packages',
    color: 'bg-[#151515]'
  },
  { 
    icon: Users, 
    label: 'Active Bookings', 
    value: '156', 
    trend: 8,
    path: '/stats/bookings',
    color: 'bg-[#151515]'
    },
  { 
    icon: Calendar, 
    label: 'Pending Orders', 
    value: '12', 
    trend: -3,
    path: '/stats/orders',
    color: 'bg-[#151515]'
  },
  { 
    icon: DollarSign, 
    label: 'Monthly Earnings', 
    value: '$12,450', 
    trend: 15,
    path: '/stats/earnings',
    color: 'bg-[#151515]'
  },
];

const quickActions = [
  { label: 'Add Package', path: '/packages/new',     color: 'bg-[#151515]'  },
  { label: 'Manage Orders', path: '/orders',     color: 'bg-[#151515]'  },
  { label: 'View Earnings', path: '/earnings',     color: 'bg-[#151515]'  },
  { label: 'Reply to Reviews', path: '/reviews',        color: 'bg-[#151515]'},
];
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black pt-20 pb-20 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Stats</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Link
                  key={stat.label}
                  to={stat.path}
                  className={`p-6 rounded-xl bg-gradient-to-br ${stat.color} hover:scale-[1.02] transition-transform`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-3 bg-black/20 rounded-lg">
                      <Icon className="w-6 h-6 text-sky-400" />
                    </div>
                    <span className={`text-sm ${stat.trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.trend > 0 ? '+' : ''}{stat.trend}%
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {quickActions.map((action) => (
              <Link
                key={action.label}
                to={action.path}
                className={`p-6 rounded-xl bg-gradient-to-br ${action.color} hover:scale-[1.02] transition-transform`}
              >
                <span className="text-sm text-white">{action.label}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
