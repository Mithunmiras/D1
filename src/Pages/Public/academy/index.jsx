import React, { useState } from 'react';
import DigitalCourses from './components/DigitalCourses';
import CommunityDiscussions from './components/CommunityDiscussions';

const AcademyPage = () => {
  const [activeTab, setActiveTab] = useState('courses');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Digitner Academy</h1>
          <p className="text-xl text-gray-600">
            Learn, grow, and connect with our comprehensive digital learning platform
          </p>
        </div>

        <div className="mb-8 border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('courses')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'courses'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Digital Courses
            </button>
            <button
              onClick={() => setActiveTab('discussions')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'discussions'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Community Discussions
            </button>
          </nav>
        </div>

        {activeTab === 'courses' ? <DigitalCourses /> : <CommunityDiscussions />}
      </div>
    </div>
  );
};

export default AcademyPage;
