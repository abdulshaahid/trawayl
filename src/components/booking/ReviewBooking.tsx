import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Calendar,
  Users,
  Hotel,
  Car,
  Utensils,
  Mountain,
  User,
  Phone,
  Mail,
  Percent,
  DollarSign,
} from 'lucide-react';

const ReviewBooking = () => {
  const navigate = useNavigate();

  // Mock booking data for testing
  const bookingDetails = {
    selectedDate: '2025-02-15',
    adults: 2,
    children: 1,
    filters: {
      accommodation: 'Hotel XYZ',
      roomType: 'Deluxe Room',
      transport: 'Private Car',
      mealPlan: 'All Inclusive',
      activities: ['Sightseeing', 'Hiking'],
    },
    totalAmount: 34000,
  };

  // Mock account data
  const accountInfo = {
    fullName: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    phone: '9876543210',
    address: '123 Street, City, State',
    emergencyContact: '9876543211',
  };

  const [contactDetails, setContactDetails] = useState({
    fullName: '',
    age: '',
    email: '',
    phone: '',
    address: '',
    emergencyContact: '',
    specialRequests: '',
  });

  const [promocode, setPromocode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [isEditable, setIsEditable] = useState(false);

  const advancePercentage = 30; // Advance amount percentage
  const advanceAmount = Math.ceil(
    (bookingDetails.totalAmount - discount) * (advancePercentage / 100)
  );

  useEffect(() => {
    // Fetch contact details from account info
    setContactDetails(accountInfo);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApplyPromocode = () => {
    // Mock promocode validation
    if (promocode === 'DISCOUNT10') {
      setDiscount(bookingDetails.totalAmount * 0.1); // 10% discount
      alert('Promocode applied! You received 10% off.');
    } else {
      setDiscount(0);
      alert('Invalid Promocode');
    }
  };

  const handleProceedToPayment = () => {
    if (!contactDetails.fullName || !contactDetails.email || !contactDetails.phone) {
      alert('Please fill in all required contact details');
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactDetails.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Validate phone number
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(contactDetails.phone.replace(/[^0-9]/g, ''))) {
      alert('Please enter a valid phone number');
      return;
    }

    navigate('/payment', {
      state: {
        ...bookingDetails,
        contactDetails,
        discount,
        advanceAmount,
      },
    });
  };

  return (
    <div className="mt-16 mb-16 min-h-screen bg-black text-white py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Review Your Booking</h1>

        {/* Trip Details */}
        <div className="bg-[#131313] rounded-3xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Trip Details</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-[#37e5a5]" />
              <span>Start Date: {new Date(bookingDetails.selectedDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-[#37e5a5]" />
              <span>{bookingDetails.adults} Adults, {bookingDetails.children} Children</span>
            </div>
            <div className="flex items-center space-x-3">
              <Hotel className="w-5 h-5 text-[#37e5a5]" />
              <span>{bookingDetails.filters.accommodation} - {bookingDetails.filters.roomType}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Car className="w-5 h-5 text-[#37e5a5]" />
              <span>Transport: {bookingDetails.filters.transport}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Utensils className="w-5 h-5 text-[#37e5a5]" />
              <span>Meal Plan: {bookingDetails.filters.mealPlan}</span>
            </div>
            {bookingDetails.filters.activities.length > 0 && (
              <div className="flex items-center space-x-3">
                <Mountain className="w-5 h-5 text-[#37e5a5]" />
                <span>Activities: {bookingDetails.filters.activities.join(', ')}</span>
              </div>
            )}
          </div>
        </div>

        {/* Contact Details */}
        <div className="bg-[#131313] rounded-3xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center justify-between">
            Contact Details
            <button
              onClick={() => setIsEditable((prev) => !prev)}
              className="bg-[#37e5a5] text-black py-1 px-4 rounded-full text-sm font-medium hover:bg-[#2dbd91] transition duration-200"
            >
              {isEditable ? 'Save' : 'Edit'}
            </button>
          </h2>
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">Full Name *</label>
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-[#37e5a5]" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={contactDetails.fullName}
                  onChange={handleInputChange}
                  className="bg-[#1b1b1b] p-3 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-[#37e5a5]"
                  disabled={!isEditable}
                />
              </div>
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">Email *</label>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#37e5a5]" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={contactDetails.email}
                  onChange={handleInputChange}
                  className="bg-[#1b1b1b] p-3 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-[#37e5a5]"
                  disabled={!isEditable}
                />
              </div>
            </div>
            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">Phone *</label>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#37e5a5]" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={contactDetails.phone}
                  onChange={handleInputChange}
                  className="bg-[#1b1b1b] p-3 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-[#37e5a5]"
                  disabled={!isEditable}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Promocode and Pricing */}
        <div className="bg-[#131313] rounded-3xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Pricing</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Promocode</label>
              <div className="flex items-center space-x-3">
                <Percent className="w-5 h-5 text-[#37e5a5]" />
                <input
                  type="text"
                  placeholder="Enter promocode"
                  value={promocode}
                  onChange={(e) => setPromocode(e.target.value)}
                  className="bg-[#1b1b1b] p-3 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-[#37e5a5]"
                />
                <button
                  onClick={handleApplyPromocode}
                  className="bg-[#37e5a5] text-black py-1 px-4 rounded-full text-sm font-medium hover:bg-[#2dbd91] transition duration-200"
                >
                  Apply
                </button>
              </div>
            </div>
            {/* Pricing Breakdown */}
            <div className="text-sm text-gray-400">
              <div className="flex justify-between">
                <span>Total Amount:</span>
                <span>₹{bookingDetails.totalAmount}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount:</span>
                <span>- ₹{discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-white">
                <span>Payable Amount:</span>
                <span>₹{(bookingDetails.totalAmount - discount).toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-[#37e5a5]">
                <span>Advance Amount (30%):</span>
                <span>₹{advanceAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Proceed Button */}
        <div className="text-center">
          <button
            onClick={handleProceedToPayment}
            className="bg-[#37e5a5] text-black py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#2dbd91] transition duration-200"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewBooking;
