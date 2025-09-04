import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Calendar,
  Download,
  Filter
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { useAdmin } from '../../contexts/AdminContext';

const AnalyticsPage: React.FC = () => {
  const { analytics } = useAdmin();
  const [dateRange, setDateRange] = useState('6months');

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

  const subscriptionGrowthData = [
    { month: 'Jul', subscriptions: 850 },
    { month: 'Aug', subscriptions: 920 },
    { month: 'Sep', subscriptions: 1100 },
    { month: 'Oct', subscriptions: 1280 },
    { month: 'Nov', subscriptions: 1450 },
    { month: 'Dec', subscriptions: 1650 },
    { month: 'Jan', subscriptions: 1820 }
  ];

  const planDistributionData = [
    { name: 'Monthly', value: 567, color: '#3B82F6' },
    { name: '3 Months', value: 1250, color: '#10B981' },
    { name: '6 Months', value: 234, color: '#F59E0B' },
    { name: '1 Year', value: 890, color: '#8B5CF6' }
  ];

  const userActivityData = [
    { day: 'Mon', active: 1200, new: 45 },
    { day: 'Tue', active: 1350, new: 52 },
    { day: 'Wed', active: 1180, new: 38 },
    { day: 'Thu', active: 1420, new: 61 },
    { day: 'Fri', active: 1580, new: 73 },
    { day: 'Sat', active: 1650, new: 68 },
    { day: 'Sun', active: 1480, new: 55 }
  ];

  return (
    <>
      <Helmet>
        <title>Analytics - Admin Panel</title>
        <meta name="description" content="IPTV service analytics and reports" />
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Analytics & Reports
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Monitor your IPTV service performance and growth
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            >
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="6months">Last 6 Months</option>
              <option value="1year">Last Year</option>
            </select>
            
            <button className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-700 dark:text-blue-300">Revenue Today</p>
                <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">
                  ${analytics.revenueToday.toFixed(2)}
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">+12% vs yesterday</p>
              </div>
              <DollarSign className="w-10 h-10 text-blue-600" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-emerald-700 dark:text-emerald-300">New Signups</p>
                <p className="text-3xl font-bold text-emerald-900 dark:text-emerald-100">
                  {analytics.newSignupsToday}
                </p>
                <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-1">+8% vs yesterday</p>
              </div>
              <Users className="w-10 h-10 text-emerald-600" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-700 dark:text-purple-300">Active Subscriptions</p>
                <p className="text-3xl font-bold text-purple-900 dark:text-purple-100">
                  {analytics.activeSubscriptions}
                </p>
                <p className="text-sm text-purple-600 dark:text-purple-400 mt-1">+15% vs last month</p>
              </div>
              <TrendingUp className="w-10 h-10 text-purple-600" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-700 dark:text-orange-300">Monthly Revenue</p>
                <p className="text-3xl font-bold text-orange-900 dark:text-orange-100">
                  ${analytics.revenueMonth.toLocaleString()}
                </p>
                <p className="text-sm text-orange-600 dark:text-orange-400 mt-1">+23% vs last month</p>
              </div>
              <Calendar className="w-10 h-10 text-orange-600" />
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Revenue Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Monthly Revenue Trend
              </h2>
            </div>
            <div className="p-6">
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={analytics.monthlyRevenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                  <Area type="monotone" dataKey="revenue" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.1} strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Subscription Growth */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Subscription Growth
              </h2>
            </div>
            <div className="p-6">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={subscriptionGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="subscriptions" stroke="#10B981" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Plan Distribution */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Plan Distribution
              </h2>
            </div>
            <div className="p-6">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={planDistributionData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {planDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* User Activity */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Weekly User Activity
              </h2>
            </div>
            <div className="p-6">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={userActivityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="active" fill="#3B82F6" name="Active Users" />
                  <Bar dataKey="new" fill="#10B981" name="New Users" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Top Performing Plans
            </h3>
            <div className="space-y-3">
              {analytics.popularPlans.slice(0, 5).map((plan, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">
                      {plan.planName}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {plan.count} subscribers
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      ${plan.revenue.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Revenue Breakdown
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Today</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  ${analytics.revenueToday.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">This Month</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  ${analytics.revenueMonth.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">This Year</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  ${analytics.revenueYear.toLocaleString()}
                </span>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Average Order Value</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    ${(analytics.revenueMonth / analytics.activeSubscriptions).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Key Metrics
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Conversion Rate</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">12.5%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '12.5%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Customer Retention</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">87%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Churn Rate</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">5.2%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '5.2%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsPage;