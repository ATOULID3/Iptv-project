import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Check, Star, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingSection: React.FC = () => {
  const { t } = useTranslation();

  const plans = [
    {
      id: 'monthly',
      name: t('monthly'),
      price: 24.99,
      originalPrice: null,
      duration: 'month',
      badge: null,
      popular: false,
      features: [
        'HD/4K Quality Streaming',
        '8,000+ Live Channels',
        '15,000+ VOD Movies & Series',
        'Anti-Freeze Technology',
        '2 Device Connections',
        'Champions League Access',
        '24/7 Support'
      ]
    },
    {
      id: 'quarterly',
      name: t('quarterly'),
      price: 59.99,
      originalPrice: 74.97,
      duration: '3 months',
      badge: t('mostPopular'),
      popular: true,
      features: [
        'HD/4K Quality Streaming',
        '12,000+ Live Channels',
        '25,000+ VOD Movies & Series',
        'Anti-Freeze Technology',
        '3 Device Connections',
        'All Sports Packages',
        'Premium Sports Packages',
        'Catch-up TV (3 days)',
        '24/7 Priority Support'
      ]
    },
    {
      id: 'semiannual',
      name: t('semiAnnual'),
      price: 109.99,
      originalPrice: 149.94,
      duration: '6 months',
      badge: null,
      popular: false,
      features: [
        'HD/4K Quality Streaming',
        '15,000+ Live Channels',
        '40,000+ VOD Movies & Series',
        'Anti-Freeze Technology',
        '4 Device Connections',
        'All Sports & Premium Leagues',
        'Premium Sports & Movies',
        'Adult Content Available',
        'Catch-up TV (7 days)',
        '24/7 VIP Support'
      ]
    },
    {
      id: 'yearly',
      name: t('yearly'),
      price: 179.99,
      originalPrice: 299.88,
      duration: 'year',
      badge: t('bestValue'),
      popular: false,
      features: [
        'HD/4K Quality Streaming',
        '15,000+ Live Channels',
        '50,000+ VOD Movies & Series',
        'Anti-Freeze Technology',
        '5 Device Connections',
        'All Premium Content',
        'All Premium Packages',
        'Adult Content Available',
        'Catch-up TV (14 days)',
        'Exclusive Early Access',
        '24/7 VIP Support',
        'Free Setup & Installation'
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('pricingTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('pricingSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? 'bg-gradient-to-b from-blue-600 to-purple-700 text-white shadow-2xl border-2 border-blue-400'
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm font-semibold ${
                  plan.popular 
                    ? 'bg-yellow-400 text-yellow-900'
                    : 'bg-emerald-500 text-white'
                }`}>
                  {plan.badge}
                </div>
              )}

              {plan.popular && (
                <div className="absolute top-4 right-4">
                  <Crown className="w-6 h-6 text-yellow-400" />
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-4 ${
                  plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}>
                  {plan.name}
                </h3>
                
                <div className="flex items-center justify-center space-x-2">
                  {plan.originalPrice && (
                    <span className={`text-lg line-through ${
                      plan.popular ? 'text-blue-200' : 'text-gray-500'
                    }`}>
                      ${plan.originalPrice}
                    </span>
                  )}
                  <span className={`text-5xl font-bold ${
                    plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}>
                    ${plan.price}
                  </span>
                </div>
                
                <p className={`text-sm mt-2 ${
                  plan.popular ? 'text-blue-200' : 'text-gray-600 dark:text-gray-400'
                }`}>
                  per {plan.duration}
                </p>

                {plan.originalPrice && (
                  <div className="mt-3 inline-flex items-center space-x-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full">
                    <span>Save ${(plan.originalPrice - plan.price).toFixed(2)}</span>
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-green-400' : 'text-emerald-500'
                    }`} />
                    <span className={`text-sm ${
                      plan.popular ? 'text-blue-100' : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

            <Link
              to={`/checkout/${plan.id}`}
              className={`block w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 text-center ${
                plan.popular
                  ? 'bg-white text-blue-600 hover:bg-gray-100'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
              }`}
            >
                {t('choosePlan')}
            </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400">
            All plans include 7-day money-back guarantee and 24/7 support
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;