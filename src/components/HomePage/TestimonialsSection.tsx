import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      comment: "The best IPTV service I've ever used. Crystal clear quality and amazing channel selection. Customer support is outstanding!",
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Ahmed Hassan',
      location: 'Dubai, UAE',
      rating: 5,
      comment: "Excellent service with Arabic channels and international content. The app works perfectly on all my devices.",
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Maria Garcia',
      location: 'Madrid, Spain',
      rating: 5,
      comment: "Perfect for our family! Kids love the cartoons, I enjoy Spanish shows, and my husband watches sports. Great value!",
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'James Wilson',
      location: 'London, UK',
      rating: 5,
      comment: "Switched from cable TV and couldn't be happier. Better quality, more channels, and much more affordable.",
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Lisa Chen',
      location: 'Toronto, Canada',
      rating: 5,
      comment: "The anti-freeze technology really works! No more buffering during my favorite shows. Highly recommended!",
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 6,
      name: 'Pierre Dubois',
      location: 'Paris, France',
      rating: 5,
      comment: "Incredible selection of French and international channels. The VOD library is massive. Worth every penny!",
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have made the switch to our premium IPTV service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-500 opacity-20" />
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-6 py-3 rounded-full">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-semibold">4.9/5 average rating from 10,000+ reviews</span>
            </div>
            
            <Link
              to="/checkout/quarterly"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              <span>Join Our Community</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;