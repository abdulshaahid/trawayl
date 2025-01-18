import React, { useState } from 'react';
import { MapPin, Phone } from 'lucide-react';
import type { BasicDetails } from '../../types';

interface BasicDetailsFormProps {
  onSubmit: (data: BasicDetails) => void;
}

export function BasicDetailsForm({ onSubmit }: BasicDetailsFormProps) {
  const [formData, setFormData] = useState<BasicDetails>({
    companyName: '',
    ownerName: '',
    phone: '',
    address: '',
    location: { lat: 0, lng: 0 },
  });
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [countdown, setCountdown] = useState(30);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendOtp = () => {
    setOtpSent(true);
    // Start countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate OTP here
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-[#171717] p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <div className="space-y-4">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-300">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-full bg-[#111111] border border-[#151515] px-4 py-3 text-white placeholder-gray-400 focus:border-[#37e5a5] focus:ring-[#37e5a5] focus:ring-1 transition-colors"
            placeholder="Enter your company name"
          />
        </div>

        <div>
          <label htmlFor="ownerName" className="block text-sm font-medium text-gray-300">
            Owner Name
          </label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-full bg-[#111111] border border-[#151515] px-4 py-3 text-white placeholder-gray-400 focus:border-[#37e5a5] focus:ring-[#37e5a5] focus:ring-1 transition-colors"
            placeholder="Enter owner's name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
            Phone Number
          </label>
          <div className="mt-1 relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              pattern="[0-9]{10}"
              className="block w-full rounded-full bg-[#111111] border border-[#151515] pl-12 py-3 text-white placeholder-gray-400 focus:border-[#37e5a5] focus:ring-[#37e5a5] focus:ring-1 transition-colors"
              placeholder="Enter 10-digit phone number"
            />
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-300">
            Address
          </label>
          <div className="mt-1 relative">
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="block w-full rounded-full bg-[#111111] border border-[#151515] pl-12 py-3 text-white placeholder-gray-400 focus:border-[#37e5a5] focus:ring-[#37e5a5] focus:ring-1 transition-colors"
              placeholder="Enter your address"
            />
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Map placeholder - Google Maps integration would go here */}
        <div className="h-48 bg-[#111111] border border-[#151515] rounded-lg flex items-center justify-center">
          <p className="text-gray-400">Map Integration Coming Soon</p>
        </div>
      </div>

      {!otpSent ? (
        <button
          type="button"
          onClick={handleSendOtp}
          className="w-full flex items-center justify-center px-8 py-4 bg-[#37e5a5] text-black font-semibold rounded-full hover:bg-[#37e5a5]/90 transition-colors"
        >
          Send OTP
        </button>
      ) : (
        <div className="space-y-4">
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-300">
              Enter OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
              className="mt-1 block w-full rounded-full bg-[#111111] border border-[#151515] px-4 py-3 text-white placeholder-gray-400 focus:border-[#37e5a5] focus:ring-[#37e5a5] focus:ring-1 transition-colors"
              placeholder="Enter 6-digit OTP"
            />
          </div>

          {countdown > 0 ? (
            <p className="text-sm text-gray-400">
              Resend OTP in {countdown}s
            </p>
          ) : (
            <button
              type="button"
              onClick={handleSendOtp}
              className="text-[#37e5a5] text-sm hover:underline"
            >
              Resend OTP
            </button>
          )}

          <button
            type="submit"
            className="w-full flex items-center justify-center px-8 py-4 bg-[#37e5a5] text-black font-semibold rounded-full hover:bg-[#37e5a5]/90 transition-colors"
          >
            Verify & Continue
          </button>
        </div>
      )}
    </form>
  );
}
