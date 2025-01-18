import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  trend?: number;
}

export default function StatsCard({ icon: Icon, label, value, trend }: StatsCardProps) {
  return (
    <div className="p-4 bg-[#1f1f1f] rounded-xl border border-white/10">
      <div className="flex items-start justify-between mb-2">
        <div className="p-2 bg-white/5 rounded-lg">
          <Icon className="w-4 h-4 text-[#37e5a5]" />
        </div>
        {trend !== undefined && (
          <span className={`text-xs ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <p className="text-base font-semibold text-white">{value}</p>
    </div>
  );
}