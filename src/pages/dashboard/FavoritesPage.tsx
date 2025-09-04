import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Heart, Play, Trash2, Search, Filter } from 'lucide-react';

const FavoritesPage: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const favorites = [
    {
      id: 1,
      name: 'ESPN HD',
      category: 'Sports',
      type: 'Live',
      image: 'https://images.pexels.com/photos/163465/sport-treadmill-tor-route-163465.jpeg?w=300&h=200&fit=crop',
      addedAt: '2025-01-10'
    },
    {
      id: 2,
      name: 'CNN International',
      category: 'News',
      type: 'Live',
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?w=300&h=200&fit=crop',
      addedAt: '2025-01-08'
    },
    {
      id: 3,
      name: 'Discovery Channel',
      category: 'Documentary',
      type: 'Live',
      image: 'https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?w=300&h=200&fit=crop',
      addedAt: '2025-01-05'
    },
    {
      id: 4,
      name: 'The Avengers',
      category: 'Movies',
      type: 'VOD',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=300&h=200&fit=crop',
      addedAt: '2024-12-28'
    },
    {
      id: 5,
      name: 'Breaking Bad',
      category: 'Series',
      type: 'VOD',
      image: 'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?w=300&h=200&fit=crop',
      addedAt: '2024-12-25'
    },
    {
      id: 6,
      name: 'Cartoon Network',
      category: 'Kids',
      type: 'Live',
      image: 'https://images.pexels.com/photos/8197530/pexels-photo-8197530.jpeg?w=300&h=200&fit=crop',
      addedAt: '2024-12-20'
    }
  ];

  const categories = ['all', 'Sports', 'News', 'Documentary', 'Movies', 'Series', 'Kids'];

  const filteredFavorites = favorites.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleRemoveFavorite = (id: number) => {
    // In a real app, this would update the state/API
    console.log('Remove favorite:', id);
  };

  return (
    <>
      <Helmet>
        <title>Favorites - IPTV Pro</title>
        <meta name="description" content="Your favorite channels and content" />
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {t('favorites')}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Your favorite channels and content
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-lg p-4 text-white">
            <div className="flex items-center space-x-2">
              <Heart className="w-6 h-6" />
              <div>
                <p className="text-lg font-bold">{favorites.length}</p>
                <p className="text-pink-100 text-sm">Favorites</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Search */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search favorites..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-3 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Favorites Grid */}
        {filteredFavorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFavorites.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() => handleRemoveFavorite(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      item.type === 'Live'
                        ? 'bg-red-500 text-white'
                        : 'bg-blue-500 text-white'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 hover:opacity-100 bg-white bg-opacity-20 backdrop-blur-sm p-3 rounded-full transition-all duration-300">
                      <Play className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </h3>
                    <Heart className="w-5 h-5 text-red-500 fill-current" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Added {new Date(item.addedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No favorites found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {searchTerm || selectedCategory !== 'all'
                ? 'Try adjusting your search or filter'
                : "You haven't added any favorites yet"}
            </p>
            {!searchTerm && selectedCategory === 'all' && (
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Browse Channels
              </button>
            )}
          </div>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Live Channels', count: favorites.filter(f => f.type === 'Live').length, color: 'bg-red-500' },
            { label: 'VOD Content', count: favorites.filter(f => f.type === 'VOD').length, color: 'bg-blue-500' },
            { label: 'Sports', count: favorites.filter(f => f.category === 'Sports').length, color: 'bg-emerald-500' },
            { label: 'Movies', count: favorites.filter(f => f.category === 'Movies').length, color: 'bg-purple-500' }
          ].map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 text-center">
              <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <span className="text-white font-bold text-lg">{stat.count}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FavoritesPage;