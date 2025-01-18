import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Mock suggestions - replace with actual API call
  const popularDestinations = [
    "Cherpulassery, India",
    "Bali, Indonesia",
    "Tokyo, Japan",
    "Paris, France",
    "New York, USA",
    "Dubai, UAE",
    "Singapore",
    "London, UK",
    "Sydney, Australia",
  ];

  useEffect(() => {
    if (searchTerm) {
      const filtered = popularDestinations.filter((dest) =>
        dest.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions(popularDestinations);
    }
  }, [searchTerm]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl pt-16"
        >
          <div className="container mx-auto px-4">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search destinations..."
                className="w-full h-12 pl-12 pr-12 bg-gray rounded-full text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <button
                onClick={onClose}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-700 rounded-full"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="text-sm font-medium text-gray-400">
                {searchTerm ? "Search Results" : "Popular Destinations"}
              </h3>
              <div className="space-y-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-[#171717] transition-colors"
                    onClick={() => {
                      // Handle selection
                      onClose();
                    }}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
