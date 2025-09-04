import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Crown, Check, Calendar, Users, Tv, ArrowRight } from 'lucide-react';

const SubscriptionsPage: React.FC = () => {
  const { t } = useTranslation();

  const availablePlans = [
    {
      id: 'monthly',
      name: 'Monthly Plan',
      price: 24.99,
      originalPrice: null,
      duration: '1 month',
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
      name: '3 Months Plan',
      price: 59.99,
      originalPrice: 74.97,
      duration: '3 months',
      badge: 'Most Popular',
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
      name: '6 Months Plan',
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
      name: '1 Year Plan',
      price: 179.99,
      originalPrice: 299.88,
      duration: '1 year',
      badge: 'Best Value',
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

  const currentSubscription = {
    id: 1,
    plan: '3 Months Premium',
    status: 'Active',
    startDate: '2025-01-15',
    expiresAt: '2025-04-15',
    daysRemaining: 89,
    autoRenew: true,
    price: 59.99
  };

  return (
    <>
      <Helmet>
        <title>Subscriptions - IPTV Pro</title>
        <meta name="description" content="Manage your IPTV subscriptions and upgrade your plan" />
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {t('subscriptions')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your current subscription and explore upgrade options
          </p>
        </div>

        {/* Current Subscription */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Current Subscription</h2>
              <p className="text-blue-100">Your active IPTV plan</p>
            </div>
            <div className="text-right">
              <div className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">{currentSubscription.daysRemaining}</div>
                <div className="text-blue-100 text-sm">days left</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Crown className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">Plan</span>
              </div>
              <p className="text-lg">{currentSubscription.plan}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-5 h-5 text-green-400" />
                <span className="font-semibold">Expires</span>
              </div>
              <p className="text-lg">{new Date(currentSubscription.expiresAt).toLocaleDateString()}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Tv className="w-5 h-5 text-blue-400" />
                <span className="font-semibold">Status</span>
              </div>
              <p className="text-lg text-green-400">{currentSubscription.status}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <Link
              to={`/checkout/${currentSubscription.plan.toLowerCase().includes('3') ? 'quarterly' : 'monthly'}`}
              className="flex-1 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Renew Subscription
            </Link>
            <button className="flex-1 bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Upgrade Plan
            </button>
          </div>
        </div>

        {/* Available Plans */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Available Plans
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Choose the perfect plan for your needs
            </p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {availablePlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-b from-blue-600 to-purple-700 text-white shadow-2xl border-2 border-blue-400'
                      : 'bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {plan.badge && (
                    <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold ${
                      plan.popular 
                        ? 'bg-yellow-400 text-yellow-900'
                        : 'bg-emerald-500 text-white'
                    }`}>
                      {plan.badge}
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className={`text-xl font-bold mb-4 ${
                      plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'
                    }`}>
                      {plan.name}
                    </h3>
                    
                    <div className="flex items-center justify-center space-x-2">
                      {plan.originalPrice && (
                        <span className={`text-sm line-through ${
                          plan.popular ? 'text-blue-200' : 'text-gray-500'
                        }`}>
                          ${plan.originalPrice}
                        </span>
                      )}
                      <span className={`text-3xl font-bold ${
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
                  </div>

                  <ul className="space-y-2 mb-6">
                    {plan.features.slice(0, 5).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          plan.popular ? 'text-green-400' : 'text-emerald-500'
                        }`} />
                        <span className={`text-xs ${
                          plan.popular ? 'text-blue-100' : 'text-gray-700 dark:text-gray-300'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/checkout/${plan.id}`}
                    className={`block w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 text-center ${
                      plan.popular
                        ? 'bg-white text-blue-600 hover:bg-gray-100'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                    }`}
                  >
                    {t('choosePlan')}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subscription Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100">
                Money Back Guarantee
              </h3>
              <div className="bg-emerald-600 rounded-lg p-2">
                <Check className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-emerald-700 dark:text-emerald-300 text-sm">
              7-day money-back guarantee on all subscriptions
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
                Instant Activation
              </h3>
              <div className="bg-blue-600 rounded-lg p-2">
                <Tv className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              Start streaming immediately after payment
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100">
                24/7 Support
              </h3>
              <div className="bg-purple-600 rounded-lg p-2">
                <Users className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-purple-700 dark:text-purple-300 text-sm">
              Expert support team available anytime
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionsPage;