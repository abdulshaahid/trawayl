import React from 'react';
import { Filter } from 'lucide-react';

export default function PackageFilters() {
  return (
    <button className="p-2.5 bg-[#111111] rounded-xl  hover:border-[#37e5a5] transition-colors">
      <Filter className="w-4 h-4 text-white" />
    </button>
  );
}