import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export default function DashboardCard({ title, value, icon: Icon, trend }: DashboardCardProps) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm sm:text-base">{title}</p>
          <h3 className="text-xl sm:text-2xl font-bold mt-2">{value}</h3>
          {trend && (
            <p
              className={`text-sm sm:text-base mt-2 ${
                trend.isPositive ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
            </p>
          )}
        </div>
        <div className="p-3 bg-[#37E5A5] bg-opacity-20 rounded-lg">
          <Icon className="text-[#37E5A5]" size={24} />
        </div>
      </div>
    </div>
  );
}
