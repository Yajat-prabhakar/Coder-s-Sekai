import React from 'react';
import { ArrowRight, Users, Book, Clock } from 'lucide-react';
import LanguageLogo from './LanguageLogos';

const languages = [
  {
    name: 'Python',
    description: 'Perfect for beginners with clear syntax and powerful libraries',
    color: 'from-green-400 to-blue-500',
    learners: '2.1M',
    lessons: 150,
    duration: '6 weeks'
  },
  {
    name: 'JavaScript',
    description: 'Essential for web development and modern applications',
    color: 'from-yellow-400 to-orange-500',
    learners: '3.2M',
    lessons: 180,
    duration: '8 weeks'
  },
  {
    name: 'Java',
    description: 'Robust object-oriented programming for enterprise applications',
    color: 'from-red-400 to-pink-500',
    learners: '1.8M',
    lessons: 200,
    duration: '10 weeks'
  },
  {
    name: 'C++',
    description: 'Systems programming and competitive programming mastery',
    color: 'from-purple-400 to-indigo-500',
    learners: '900K',
    lessons: 170,
    duration: '12 weeks'
  },
  {
    name: 'React',
    description: 'Build modern user interfaces with component-based architecture',
    color: 'from-cyan-400 to-blue-500',
    learners: '1.5M',
    lessons: 120,
    duration: '5 weeks'
  },
  {
    name: 'Node.js',
    description: 'Server-side JavaScript for full-stack development',
    color: 'from-green-500 to-teal-500',
    learners: '1.1M',
    lessons: 140,
    duration: '7 weeks'
  }
];

const LanguageCards = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
            Choose Your Programming Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
            From beginner-friendly Python to advanced system programming, 
            start your coding adventure with interactive tutorials and real-world projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {languages.map((lang, index) => (
            <div
              key={lang.name}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-transparent hover:-translate-y-2"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-br ${lang.color} p-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="mb-2">
                      <LanguageLogo language={lang.name} className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{lang.name}</h3>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <ArrowRight className="h-6 w-6 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-200">
                  {lang.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Users className="h-5 w-5 text-gray-400 dark:text-gray-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">{lang.learners}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Learners</div>
                  </div>
                  <div className="text-center">
                    <Book className="h-5 w-5 text-gray-400 dark:text-gray-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">{lang.lessons}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Lessons</div>
                  </div>
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-gray-400 dark:text-gray-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">{lang.duration}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Duration</div>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gray-900 dark:bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200">
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageCards;