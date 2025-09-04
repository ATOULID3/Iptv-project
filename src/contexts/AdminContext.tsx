import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'super_admin' | 'admin' | 'support';
  permissions: string[];
  avatar?: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  country: string;
  phone?: string;
  registeredAt: string;
  lastLogin: string;
  status: 'active' | 'suspended' | 'banned';
  subscriptions: Subscription[];
  totalSpent: number;
  avatar?: string;
}

interface Subscription {
  id: string;
  userId: string;
  planId: string;
  planName: string;
  status: 'active' | 'expired' | 'suspended' | 'cancelled';
  startDate: string;
  endDate: string;
  price: number;
  autoRenew: boolean;
  devices: number;
  maxDevices: number;
  features: string[];
}

interface SubscriptionPlan {
  id: string;
  name: string;
  duration: number; // in months
  price: number;
  originalPrice?: number;
  features: string[];
  isActive: boolean;
  subscriberCount: number;
  createdAt: string;
}

interface Order {
  id: string;
  userId: string;
  planId: string;
  planName: string;
  amount: number;
  status: 'paid' | 'pending' | 'failed' | 'refunded';
  paymentMethod: string;
  createdAt: string;
  invoiceUrl?: string;
}

interface Analytics {
  totalUsers: number;
  activeSubscriptions: number;
  expiredSubscriptions: number;
  suspendedSubscriptions: number;
  revenueToday: number;
  revenueMonth: number;
  revenueYear: number;
  newSignupsToday: number;
  newSignupsMonth: number;
  monthlyRevenueData: { month: string; revenue: number; subscriptions: number }[];
  popularPlans: { planName: string; count: number; revenue: number }[];
}

interface AdminContextType {
  adminUser: AdminUser | null;
  isAdminLoading: boolean;
  adminLogin: (email: string, password: string) => Promise<void>;
  adminLogout: () => void;
  
  // User Management
  users: User[];
  getUserById: (id: string) => User | undefined;
  updateUserStatus: (userId: string, status: string) => Promise<void>;
  deleteUser: (userId: string) => Promise<void>;
  sendUserMessage: (userId: string, message: string, type: 'email' | 'whatsapp') => Promise<void>;
  
  // Subscription Management
  subscriptions: Subscription[];
  subscriptionPlans: SubscriptionPlan[];
  createSubscription: (data: any) => Promise<void>;
  updateSubscription: (id: string, data: any) => Promise<void>;
  cancelSubscription: (id: string) => Promise<void>;
  createSubscriptionPlan: (data: any) => Promise<void>;
  updateSubscriptionPlan: (id: string, data: any) => Promise<void>;
  deleteSubscriptionPlan: (id: string) => Promise<void>;
  
  // Orders Management
  orders: Order[];
  updateOrderStatus: (orderId: string, status: string) => Promise<void>;
  
  // Analytics
  analytics: Analytics;
  
  // Communication
  sendBulkMessage: (userIds: string[], message: string, type: 'email' | 'whatsapp') => Promise<void>;
  sendPromotion: (message: string, targetUsers: 'all' | 'active' | 'expired') => Promise<void>;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [isAdminLoading, setIsAdminLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [subscriptionPlans, setSubscriptionPlans] = useState<SubscriptionPlan[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  // Initialize mock data
  useEffect(() => {
    // Check for admin token
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken) {
      setAdminUser({
        id: 'admin1',
        name: 'Super Admin',
        email: 'admin@iptvpro.com',
        role: 'super_admin',
        permissions: ['all']
      });
    }

    // Mock subscription plans
    setSubscriptionPlans([
      {
        id: 'monthly',
        name: 'Monthly Plan',
        duration: 1,
        price: 24.99,
        features: ['HD/4K Quality', '8,000+ Channels', '15,000+ Movies', '2 Devices', '24/7 Support'],
        isActive: true,
        subscriberCount: 567,
        createdAt: '2024-01-01'
      },
      {
        id: 'quarterly',
        name: '3 Months Plan',
        duration: 3,
        price: 59.99,
        originalPrice: 74.97,
        features: ['HD/4K Quality', '12,000+ Channels', '25,000+ Movies', '3 Devices', 'Priority Support', 'Champions League'],
        isActive: true,
        subscriberCount: 1250,
        createdAt: '2024-01-01'
      },
      {
        id: 'semiannual',
        name: '6 Months Plan',
        duration: 6,
        price: 109.99,
        originalPrice: 149.94,
        features: ['HD/4K Quality', '15,000+ Channels', '40,000+ Movies', '4 Devices', 'VIP Support', 'All Sports'],
        isActive: true,
        subscriberCount: 234,
        createdAt: '2024-01-01'
      },
      {
        id: 'yearly',
        name: '1 Year Plan',
        duration: 12,
        price: 179.99,
        originalPrice: 299.88,
        features: ['HD/4K Quality', '15,000+ Channels', '50,000+ Movies', '5 Devices', 'VIP Support', 'Premium Content'],
        isActive: true,
        subscriberCount: 890,
        createdAt: '2024-01-01'
      }
    ]);

    // Mock users
    setUsers([
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        country: 'United States',
        phone: '+1234567890',
        registeredAt: '2024-12-15',
        lastLogin: '2025-01-15',
        status: 'active',
        totalSpent: 179.99,
        subscriptions: []
      },
      {
        id: '2',
        name: 'Sarah Johnson',
        email: 'sarah@example.com',
        country: 'Canada',
        phone: '+1987654321',
        registeredAt: '2024-11-20',
        lastLogin: '2025-01-14',
        status: 'active',
        totalSpent: 299.99,
        subscriptions: []
      },
      {
        id: '3',
        name: 'Ahmed Hassan',
        email: 'ahmed@example.com',
        country: 'UAE',
        phone: '+971501234567',
        registeredAt: '2024-10-10',
        lastLogin: '2025-01-10',
        status: 'suspended',
        totalSpent: 119.99,
        subscriptions: []
      }
    ]);

    // Mock subscriptions
    setSubscriptions([
      {
        id: 'sub1',
        userId: '1',
        planId: 'quarterly',
        planName: '3 Months Premium',
        status: 'active',
        startDate: '2025-01-15',
        endDate: '2025-04-15',
        price: 59.99,
        autoRenew: true,
        devices: 2,
        maxDevices: 3,
        features: ['HD/4K Quality', '12,000+ Channels', '25,000+ Movies', '3 Devices', 'Priority Support']
      },
      {
        id: 'sub2',
        userId: '2',
        planId: 'yearly',
        planName: '1 Year Premium',
        status: 'active',
        startDate: '2024-11-20',
        endDate: '2025-11-20',
        price: 179.99,
        autoRenew: true,
        devices: 4,
        maxDevices: 5,
        features: ['HD/4K Quality', '15,000+ Channels', '50,000+ Movies', '5 Devices', 'VIP Support']
      },
      {
        id: 'sub3',
        userId: '3',
        planId: 'monthly',
        planName: 'Monthly Plan',
        status: 'expired',
        startDate: '2024-12-10',
        endDate: '2025-01-10',
        price: 24.99,
        autoRenew: false,
        devices: 1,
        maxDevices: 2,
        features: ['HD/4K Quality', '8,000+ Channels', '15,000+ Movies', '2 Devices']
      }
    ]);

    // Mock orders
    setOrders([
      {
        id: 'ORD-2025-001',
        userId: '1',
        planId: 'quarterly',
        planName: '3 Months Premium',
        amount: 59.99,
        status: 'paid',
        paymentMethod: 'Credit Card',
        createdAt: '2025-01-15',
        invoiceUrl: '#'
      },
      {
        id: 'ORD-2025-002',
        userId: '2',
        planId: 'yearly',
        planName: '1 Year Premium',
        amount: 179.99,
        status: 'paid',
        paymentMethod: 'PayPal',
        createdAt: '2025-01-14',
        invoiceUrl: '#'
      },
      {
        id: 'ORD-2025-003',
        userId: '3',
        planId: 'monthly',
        planName: 'Monthly Plan',
        amount: 24.99,
        status: 'failed',
        paymentMethod: 'Credit Card',
        createdAt: '2025-01-10'
      }
    ]);
  }, []);

  const adminLogin = async (email: string, password: string) => {
    setIsAdminLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email === 'admin@iptvpro.com' && password === 'admin123') {
        const mockAdmin = {
          id: 'admin1',
          name: 'Super Admin',
          email: email,
          role: 'super_admin' as const,
          permissions: ['all']
        };
        
        localStorage.setItem('adminToken', 'mock-admin-jwt-token');
        setAdminUser(mockAdmin);
      } else {
        throw new Error('Invalid admin credentials');
      }
    } catch (error) {
      throw error;
    } finally {
      setIsAdminLoading(false);
    }
  };

  const adminLogout = () => {
    localStorage.removeItem('adminToken');
    setAdminUser(null);
  };

  const getUserById = (id: string) => {
    return users.find(user => user.id === id);
  };

  const updateUserStatus = async (userId: string, status: string) => {
    setUsers(prev => prev.map(user => 
      user.id === userId ? { ...user, status: status as any } : user
    ));
  };

  const deleteUser = async (userId: string) => {
    setUsers(prev => prev.filter(user => user.id !== userId));
    setSubscriptions(prev => prev.filter(sub => sub.userId !== userId));
  };

  const sendUserMessage = async (userId: string, message: string, type: 'email' | 'whatsapp') => {
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Sending ${type} to user ${userId}: ${message}`);
  };

  const createSubscription = async (data: any) => {
    const newSubscription: Subscription = {
      id: `sub${Date.now()}`,
      userId: data.userId,
      planId: data.planId,
      planName: data.planName,
      status: 'active',
      startDate: data.startDate,
      endDate: data.endDate,
      price: data.price,
      autoRenew: data.autoRenew || false,
      devices: 0,
      maxDevices: data.maxDevices,
      features: data.features || []
    };
    
    setSubscriptions(prev => [...prev, newSubscription]);
  };

  const updateSubscription = async (id: string, data: any) => {
    setSubscriptions(prev => prev.map(sub => 
      sub.id === id ? { ...sub, ...data } : sub
    ));
  };

  const cancelSubscription = async (id: string) => {
    setSubscriptions(prev => prev.map(sub => 
      sub.id === id ? { ...sub, status: 'cancelled' } : sub
    ));
  };

  const createSubscriptionPlan = async (data: any) => {
    const newPlan: SubscriptionPlan = {
      id: `plan${Date.now()}`,
      name: data.name,
      duration: data.duration,
      price: data.price,
      originalPrice: data.originalPrice,
      features: data.features,
      isActive: true,
      subscriberCount: 0,
      createdAt: new Date().toISOString()
    };
    
    setSubscriptionPlans(prev => [...prev, newPlan]);
  };

  const updateSubscriptionPlan = async (id: string, data: any) => {
    setSubscriptionPlans(prev => prev.map(plan => 
      plan.id === id ? { ...plan, ...data } : plan
    ));
  };

  const deleteSubscriptionPlan = async (id: string) => {
    setSubscriptionPlans(prev => prev.filter(plan => plan.id !== id));
  };

  const updateOrderStatus = async (orderId: string, status: string) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status: status as any } : order
    ));
  };

  const sendBulkMessage = async (userIds: string[], message: string, type: 'email' | 'whatsapp') => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(`Sending bulk ${type} to ${userIds.length} users: ${message}`);
  };

  const sendPromotion = async (message: string, targetUsers: 'all' | 'active' | 'expired') => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(`Sending promotion to ${targetUsers} users: ${message}`);
  };

  // Calculate analytics
  const analytics: Analytics = {
    totalUsers: users.length,
    activeSubscriptions: subscriptions.filter(sub => sub.status === 'active').length,
    expiredSubscriptions: subscriptions.filter(sub => sub.status === 'expired').length,
    suspendedSubscriptions: subscriptions.filter(sub => sub.status === 'suspended').length,
    revenueToday: orders.filter(order => 
      new Date(order.createdAt).toDateString() === new Date().toDateString() && order.status === 'paid'
    ).reduce((total, order) => total + order.amount, 0),
    revenueMonth: orders.filter(order => 
      new Date(order.createdAt).getMonth() === new Date().getMonth() && order.status === 'paid'
    ).reduce((total, order) => total + order.amount, 0),
    revenueYear: orders.filter(order => 
      new Date(order.createdAt).getFullYear() === new Date().getFullYear() && order.status === 'paid'
    ).reduce((total, order) => total + order.amount, 0),
    newSignupsToday: users.filter(user => 
      new Date(user.registeredAt).toDateString() === new Date().toDateString()
    ).length,
    newSignupsMonth: users.filter(user => 
      new Date(user.registeredAt).getMonth() === new Date().getMonth()
    ).length,
    monthlyRevenueData: [
      { month: 'Jan', revenue: 45000, subscriptions: 1200 },
      { month: 'Feb', revenue: 52000, subscriptions: 1350 },
      { month: 'Mar', revenue: 48000, subscriptions: 1280 },
      { month: 'Apr', revenue: 61000, subscriptions: 1450 },
      { month: 'May', revenue: 58000, subscriptions: 1380 },
      { month: 'Jun', revenue: 67000, subscriptions: 1520 }
    ],
    popularPlans: subscriptionPlans.map(plan => ({
      planName: plan.name,
      count: plan.subscriberCount,
      revenue: plan.subscriberCount * plan.price
    })).sort((a, b) => b.count - a.count)
  };

  return (
    <AdminContext.Provider value={{
      adminUser,
      isAdminLoading,
      adminLogin,
      adminLogout,
      users,
      getUserById,
      updateUserStatus,
      deleteUser,
      sendUserMessage,
      subscriptions,
      subscriptionPlans,
      createSubscription,
      updateSubscription,
      cancelSubscription,
      createSubscriptionPlan,
      updateSubscriptionPlan,
      deleteSubscriptionPlan,
      orders,
      updateOrderStatus,
      analytics,
      sendBulkMessage,
      sendPromotion
    }}>
      {children}
    </AdminContext.Provider>
  );
};