import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { Calendar, Tv, CreditCard, TrendingUp } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  const subscriptions = [
    {
      id: 1,
      name: '3 Months Premium',
      status: 'Active',
      expiresAt: '2025-04-15',
      daysRemaining: 89,
      channels: 8000,
      devices: 3
    }
  ];

  const stats = [
    {
      name: 'Active Subscriptions',
      value: '1',
      icon: Tv,
      color: 'text-blue-600 bg-blue-100 dark:bg-blue-900/30'
    },
    {
      name: 'Days Remaining',
      value: '89',
      icon: Calendar,
      color: 'text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30'
    },
    {
      name: 'Total Orders',
      value: '3',
      icon: CreditCard,
      color: 'text-purple-600 bg-purple-100 dark:bg-purple-900/30'
    },
    {
      name: 'Content Watched',
      value: '247h',
      icon: TrendingUp,
      color: 'text-orange-600 bg-orange-100 dark:bg-orange-900/30'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard - IPTV Pro</title>
        <meta name="description" content="Manage your IPTV subscriptions and account" />
      </Helmet>

      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">
            {t('welcomeBack')}, {user?.name}!
          </h1>
          <p className="text-blue-100 text-lg">
            Manage your IPTV subscriptions and explore new content
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {stat.name}
                    </p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Subscriptions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {t('activeSubscriptions')}
            </h2>
          </div>
          
          <div className="p-6 space-y-4">
            {subscriptions.map((subscription) => (
              <div
                key={subscription.id}
                className="border border-gray-200 dark:border-gray-600 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {subscription.name}
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 mt-1">
                      {subscription.status}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {subscription.daysRemaining}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t('days')} remaining
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Expires on</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {new Date(subscription.expiresAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Channels</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      15,000+
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Devices</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {subscription.devices} connections
                    </p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    {t('renewNow')}
                  </button>
                  <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    {t('upgradeNow')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Live Sports
            </h3>
            <p className="text-blue-700 dark:text-blue-300 text-sm mb-4">
              Watch Champions League and all major sports live
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Watch Live
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
            <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-2">
              Movies & Series
            </h3>
            <p className="text-purple-700 dark:text-purple-300 text-sm mb-4">
              50,000+ premium movies and series collection
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Browse Library
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
            <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100 mb-2">
              Get Support
            </h3>
            <p className="text-emerald-700 dark:text-emerald-300 text-sm mb-4">
              Need help? Our support team is here 24/7
            </p>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;