'use client';
import { motion, AnimatePresence } from 'framer-motion';
import PlusIcon from '../assets/icons/plus.svg';
import MinusIcon from '../assets/icons/minus.svg';
import React from 'react';
import clsx from 'clsx';

const items = [
  {
    question: 'What is Flint, and how does it work?',
    answer:
      'Flint is an intelligent content management prototype that uses AI-powered insights to analyze and optimize social media content. It helps creators and teams make data-driven decisions effortlessly.',
  },
  {
    question: 'What types of tools are integrated into Flint?',
    answer:
      'Flint is built using LangFlow for AI-driven workflows and DataStax AstraDB for scalable database management along with Groq for GPT integration. More tools and agents can be integrated to enhance its capabilities in the future.',
  },
  {
    question: 'Is Flint available for use now?',
    answer:
      'Flint is currently in its prototype stage. We are actively developing and refining it based on feedback to ensure the best user experience.',
  },
  {
    question: 'Can Flint be customized for specific needs?',
    answer:
      'Yes, Flint can be adapted to fit specific workflows and requirements. Future updates will include more customization options.',
  },
];

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className="py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={clsx({
              hidden: !isOpen,
              '': isOpen === true,
            })}
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="bg-black bg-gradient-to-b from-[#5D2CA8] to-black text-white py-[72px] sm:py-24" id='help'>
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};
