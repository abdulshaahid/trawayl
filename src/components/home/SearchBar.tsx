import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search packages, vehicles, or trips..."
        className="w-full h-12 pl-12 pr-4 bg-card rounded-full text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
    </div>
  );
}