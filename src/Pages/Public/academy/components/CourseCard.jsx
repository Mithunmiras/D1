import React from 'react';
import { FiClock, FiVideo, FiFileText, FiUsers } from 'react-icons/fi';

const CourseCard = ({ course, onSelect }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer group" onClick={onSelect}>
      <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
        <h3 className="text-2xl font-bold text-white text-center px-4">{course.title}</h3>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-6 line-clamp-3">{course.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <FiClock className="mr-2 text-blue-600" />
            <span>{course.duration} duration</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FiVideo className="mr-2 text-blue-600" />
            <span>{course.video_count} video lectures</span>
          </div>
          {course.has_templates && (
            <div className="flex items-center text-sm text-gray-600">
              <FiFileText className="mr-2 text-blue-600" />
              <span>Templates included</span>
            </div>
          )}
          <div className="flex items-center text-sm text-gray-600">
            <FiUsers className="mr-2 text-blue-600" />
            <span>{course.enrolled_count} students enrolled</span>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors group-hover:bg-blue-700">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
