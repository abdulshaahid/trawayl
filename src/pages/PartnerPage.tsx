import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2 } from 'lucide-react';
import PartnerBenefits from '../components/partner/PartnerBenefits';
import PartnerForm from '../components/partner/PartnerForm';
import PartnerFAQ from '../components/partner/PartnerFAQ';
// import PartnerBenefits from '../components/PartnerBenefits';
// import PartnerForm from '../components/PartnerForm';
// import PartnerFAQ from '../components/PartnerFAQ';
import { useNavigate } from "react-router-dom";

const PartnerPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black pb-20">
      <header className="mt-16 flex items-center p-6 border-b border-gray-800">
      <button onClick={() => navigate(-1)} className="mr-4">
        <ArrowLeft size={24} />
      </button>
      <h1 className="text-xl font-bold">Partner with Us</h1>
    </header>

      <div className="p-6">
        <div className="bg-gradient-to-r from-[#00FF9D] to-[#00CC7E] rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Building2 size={24} className="text-black" />
            <h2 className="text-xl font-bold text-black">Become a Partner</h2>
          </div>
          <p className="text-black">Join our network of travel service providers and grow your business</p>
        </div>

        <PartnerBenefits/>
        <PartnerForm />
        <PartnerFAQ />
      </div>
    </div>
  );
};

export default PartnerPage;