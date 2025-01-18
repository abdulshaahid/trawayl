import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, MessageCircle } from 'lucide-react';

const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      category: 'Bookings',
      questions: [
        {
          q: 'How do I cancel my booking?',
          a: 'You can cancel your booking by going to My Bookings, selecting the booking you want to cancel, and clicking the Cancel button. Please note our cancellation policy and any applicable fees.'
        },
        {
          q: 'What is your refund policy?',
          a: 'Refunds are processed within 5-7 business days and depend on your booking type and how far in advance you cancel. Full details can be found in our Terms of Service.'
        }
      ]
    },
    {
      category: 'Account',
      questions: [
        {
          q: 'How do I reset my password?',
          a: 'Click on "Forgot Password" on the login screen, enter your email address, and follow the instructions sent to your email to reset your password.'
        },
        {
          q: 'How do I update my profile information?',
          a: 'Go to Account Settings, select the information you want to update, make your changes, and click Save.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black pb-20">
      <header className="mt-16 top-0 z-10 bg-black flex items-center p-4 sm:p-6 border-b border-gray-800">
        <Link to="/profile" className="mr-4">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-xl font-bold">Help Center</h1>
      </header>

      <div className="p-4 sm:p-6">
        <div className="relative mb-6">
          <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1] rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
          />
        </div>

        <button className="w-full bg-[#00FF9D] text-black font-semibold py-3 rounded-full mb-8 flex items-center justify-center gap-2">
          <MessageCircle size={20} />
          Contact Support
        </button>

        <div className="space-y-6">
          {faqs.map((category, index) => (
            <div key={index}>
              <h2 className="text-lg font-semibold mb-4">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <details
                    key={faqIndex}
                    className="bg-[#111] rounded-lg overflow-hidden group"
                  >
                    <summary className="p-4 cursor-pointer hover:bg-[#222] transition-colors">
                      {faq.q}
                    </summary>
                    <div className="p-4 pt-0 text-gray-400">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HelpCenterPage;