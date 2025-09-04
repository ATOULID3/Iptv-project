import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Globe, Crown, Headphones, Smartphone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PremiumFeatures: React.FC = () => {
  const features = [
    {
      icon: Crown,
      title: 'Premium Quality',
      description: 'Ultra HD 4K streaming with Dolby Atmos sound for cinema-quality experience',
      gradient: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Advanced CDN network ensures instant loading and zero buffering worldwide',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Military-grade encryption protects your data and streaming sessions',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20'
    },
    {
      icon: Globe,
      title: 'Global Content',
      description: 'Access content from 150+ countries with real-time translation support',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    },
    {
      icon: Smartphone,
      title: 'Universal Compatibility',
      description: 'Works seamlessly on Smart TVs, phones, tablets, and streaming devices',
      gradient: 'from-indigo-500 to-blue-500',
      bgGradient: 'from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20'
    },
    {
      icon: Headphones,
      title: 'VIP Support',
      description: '24/7 premium support with dedicated account managers and priority assistance',
      gradient: 'from-red-500 to-rose-500',
      bgGradient: 'from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> IPTV Pro</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Experience the future of television with our cutting-edge technology and premium features designed for the most demanding viewers
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group relative bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-200 dark:border-gray-700`}
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full -ml-12 -mb-12"></div>

                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 bg-gradient-to-r from-gray-900 to-black dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
          </div>

          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Millions Worldwide
              </h3>
              <p className="text-gray-300 text-lg">
                Join the premium IPTV revolution
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h4 className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">15,000+</h4>
                <p className="text-gray-300">Live Channels</p>
              </div>
              <div>
                <h4 className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">50,000+</h4>
                <p className="text-gray-300">VOD Movies</p>
              </div>
              <div>
                <h4 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">99.9%</h4>
                <p className="text-gray-300">Uptime</p>
              </div>
              <div>
                <h4 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">150+</h4>
                <p className="text-gray-300">Countries</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/checkout/quarterly"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
              >
                <span>Get Premium Access</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumFeatures;