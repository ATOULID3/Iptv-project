import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  CreditCard, 
  Lock, 
  Shield, 
  Check, 
  ArrowLeft, 
  Loader,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Eye,
  EyeOff
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const checkoutSchema = z.object({
  // Billing Information
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  
  // Address
  address: z.string().min(5, 'Address must be at least 5 characters'),
  city: z.string().min(2, 'City must be at least 2 characters'),
  country: z.string().min(2, 'Please select a country'),
  zipCode: z.string().min(3, 'ZIP code must be at least 3 characters'),
  
  // Payment
  paymentMethod: z.enum(['card', 'paypal']),
  cardNumber: z.string().optional(),
  expiryDate: z.string().optional(),
  cvv: z.string().optional(),
  cardName: z.string().optional(),
  
  // Terms
  terms: z.boolean().refine(val => val === true, 'You must accept the terms and conditions'),
  newsletter: z.boolean().optional()
});

type CheckoutForm = z.infer<typeof checkoutSchema>;

const CheckoutPage: React.FC = () => {
  const { planId } = useParams();
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showCVV, setShowCVV] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const plans = {
    monthly: {
      name: 'Monthly Plan',
      price: 24.99,
      duration: '1 month',
      originalPrice: null,
      features: ['HD/4K Quality', '8,000+ Channels', '15,000+ Movies', '2 Devices', '24/7 Support']
    },
    quarterly: {
      name: '3 Months Plan',
      price: 59.99,
      duration: '3 months',
      originalPrice: 74.97,
      features: ['HD/4K Quality', '12,000+ Channels', '25,000+ Movies', '3 Devices', 'Priority Support', 'Champions League']
    },
    semiannual: {
      name: '6 Months Plan',
      price: 109.99,
      duration: '6 months',
      originalPrice: 149.94,
      features: ['HD/4K Quality', '15,000+ Channels', '40,000+ Movies', '4 Devices', 'VIP Support', 'All Sports']
    },
    yearly: {
      name: '1 Year Plan',
      price: 179.99,
      duration: '1 year',
      originalPrice: 299.88,
      features: ['HD/4K Quality', '15,000+ Channels', '50,000+ Movies', '5 Devices', 'VIP Support', 'Premium Content']
    }
  };

  const selectedPlan = plans[planId as keyof typeof plans];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<CheckoutForm>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: user?.name?.split(' ')[0] || '',
      lastName: user?.name?.split(' ')[1] || '',
      email: user?.email || '',
      paymentMethod: 'card',
      newsletter: true
    }
  });

  const paymentMethod = watch('paymentMethod');

  useEffect(() => {
    if (!selectedPlan) {
      navigate('/');
    }
  }, [selectedPlan, navigate]);

  const onSubmit = async (data: CheckoutForm) => {
    setIsProcessing(true);
    try {
      // Mock payment processing
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      toast.success('Payment successful! Welcome to IPTV Pro!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (!selectedPlan) {
    return null;
  }

  const savings = selectedPlan.originalPrice ? selectedPlan.originalPrice - selectedPlan.price : 0;
  const tax = selectedPlan.price * 0.1; // 10% tax
  const total = selectedPlan.price + tax;

  return (
    <>
      <Helmet>
        <title>Checkout - IPTV Pro</title>
        <meta name="description" content="Complete your IPTV subscription purchase" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to plans</span>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Complete Your Purchase
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              You're just one step away from premium IPTV experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Billing Information */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
                    <User className="w-5 h-5" />
                    <span>Billing Information</span>
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name
                      </label>
                      <input
                        {...register('firstName')}
                        type="text"
                        className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        placeholder="Enter first name"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name
                      </label>
                      <input
                        {...register('lastName')}
                        type="text"
                        className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        placeholder="Enter last name"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          {...register('email')}
                          type="email"
                          className="pl-10 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-3 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                          placeholder="Enter email address"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          {...register('phone')}
                          type="tel"
                          className="pl-10 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-3 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                          placeholder="Enter phone number"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          {...register('address')}
                          type="text"
                          className="pl-10 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-3 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                          placeholder="Enter address"
                        />
                      </div>
                      {errors.address && (
                        <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        City
                      </label>
                      <input
                        {...register('city')}
                        type="text"
                        className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        placeholder="Enter city"
                      />
                      {errors.city && (
                        <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Country
                      </label>
                      <select
                        {...register('country')}
                        className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                      >
                        <option value="">Select country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        <option value="ES">Spain</option>
                        <option value="IT">Italy</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="SA">Saudi Arabia</option>
                      </select>
                      {errors.country && (
                        <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        ZIP Code
                      </label>
                      <input
                        {...register('zipCode')}
                        type="text"
                        className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        placeholder="Enter ZIP code"
                      />
                      {errors.zipCode && (
                        <p className="mt-1 text-sm text-red-600">{errors.zipCode.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
                    <CreditCard className="w-5 h-5" />
                    <span>Payment Method</span>
                  </h2>

                  {/* Payment Method Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <label className={`relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                    }`}>
                      <input
                        {...register('paymentMethod')}
                        type="radio"
                        value="card"
                        className="sr-only"
                      />
                      <div className="flex items-center space-x-3">
                        <CreditCard className="w-6 h-6 text-blue-600" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">Credit Card</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Visa, Mastercard, Amex</p>
                        </div>
                      </div>
                      {paymentMethod === 'card' && (
                        <Check className="w-5 h-5 text-blue-600 ml-auto" />
                      )}
                    </label>

                    <label className={`relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      paymentMethod === 'paypal'
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                    }`}>
                      <input
                        {...register('paymentMethod')}
                        type="radio"
                        value="paypal"
                        className="sr-only"
                      />
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">PP</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">PayPal</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Pay with PayPal</p>
                        </div>
                      </div>
                      {paymentMethod === 'paypal' && (
                        <Check className="w-5 h-5 text-blue-600 ml-auto" />
                      )}
                    </label>
                  </div>

                  {/* Credit Card Form */}
                  {paymentMethod === 'card' && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Cardholder Name
                        </label>
                        <input
                          {...register('cardName')}
                          type="text"
                          className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                          placeholder="Name on card"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Card Number
                        </label>
                        <div className="relative">
                          <input
                            {...register('cardNumber')}
                            type="text"
                            className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center space-x-1">
                            <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center">VISA</div>
                            <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center">MC</div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Expiry Date
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Calendar className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              {...register('expiryDate')}
                              type="text"
                              className="pl-10 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-3 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                              placeholder="MM/YY"
                              maxLength={5}
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            CVV
                          </label>
                          <div className="relative">
                            <input
                              {...register('cvv')}
                              type={showCVV ? 'text' : 'password'}
                              className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 pr-10 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                              placeholder="123"
                              maxLength={4}
                            />
                            <button
                              type="button"
                              className="absolute inset-y-0 right-0 pr-3 flex items-center"
                              onClick={() => setShowCVV(!showCVV)}
                            >
                              {showCVV ? (
                                <EyeOff className="h-5 w-5 text-gray-400" />
                              ) : (
                                <Eye className="h-5 w-5 text-gray-400" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PayPal Message */}
                  {paymentMethod === 'paypal' && (
                    <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                      <p className="text-blue-800 dark:text-blue-200">
                        You will be redirected to PayPal to complete your payment securely.
                      </p>
                    </div>
                  )}
                </div>

                {/* Terms and Newsletter */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <input
                        {...register('terms')}
                        type="checkbox"
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="text-sm text-gray-700 dark:text-gray-300">
                        I agree to the{' '}
                        <a href="#" className="text-blue-600 hover:text-blue-500 underline">
                          Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-blue-600 hover:text-blue-500 underline">
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                    {errors.terms && (
                      <p className="text-sm text-red-600">{errors.terms.message}</p>
                    )}

                    <div className="flex items-start space-x-3">
                      <input
                        {...register('newsletter')}
                        type="checkbox"
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="text-sm text-gray-700 dark:text-gray-300">
                        Subscribe to our newsletter for updates and special offers
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isProcessing}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  {isProcessing ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Processing Payment...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      <span>Complete Purchase - ${total.toFixed(2)}</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 sticky top-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Order Summary
                </h2>

                {/* Selected Plan */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl p-6 mb-6 border border-blue-200 dark:border-blue-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {selectedPlan.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm mb-4">
                    {selectedPlan.duration} subscription
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {selectedPlan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm">
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      ${selectedPlan.price.toFixed(2)}
                    </span>
                  </div>
                  
                  {savings > 0 && (
                    <div className="flex justify-between text-emerald-600 dark:text-emerald-400">
                      <span>Savings</span>
                      <span className="font-semibold">-${savings.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Tax</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      ${tax.toFixed(2)}
                    </span>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">Total</span>
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 text-center">
                  <Shield className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Your payment is secured with 256-bit SSL encryption
                  </p>
                </div>

                {/* Money Back Guarantee */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm">
                    <Check className="w-4 h-4" />
                    <span>7-day money-back guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;