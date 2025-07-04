import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Edit3, 
  Save, 
  X, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Calendar, 
  Award, 
  MessageCircle, 
  HelpCircle,
  Camera,
  ExternalLink
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    github: user?.github || '',
    linkedin: user?.linkedin || '',
    twitter: user?.twitter || '',
    profilePicture: user?.profilePicture || ''
  });

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      github: user?.github || '',
      linkedin: user?.linkedin || '',
      twitter: user?.twitter || '',
      profilePicture: user?.profilePicture || ''
    });
    setIsEditing(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Please sign in to view your profile</h2>
          <Link to="/signin" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center space-x-4">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center"
                >
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center"
              >
                <Edit3 className="h-4 w-4 mr-2" />
                Edit Profile
              </button>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-200">
              {/* Profile Picture */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src={formData.profilePicture || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-purple-200 dark:border-purple-800"
                  />
                  {isEditing && (
                    <button className="absolute bottom-0 right-0 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors">
                      <Camera className="h-4 w-4" />
                    </button>
                  )}
                </div>
                
                {isEditing ? (
                  <div className="mt-4">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="text-xl font-bold text-center w-full bg-transparent border-b-2 border-purple-300 dark:border-purple-700 focus:outline-none focus:border-purple-500 text-gray-900 dark:text-white"
                    />
                  </div>
                ) : (
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-4">{user.name}</h2>
                )}
                
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Member since {new Date(user.joinDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long' 
                  })}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{user.reputation}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Reputation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{user.questionsAsked}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Questions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">{user.answersGiven}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Answers</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  {isEditing ? (
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="flex-1 bg-transparent border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500 text-gray-900 dark:text-white"
                    />
                  ) : (
                    <span className="text-gray-600 dark:text-gray-300">{user.email}</span>
                  )}
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Joined {new Date(user.joinDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Social Links */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-200">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Social Links</h3>
              
              <div className="space-y-4">
                {/* GitHub */}
                <div className="flex items-center space-x-4">
                  <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  {isEditing ? (
                    <input
                      type="url"
                      value={formData.github}
                      onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                      placeholder="https://github.com/username"
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  ) : (
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">
                        {user.github || 'Not connected'}
                      </span>
                      {user.github && (
                        <a
                          href={user.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* LinkedIn */}
                <div className="flex items-center space-x-4">
                  <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  {isEditing ? (
                    <input
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      placeholder="https://linkedin.com/in/username"
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  ) : (
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">
                        {user.linkedin || 'Not connected'}
                      </span>
                      {user.linkedin && (
                        <a
                          href={user.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Twitter */}
                <div className="flex items-center space-x-4">
                  <Twitter className="h-6 w-6 text-blue-400 dark:text-blue-300" />
                  {isEditing ? (
                    <input
                      type="url"
                      value={formData.twitter}
                      onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                      placeholder="https://twitter.com/username"
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  ) : (
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">
                        {user.twitter || 'Not connected'}
                      </span>
                      {user.twitter && (
                        <a
                          href={user.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Activity Overview */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-200">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Activity Overview</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="bg-purple-100 dark:bg-purple-900/40 p-3 rounded-full">
                    <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{user.reputation}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Total Reputation</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-full">
                    <HelpCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{user.questionsAsked}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Questions Asked</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{user.answersGiven}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Answers Given</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="bg-orange-100 dark:bg-orange-900/40 p-3 rounded-full">
                    <Award className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">5</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Badges Earned</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;