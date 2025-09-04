import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Send, 
  Mail, 
  MessageCircle, 
  Users, 
  Bell,
  Calendar,
  Target,
  FileText,
  Clock
} from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';
import toast from 'react-hot-toast';

const messageSchema = z.object({
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  targetUsers: z.enum(['all', 'active', 'expired']),
  messageType: z.enum(['email', 'whatsapp'])
});

type MessageForm = z.infer<typeof messageSchema>;

const CommunicationPage: React.FC = () => {
  const { users, subscriptions, sendBulkMessage, sendPromotion } = useAdmin();
  const [activeTab, setActiveTab] = useState('broadcast');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch
  } = useForm<MessageForm>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      targetUsers: 'all',
      messageType: 'email'
    }
  });

  const targetUsers = watch('targetUsers');
  const messageType = watch('messageType');

  const onSubmit = async (data: MessageForm) => {
    try {
      let targetUserIds: string[] = [];
      
      switch (data.targetUsers) {
        case 'all':
          targetUserIds = users.map(u => u.id);
          break;
        case 'active':
          targetUserIds = users.filter(u => 
            subscriptions.some(s => s.userId === u.id && s.status === 'active')
          ).map(u => u.id);
          break;
        case 'expired':
          targetUserIds = users.filter(u => 
            subscriptions.some(s => s.userId === u.id && s.status === 'expired')
          ).map(u => u.id);
          break;
      }

      await sendBulkMessage(targetUserIds, `${data.subject}\n\n${data.message}`, data.messageType);
      toast.success(`Message sent to ${targetUserIds.length} users via ${data.messageType}!`);
      reset();
    } catch (error) {
      toast.error('Failed to send message');
    }
  };

  const messageTemplates = [
    {
      id: 'welcome',
      name: 'Welcome Message',
      subject: 'Welcome to IPTV Pro!',
      content: 'Thank you for joining IPTV Pro! Your subscription is now active and you can start streaming immediately.'
    },
    {
      id: 'expiry',
      name: 'Expiry Reminder',
      subject: 'Your subscription expires soon',
      content: 'Your IPTV Pro subscription will expire in 3 days. Renew now to continue enjoying premium content.'
    },
    {
      id: 'promotion',
      name: 'Special Offer',
      subject: 'Special 50% Off Promotion!',
      content: 'Limited time offer! Get 50% off on all annual plans. Upgrade now and save big on premium IPTV content.'
    },
    {
      id: 'maintenance',
      name: 'Maintenance Notice',
      subject: 'Scheduled Maintenance Notice',
      content: 'We will be performing scheduled maintenance on our servers. Service may be briefly interrupted.'
    }
  ];

  const getTargetCount = () => {
    switch (targetUsers) {
      case 'all':
        return users.length;
      case 'active':
        return users.filter(u => 
          subscriptions.some(s => s.userId === u.id && s.status === 'active')
        ).length;
      case 'expired':
        return users.filter(u => 
          subscriptions.some(s => s.userId === u.id && s.status === 'expired')
        ).length;
      default:
        return 0;
    }
  };

  return (
    <>
      <Helmet>
        <title>Communication Center - Admin Panel</title>
        <meta name="description" content="Send messages and notifications to users" />
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Communication Center
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Send messages, notifications, and promotions to your users
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Users</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{users.length}</p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Active Subscribers</p>
                <p className="text-2xl font-bold text-emerald-600">
                  {users.filter(u => subscriptions.some(s => s.userId === u.id && s.status === 'active')).length}
                </p>
              </div>
              <Target className="w-8 h-8 text-emerald-600" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Expired Users</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {users.filter(u => subscriptions.some(s => s.userId === u.id && s.status === 'expired')).length}
                </p>
              </div>
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Messages Sent</p>
                <p className="text-2xl font-bold text-purple-600">1,247</p>
              </div>
              <Bell className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('broadcast')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'broadcast'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Broadcast Message
              </button>
              <button
                onClick={() => setActiveTab('templates')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'templates'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Message Templates
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'history'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Message History
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'broadcast' && (
              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center space-x-2 mb-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-blue-900 dark:text-blue-100">
                      Target Audience: {getTargetCount()} users
                    </span>
                  </div>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Your message will be sent to {getTargetCount()} users via {messageType}
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Target Users */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Target Users
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      <label className="flex items-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                        <input
                          {...register('targetUsers')}
                          type="radio"
                          value="all"
                          className="mr-3"
                        />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">All Users</p>
                          <p className="text-sm text-gray-500">{users.length} users</p>
                        </div>
                      </label>
                      
                      <label className="flex items-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                        <input
                          {...register('targetUsers')}
                          type="radio"
                          value="active"
                          className="mr-3"
                        />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Active Subscribers</p>
                          <p className="text-sm text-gray-500">
                            {users.filter(u => subscriptions.some(s => s.userId === u.id && s.status === 'active')).length} users
                          </p>
                        </div>
                      </label>
                      
                      <label className="flex items-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                        <input
                          {...register('targetUsers')}
                          type="radio"
                          value="expired"
                          className="mr-3"
                        />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Expired Users</p>
                          <p className="text-sm text-gray-500">
                            {users.filter(u => subscriptions.some(s => s.userId === u.id && s.status === 'expired')).length} users
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Message Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message Type
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                        <input
                          {...register('messageType')}
                          type="radio"
                          value="email"
                          className="mr-3"
                        />
                        <Mail className="w-5 h-5 mr-2 text-blue-600" />
                        <span className="font-medium text-gray-900 dark:text-white">Email</span>
                      </label>
                      
                      <label className="flex items-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                        <input
                          {...register('messageType')}
                          type="radio"
                          value="whatsapp"
                          className="mr-3"
                        />
                        <MessageCircle className="w-5 h-5 mr-2 text-green-600" />
                        <span className="font-medium text-gray-900 dark:text-white">WhatsApp</span>
                      </label>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      {...register('subject')}
                      type="text"
                      className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-3 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                      placeholder="Enter message subject"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      {...register('message')}
                      rows={8}
                      className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-3 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                      placeholder="Enter your message content..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>{isSubmitting ? 'Sending...' : `Send to ${getTargetCount()} Users`}</span>
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'templates' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {messageTemplates.map((template) => (
                    <div key={template.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {template.name}
                        </h3>
                        <FileText className="w-5 h-5 text-gray-400" />
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Subject:</p>
                          <p className="font-medium text-gray-900 dark:text-white">{template.subject}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Content:</p>
                          <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                            {template.content}
                          </p>
                        </div>
                      </div>
                      
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        Use Template
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'history' && (
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 text-center">
                  <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Message History
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Message history will appear here once you start sending communications
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunicationPage;