import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Calendar, Clock, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const LiveSportsSection: React.FC = () => {
  const upcomingMatches = [
    {
      id: 1,
      league: 'UEFA Champions League',
      homeTeam: 'Real Madrid',
      awayTeam: 'Manchester City',
      homeFlag: '🇪🇸',
      awayFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      date: '2025-02-15',
      time: '21:00',
      venue: 'Santiago Bernabéu',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?w=800&h=400&fit=crop',
      isLive: false,
      viewers: '2.5M'
    },
    {
      id: 2,
      league: 'Premier League',
      homeTeam: 'Arsenal',
      awayTeam: 'Liverpool',
      homeFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      awayFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      date: '2025-02-12',
      time: '17:30',
      venue: 'Emirates Stadium',
      image: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?w=800&h=400&fit=crop',
      isLive: true,
      viewers: '1.8M'
    },
    {
      id: 3,
      league: 'La Liga',
      homeTeam: 'Barcelona',
      awayTeam: 'Atletico Madrid',
      homeFlag: '🇪🇸',
      awayFlag: '🇪🇸',
      date: '2025-02-14',
      time: '20:00',
      venue: 'Camp Nou',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?w=800&h=400&fit=crop',
      isLive: false,
      viewers: '1.2M'
    }
  ];

  const leagues = [
    {
      name: 'UEFA Champions League',
      logo: '🏆',
      description: 'Europe\'s premier club competition',
      matches: 156,
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Premier League',
      logo: '👑',
      description: 'England\'s top football division',
      matches: 380,
      gradient: 'from-purple-600 to-purple-800'
    },
    {
      name: 'La Liga',
      logo: '⚽',
      description: 'Spain\'s premier football league',
      matches: 380,
      gradient: 'from-red-600 to-red-800'
    },
    {
      name: 'Serie A',
      logo: '🇮🇹',
      description: 'Italy\'s top professional league',
      matches: 380,
      gradient: 'from-emerald-600 to-emerald-800'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Live Sports & 
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"> Champions League</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Never miss a moment of the action with our comprehensive sports coverage
            </p>
          </motion.div>
        </div>

        {/* Upcoming Matches */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Upcoming Matches</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingMatches.map((match, index) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={match.image}
                    alt={`${match.homeTeam} vs ${match.awayTeam}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  
                  {match.isLive && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse flex items-center space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                      <span>LIVE</span>
                    </div>
                  )}

                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{match.viewers}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs text-gray-300 mb-2">{match.league}</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{match.homeFlag}</span>
                        <span className="font-semibold">{match.homeTeam}</span>
                      </div>
                      <div className="text-gray-300 font-bold">VS</div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold">{match.awayTeam}</span>
                        <span className="text-2xl">{match.awayFlag}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(match.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{match.time}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-sm text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{match.venue}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leagues Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Leagues</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leagues.map((league, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${league.gradient} rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-xl`}
              >
                <div className="text-4xl mb-4">{league.logo}</div>
                <h4 className="text-lg font-bold mb-2">{league.name}</h4>
                <p className="text-sm text-white/80 mb-4">{league.description}</p>
                <div className="bg-white/20 rounded-lg px-3 py-1 text-sm font-semibold">
                  {league.matches} Matches/Season
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              Never Miss Your Team Again
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Get access to all major football leagues, Champions League, and exclusive sports content in stunning 4K quality
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/checkout/quarterly"
                className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-xl"
              >
                Start Watching Now
              </Link>
              
              <button className="bg-green-600/20 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-600/30 transition-colors border border-green-400/30">
                View Schedule
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveSportsSection;