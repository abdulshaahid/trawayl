import React, { useState } from 'react';
import { X, Mail, Eye, EyeOff, ArrowLeft, Phone, KeyRound } from 'lucide-react';
import logo from '../assets/trpd.svg';
import axios from 'axios';
import URL from '../URL';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [error, setError] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otpValue, setOtpValue] = useState('');
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [useOtp, setUseOtp] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
  });

  if (!isOpen) return null;

  const handleBack = () => {
    if (isOtpSent) {
      setIsOtpSent(false);
      setOtpValue('');
      setError('');
    } else if (showEmailForm) {
      setShowEmailForm(false);
      setError('');
      setUseOtp(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setOtpValue(value);
    setError('');
  };

  const validateForm = () => {
    if (useOtp) {
      if (loginMethod === 'email' && (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))) {
        setError('Please enter a valid email address');
        return false;
      }
      if (loginMethod === 'phone' && (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber))) {
        setError('Please enter a valid 10-digit phone number');
        return false;
      }
    } else {
      if (!isSignIn) {
        if (!formData.firstName || !formData.lastName) {
          setError('Please enter your full name');
          return false;
        }
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
          setError('Please enter a valid email address');
          return false;
        }
        if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber)) {
          setError('Please enter a valid 10-digit phone number');
          return false;
        }
        if (!formData.password || formData.password.length < 6) {
          setError('Password must be at least 6 characters');
          return false;
        }
      } else {
        const identifier = formData.email || formData.phoneNumber;
        if (!identifier) {
          setError('Please enter your email or phone number');
          return false;
        }
        if (!formData.password || formData.password.length < 6) {
          setError('Password must be at least 6 characters');
          return false;
        }
      }
    }
    return true;
  };

  const handleSendOtp = async () => {
    if (!validateForm()) return;

    try {
      await axios.post(`${URL}/auth/send-otp`, {
        [loginMethod]: loginMethod === 'email' ? formData.email : formData.phoneNumber,
      });
      
      setIsOtpSent(true);
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to send OTP. Please try again.');
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otpValue.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    try {
      const response = await axios.post(`${URL}/auth/verify-otp`, {
        [loginMethod]: loginMethod === 'email' ? formData.email : formData.phoneNumber,
        otp: otpValue,
      });

      localStorage.setItem('useraccesstoken', response.data.access);
      localStorage.setItem('userrefreshtoken', response.data.refresh);
      onClose();
    } catch (err) {
      setError(err.response?.data?.error || 'Invalid OTP. Please try again.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      if (isSignIn) {
        const response = await axios.post(`${URL}/api/token/`, {
          email: formData.email ,
          password: formData.password,
        });

        localStorage.setItem('useraccesstoken', response.data.access);
        localStorage.setItem('userrefreshtoken', response.data.refresh);
        console.log(response.data,"ddddddddaaaaaaaaaaaaaaaaaattttttttta");
        
        alert("sucess")

        onClose();
      } else {
        await axios.post(`${URL}/accounts/signup/`, {
          email: formData.email,
          phone: formData.phoneNumber,
          firstname: formData.firstName,
          lastname: formData.lastName,
          password: formData.password
        });
        
        const loginResponse = await axios.post(`${URL}/api/token/`, {
          email: formData.email,
          password: formData.password,
        });

        localStorage.setItem('useraccesstoken', loginResponse.data.access);
        localStorage.setItem('userrefreshtoken', loginResponse.data.refresh);
        alert("sucess")
        onClose();
      }
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-[#151515]/30 backdrop-blur-sm z-50 flex items-center justify-center md:p-4">
      <div className="relative w-full h-full md:h-[600px] md:max-w-md bg-[#1b1b1b] md:rounded-lg md:shadow-xl overflow-hidden">
        <div className="h-full overflow-y-auto px-6 md:px-8 py-6 md:py-6">
          {/* Close and Back buttons */}
          <div className="absolute right-4 top-4 flex items-center gap-4 z-10">
            {(showEmailForm || isOtpSent) && (
              <button 
                onClick={handleBack}
                className="text-[#37e5a5] hover:text-[#2bc88d] flex items-center gap-1"
              >
                <ArrowLeft size={24} />
              </button>
            )}
            <button 
              onClick={onClose}
              className="text-[#37e5a5] hover:text-[#2bc88d]"
            >
              <X size={24} />
            </button>
          </div>

          {/* Logo */}
          <div className="mb-6 flex justify-center mt-12 md:mt-0">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            {!showEmailForm 
              ? 'Sign in to unlock the best experience.' 
              : isOtpSent
              ? 'Enter verification code'
              : useOtp
              ? 'Login with OTP'
              : isSignIn
              ? 'Welcome back'
              : 'Create your account'
            }
          </h2>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm text-center">
              {error}
            </div>
          )}

          {!showEmailForm ? (
            <div className="space-y-4">
              {/* Google Sign In Button */}
              <button
                className="w-full bg-[#37e5a5] py-3 px-4 rounded-full flex items-center justify-center gap-3 hover:bg-[#2bc88d] transition-colors text-black font-medium"
                onClick={() => {/* Handle Google Sign In */}}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#1b1b1b"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#1b1b1b"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#1b1b1b"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#1b1b1b"
                  />
                </svg>
                Continue with Google
              </button>

              {/* Email/Phone Option Button */}
              <button
                className="w-full bg-[#37e5a5] py-3 px-4 rounded-full flex items-center justify-center gap-3 hover:bg-[#2bc88d] transition-colors text-black font-medium"
                onClick={() => setShowEmailForm(true)}
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span className="mx-1">/</span>
                  <Phone className="w-5 h-5" />
                </div>
                Proceed with mail or phone
              </button>

              <div className="text-center text-sm text-gray-400">
                By continuing, you agree to our{' '}
                <a href="#" className="text-[#37e5a5] hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-[#37e5a5] hover:underline">
                  Privacy Policy
                </a>
              </div>
            </div>
          ) : isOtpSent ? (
            <form onSubmit={handleVerifyOtp} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Enter 6-digit code
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <KeyRound className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    value={otpValue}
                    onChange={handleOtpChange}
                    className="w-full pl-10 px-4 py-2 bg-[#2a2a2a] border border-gray-700 text-white rounded-full focus:ring-[#37e5a5] focus:border-[#37e5a5] placeholder-gray-500 tracking-widest text-center"
                    placeholder="000000"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-400 text-center">
                  We sent a code to {loginMethod === 'email' ? formData.email : formData.phoneNumber}
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#37e5a5] text-black font-medium py-3 rounded-full hover:bg-[#2bc88d] transition-colors"
              >
                Verify Code
              </button>

              <button
                type="button"
                onClick={handleSendOtp}
                className="w-full text-[#37e5a5] hover:underline text-sm"
              >
                Didn't receive code? Send again
              </button>
            </form>
          ) : useOtp ? (
            <div className="space-y-6">
              {/* Login Method Tabs */}
              <div className="flex rounded-full bg-[#2a2a2a] p-1">
                <button
                  className={`flex-1 py-2 rounded-full text-sm font-medium transition-colors ${
                    loginMethod === 'email'
                      ? 'bg-[#37e5a5] text-black'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setLoginMethod('email')}
                >
                  Email
                </button>
                <button
                  className={`flex-1 py-2 rounded-full text-sm font-medium transition-colors ${
                    loginMethod === 'phone'
                      ? 'bg-[#37e5a5] text-black'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setLoginMethod('phone')}
                >
                  Phone
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  {loginMethod === 'email' ? 'Email address' : 'Phone number'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {loginMethod === 'email' ? (
                      <Mail className="h-5 w-5 text-gray-500" />
                    ) : (
                      <Phone className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                  <input
                    type={loginMethod === 'email' ? 'email' : 'tel'}
                    name={loginMethod === 'email' ? 'email' : 'phoneNumber'}
                    value={loginMethod === 'email' ? formData.email : formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full pl-10 px-4 py-2 bg-[#2a2a2a] border border-gray-700 text-white rounded-full focus:ring-[#37e5a5] focus:border-[#37e5a5] placeholder-gray-500"
                    placeholder={loginMethod === 'email' ? 'Enter email' : 'Enter phone number'}
                  />
                </div>
              </div>

              <button
                onClick={handleSendOtp}
                className="w-full bg-[#37e5a5] text-black font-medium py-3 rounded-full hover:bg-[#2bc88d] transition-colors"
              >
                Continue
              </button>

              <div className="text-center">
                <button
                  onClick={() => {
                    setUseOtp(false);
                    setError('');
                  }}
                  className="text-[#37e5a5] hover:underline text-sm"
                >
                  Use password instead
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Traditional Sign In/Sign Up Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {!isSignIn && (
                  <>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 text-white rounded-full focus:ring-[#37e5a5] focus:border-[#37e5a5] placeholder-gray-500"
                          placeholder="Enter first name"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 text-white rounded-full focus:ring-[#37e5a5] focus:border-[#37e5a5] placeholder-gray-500"
                          placeholder="Enter last name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className="w-full pl-10 px-4 py-2 bg-[#2a2a2a] border border-gray-700 text-white rounded-full focus:ring-[#37e5a5] focus:border-[#37e5a5] placeholder-gray-500"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    {isSignIn ? 'Email or Phone number' : 'Email address'}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 px-4 py-2 bg-[#2a2a2a] border border-gray-700 text-white rounded-full focus:ring-[#37e5a5] focus:border-[#37e5a5] placeholder-gray-500"
                      placeholder={isSignIn ? "Enter email or phone number" : "Enter email"}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-4 pr-10 py-2 bg-[#2a2a2a] border border-gray-700 text-white rounded-full focus:ring-[#37e5a5] focus:border-[#37e5a5] placeholder-gray-500"
                      placeholder="Enter password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {isSignIn && (
                  <div className="flex items-center justify-between text-sm">
                    <button
                      type="button"
                      onClick={() => setUseOtp(true)}
                      className="text-[#37e5a5] hover:underline"
                    >
                      Use OTP instead
                    </button>
                    <button
                      type="button"
                      className="text-[#37e5a5] hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#37e5a5] text-black font-medium py-3 rounded-full hover:bg-[#2bc88d] transition-colors mt-6"
                >
                  {isSignIn ? 'Sign in' : 'Create account'}
                </button>

                {!isSignIn && (
                  <div className="text-center text-sm text-gray-400 mt-4">
                    By creating an account, you agree to our{' '}
                    <a href="#" className="text-[#37e5a5] hover:underline">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-[#37e5a5] hover:underline">
                      Privacy Policy
                    </a>
                  </div>
                )}
              </form>

              {/* Toggle Sign In/Sign Up */}
              <div className="mt-6 text-center">
                <p className="text-gray-400">
                  {isSignIn ? "Don't have an account?" : "Already have an account?"}
                </p>
                <button
                  onClick={() => {
                    setIsSignIn(!isSignIn);
                    setError('');
                    setFormData({
                      email: '',
                      password: '',
                      phoneNumber: '',
                      firstName: '',
                      lastName: '',
                    });
                  }}
                  className="text-[#37e5a5] hover:underline mt-1"
                >
                  {isSignIn ? 'Create account' : 'Sign in'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}