import React, { useState } from 'react';
import axios from 'axios';
import { 
  UserCircle2, 
  X, 
  ArrowLeft, 
  Mail, 
  Phone,
  Eye,
  EyeOff
} from 'lucide-react';
import URL from '../URL';

interface FormData {
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  password: string;
}

interface FormErrors {
  email?: string;
  phoneNumber?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
}

const AgentAuthPage: React.FC = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleBack = () => {
    setShowEmailForm(false);
    setError('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!isSignIn) {
      if (!formData.phoneNumber) {
        newErrors.phoneNumber = 'Phone number is required';
      } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
        newErrors.phoneNumber = 'Phone number must be 10 digits';
      }

      if (!formData.firstName) {
        newErrors.firstName = 'First name is required';
      }

      if (!formData.lastName) {
        newErrors.lastName = 'Last name is required';
      }
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      // Show first validation error
      setError(Object.values(validationErrors)[0]);
      return;
    }

    try {
      if (isSignIn) {
        const response = await axios.post(`http://127.0.0.1:8000/api/token/`, {
          email: formData.email,
          password: formData.password,
        });

        localStorage.setItem('agentaccesstoken', response.data.access);
        localStorage.setItem('agentrefreshtoken', response.data.refresh);
        setError('');
        console.log('Login successful!');
      } else {
        await axios.post(`http://${URL}/accounts/agent/signup/`, {
          email: formData.email,
          phone: formData.phoneNumber,
          firstname: formData.firstName,
          lastname: formData.lastName,
          password: formData.password,
        });
        console.log('Registration successful!');
      }
    } catch (err) {
      setError(err.response?.data?.error || (isSignIn ? 'Login failed' : 'Registration failed'));
    }
  };

  return (
    <div className="fixed inset-0 bg-[#151515]/30 backdrop-blur-sm z-50 flex items-center justify-center md:p-4">
      <div className="relative w-full h-full md:h-[600px] md:max-w-md bg-[#1b1b1b] md:rounded-lg md:shadow-xl overflow-hidden">
        <div className="h-full overflow-y-auto px-6 md:px-8 py-6 md:py-6">
          {/* Close and Back buttons */}
          <div className="absolute right-4 top-4 flex items-center gap-4 z-10">
            {showEmailForm && (
              <button 
                onClick={handleBack}
                className="text-[#37e5a5] hover:text-[#2bc88d] flex items-center gap-1"
              >
                <ArrowLeft size={24} />
              </button>
            )}
            <button 
              className="text-[#37e5a5] hover:text-[#2bc88d]"
            >
              <X size={24} />
            </button>
          </div>

          {/* Logo */}
          <div className="mb-6 flex justify-center mt-12 md:mt-0">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <UserCircle2 className="w-full h-full text-[#37e5a5]" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            {!showEmailForm 
              ? 'Sign in to unlock the best experience.' 
              : isSignIn 
                ? 'Welcome back.' 
                : 'Join to unlock the best experience.'
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
            </div>
          ) : (
            <>
              {/* Email Form */}
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
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 text-white rounded-full focus:ring-[#37e5a5] focus:border-[#37e5a5] placeholder-gray-500"
                    placeholder="Enter email"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Password
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-700 text-white rounded-full focus:ring-[#37e5a5] focus:border-[#37e5a5] placeholder-gray-500"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-8 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {isSignIn && (
                  <div className="text-right">
                    <button type="button" className="text-sm text-[#37e5a5] hover:underline">
                      Forgot password?
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#37e5a5] text-black font-medium py-3 rounded-full hover:bg-[#2bc88d] transition-colors"
                >
                  {isSignIn ? 'Sign in' : 'Join'}
                </button>
              </form>

              {/* Divider */}
              <div className="my-4 flex items-center">
                <div className="flex-grow border-t border-gray-700"></div>
                <span className="px-4 text-sm text-gray-400">
                  {isSignIn ? 'Not a member?' : 'Already a member?'}
                </span>
                <div className="flex-grow border-t border-gray-700"></div>
              </div>

              {/* Toggle Sign in/Join */}
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
                className="w-full text-[#37e5a5] hover:underline text-center"
              >
                {isSignIn ? 'Join' : 'Sign in'} to unlock the best experience.
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentAuthPage;