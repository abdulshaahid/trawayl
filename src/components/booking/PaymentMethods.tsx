import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  CreditCard, 
  Wallet, 
  Building2 as Bank,
  QrCode,
  Shield,
  CheckCircle,
  AlertCircle,
  Smartphone,
  Gift,
  Clock,
  DollarSign
} from 'lucide-react';

const PaymentMethods = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const bookingDetails = location.state;

  if (!bookingDetails) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-[#37e5a5] mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">No Booking Details Found</h2>
          <p className="text-gray-400 mb-4">Please start your booking from the beginning</p>
          <button
            onClick={() => navigate('/')}
            className="bg-[#37e5a5] text-black font-bold px-6 py-3 rounded-full"
          >
            Start New Booking
          </button>
        </div>
      </div>
    );
  }

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCard,
      description: 'Pay securely with your card',
      subtext: 'Visa, Mastercard, RuPay'
    },
    {
      id: 'upi',
      name: 'UPI',
      icon: Smartphone,
      description: 'Pay using any UPI app',
      subtext: 'Google Pay, PhonePe, Paytm'
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      icon: Bank,
      description: 'Pay using your bank account',
      subtext: 'All major banks supported'
    },
    {
      id: 'wallet',
      name: 'Digital Wallet',
      icon: Wallet,
      description: 'Pay using digital wallets',
      subtext: 'Paytm, PhonePe, Amazon Pay'
    },
    {
      id: 'emi',
      name: 'EMI',
      icon: Clock,
      description: 'Pay in easy installments',
      subtext: '3, 6, 12 months available'
    },
    {
      id: 'giftcard',
      name: 'Gift Card',
      icon: Gift,
      description: 'Redeem your gift card',
      subtext: 'Enter gift card code'
    }
  ];

  const handlePayment = () => {
    if (!selectedMethod) {
      alert('Please select a payment method');
      return;
    }
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('Payment successful! Your booking is confirmed.');
      navigate('/');
    }, 2000);
  };

  return (
    <div className="mt-16 mb-16 min-h-screen bg-black text-white py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Select Payment Method</h1>

        <div className="bg-[#131313] rounded-3xl p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <span className="text-lg">Amount to Pay</span>
            <span className="text-2xl font-bold text-[#37e5a5]">₹{bookingDetails.totalAmount}</span>
          </div>

          <div className="space-y-4">
            {paymentMethods.map(method => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`w-full p-4 rounded-2xl flex items-center space-x-4 transition-colors ${
                  selectedMethod === method.id
                    ? 'bg-[#37e5a5] text-black'
                    : 'bg-[#1b1b1b] hover:bg-[#2d2d2d]'
                }`}
              >
                <method.icon className={`w-6 h-6 ${
                  selectedMethod === method.id ? 'text-black' : 'text-[#37e5a5]'
                }`} />
                <div className="flex-1 text-left">
                  <div className="font-medium">{method.name}</div>
                  <div className={`text-sm ${
                    selectedMethod === method.id ? 'text-black/70' : 'text-gray-400'
                  }`}>
                    {method.description}
                  </div>
                  <div className={`text-xs mt-1 ${
                    selectedMethod === method.id ? 'text-black/60' : 'text-gray-500'
                  }`}>
                    {method.subtext}
                  </div>
                </div>
                {selectedMethod === method.id && (
                  <CheckCircle className="w-6 h-6 text-black" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-[#171717] rounded-3xl p-4 mb-8 flex items-center space-x-3">
          <Shield className="w-6 h-6 text-[#37e5a5]" />
          <p className="text-sm text-gray-400">
            Your payment is secured with industry-standard encryption
          </p>
        </div>

        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className={`w-full bg-[#37e5a5] text-black font-bold py-4 rounded-full transition-colors ${
            isProcessing ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#2bc88d]'
          }`}
        >
          {isProcessing ? (
            <span className="flex items-center justify-center">
              <DollarSign className="w-5 h-5 animate-spin mr-2" />
              Processing Payment...
            </span>
          ) : (
            `Pay ₹${bookingDetails.totalAmount}`
          )}
        </button>
      </div>
    </div>
  );
};

export default PaymentMethods;