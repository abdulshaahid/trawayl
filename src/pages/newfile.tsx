


// explore
import { useState } from 'react';
import { Bed, Utensils, Ticket, MessageSquare, SlidersHorizontal } from 'lucide-react';
import { SearchBar } from '../components/home/SearchBar';
import { FilterDrawer } from '../components/explore/FilterDrawer';
import { motion, AnimatePresence } from 'framer-motion';

export function Explore() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleApplyFilters = (filters: any) => {
    // Transform filters into tags
    const tags = Object.entries(filters)
      .filter(([_, value]: [string, any]) => {
        if (Array.isArray(value)) return value.length > 0;
        if (typeof value === 'string') return value !== '';
        return false;
      })
      .map(([key]: [string, any]) => key);

    setActiveFilters(tags);
  };

  return (
    <div className="min-h-screen bg-background text-white pt-20 pb-24">
      <div className="container mx-auto px-4 space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Explore</h1>
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-card hover:bg-card-hover rounded-full transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>

        <AnimatePresence>
          {activeFilters.length > 0 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="flex flex-wrap gap-2"
            >
              {activeFilters.map((filter) => (
                <span
                  key={filter}
                  className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                >
                  {filter}
                </span>
              ))}
              <button
                onClick={() => setActiveFilters([])}
                className="px-3 py-1 bg-card hover:bg-card-hover rounded-full text-sm transition-colors"
              >
                Clear All
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <SearchBar />

        {/* Rest of the Explore page content */}
        
        <FilterDrawer
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          onApplyFilters={handleApplyFilters}
        />
      </div>
    </div>
  );
}