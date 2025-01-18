import React, { useState, useEffect } from 'react';
import { Package, Car, Calendar, Map } from 'lucide-react';
import { CategoryCard } from '../components/home/CategoryCard';
import Footer from '../components/layout/Footer';
import LoginModal from '../components/LoginModal';
import { useNavigate } from 'react-router-dom';


const bannerImages = [
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?q=80&w=2074&auto=format&fit=crop',
];

const trendingPackages = [
  {
    id: 1,
    title: 'Bali Beach Paradise',
    image: 'https://images.unsplash.com/photo-1520069853334-85e555651e6f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '7 days, 6 nights',
    price: 999
  },
  {
    id: 2,
    title: 'Tokyo City Explorer',
    image: 'https://images.unsplash.com/photo-1500180675541-ed5e861c7b98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '5 days, 4 nights',
    price: 1299
  },
  {
    id: 3,
    title: 'Swiss Alps Adventure',
    image: 'https://images.unsplash.com/photo-1500180675541-ed5e861c7b98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '6 days, 5 nights',
    price: 1499
  },
  {
    id: 4,
    title: 'Santorini Getaway',
    image: 'https://plus.unsplash.com/premium_photo-1679619558250-41fa96ef187c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '4 days, 3 nights',
    price: 899
  }
];

const availableVehicles = [
  {
    id: 1,
    title: 'Mercedes-Benz S-Class',
    image: 'https://images.unsplash.com/photo-1706736231665-6f6366568bd0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    seats: '4 seats • Luxury',
    price: 199
  },
  {
    id: 2,
    title: 'Range Rover Sport',
    image: 'https://images.unsplash.com/photo-1675668576261-a6c8a627a83f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    seats: '5 seats • SUV',
    price: 149
  },
  
  {
    id: 3,
    title: 'BMW 7 Series',
    image: 'https://images.unsplash.com/photo-1724015652841-420c58376d97?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    seats: '4 seats • Premium',
    price: 179
  },
  {
    id: 4,
    title: 'Tesla Model X',
    image: 'https://images.unsplash.com/photo-1712249239414-88a434f15b94?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    seats: '6 seats • Electric',
    price: 169
  }
];

const strangersMeet = [
  {
    id: 1,
    title: 'Mountain Hiking Group',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop',
    members: '12 members',
    activity: 'Hiking'
  },
  {
    id: 2,
    title: 'Beach Volleyball Squad',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop',
    members: '8 members',
    activity: 'Sports'
  },
  {
    id: 3,
    title: 'Photography Enthusiasts',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop',
    members: '15 members',
    activity: 'Photography'
  },
  {
    id: 4,
    title: 'Food Tour Group',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    members: '10 members',
    activity: 'Food & Drinks'
  }
];

export function Home() {
  const navigate = useNavigate();
  const [currentBanner, setCurrentBanner] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePackageClick = (pkgId: number) => {
    navigate(`/package-itinerary/${pkgId}`);
  };

  const handleVehicleClick = (vehicleId: number) => {
    navigate(`/vehiclebooking/${vehicleId}`);
  };

  const handleSoloClick = (groupId: number) => {
    navigate(`/solotravel/${groupId}`);
  };

  return (
    <div className="min-h-screen bg-background text-white">
      

      {/* Main Content */}
      <div className="mt-12 pt-10 pb-24">

      
      <div className="mb-6 ml-5 flex items-center justify-between pr-6 space-x-4">
  <h1 className="text-xl font-semibold">Welcome to Trawayl</h1>

</div>



{/* Banner */}
<div className="relative mb-8 mx-4">
  <div className="relative w-full aspect-[16/9] sm:aspect-[16/7] md:aspect-[16/6] lg:aspect-[16/5] overflow-hidden rounded-lg">
    {bannerImages.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Banner ${index + 1}`}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          index === currentBanner ? 'opacity-100' : 'opacity-0'
        }`}
      />
    ))}
    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
  </div>
</div>



        <div className="container mx-auto px-4 space-y-8">
          {/* Categories */}

          <div className="grid grid-cols-2 gap-4">
          <CategoryCard icon={Package} title="Packages" href="/packages" />
          <CategoryCard icon={Car} title="Tourist Vehicles" href="/vehicles" />
          <CategoryCard icon={Calendar} title="Bookings" href="/bookings" />
          <CategoryCard icon={Map} title="Plan a Trip" href="/plan" />
        </div>

          {/* Trending Packages */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Trending Packages</h2>
            <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 scrollbar-hide">
              {trendingPackages.map((pkg) => (
                <div key={pkg.id} className="flex-none w-72" onClick={() => handlePackageClick(pkg.id)}>
                  <div className="bg-card rounded-lg overflow-hidden group">
                    <div className="relative">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{pkg.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{pkg.duration}</p>
                      <p className="text-primary font-bold">${pkg.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Available Vehicles */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Available Vehicles</h2>
            <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 scrollbar-hide">
              {availableVehicles.map((vehicle) => (
                <div key={vehicle.id} className="flex-none w-72" onClick={() => handleVehicleClick(vehicle.id)}>
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
                      <p className="text-gray-400 text-sm mb-2">{vehicle.seats}</p>
                      <p className="text-primary font-bold">${vehicle.price}/day</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Strangers Meet */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Strangers Meet</h2>
            <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 scrollbar-hide">
              {strangersMeet.map((group) => (
                <div key={group.id} className="flex-none w-72" onClick={() => handleSoloClick(group.id)}>
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
        </div>
      </div>

      <Footer />
    </div>
  );
}