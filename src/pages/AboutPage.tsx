import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Tv, Users, Globe, Shield, Award, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We provide stable, high-quality streaming with 99.9% uptime guarantee and advanced anti-freeze technology.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: '24/7 support and customer satisfaction is our top priority. We listen to feedback and continuously improve.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving customers worldwide with content from every continent and in multiple languages.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Premium HD/4K streaming quality with carefully curated channel lineup and VOD content.'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Happy Customers' },
    { number: '12,000+', label: 'Live Channels' },
    { number: '25,000+', label: 'VOD Content' },
    { number: '99.9%', label: 'Uptime' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - IPTV Pro</title>
        <meta name="description" content="Learn about IPTV Pro - your trusted partner for premium IPTV streaming services worldwide" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About IPTV Pro
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing the way you experience television with cutting-edge IPTV technology,
            delivering premium entertainment to your fingertips.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                To provide the world's most reliable and comprehensive IPTV streaming service, 
                making premium entertainment accessible to everyone, everywhere, at an affordable price.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                We believe that high-quality entertainment shouldn't come with high costs or 
                complicated setups. Our mission is to simplify streaming while delivering 
                exceptional value to our customers.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-8">
              <img
                src="https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?w=600&h=400&fit=crop"
                alt="IPTV Technology"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
                >
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-blue-100 text-xl">
              Trusted by customers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400">
            <p className="text-xl leading-relaxed mb-8">
              Founded in 2020, IPTV Pro was born from a simple observation: traditional cable TV 
              was expensive, inflexible, and failing to meet the needs of modern viewers. Our founders, 
              experienced in telecommunications and streaming technology, saw an opportunity to revolutionize 
              how people consume television content.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Starting with just a handful of channels and a vision for better streaming, we've grown 
              into one of the world's leading IPTV providers. Our journey has been marked by continuous 
              innovation, customer feedback integration, and an unwavering commitment to quality.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Today, we serve over 50,000 customers across 100+ countries, offering more than 12,000 
              live channels and 25,000 on-demand titles. But our story is just beginning. We continue 
              to expand our content library, improve our technology, and enhance the viewing experience 
              for our growing global community.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Looking Forward
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Our vision for the future includes expanding into new markets, introducing cutting-edge 
                features like AI-powered recommendations, and continuing to provide exceptional value 
                to our customers. We're not just building a streaming service – we're creating the 
                future of television entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;