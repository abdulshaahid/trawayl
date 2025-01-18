import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar,
  Shield,
  Camera,
  Coffee,
  Hotel,
  Car,
  Mountain,
  Filter,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import AddOnCard from '../components/AddOnCard';
import TravelerSelection from '../components/booking/TravelerSelection';

const Booking = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [selectedDate, setSelectedDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [expandedSection, setExpandedSection] = useState('');
  const [filters, setFilters] = useState({
    budget: [12000, 50000],
    duration: '6',
    accommodation: '4-star',
    transport: 'ac-bus',
    mealPlan: 'all-meals',
    activities: [],
    roomType: 'double',
    travelStyle: 'comfort'
  });
  const [addOns, setAddOns] = useState({
    insurance: false,
    photography: false,
    guide: false,
    transport: false,
    meals: 'veg'
  });

  const mealPlans = [
    { value: 'all-meals', label: 'All Meals' },
    { value: 'breakfast-only', label: 'Breakfast Only' },
    { value: 'no-meals', label: 'No Meals' }
  ];

  const accommodations = [
    { value: '3-star', label: '3-Star' },
    { value: '4-star', label: '4-Star' },
    { value: '5-star', label: '5-Star' },
    { value: 'hostel', label: 'Hostel' }
  ];

  const transports = [
    { value: 'ac-bus', label: 'AC Bus' },
    { value: 'non-ac-bus', label: 'Non-AC Bus' },
    { value: 'train', label: 'Train' },
    { value: 'flight', label: 'Flight' }
  ];

  const activities = [
    { value: 'hiking', label: 'Hiking' },
    { value: 'sightseeing', label: 'Sightseeing' },
    { value: 'adventure', label: 'Adventure Sports' },
    { value: 'water-sports', label: 'Water Sports' }
  ];

  const roomTypes = [
    { value: 'single', label: 'Single Room' },
    { value: 'double', label: 'Double Room' },
    { value: 'triple', label: 'Triple Room' },
    { value: 'suite', label: 'Suite' }
  ];

  const travelStyles = [
    { value: 'budget', label: 'Budget' },
    { value: 'comfort', label: 'Comfort' },
    { value: 'luxury', label: 'Luxury' },
    { value: 'premium', label: 'Premium' }
  ];

  const calculateTotal = () => {
    let total = 12000 * adults + 8000 * children;
    if (addOns.insurance) total += 500 * (adults + children);
    if (addOns.photography) total += 1500;
    if (addOns.guide) total += 1000;
    if (addOns.transport) total += 800;
    return total;
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? '' : section);
  };

  const renderSection = (title, content, sectionKey) => {
    const isExpanded = expandedSection === sectionKey;
    return (
      <div className="border-b border-[#242424] last:border-b-0 py-4">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="w-full flex items-center justify-between text-sm font-medium"
        >
          {title}
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-[#37e5a5]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-[#37e5a5]" />
          )}
        </button>
        {isExpanded && <div className="mt-4">{content}</div>}
      </div>
    );
  };

  const handleReviewBooking = () => {
    // Redirect to the review booking page
    navigate('/reviewbooking');  // Adjust the route name as necessary
  };

  return (
    <div className="mt-12 mb-10 min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Complete Your Booking</h1>

        <div className="space-y-6">
          {/* Date Selection */}
          <div className="bg-[#171717] p-6 rounded-3xl">
            <h2 className="text-lg font-semibold mb-3">Trip Start Date</h2>
            <div className="flex items-center space-x-4">
              <Calendar className="w-5 h-5 text-[#37e5a5]" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="bg-[#242424] text-white p-3 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-[#37e5a5]"
              />
            </div>
          </div>

          {/* Travelers Selection */}
          <div className="bg-[#171717] p-6 rounded-3xl">
            <h2 className="text-lg font-semibold mb-3">Number of Travelers</h2>
            <TravelerSelection
              adults={adults}
              children={children}
              onAdultsChange={setAdults}
              onChildrenChange={setChildren}
            />
          </div>

          {/* Filters Section */}
          <div className="bg-[#171717] p-6 rounded-3xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Customize Your Trip</h2>
              <Filter className="w-5 h-5 text-[#37e5a5]" />
            </div>

            {renderSection(
              'Room Type',
              <div className="grid grid-cols-2 gap-2">
                {roomTypes.map(type => (
                  <button
                    key={type.value}
                    onClick={() => setFilters({ ...filters, roomType: type.value })}
                    className={`p-3 rounded-2xl text-sm ${
                      filters.roomType === type.value
                        ? 'bg-[#37e5a5] text-black'
                        : 'bg-[#242424]'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>,
              'roomType'
            )}

            {renderSection(
              'Travel Style',
              <div className="grid grid-cols-2 gap-2">
                {travelStyles.map(style => (
                  <button
                    key={style.value}
                    onClick={() => setFilters({ ...filters, travelStyle: style.value })}
                    className={`p-3 rounded-2xl text-sm ${
                      filters.travelStyle === style.value
                        ? 'bg-[#37e5a5] text-black'
                        : 'bg-[#242424]'
                    }`}
                  >
                    {style.label}
                  </button>
                ))}
              </div>,
              'travelStyle'
            )}

            {renderSection(
              'Accommodation',
              <div className="grid grid-cols-2 gap-2">
                {accommodations.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setFilters({ ...filters, accommodation: option.value })}
                    className={`p-3 rounded-2xl text-sm ${
                      filters.accommodation === option.value
                        ? 'bg-[#37e5a5] text-black'
                        : 'bg-[#242424]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>,
              'accommodation'
            )}

            {renderSection(
              'Transport',
              <div className="grid grid-cols-2 gap-2">
                {transports.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setFilters({ ...filters, transport: option.value })}
                    className={`p-3 rounded-2xl text-sm ${
                      filters.transport === option.value
                        ? 'bg-[#37e5a5] text-black'
                        : 'bg-[#242424]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>,
              'transport'
            )}

            {renderSection(
              'Meal Plan',
              <div className="grid grid-cols-2 gap-2">
                {mealPlans.map(plan => (
                  <button
                    key={plan.value}
                    onClick={() => setFilters({ ...filters, mealPlan: plan.value })}
                    className={`p-3 rounded-2xl text-sm ${
                      filters.mealPlan === plan.value
                        ? 'bg-[#37e5a5] text-black'
                        : 'bg-[#242424]'
                    }`}
                  >
                    {plan.label}
                  </button>
                ))}
              </div>,
              'mealPlan'
            )}

            {renderSection(
              'Activities',
              <div className="grid grid-cols-2 gap-2">
                {activities.map(activity => (
                  <button
                    key={activity.value}
                    onClick={() =>
                      setFilters({
                        ...filters,
                        activities: filters.activities.includes(activity.value)
                          ? filters.activities.filter(a => a !== activity.value)
                          : [...filters.activities, activity.value]
                      })
                    }
                    className={`p-3 rounded-2xl text-sm ${
                      filters.activities.includes(activity.value)
                        ? 'bg-[#37e5a5] text-black'
                        : 'bg-[#242424]'
                    }`}
                  >
                    {activity.label}
                  </button>
                ))}
              </div>,
              'activities'
            )}
          </div>
        </div>

        {/* Price Summary */}
        <div className="sticky bottom-16 mt-8  bg-black/80 backdrop-blur-sm rounded-3xl p-4">
          <div className="mb-4">
            <div className="flex justify-between text-gray-400">
              <span>Adults ({adults})</span>
              <span>₹{12000 * adults}</span>
            </div>
            {children > 0 && (
              <div className="flex justify-between text-gray-400">
                <span>Children ({children})</span>
                <span>₹{8000 * children}</span>
              </div>
            )}
            {/* Add-ons */}
            {addOns.insurance && (
              <div className="flex justify-between text-gray-400">
                <span>Travel Insurance</span>
                <span>₹{500 * (adults + children)}</span>
              </div>
            )}
            {addOns.photography && (
              <div className="flex justify-between text-gray-400">
                <span>Photography</span>
                <span>₹1500</span>
              </div>
            )}
            {addOns.guide && (
              <div className="flex justify-between text-gray-400">
                <span>Guide</span>
                <span>₹1000</span>
              </div>
            )}
            {addOns.transport && (
              <div className="flex justify-between text-gray-400">
                <span>Transport Upgrade</span>
                <span>₹800</span>
              </div>
            )}
            <div className="flex justify-between font-bold mt-2">
              <span>Total</span>
              <span>₹{calculateTotal()}</span>
            </div>
          </div>
          <button
      onClick={handleReviewBooking}
      className="w-full bg-[#37e5a5] text-black font-bold py-4 rounded-full hover:bg-[#2bc88d] transition-colors"
    >
      Review Booking
    </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;