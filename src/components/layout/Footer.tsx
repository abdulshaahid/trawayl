import React, { useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaApple,
  FaGooglePlay,
} from 'react-icons/fa';
import { Send, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const [email, setEmail] = useState('');

  // Newsletter submission handler
  const handleNewsletterSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setEmail('');
    // Add email subscription logic here
  };

  // Quick links data
  const quickLinksData = {
    'Company': ['About Us', 'Careers', 'Press'],
    'Support': ['Help Center', 'Contact Us', 'Terms & Privacy'],
    'Explore': ['Trending Packages', 'Popular Destinations', 'Forums'],
  };

  // Social media links
  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="mb-20 bg-[#111111] text-white">
      {/* Top Section: Newsletter and Social Links */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Newsletter Section */}
          <div className="w-full md:w-2/3">
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 items-center"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full sm:w-auto flex-1 px-4 py-2 bg-[#000000] text-white rounded-full placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#37e5a5]"
              />
              <button
                type="submit"
                className="bg-[#37e5a5] px-6 py-2 rounded-full text-black font-semibold hover:bg-[#2ec29a] transition-colors flex items-center gap-2"
              >
                <span>Subscribe</span>
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-[#37e5a5] hover:text-white transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Section: Quick Links and App Downloads */}
      <div className="bg-[#000000] py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div className="md:col-span-2 grid grid-cols-2 gap-6">
            {Object.entries(quickLinksData).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-[#37e5a5] font-semibold mb-4">{title}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* App Downloads */}
          <div>
            <h3 className="text-[#37e5a5] font-semibold mb-4">Get the App</h3>
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="flex items-center gap-2 bg-[#111111] px-4 py-3 rounded-full border border-gray-700 hover:border-[#37e5a5] transition-colors"
              >
                <FaApple size={24} className="text-[#37e5a5]" />
                <div>
                  <p className="text-sm">Download on the</p>
                  <p className="font-bold">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-[#111111] px-4 py-3 rounded-full border border-gray-700 hover:border-[#37e5a5] transition-colors"
              >
                <FaGooglePlay size={24} className="text-[#37e5a5]" />
                <div>
                  <p className="text-sm">Get it on</p>
                  <p className="font-bold">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#000000] py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 Trawayl. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-[#37e5a5] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#37e5a5] transition-colors">Terms of Use</a>
            <div className="flex items-center gap-2">
              <Globe size={16} />
              <select className="bg-transparent text-gray-400 focus:outline-none hover:text-[#37e5a5]">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
