import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="border-b border-[#242424] last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-4 flex items-center justify-between text-left"
      >
        <span className="font-semibold">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-[#37e5a5]" />
        ) : (
          <Plus className="w-5 h-5 text-[#37e5a5]" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-gray-400">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;