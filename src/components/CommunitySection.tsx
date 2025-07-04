import React from 'react';
import { MessageCircle, ThumbsUp, Award, HelpCircle, Users, Star } from 'lucide-react';

const CommunitySection = () => {
  const recentQuestions = [
    {
      title: "How to implement binary search in Python?",
      author: "CodeNewbie23",
      votes: 12,
      answers: 5,
      tags: ["Python", "Algorithms", "Beginner"],
      time: "2 hours ago"
    },
    {
      title: "Best practices for React state management",
      author: "ReactDev_Pro",
      votes: 8,
      answers: 3,
      tags: ["React", "State Management", "Best Practices"],
      time: "4 hours ago"
    },
    {
      title: "Understanding JavaScript closures with examples",
      author: "JSExplorer",
      votes: 15,
      answers: 7,
      tags: ["JavaScript", "Closures", "Functions"],
      time: "6 hours ago"
    }
  ];

  const topContributors = [
    { name: "AlexCoder", points: 2450, badge: "Expert", specialties: ["Python", "ML"] },
    { name: "ReactMaster", points: 1890, badge: "Pro", specialties: ["React", "JS"] },
    { name: "JavaGuru", points: 1720, badge: "Pro", specialties: ["Java", "Spring"] },
    { name: "CodeHelper", points: 1540, badge: "Mentor", specialties: ["C++", "DSA"] }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
            Join Our Coding Community
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
            Get help, share knowledge, and grow together with fellow programmers. 
            Ask questions, provide answers, and earn reputation points.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg transition-colors duration-200">
            <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">150K+</div>
            <div className="text-gray-600 dark:text-gray-400">Active Members</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg transition-colors duration-200">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <MessageCircle className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">45K+</div>
            <div className="text-gray-600 dark:text-gray-400">Questions Answered</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg transition-colors duration-200">
            <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">8.2K+</div>
            <div className="text-gray-600 dark:text-gray-400">Solutions Provided</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg transition-colors duration-200">
            <div className="bg-orange-100 dark:bg-orange-900/30 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <ThumbsUp className="h-8 w-8 text-orange-600 dark:text-orange-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">92%</div>
            <div className="text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Questions */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-colors duration-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Questions</h3>
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all">
                  Ask Question
                </button>
              </div>

              <div className="space-y-6">
                {recentQuestions.map((question, index) => (
                  <div key={index} className="border-b border-gray-100 dark:border-gray-700 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-start space-x-4">
                      <div className="flex flex-col items-center space-y-1 min-w-[60px]">
                        <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{question.votes}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-green-600 dark:text-green-400">
                          <MessageCircle className="h-4 w-4" />
                          <span>{question.answers}</span>
                        </div>
                      </div>

                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 cursor-pointer mb-2 transition-colors duration-200">
                          {question.title}
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {question.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                          <span>by {question.author}</span>
                          <span>{question.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Contributors */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-colors duration-200">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Top Contributors</h3>
              
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {contributor.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold text-gray-900 dark:text-white">{contributor.name}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          contributor.badge === 'Expert' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300' :
                          contributor.badge === 'Pro' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' :
                          'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                        }`}>
                          {contributor.badge}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{contributor.points} points</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {contributor.specialties.map((specialty, specIndex) => (
                          <span key={specIndex} className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-xs">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                View All Contributors
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;