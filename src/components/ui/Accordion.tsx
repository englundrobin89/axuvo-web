'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-white/10 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between p-6 bg-navy-mid hover:bg-navy-light transition-colors text-left"
          >
            <span className="font-medium text-white">{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-mint transition-transform duration-300 flex-shrink-0 ml-4 ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="p-6 bg-navy-light/50 border-t border-white/5 text-silver">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
