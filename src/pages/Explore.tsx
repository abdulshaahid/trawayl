import { Bed, Utensils, Ticket, MessageSquare } from 'lucide-react';
import { SearchBar } from '../components/home/SearchBar';

const destinations = [
  {
    id: 1,
    name: 'Bali',
    image: 'https://images.unsplash.com/photo-1520069853334-85e555651e6f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    name: 'Tokyo',
    image: 'https://plus.unsplash.com/premium_photo-1731442402851-106015068e52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    name: 'Paris',
    image: 'https://images.unsplash.com/photo-1500180675541-ed5e861c7b98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    name: 'New York',
    image: 'https://plus.unsplash.com/premium_photo-1732835448469-44a834a7ef6f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export function Explore() {
  return (
    <div className="min-h-screen bg-background text-white pt-20 pb-24">
      <div className="container mx-auto px-4 space-y-8">
        <h1 className="text-3xl font-bold">Explore</h1>
        
        <SearchBar />

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center space-x-3 p-4 bg-card rounded-full">
            <Bed className="w-6 h-6" />
            <span>Hotels</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-card rounded-full">
            <Utensils className="w-6 h-6" />
            <span>Restaurants</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-card rounded-full">
            <Ticket className="w-6 h-6" />
            <span>Things to do</span>
          </button>
          <button className="flex items-center space-x-3 p-4 bg-card rounded-full">
            <MessageSquare className="w-6 h-6" />
            <span>Forums</span>
          </button>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Popular Destinations</h2>
          <div className="grid grid-cols-2 gap-4">
            {destinations.map((destination) => (
              <div key={destination.id} className="relative rounded-lg overflow-hidden aspect-square">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl font-bold">{destination.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}