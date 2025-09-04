import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { AdminProvider } from './contexts/AdminContext';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import SubscriptionsPage from './pages/dashboard/SubscriptionsPage';
import OrdersPage from './pages/dashboard/OrdersPage';
import ProfilePage from './pages/dashboard/ProfilePage';
import FavoritesPage from './pages/dashboard/FavoritesPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import CheckoutPage from './pages/CheckoutPage';
import AdminLayout from './components/admin/AdminLayout';
import ProtectedAdminRoute from './components/admin/ProtectedAdminRoute';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import SubscriptionManagementPage from './pages/admin/SubscriptionManagementPage';
import UserManagementPage from './pages/admin/UserManagementPage';
import OrderManagementPage from './pages/admin/OrderManagementPage';
import CommunicationPage from './pages/admin/CommunicationPage';
import AnalyticsPage from './pages/admin/AnalyticsPage';

function App() {
  return (
    <HelmetProvider>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <AuthProvider>
            <AdminProvider>
              <Router>
                <Routes>
                  {/* Admin Routes */}
                  <Route path="/admin/login" element={<AdminLoginPage />} />
                  <Route path="/admin/*" element={
                    <ProtectedAdminRoute>
                      <AdminLayout>
                        <Routes>
                          <Route path="dashboard" element={<AdminDashboardPage />} />
                          <Route path="users" element={<UserManagementPage />} />
                          <Route path="subscriptions" element={<SubscriptionManagementPage />} />
                          <Route path="orders" element={<OrderManagementPage />} />
                          <Route path="communication" element={<CommunicationPage />} />
                          <Route path="analytics" element={<AnalyticsPage />} />
                        </Routes>
                      </AdminLayout>
                    </ProtectedAdminRoute>
                  } />
                  
                  {/* Public Routes */}
                  <Route path="/*" element={
                    <Layout>
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                        <Route path="/checkout/:planId" element={<CheckoutPage />} />
                        
                        {/* Protected Dashboard Routes */}
                        <Route path="/dashboard" element={
                          <ProtectedRoute>
                            <DashboardPage />
                          </ProtectedRoute>
                        } />
                        <Route path="/dashboard/subscriptions" element={
                          <ProtectedRoute>
                            <SubscriptionsPage />
                          </ProtectedRoute>
                        } />
                        <Route path="/dashboard/orders" element={
                          <ProtectedRoute>
                            <OrdersPage />
                          </ProtectedRoute>
                        } />
                        <Route path="/dashboard/profile" element={
                          <ProtectedRoute>
                            <ProfilePage />
                          </ProtectedRoute>
                        } />
                        <Route path="/dashboard/favorites" element={
                          <ProtectedRoute>
                            <FavoritesPage />
                          </ProtectedRoute>
                        } />
                      </Routes>
                    </Layout>
                  } />
                </Routes>
                <Toaster 
                  position="top-right"
                  toastOptions={{
                    duration: 4000,
                    style: {
                      background: 'var(--toast-bg)',
                      color: 'var(--toast-color)',
                    },
                  }}
                />
              </Router>
            </AdminProvider>
          </AuthProvider>
        </ThemeProvider>
      </I18nextProvider>
    </HelmetProvider>
  );
}

export default App;