import React from 'react';
import { Code, Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Coder's Sekai</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-6 leading-relaxed">
              Empowering developers worldwide with interactive programming education 
              and a supportive community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Learning */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Learning</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Python</a></li>
              <li><a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">JavaScript</a></li>
              <li><a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Java</a></li>
              <li><a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">C++</a></li>
              <li><a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">React</a></li>
              <li><a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Node.js</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Community</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Ask Questions</a></li>
              <li><a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Help Others</a></li>
              <li><a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Leaderboard</a></li>
              <li><a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Code Challenges</a></li>
              <li><a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Discussion Forums</a></li>
              <li><a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Study Groups</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            © 2024 Coder's Sekai. All rights reserved.
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for developers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;