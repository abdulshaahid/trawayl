// src/components/Accordion.tsx

import React, { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-700 pb-4">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left text-lg font-semibold text-gray-200 hover:text-[#37e5a5] focus:outline-none"
          >
            {item.question}
          </button>
          {activeIndex === index && (
            <div className="mt-2 text-gray-400">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};
