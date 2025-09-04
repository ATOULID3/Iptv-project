import React from 'react';
import { useTranslation } from 'react-i18next';
import { Tv, Zap, Film, Headphones, Smartphone, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Tv,
      title: t('hdQuality'),
      description: t('hdQualityDesc'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: t('antiFreeze'),
      description: t('antiFreezeDesc'),
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Film,
      title: t('vod'),
      description: t('vodDesc'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Headphones,
      title: t('support'),
      description: t('supportDesc'),
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Smartphone,
      title: t('multiDevice'),
      description: t('multiDeviceDesc'),
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Bank-level security and 99.9% uptime guarantee',
      color: 'from-red-500 to-rose-500'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('featuresTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover why millions of users trust our IPTV service for their entertainment needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative element */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-r ${feature.color} opacity-5 rounded-full -mr-10 -mt-10`}></div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-white mb-2">12,000+</h3>
              <p className="text-blue-100">Live Channels</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white mb-2">25,000+</h3>
              <p className="text-blue-100">VOD Movies</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white mb-2">99.9%</h3>
              <p className="text-blue-100">Uptime</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white mb-2">50,000+</h3>
              <p className="text-blue-100">Happy Users</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;