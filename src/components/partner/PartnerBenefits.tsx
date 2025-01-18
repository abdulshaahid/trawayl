import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Access to millions of travelers',
  'Easy-to-use management dashboard',
  'Secure payment processing',
  '24/7 partner support',
  'Marketing tools and insights',
  'Flexible cancellation policies',
];

const PartnerBenefits = () => {
  return (
    <section className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Partner Benefits</h3>
      <div className="grid gap-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-3 bg-[#111] p-4 rounded-lg">
            <CheckCircle2 size={20} className="text-[#00FF9D]" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerBenefits;