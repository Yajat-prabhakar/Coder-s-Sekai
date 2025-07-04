import React from 'react';
import { ArrowRight, Play, Code2, Users, Trophy } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 overflow-hidden transition-colors duration-200">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200 dark:bg-purple-800 rounded-full blur-xl opacity-70"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full blur-xl opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-200">
                Master Programming
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Your Way
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-200">
                Learn programming languages through interactive tutorials, comprehensive examples, 
                and a supportive community. From beginner to expert, we've got you covered.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg transition-colors duration-200">
                <Code2 className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Interactive Coding</p>
              </div>
              <div className="text-center p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg transition-colors duration-200">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Community Support</p>
              </div>
              <div className="text-center p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg transition-colors duration-200">
                <Trophy className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Achievement System</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center group">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-all duration-200 flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content - Code Preview */}
          <div className="lg:pl-8">
            <div className="bg-gray-900 dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gray-800 dark:bg-gray-700 px-4 py-3 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 dark:text-gray-300 text-sm ml-4">hello_world.py</span>
              </div>
              <div className="p-6 text-green-400 font-mono text-sm">
                <div className="space-y-2">
                  <div><span className="text-purple-400">def</span> <span className="text-blue-400">greet</span>(<span className="text-orange-400">name</span>):</div>
                  <div className="ml-4"><span className="text-purple-400">return</span> <span className="text-yellow-300">f"Hello, {name}!"</span></div>
                  <div className="mt-4"><span className="text-gray-500"># Interactive example</span></div>
                  <div><span className="text-blue-400">print</span>(<span className="text-blue-400">greet</span>(<span className="text-yellow-300">"Coder"</span>))</div>
                  <div className="mt-2 text-white">→ Hello, Coder!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;