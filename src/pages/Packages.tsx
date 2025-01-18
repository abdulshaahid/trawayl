import { SearchBar } from '../components/home/SearchBar';
import { PackageCard } from '../components/ui/PackageCard';
import { Filter, SlidersHorizontal } from 'lucide-react';

const packages = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1520069853334-85e555651e6f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Bali Adventure: Temples, Beaches & Waterfalls',
    duration: '7 days',
    price: 899,
    rating: 4.8,
    reviews: 324
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1500180675541-ed5e861c7b98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Japan Cultural Experience: Tokyo to Kyoto',
    duration: '10 days',
    price: 1299,
    rating: 4.9,
    reviews: 512
  },
  // Add more packages...
];

export function Packages() {
  return (
    <div className="min-h-screen bg-background text-white pt-20 pb-24">
      <div className="container mx-auto px-4 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Travel Packages</h1>
          <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-card hover:bg-card-hover">
            <SlidersHorizontal className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>

        <SearchBar />

        <div className="flex items-center space-x-4 overflow-x-auto pb-2">
          {['All', 'Beach', 'Mountain', 'City', 'Cultural', 'Adventure'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-card hover:bg-card-hover whitespace-nowrap"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </div>
    </div>
  );
}