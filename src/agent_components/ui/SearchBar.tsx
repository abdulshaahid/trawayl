import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({ placeholder = 'Search...' }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-10 pl-10 pr-4 bg-[#111111]  rounded-xl text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#37e5a5] transition-colors"
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
    </div>
  );
}