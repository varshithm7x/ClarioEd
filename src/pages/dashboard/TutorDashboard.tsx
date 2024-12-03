import React from 'react';
import { Link } from 'react-router-dom';

const TutorDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Dashboard Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Tutor Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                View Open Questions
              </button>
              <div className="relative">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stats Section */}
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Questions Answered</h3>
              <p className="text-3xl font-bold text-blue-600">156</p>
              <p className="text-sm text-gray-500 mt-1">Total answers</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Active Students</h3>
              <p className="text-3xl font-bold text-green-600">28</p>
              <p className="text-sm text-gray-500 mt-1">Current students</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hours Taught</h3>
              <p className="text-3xl font-bold text-purple-600">124</p>
              <p className="text-sm text-gray-500 mt-1">Total teaching time</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Earnings</h3>
              <p className="text-3xl font-bold text-yellow-600">$1,248</p>
              <p className="text-sm text-gray-500 mt-1">This month</p>
            </div>
          </div>

          {/* Main Section */}
          <div className="col-span-2">
            {/* Pending Questions */}
            <div className="bg-white rounded-lg shadow mb-6">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Pending Questions</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="px-6 py-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          Help with calculus integration
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">Mathematics • 15 minutes ago</p>
                        <p className="text-sm text-gray-600 mt-2">
                          Student needs help understanding integration by parts...
                        </p>
                      </div>
                      <button className="px-4 py-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100">
                        Answer
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Sessions */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Today's Sessions</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {[1, 2].map((item) => (
                  <div key={item} className="px-6 py-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          Advanced Physics - John Doe
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          3:00 PM - 4:00 PM • Quantum Mechanics
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-green-50 text-green-700 rounded-md hover:bg-green-100">
                          Start
                        </button>
                        <button className="px-3 py-1 bg-gray-50 text-gray-700 rounded-md hover:bg-gray-100">
                          Reschedule
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-1">
            {/* Rating & Reviews */}
            <div className="bg-white rounded-lg shadow mb-6">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Your Rating</h2>
              </div>
              <div className="p-6">
                <div className="text-center">
                  <p className="text-5xl font-bold text-yellow-500">4.8</p>
                  <div className="flex justify-center mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Based on 124 reviews</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
              </div>
              <div className="p-6 space-y-4">
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  Update Availability
                </button>
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  View Earnings Report
                </button>
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  Manage Subjects
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TutorDashboard; 