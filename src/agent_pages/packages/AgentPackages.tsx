import React from 'react';
import { Plus, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchBar from '../../agent_components/ui/SearchBar';
import PackageList from '../../agent_components/packages/PackageList';
import PackageFilters from '../../agent_components/packages/PackageFilters';

export default function AgentPackages() {
  return (
    <div className="min-h-screen bg-black pt-20 pb-20 px-4">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-white">My Packages</h1>
          <Link
            to="/packages/new"
            className="flex items-center gap-2 px-3 py-2 bg-[#37e5a5] text-black rounded-lg text-sm font-medium hover:bg-[#37e5a5]/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add Package</span>
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1">
            <SearchBar placeholder="Search packages..." />
          </div>
          <PackageFilters />
        </div>

        <PackageList />
      </div>
    </div>
  );
}