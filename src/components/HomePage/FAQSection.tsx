import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is IPTV and how does it work?',
      answer: 'IPTV (Internet Protocol Television) delivers television content over the internet instead of traditional cable or satellite. You simply need a stable internet connection and a compatible device to stream thousands of channels in HD/4K quality.'
    },
    {
      question: 'What devices are compatible with your service?',
      answer: 'Our IPTV service works on Smart TVs, Android/iOS devices, computers, tablets, MAG boxes, Firestick, Apple TV, and most streaming devices. We provide easy setup guides for each platform.'
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes! We offer a 7-day free trial for all new customers. No credit card required for the trial period. You can test our service and see the quality before committing to a subscription.'
    },
    {
      question: 'What channels and content do you provide?',
      answer: 'We offer 12,000+ live channels including sports, movies, news, kids content, and international channels from around the world. Plus 25,000+ VOD movies and TV shows updated regularly.'
    },
    {
      question: 'How many devices can I use simultaneously?',
      answer: 'This depends on your subscription plan. Our basic plan allows 2 devices, while our premium plans support up to 5 simultaneous connections. Perfect for families!'
    },
    {
      question: 'Is your service legal and safe?',
      answer: 'Yes, we operate as a legitimate IPTV provider with proper licensing agreements. Your data is protected with bank-level security, and we maintain 99.9% uptime with reliable servers worldwide.'
    },
    {
      question: 'What internet speed do I need?',
      answer: 'For HD streaming, we recommend at least 10 Mbps. For 4K content, 25 Mbps or higher is ideal. Our adaptive streaming technology adjusts quality based on your connection speed.'
    },
    {
      question: 'Do you provide customer support?',
      answer: 'Absolutely! We offer 24/7 customer support via live chat, WhatsApp, and email. Our technical team is always ready to help with setup, troubleshooting, or any questions you may have.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need to know about our IPTV service
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="mailto:support@iptvpro.com"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            <span>Contact Support</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;