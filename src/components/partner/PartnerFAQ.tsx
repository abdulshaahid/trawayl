import React from 'react';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'How long does the application process take?',
    a: 'The typical application process takes 2-3 business days for review and approval.',
  },
  {
    q: 'What are the commission rates?',
    a: 'Commission rates vary based on your service type and volume. Contact our partner team for detailed information.',
  },
  {
    q: 'What documents do I need to apply?',
    a: 'You will need business registration documents, tax information, and proof of insurance.',
  },
];

const PartnerFAQ = () => {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="bg-[#111] rounded-lg overflow-hidden"
          >
            <summary className="p-4 cursor-pointer hover:bg-[#1b1b1b] flex items-center justify-between">
              <span>{faq.q}</span>
              <HelpCircle size={20} className="text-[#00FF9D]" />
            </summary>
            <div className="p-4 pt-0 text-gray-400">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default PartnerFAQ;