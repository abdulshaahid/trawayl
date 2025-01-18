import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Globe2, Shield, Users, BarChart3, Package, Headphones, Sparkles, CheckCircle2 } from 'lucide-react';
import { Timeline } from '../reg_components/Timeline';
import { PartnerTypeModal } from '../reg_components/PartnerTypeModal';
import { RegistrationForm } from '../reg_components/forms/RegistrationForm';
import { Accordion } from '../reg_components/Accordion';
import { motion, AnimatePresence } from 'framer-motion';
import type { PartnerType } from '../types';

export default function RegMain() {
  const [showModal, setShowModal] = useState(false);
  const [partnerType, setPartnerType] = useState<PartnerType | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const steps = [
    { title: 'Basic Details' },
    { title: 'Profile' },
    { title: 'Details' },
    { title: 'KYC' },
    { title: 'Contract' },
  ];

  const benefits = [
    {
      title: 'Global Reach',
      description: 'Connect with travelers from around the world seeking authentic experiences.',
      icon: Globe2,
    },
    {
      title: 'Secure Platform',
      description: 'State-of-the-art security measures to protect your business and payments.',
      icon: Shield,
    },
    {
      title: 'Community Growth',
      description: 'Join a thriving community of travel professionals and expand your network.',
      icon: Users,
    },
    {
      title: 'Smart Analytics',
      description: 'Make data-driven decisions with our comprehensive analytics dashboard.',
      icon: BarChart3,
    },
    {
      title: 'Custom Packages',
      description: 'Create unique travel experiences tailored to your expertise.',
      icon: Package,
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance to ensure smooth operations.',
      icon: Headphones,
    },
  ];

  const handlePartnerSelect = (type: PartnerType) => {
    setPartnerType(type);
    setShowModal(false);
    setCurrentStep(0);
  };

  const handleBackClick = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleRegistrationComplete = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setPartnerType(null);
      setCurrentStep(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-black py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <img src="/logo.png" alt="Trawayl" className="w-32 h-auto" />
          <h1 className="text-white text-lg font-bold">Trawayl</h1>
        </div>
      </header>
      
      {/* Hero Section */}
      <div 
        className="relative h-screen sm:h-[80vh] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1682686580391-615b1e32be1f?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-[#37e5a5]" />
            <span className="text-[#37e5a5] font-semibold">Partner Program</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#37e5a5] to-[#37e5a5]/70">
            Elevate Your Travel Business
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Transform your passion for travel into a thriving business. Join our network of elite travel partners.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
            className="flex items-center justify-center gap-2 bg-[#37e5a5] hover:bg-[#37e5a5]/90
              text-black font-semibold px-8 py-4 rounded-xl w-full sm:w-auto max-w-xs 
              shadow-lg shadow-[#37e5a5]/20 hover:shadow-[#37e5a5]/30 transition-all"
          >
            Register now
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Trawayl?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join a platform that empowers travel professionals with cutting-edge tools and global reach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 
                border border-zinc-800 hover:border-[#37e5a5] transition-all duration-300
                group hover:shadow-lg hover:shadow-[#37e5a5]/5"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-[#37e5a5]/10 text-[#37e5a5] group-hover:bg-[#37e5a5]/20 transition-colors">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </div>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="rounded-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-zinc-900/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Common Questions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about becoming a Trawayl partner.
          </p>
        </motion.div>
        <Accordion 
          items={[
            { 
              question: "How do I get started?",
              answer: "Click the 'Begin Your Journey' button and follow our streamlined onboarding process. We will guide you through each step."
            },
            { 
              question: "What types of experiences can I offer?",
              answer: "From guided tours to adventure packages, cultural experiences to luxury retreats - if it is unique and memorable, it has a place on Trawayl."
            },
            { 
              question: "How are payments handled?",
              answer: "We use industry-leading payment processing with instant notifications and detailed transaction tracking. Payments are secured and transferred directly to your account."
            },
            { 
              question: "Can I manage multiple locations?",
              answer: "Yes! Our platform supports multi-location management with dedicated tools for each destination."
            },
          ]}
        />
      </div>

      {/* Modals and Forms */}
      {showModal && (
        <PartnerTypeModal
          onSelect={handlePartnerSelect}
          onClose={() => setShowModal(false)}
        />
      )}

      <AnimatePresence>
        {partnerType && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1c1c1c] z-50 overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto px-4 py-8">
              {currentStep > 0 && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleBackClick}
                  className="absolute top-4 left-4 p-2 rounded-full hover:bg-zinc-800 transition-colors"
                >
                  <ArrowLeft className="w-6 h-6" />
                </motion.button>
              )}

              <Timeline steps={steps} currentStep={currentStep} />

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8"
              >
                <RegistrationForm
                  type={partnerType}
                  currentStep={currentStep}
                  onStepComplete={(step) => {
                    if (step === steps.length - 1) {
                      handleRegistrationComplete();
                    } else {
                      setCurrentStep(step + 1);
                    }
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}

        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="text-center p-8 rounded-2xl bg-zinc-900 max-w-md mx-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#37e5a5]/20 flex items-center justify-center"
              >
                <CheckCircle2 className="w-12 h-12 text-[#37e5a5]" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">Registration Submitted!</h3>
              <p className="text-gray-400">
                Welcome to Trawayl! We're excited to have you on board.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-zinc-900 text-gray-400 py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <img src="/logo.png" alt="Trawayl Logo" className="w-32 h-auto" />
              <p className="text-sm">Empowering travel professionals worldwide.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-[#37e5a5] transition-colors">About Us</a></li>
                <li><a href="#careers" className="hover:text-[#37e5a5] transition-colors">Careers</a></li>
                <li><a href="#press" className="hover:text-[#37e5a5] transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#blog" className="hover:text-[#37e5a5] transition-colors">Blog</a></li>
                <li><a href="#guides" className="hover:text-[#37e5a5] transition-colors">Partner Guides</a></li>
                <li><a href="#success" className="hover:text-[#37e5a5] transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#privacy" className="hover:text-[#37e5a5] transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-[#37e5a5] transition-colors">Terms of Service</a></li>
                <li><a href="#cookies" className="hover:text-[#37e5a5] transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Trawayl. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}