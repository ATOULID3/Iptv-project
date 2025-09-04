import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Download, Eye, Calendar, CreditCard } from 'lucide-react';

const OrdersPage: React.FC = () => {
  const { t } = useTranslation();

  const orders = [
    {
      id: 'ORD-2025-001',
      plan: '3 Months Premium',
      date: '2025-01-15',
      amount: 49.99,
      status: 'Completed',
      paymentMethod: 'Credit Card',
      invoiceUrl: '#'
    },
    {
      id: 'ORD-2024-003',
      plan: '1 Month Basic',
      date: '2024-12-15',
      amount: 19.99,
      status: 'Completed',
      paymentMethod: 'PayPal',
      invoiceUrl: '#'
    },
    {
      id: 'ORD-2024-002',
      plan: '6 Months Premium',
      date: '2024-10-15',
      amount: 89.99,
      status: 'Completed',
      paymentMethod: 'Credit Card',
      invoiceUrl: '#'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <>
      <Helmet>
        <title>Orders & Invoices - IPTV Pro</title>
        <meta name="description" content="View your order history and download invoices" />
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {t('orders')} & Invoices
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              View your order history and download invoices
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <CreditCard className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Spent</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">$159.97</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Order History
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Plan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Payment
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {order.id}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {order.plan}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900 dark:text-white">
                        <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                        {new Date(order.date).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        ${order.amount}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {order.paymentMethod}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                          <Eye className="w-4 h-4" />
                          <span>View</span>
                        </button>
                        <button className="flex items-center space-x-1 text-emerald-600 hover:text-emerald-900 dark:text-emerald-400 dark:hover:text-emerald-300">
                          <Download className="w-4 h-4" />
                          <span>Invoice</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Order Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
                Total Orders
              </h3>
              <div className="bg-blue-600 rounded-lg p-2">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">3</p>
            <p className="text-blue-700 dark:text-blue-300 text-sm mt-1">All time</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100">
                Total Savings
              </h3>
              <div className="bg-emerald-600 rounded-lg p-2">
                <Download className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-3xl font-bold text-emerald-900 dark:text-emerald-100">$127</p>
            <p className="text-emerald-700 dark:text-emerald-300 text-sm mt-1">vs cable TV</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100">
                Next Renewal
              </h3>
              <div className="bg-purple-600 rounded-lg p-2">
                <Calendar className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-xl font-bold text-purple-900 dark:text-purple-100">Apr 15</p>
            <p className="text-purple-700 dark:text-purple-300 text-sm mt-1">in 89 days</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersPage;