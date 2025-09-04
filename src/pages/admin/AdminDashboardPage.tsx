import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  CreditCard, 
  TrendingUp, 
  DollarSign, 
  Calendar,
  Activity,
  Globe,
  Shield,
  Plus,
  UserX,
  Bell
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { useAdmin } from '../../contexts/AdminContext';

const AdminDashboardPage: React.FC = () => {
  const { analytics, users, subscriptions } = useAdmin();

  const stats = [
    {
      name: 'Total Users',
      value: analytics.totalUsers.toLocaleString(),
      icon: Users,
      color: 'text-blue-600 bg-blue-100 dark:bg-blue-900/30',
      change: '+12%',
      changeType: 'positive'
    },
    {
      name: 'Active Subscriptions',
      value: analytics.activeSubscriptions.toLocaleString(),
      icon: CreditCard,
      color: 'text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30',
      change: '+8%',
      changeType: 'positive'
    },
    {
      name: 'Monthly Revenue',
      value: `$${analytics.revenueMonth.toLocaleString()}`,
      icon: DollarSign,
      color: 'text-purple-600 bg-purple-100 dark:bg-purple-900/30',
      change: '+23%',
      changeType: 'positive'
    },
    {
      name: 'New Signups',
      value: analytics.newSignupsMonth.toString(),
      icon: TrendingUp,
      color: 'text-orange-600 bg-orange-100 dark:bg-orange-900/30',
      change: '+15%',
      changeType: 'positive'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'subscription',
      message: 'New subscription created for John Doe',
      time: '2 minutes ago',
      icon: CreditCard,
      color: 'text-emerald-600'
    },
    {
      id: 2,
      type: 'user',
      message: 'New user registered: Sarah Johnson',
      time: '15 minutes ago',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      id: 3,
      type: 'payment',
      message: 'Payment received: $59.99',
      time: '1 hour ago',
      icon: DollarSign,
      color: 'text-purple-600'
    },
    {
      id: 4,
      type: 'system',
      message: 'Server maintenance completed',
      time: '2 hours ago',
      icon: Shield,
      color: 'text-gray-600'
    }
  ];

  const topPlans = [
    { name: '3 Months Premium', subscribers: 1250, revenue: 74987.50 },
    { name: '1 Year Premium', subscribers: 890, revenue: 160191.10 },
    { name: 'Monthly Plan', subscribers: 567, revenue: 14159.33 },
    { name: '6 Months Premium', subscribers: 234, revenue: 25737.66 }
  ];

  const pieData = [
    { name: 'Active', value: analytics.activeSubscriptions, color: '#10B981' },
    { name: 'Expired', value: analytics.expiredSubscriptions, color: '#EF4444' },
    { name: 'Suspended', value: analytics.suspendedSubscriptions, color: '#F59E0B' }
  ];

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - IPTV Pro</title>
        <meta name="description" content="IPTV Pro admin dashboard" />
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">
            Admin Dashboard
          </h1>
          <p className="text-red-100 text-lg">
            Manage your IPTV service and monitor system performance
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
                    <div className="flex items-center mt-2">
                      <span className={`text-sm font-medium ${
                        stat.changeType === 'positive' ? 'text-emerald-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </span>
                      <span className="text-gray-500 text-sm ml-1">vs last month</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Revenue Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Monthly Revenue
              </h2>
            </div>
            <div className="p-6">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={analytics.monthlyRevenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Subscription Status Pie Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Subscription Status
              </h2>
            </div>
            <div className="p-6">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                <Activity className="w-5 h-5" />
                <span>Recent Activities</span>
              </h2>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {recentActivities.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className={`p-2 rounded-lg bg-white dark:bg-gray-800 ${activity.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {activity.message}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Top Plans */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Top Performing Plans
              </h2>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {topPlans.map((plan, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white text-sm">
                        {plan.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {plan.subscribers} subscribers
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
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
                User Management
              </h3>
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-blue-700 dark:text-blue-300 text-sm mb-4">
              Manage user accounts and permissions
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full">
              Manage Users
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100">
                Subscriptions
              </h3>
              <CreditCard className="w-6 h-6 text-emerald-600" />
            </div>
            <p className="text-emerald-700 dark:text-emerald-300 text-sm mb-4">
              Create and manage subscriptions
            </p>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors w-full">
              Manage Plans
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100">
                Content Library
              </h3>
              <Globe className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-purple-700 dark:text-purple-300 text-sm mb-4">
              Manage channels and VOD content
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors w-full">
              Manage Content
            </button>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100">
                System Status
              </h3>
              <Shield className="w-6 h-6 text-orange-600" />
            </div>
            <p className="text-orange-700 dark:text-orange-300 text-sm mb-4">
              Monitor system health and performance
            </p>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors w-full">
              View Status
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;