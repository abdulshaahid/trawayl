import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';
import PackageHeader from '../components/package/PackageHeader';
import PackageFeatures from '../components/features/PackageFeatures';
import ImageCarousel from '../components/ImageCarousel';
import Timeline from '../components/timeline/Timeline';
import ReviewCard from '../components/Reviews/ReviewCard';
import FAQItem from '../components/FAQ/FAQItem';
import ProviderCard from '../components/Provider/ProviderCard';
import CustomizePackage from '../components/Customization/CustomizePackage';
import axios from 'axios';
import SERVERURL  from '../URL';

const PackageItinerary = () => {
  const { pkgId } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState(1);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [images, setImages] = useState([]);
  const [packageData, setPackageData] = useState({
    name: '',
    description: '',
    highlights: [],
    media: []
  });

  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        const response = await axios.get(`${SERVERURL}/api/get/package/${pkgId}/`);
        const data = response.data;
        setPackageData(data);

        if (Array.isArray(data.media)) {
          const newImageUrls = data.media.map((item) => `${SERVERURL}${item.media_url}`);
          setImages(newImageUrls);
        }
      } catch (error) {
        console.error("Error fetching package data:", error);
        // Consider adding error handling UI here
      }
    };

    if (pkgId) {
      fetchPackageData();
    }
  }, [pkgId]);
console.log(packageData.price_per_person)
  const reviews = [
    {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      rating: 5,
      review: 'Amazing experience! The resort was beautiful and the activities were well planned.',
      date: 'March 2024'
    },
    {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      rating: 4,
      review: 'Great trip overall. The paragliding was the highlight of our journey.',
      date: 'February 2024'
    },
    {
      name: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      rating: 5,
      review: 'Perfect organization and amazing local guides. Highly recommended!',
      date: 'January 2024'
    }
  ];

  const faqs = [
    {
      question: 'What is included in the package?',
      answer: 'The package includes luxury accommodation, all meals, AC transportation, guided tours, adventure activities, and airport transfers. Additional activities can be added for an extra charge.'
    },
    {
      question: 'What is the cancellation policy?',
      answer: 'Free cancellation up to 7 days before the trip. 50% refund for cancellations between 3-7 days. No refund for cancellations within 3 days.'
    },
    {
      question: 'Is travel insurance included?',
      answer: 'Basic travel insurance is included in the package. Additional coverage can be purchased during booking.'
    },
    {
      question: 'What about altitude sickness?',
      answer: 'Our guides are trained to handle altitude-related issues. We also include acclimatization time in the itinerary.'
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
        <PackageHeader 
          title={packageData.name}
          provider="Wanderlust Travels"
          description={packageData.description}
          tags={packageData.highlights?.map(h => h.highlight) || []}
          price={String(packageData.price_per_person)}
        />

        <PackageFeatures />

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-white">Detailed Itinerary</h2>
          <Timeline selectedDay={selectedDay} onDaySelect={setSelectedDay} />
        </div>

        <CustomizePackage />

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-white">Traveler Reviews</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>

        <ProviderCard
          name="Wanderlust Travels"
          logo="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
          phone="+91 98765 43210"
          email="contact@wanderlust.com"
          tripsCount={500}
          experience={10}
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
          onClick={() => window.open('mailto:support@wanderlust.com')}
          className="w-full bg-[#171717] text-white font-semibold py-6 rounded-full flex items-center justify-center space-x-2"
        >
          <HelpCircle className="w-5 h-5" />
          <span>Need help? Contact us</span>
        </button>

        <div className="sticky bottom-20">
          <button
            onClick={() => navigate('/booking')}
            className="w-full bg-[#37e5a5] text-black font-bold py-4 rounded-full hover:bg-[#2bc88d] transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageItinerary;