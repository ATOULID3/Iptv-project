import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Star, Calendar, Clock, Trophy, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('movies');

  const movies = [
    {
      id: 1,
      title: 'The Dark Knight',
      year: 2008,
      rating: 9.0,
      genre: 'Action, Crime, Drama',
      duration: '152 min',
      image: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/pyNXnq8QBWoK3b37RS6C3axwUOy.jpg',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham...'
    },
    {
      id: 2,
      title: 'Inception',
      year: 2010,
      rating: 8.8,
      genre: 'Action, Sci-Fi, Thriller',
      duration: '148 min',
      image: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/aej3LRUga5rhgkmRP6XMFw3ejbl.jpg',
      description: 'A thief who steals corporate secrets through dream-sharing technology...'
    },
    {
      id: 3,
      title: 'Interstellar',
      year: 2014,
      rating: 8.6,
      genre: 'Adventure, Drama, Sci-Fi',
      duration: '169 min',
      image: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/1pnigkWWy8W032o9TKDneBa3eVK.jpg',
      description: 'A team of explorers travel through a wormhole in space...'
    },
    {
      id: 4,
      title: 'Avengers: Endgame',
      year: 2019,
      rating: 8.4,
      genre: 'Action, Adventure, Drama',
      duration: '181 min',
      image: 'https://images.pexels.com/photos/7991580/pexels-photo-7991580.jpeg?w=400&h=600&fit=crop',
      description: 'After the devastating events of Infinity War, the universe is in ruins...'
    }
  ];

  const series = [
    {
      id: 1,
      title: 'Breaking Bad',
      year: '2008-2013',
      rating: 9.5,
      genre: 'Crime, Drama, Thriller',
      seasons: 5,
      episodes: 62,
      image: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/tP2wgZfzkZxL18jImD2YXqEUXQA.jpg',
      description: 'A high school chemistry teacher turned methamphetamine manufacturer...'
    },
    {
      id: 2,
      title: 'Game of Thrones',
      year: '2011-2019',
      rating: 9.2,
      genre: 'Action, Adventure, Drama',
      seasons: 8,
      episodes: 73,
      image: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/3YSdxdhhdCDlMs88RhvjhDLX4CA.jpg',
      description: 'Nine noble families fight for control over the lands of Westeros...'
    },
    {
      id: 3,
      title: 'Stranger Things',
      year: '2016-2025',
      rating: 8.7,
      genre: 'Drama, Fantasy, Horror',
      seasons: 4,
      episodes: 42,
      image: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg',
      description: 'When a young boy disappears, his mother, a police chief and his friends...'
    },
    {
      id: 4,
      title: 'The Crown',
      year: '2016-2023',
      rating: 8.6,
      genre: 'Biography, Drama, History',
      seasons: 6,
      episodes: 60,
      image: 'https://th.bing.com/th/id/R.f263fe6abe92bf48e28ce8ae41dc7f13?rik=kgZuN9OWKxTHgw&pid=ImgRaw&r=0',
      description: 'Follows the political rivalries and romance of Queen Elizabeth II...'
    }
  ];

  const sports = [
    {
      id: 1,
      title: 'UEFA Champions League',
      type: 'Live Tournament',
      nextMatch: 'Real Madrid vs Manchester City',
      date: '2025-02-15',
      time: '21:00 CET',
      image: 'https://tse2.mm.bing.net/th/id/OIF.iRBcYsf3s433Kz1XyywCtw?r=0&cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3',
      description: 'The most prestigious club competition in European football'
    },
    {
      id: 2,
      title: 'Premier League',
      type: 'Live Championship',
      nextMatch: 'Arsenal vs Liverpool',
      date: '2025-02-12',
      time: '17:30 GMT',
      image: 'https://thvnext.bing.com/th/id/OIP.v8li19bv8lzrAl78bQZA-gHaFj?w=247&h=186&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3',
      description: 'The top level of the English football league system'
    },
    {
      id: 3,
      title: 'La Liga',
      type: 'Live Championship',
      nextMatch: 'Barcelona vs Atletico Madrid',
      date: '2025-02-14',
      time: '20:00 CET',
      image: 'https://www.somosxbox.com/wp-content/uploads/2023/04/LaLiga.jpg',
      description: 'Spain\'s premier football division featuring the world\'s best clubs'
    },
    {
      id: 4,
      title: 'Serie A',
      type: 'Live Championship',
      nextMatch: 'Juventus vs AC Milan',
      date: '2025-02-16',
      time: '18:00 CET',
      image: 'https://www.footitalia.com/wp-content/uploads/2023/06/Serie-A.png',
      description: 'Italy\'s top professional football league'
    }
  ];

  const tabs = [
    { id: 'movies', label: 'Latest Movies', icon: Play },
    { id: 'series', label: 'Popular Series', icon: Star },
    { id: 'sports', label: 'Live Sports', icon: Trophy }
  ];

  const renderContent = () => {
    const content = activeTab === 'movies' ? movies : activeTab === 'series' ? series : sports;
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {content.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-200 dark:border-gray-700"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  activeTab === 'sports' ? 'h-48' : 'h-72'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-md rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white fill-current" />
                </div>
              </div>

              {/* Rating Badge */}
              {(activeTab === 'movies' || activeTab === 'series') && (
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-2 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                  <Star className="w-3 h-3 fill-current" />
                  <span>{item.rating}</span>
                </div>
              )}

              {/* Live Badge for Sports */}
              {activeTab === 'sports' && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  🔴 LIVE
                </div>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                {item.title}
              </h3>
              
              {activeTab === 'sports' ? (
                <div className="space-y-2">
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                    {item.type}
                  </p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {item.nextMatch}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                    {item.genre}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>{item.year}</span>
                    {activeTab === 'movies' ? (
                      <span>{item.duration}</span>
                    ) : (
                      <span>{item.seasons} Seasons • {item.episodes} Episodes</span>
                    )}
                  </div>
                </div>
              )}
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-3 line-clamp-2">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Premium Content Library
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover thousands of movies, series, and live sports from around the world
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderContent()}
        </motion.div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-xl">
              <span>View All {activeTab === 'movies' ? 'Movies' : activeTab === 'series' ? 'Series' : 'Sports'}</span>
              <Play className="w-5 h-5" />
            </button>
            
            <Link
              to="/checkout/quarterly"
              className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-200 dark:border-gray-700"
            >
              <span>Subscribe Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;