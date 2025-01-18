import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Calendar, Users, MapPin, HelpCircle } from 'lucide-react';
import VehicleHeader from '../components/vehicle/VehicleHeader';
import VehicleFeatures from '../components/vehicle/VehicleFeatures';
import ImageCarousel from '../components/ImageCarousel';
import VehicleOptions from '../components/vehicle/VehicleOptions';
import ReviewCard from '../components/Reviews/ReviewCard';
import FAQItem from '../components/FAQ/FAQItem';
import ProviderCard from '../components/Provider/ProviderCard';

const VehicleBooking = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const navigate = useNavigate();

  const images = [
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80',
  ];

  const reviews = [
    {
      name: 'David Miller',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      rating: 5,
      review: 'Perfect vehicle for our family trip. Driver was very professional.',
      date: 'March 2024'
    },
    {
      name: 'Lisa Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      rating: 4,
      review: 'Clean and comfortable vehicle. Great service overall.',
      date: 'February 2024'
    }
  ];

  const faqs = [
    {
      question: 'What types of vehicles are available?',
      answer: 'We offer a range of vehicles including SUVs, luxury sedans, and minivans. All vehicles are well-maintained and fully air-conditioned.'
    },
    {
      question: 'Is fuel cost included?',
      answer: 'Yes, fuel costs are included in the package price for the specified kilometers. Additional kilometers will be charged extra.'
    },
    {
      question: 'What about driver accommodation?',
      answer: 'Driver accommodation and meals are included in multi-day bookings.'
    }
  ];

  return (
    <div className="min-h-screen mb-12 bg-black">
      <ImageCarousel
        images={images}
        currentIndex={currentImageIndex}
        onIndexChange={setCurrentImageIndex}
      />

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-8">
        <VehicleHeader 
          title="Premium SUV - Toyota Fortuner"
          provider="Royal Rides"
          description="Experience comfort and luxury with our premium SUV rental service. Perfect for family trips and group tours."
          tags={['AC', '7 Seater', 'GPS', 'Driver']}
          price={4500}
        />

        <VehicleFeatures />
        
        <VehicleOptions />

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-white">Customer Reviews</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>

        <ProviderCard
          name="Royal Rides"
          logo="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80"
          phone="+91 98765 43210"
          email="bookings@royalrides.com"
          tripsCount={1000}
          experience={8}
          rating={4.9}
        />

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
          <div className="bg-[#171717] rounded-3xl p-6">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                {...faq}
                isOpen={openFAQ === index}
                onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>

        <button
          onClick={() => window.open('mailto:support@royalrides.com')}
          className="w-full bg-[#171717] text-white font-semibold py-6 rounded-full flex items-center justify-center space-x-2"
        >
          <HelpCircle className="w-5 h-5" />
          <span>Need help? Contact us</span>
        </button>

        <div className="sticky bottom-20">
          <button
            onClick={() => navigate('/vehicle-booking')}
            className="w-full bg-[#37e5a5] text-black font-bold py-4 rounded-full hover:bg-[#2bc88d] transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleBooking;