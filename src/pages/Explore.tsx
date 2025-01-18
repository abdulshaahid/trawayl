import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bed, Utensils, Ticket, MessageSquare, ArrowRight } from 'lucide-react';
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

const collegeTrips = [
{
id: 1,
title: 'Beach College Trip',
image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop',
description: 'Fun beach activities with classmates',
price: 299
},
{
id: 2,
title: 'Mountain College Adventure',
image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=2070&auto=format&fit=crop',
description: 'Hiking and camping with your class',
price: 349
},
{
id: 3,
title: 'City Exploration',
image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop',
description: 'Urban adventure for students',
price: 279
}
];

const friendsTrips = [
{
id: 1,
title: 'Adventure Weekend',
image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2070&auto=format&fit=crop',
description: 'Exciting weekend with friends',
price: 399
},
{
id: 2,
title: 'Beach Party',
image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop',
description: 'Beachside fun with your squad',
price: 449
},
{
id: 3,
title: 'Road Trip Adventure',
image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop',
description: 'Epic road trip with friends',
price: 379
}
];

const familyTrips = [
{
id: 1,
title: 'Family Beach Vacation',
image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2069&auto=format&fit=crop',
description: 'Perfect for families with kids',
price: 599
},
{
id: 2,
title: 'Theme Park Adventure',
image: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?q=80&w=2070&auto=format&fit=crop',
description: 'Fun for the whole family',
price: 649
},
{
id: 3,
title: 'Nature Retreat',
image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop',
description: 'Family bonding in nature',
price: 549
}
];

const honeymoonTrips = [
{
id: 1,
title: 'Romantic Maldives',
image: 'https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?q=80&w=2072&auto=format&fit=crop',
description: 'Luxury beach honeymoon',
price: 899
},
{
id: 2,
title: 'Paris Romance',
image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
description: 'City of love experience',
price: 999
},
{
id: 3,
title: 'Santorini Escape',
image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2074&auto=format&fit=crop',
description: 'Greek island romance',
price: 849
}
];

const pilgrimageTrips = [
{
id: 1,
title: 'Sacred Temple Tour',
image: 'https://images.unsplash.com/photo-1588644525273-f37b60d78512?q=80&w=2070&auto=format&fit=crop',
description: 'Spiritual temple journey',
price: 499
},
{
id: 2,
title: 'Holy Land Visit',
image: 'https://images.unsplash.com/photo-1588644525273-f37b60d78512?q=80&w=2070&auto=format&fit=crop',
description: 'Sacred sites exploration',
price: 599
},
{
id: 3,
title: 'Meditation Retreat',
image: 'https://images.unsplash.com/photo-1609081144289-eec6c8aae721?q=80&w=2071&auto=format&fit=crop',
description: 'Spiritual wellness journey',
price: 449
}
];

const luxuryCars = [
{
id: 1,
title: 'Mercedes-Benz S-Class',
image: 'https://images.unsplash.com/photo-1706736231665-6f6366568bd0?q=80&w=1932&auto=format&fit=crop',
description: 'Premium luxury sedan',
price: 199
},
{
id: 2,
title: 'BMW 7 Series',
image: 'https://images.unsplash.com/photo-1724015652841-420c58376d97?q=80&w=1887&auto=format&fit=crop',
description: 'Executive comfort',
price: 189
}
];

const suvs = [
{
id: 1,
title: 'Range Rover Sport',
image: 'https://images.unsplash.com/photo-1675668576261-a6c8a627a83f?q=80&w=1887&auto=format&fit=crop',
description: 'Luxury SUV experience',
price: 149
},
{
id: 2,
title: 'BMW X7',
image: 'https://images.unsplash.com/photo-1706736231665-6f6366568bd0?q=80&w=1932&auto=format&fit=crop',
description: 'Premium family SUV',
price: 159
}
];

const electricCars = [
{
id: 1,
title: 'Tesla Model S',
image: 'https://images.unsplash.com/photo-1712249239414-88a434f15b94?q=80&w=1887&auto=format&fit=crop',
description: 'Premium electric sedan',
price: 169
},
{
id: 2,
title: 'Tesla Model X',
image: 'https://images.unsplash.com/photo-1712249239414-88a434f15b94?q=80&w=1887&auto=format&fit=crop',
description: 'Electric SUV',
price: 179
}
];

const mountainCamping = [
{
id: 1,
title: 'Alpine Adventure',
image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?q=80&w=2070&auto=format&fit=crop',
members: '12 members',
activity: 'Mountain Climbing'
},
{
id: 2,
title: 'Himalayan Trek',
image: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=2074&auto=format&fit=crop',
members: '8 members',
activity: 'Trekking'
}
];

const beachCamping = [
{
id: 1,
title: 'Coastal Camp',
image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070&auto=format&fit=crop',
members: '15 members',
activity: 'Beach Activities'
},
{
id: 2,
title: 'Island Adventure',
image: 'https://images.unsplash.com/photo-1602391833977-358a52198938?q=80&w=2074&auto=format&fit=crop',
members: '10 members',
activity: 'Water Sports'
}
];

const forestCamping = [
{
id: 1,
title: 'Forest Expedition',
image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop',
members: '10 members',
activity: 'Nature Exploration'
},
{
id: 2,
title: 'Wildlife Safari',
image: 'https://images.unsplash.com/photo-1533309907656-7b1c2ee56ddf?q=80&w=2070&auto=format&fit=crop',
members: '8 members',
activity: 'Wildlife Photography'
}
];

export function Explore() {
  const navigate = useNavigate();

  const handleDestinationClick = (id: number) => {
    navigate(`/destination/${id}`);
  };

  const handleTripClick = (id: number) => {
    navigate(`/package/${id}`);
  };

  const handleVehicleClick = (id: number) => {
    navigate(`/vehicle/${id}`);
  };

  const handleCampingClick = (id: number) => {
    navigate(`/camping/${id}`);
  };

  return (
    <div className="min-h-screen bg-background text-white pt-20 pb-24">
      <div className="container mx-auto px-4 space-y-8">
        <h1 className="text-3xl font-bold">Explore</h1>
        
        <SearchBar />

        {/* Quick Access Buttons */}
        

        {/* Popular Destinations */}
        <section className="space-y-4">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/destinations')}>
            <h2 className="text-xl font-semibold text-white hover:text-[#37e5a5] transition-colors">Popular Destinations</h2>
            <ArrowRight className="ml-2 text-white hover:text-[#37e5a5] transition-colors" />
          </div>
          <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 scrollbar-hide">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="flex-none w-72 cursor-pointer"
                onClick={() => handleDestinationClick(destination.id)}
              >
                <div className="relative rounded-lg overflow-hidden aspect-[4/3] group">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold">{destination.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Travel Packages Section */}
        <section className="space-y-8">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-[#37e5a5]">Travel Packages</h2>
          </div>

          {/* College Trips */}
          <section className="space-y-4">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/packages/college')}>
              <h2 className="text-xl font-semibold text-white hover:text-[#37e5a5] transition-colors">College Trips</h2>
              <ArrowRight className="ml-2 text-white hover:text-[#37e5a5] transition-colors" />
            </div>
            <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 scrollbar-hide">
              {collegeTrips.map((trip) => (
                <div
                  key={trip.id}
                  className="flex-none w-72 cursor-pointer"
                  onClick={() => handleTripClick(trip.id)}
                >
                  <div className="bg-card rounded-lg overflow-hidden group">
                    <div className="relative">
                      <img
                        src={trip.image}
                        alt={trip.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{trip.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{trip.description}</p>
                      <p className="text-primary font-bold">From ${trip.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Friends Trips */}
          <section className="space-y-4">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/packages/friends')}>
              <h2 className="text-xl font-semibold text-white hover:text-[#37e5a5] transition-colors">Friends Trips</h2>
              <ArrowRight className="ml-2 text-white hover:text-[#37e5a5] transition-colors" />
            </div>
            <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 scrollbar-hide">
              {friendsTrips.map((trip) => (
                <div
                  key={trip.id}
                  className="flex-none w-72 cursor-pointer"
                  onClick={() => handleTripClick(trip.id)}
                >
                  <div className="bg-card rounded-lg overflow-hidden group">
                    <div className="relative">
                      <img
                        src={trip.image}
                        alt={trip.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{trip.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{trip.description}</p>
                      <p className="text-primary font-bold">From ${trip.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Family Trips */}
          <section className="space-y-4">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/packages/family')}>
              <h2 className="text-xl font-semibold text-white hover:text-[#37e5a5] transition-colors">Family Trips</h2>
              <ArrowRight className="ml-2 text-white hover:text-[#37e5a5] transition-colors" />
            </div>
            <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 scrollbar-hide">
              {familyTrips.map((trip) => (
                <div
                  key={trip.id}
                  className="flex-none w-72 cursor-pointer"
                  onClick={() => handleTripClick(trip.id)}
                >
                  <div className="bg-card rounded-lg overflow-hidden group">
                    <div className="relative">
                      <img
                        src={trip.image}
                        alt={trip.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{trip.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{trip.description}</p>
                      <p className="text-primary font-bold">From ${trip.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Honeymoon Trips */}
          <section className="space-y-4">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/packages/honeymoon')}>
              <h2 className="text-xl font-semibold text-white hover:text-[#37e5a5] transition-colors">Honeymoon Packages</h2>
              <ArrowRight className="ml-2 text-white hover:text-[#37e5a5] transition-colors" />
            </div>
            <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 scrollbar-hide">
              {honeymoonTrips.map((trip) => (
                <div
                  key={trip.id}
                  className="flex-none w-72 cursor-pointer"
                  onClick={() => handleTripClick(trip.id)}
                >
                  <div className="bg-card rounded-lg overflow-hidden group">
                    <div className="relative">
                      <img
                        src={trip.image}
                        alt={trip.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{trip.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{trip.description}</p>
                      <p className="text-primary font-bold">From ${trip.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pilgrimage Trips */}
          <section className="space-y-4">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/packages/pilgrimage')}>
              <h2 className="text-xl font-semibold text-white hover:text-[#37e5a5] transition-colors">Pilgrimage Tours</h2>
              <ArrowRight className="ml-2 text-white hover:text-[#37e5a5] transition-colors" />
            </div>
            <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 scrollbar-hide">
              {pilgrimageTrips.map((trip) => (
                <div
                  key={trip.id}
                  className="flex-none w-72 cursor-pointer"
                  onClick={() => handleTripClick(trip.id)}
                >
                  <div className="bg-card rounded-lg overflow-hidden group">
                    <div className="relative">
                      <img
                        src={trip.image}
                        alt={trip.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{trip.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{trip.description}</p>
                      <p className="text-primary font-bold">From ${trip.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>

        {/* Vehicles Section */}
        <section className="space-y-8">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#37e5a5]">Tourist Vehicles</h1>
          </div>

          {/* Luxury Cars */}
          <section className="space-y-4">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/vehicles/luxury')}>
              <h2 className="text-xl font-semibold text-white hover:text-[#37e5a5] transition-colors">Luxury Cars</h2>
              <ArrowRight className="ml-2 text-white hover:text-[#37e5a5] transition-colors" />
            </div>
            <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 scrollbar-hide">
              {luxuryCars.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="flex-none w-72 cursor-pointer"
                  onClick={() => handleVehicleClick(vehicle.id)}
                >
                  <div className="bg-card rounded-lg overflow-hidden group">
                    <div className="relative">
                      <img
                        src={vehicle.image}
                        alt={vehicle.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{vehicle.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{vehicle.description}</p>
                      <p className="text-primary font-bold">From ${vehicle.price}/day</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SUVs */}
          <section className="space-y-4">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/vehicles/suv')}>
              <h2 className="text-xl font-semibold text-white hover:text-[#37e5a5] transition-colors">SUVs</h2>
              <ArrowRight className="ml-2 text-white hover:text-[#37e5a5] transition-colors" />
            </div>
            <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 scrollbar-hide">
              {suvs.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="flex-none w-72 cursor-pointer"
                  onClick={() => handleVehicleClick(vehicle.id)}
                >
                  <div className="bg-card rounded-lg overflow-hidden group">
                    <div className="relative">
                      <img
                        src={vehicle.image}
                        alt={vehicle.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{vehicle.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{vehicle.description}</p>
                      <p className="text-primary font-bold">From ${vehicle.price}/day</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Electric Cars */}
          <section className="space-y-4">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/vehicles/electric')}>
              <h2 className="text-xl font-semibold text-white hover:text-[#37e5a5] transition-colors">Electric Cars</h2>
              <ArrowRight className="ml-2 text-white hover:text-[#37e5a5] transition-colors" />
            </div>
            <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 scrollbar-hide">
              {electricCars.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="flex-none w-72 cursor-pointer"
                  onClick={() => handleVehicleClick(vehicle.id)}
                >
                  <div className="bg-card rounded-lg overflow-hidden group">
                    <div className="relative">
                      <img
                        src={vehicle.image}
                        alt={vehicle.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{vehicle.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{vehicle.description}</p>
                      <p className="text-primary font-bold">From ${vehicle.price}/day</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>

        {/* Camping Section */}
        <section className="space-y-8">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#37e5a5]">Strangers Camping</h1>
          </div>

          {/* Mountain Camping */}
          <section className="space-y-4">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/camping/mountain')}>
              <h2 className="text-xl font-semibold text-white hover:text-[#37e5a5] transition-colors">Mountain Camping</h2>
              <ArrowRight className="ml-2 text-white hover:text-[#37e5a5] transition-colors" />
            </div>
            <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 scrollbar-hide">
              {mountainCamping.map((group) => (
                <div
                  key={group.id}
                  className="flex-none w-72 cursor-pointer"
                  onClick={() => handleCampingClick(group.id)}
                >
                  <div className="bg-card rounded-lg overflow-hidden group">
                    <div className="relative">
                      <img
                        src={group.image}
                        alt={group.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{group.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{group.members}</p>
                      <p className="text-primary font-bold">{group.activity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Beach Camping */}
          <section className="space-y-4">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/camping/beach')}>
              <h2 className="text-xl font-semibold text-white hover:text-[#37e5a5] transition-colors">Beach Camping</h2>
              <ArrowRight className="ml-2 text-white hover:text-[#37e5a5] transition-colors" />
            </div>
            <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 scrollbar-hide">
              {beachCamping.map((group) => (
                <div
                  key={group.id}
                  className="flex-none w-72 cursor-pointer"
                  onClick={() => handleCampingClick(group.id)}
                >
                  <div className="bg-card rounded-lg overflow-hidden group">
                    <div className="relative">
                      <img
                        src={group.image}
                        alt={group.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{group.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{group.members}</p>
                      <p className="text-primary font-bold">{group.activity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Forest Camping */}
          <section className="space-y-4">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/camping/forest')}>
              <h2 className="text-xl font-semibold text-white hover:text-[#37e5a5] transition-colors">Forest Camping</h2>
              <ArrowRight className="ml-2 text-white hover:text-[#37e5a5] transition-colors" />
            </div>
            <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 scrollbar-hide">
              {forestCamping.map((group) => (
                <div
                  key={group.id}
                  className="flex-none w-72 cursor-pointer"
                  onClick={() => handleCampingClick(group.id)}
                >
                  <div className="bg-card rounded-lg overflow-hidden group">
                    <div className="relative">
                      <img
                        src={group.image}
                        alt={group.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{group.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{group.members}</p>
                      <p className="text-primary font-bold">{group.activity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}