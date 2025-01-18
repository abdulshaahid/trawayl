import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Backpack, Users, Map, HelpCircle } from 'lucide-react';
import SoloHeader from '../components/solo/SoloHeader';
import SoloFeatures from '../components/solo/SoloFeatures';
import ImageCarousel from '../components/ImageCarousel';
import Timeline from '../components/timeline/Timeline';
import ReviewCard from '../components/Reviews/ReviewCard';
import FAQItem from '../components/FAQ/FAQItem';
import ProviderCard from '../components/Provider/ProviderCard';
import SoloCustomize from '../components/solo/SoloCustomize';

const SoloTravel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState(1);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const navigate = useNavigate();

  const images = [
    'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&q=80',
  ];

  const reviews = [
    {
      name: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      rating: 5,
      review: 'Amazing solo trip experience! Met great people and felt safe throughout.',
      date: 'March 2024'
    },
    {
      name: 'Sarah Williams',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      rating: 5,
      review: 'Perfect for solo travelers. The hostels were great and activities well planned.',
      date: 'February 2024'
    }
  ];

  const faqs = [
    {
      question: 'Is it safe for solo travelers?',
      answer: 'Yes, we prioritize safety with verified accommodations, 24/7 support, and group activities with other solo travelers.'
    },
    {
      question: 'Can I join other travelers?',
      answer: 'Absolutely! We organize group activities and social events where you can meet other solo travelers.'
    },
    {
      question: 'What about accommodation?',
      answer: 'We offer both private rooms and social hostels, all carefully selected for safety and comfort.'
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
      <SoloHeader 
  title="Backpacker's Paradise - Himachal"
  provider="Solo Wanderers"
  description="Perfect for solo travelers! Experience the beauty of Himachal with like-minded travelers. Includes social stays and group activities."
  tags={['Solo-friendly', 'Social', 'Adventure', 'Flexible']}
  price={15000}
/>


        <SoloFeatures />

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-white">Trip Timeline</h2>
          <Timeline selectedDay={selectedDay} onDaySelect={setSelectedDay} />
        </div>

        <SoloCustomize />

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-white">Traveler Reviews</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>

        <ProviderCard
          name="Solo Wanderers"
          logo="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80"
          phone="+91 98765 43210"
          email="hello@solowanderers.com"
          tripsCount={200}
          experience={5}
          rating={4.8}
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
          onClick={() => window.open('mailto:support@solowanderers.com')}
          className="w-full bg-[#171717] text-white font-semibold py-6 rounded-full flex items-center justify-center space-x-2"
        >
          <HelpCircle className="w-5 h-5" />
          <span>Need help? Contact us</span>
        </button>

        <div className="sticky bottom-20">
          <button
            onClick={() => navigate('/solo-booking')}
            className="w-full bg-[#37e5a5] text-black font-bold py-4 rounded-full hover:bg-[#2bc88d] transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoloTravel;