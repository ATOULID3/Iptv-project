import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  LayoutDashboard, 
  CreditCard, 
  FileText, 
  User, 
  Heart,
  Settings
} from 'lucide-react';

const DashboardSidebar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const menuItems = [
    {
      path: '/dashboard',
      icon: LayoutDashboard,
      label: t('dashboard')
    },
    {
      path: '/dashboard/subscriptions',
      icon: CreditCard,
      label: t('subscriptions')
    },
    {
      path: '/dashboard/orders',
      icon: FileText,
      label: t('orders')
    },
    {
      path: '/dashboard/profile',
      icon: User,
      label: t('profile')
    },
    {
      path: '/dashboard/favorites',
      icon: Heart,
      label: t('favorites')
    }
  ];

  return (
    <aside className="fixed left-0 top-16 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
      <div className="p-6">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default DashboardSidebar;