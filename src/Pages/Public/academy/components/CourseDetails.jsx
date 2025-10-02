import React, { useState, useEffect } from 'react';
import { FiClock, FiVideo, FiFileText, FiUsers, FiArrowLeft, FiDownload, FiEye, FiCheck } from 'react-icons/fi';
import EnrollmentModal from './EnrollmentModal';

const CourseDetails = ({ course, onBack }) => {
  const [learningPoints, setLearningPoints] = useState([]);
  const [modules, setModules] = useState([]);
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showEnrollModal, setShowEnrollModal] = useState(false);

  useEffect(() => {
    fetchCourseDetails();
  }, [course.id]);

  const fetchCourseDetails = async () => {
    try {
      // Mock course details data
      const mockLearningPoints = [
        { id: 1, course_id: course.id, point: 'Master the fundamentals of modern web development', order_index: 1 },
        { id: 2, course_id: course.id, point: 'Build responsive and interactive user interfaces', order_index: 2 },
        { id: 3, course_id: course.id, point: 'Understand component-based architecture', order_index: 3 },
        { id: 4, course_id: course.id, point: 'Learn state management and data flow', order_index: 4 },
        { id: 5, course_id: course.id, point: 'Deploy applications to production', order_index: 5 },
        { id: 6, course_id: course.id, point: 'Best practices and code optimization', order_index: 6 }
      ];

      const mockModules = [
        {
          id: 1,
          course_id: course.id,
          title: 'Introduction and Setup',
          description: 'Get started with the development environment and project structure',
          order_index: 1
        },
        {
          id: 2,
          course_id: course.id,
          title: 'Core Concepts',
          description: 'Learn the fundamental concepts and building blocks',
          order_index: 2
        },
        {
          id: 3,
          course_id: course.id,
          title: 'Advanced Techniques',
          description: 'Dive deeper into advanced patterns and optimization techniques',
          order_index: 3
        },
        {
          id: 4,
          course_id: course.id,
          title: 'Project Development',
          description: 'Build a complete project from start to finish',
          order_index: 4
        },
        {
          id: 5,
          course_id: course.id,
          title: 'Deployment and Production',
          description: 'Learn how to deploy and maintain your applications',
          order_index: 5
        }
      ];

      const mockResources = [
        {
          id: 1,
          course_id: course.id,
          title: 'Course Slides (PDF)',
          resource_type: 'download',
          file_url: '/placeholder.txt'
        },
        {
          id: 2,
          course_id: course.id,
          title: 'Code Examples',
          resource_type: 'download',
          file_url: '/placeholder.txt'
        },
        {
          id: 3,
          course_id: course.id,
          title: 'Additional Reading',
          resource_type: 'view',
          file_url: '/placeholder.txt'
        }
      ];
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 600));
      setLearningPoints(mockLearningPoints);
      setModules(mockModules);
      setResources(mockResources);
    } catch (error) {
      console.error('Error fetching course details:', error);
    } finally {
      setLoading(false);
    }
  };

  const getResourceIcon = (type) => {
    switch (type) {
      case 'download':
        return <FiDownload className="text-blue-600" />;
      case 'view':
        return <FiEye className="text-blue-600" />;
      default:
        return <FiFileText className="text-blue-600" />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-700 mb-6 font-semibold"
      >
        <FiArrowLeft className="mr-2" />
        Back to Courses
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-blue-100 text-lg mb-6">{course.description}</p>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center">
              <FiClock className="mr-2" size={20} />
              <span>{course.duration} duration</span>
            </div>
            <div className="flex items-center">
              <FiVideo className="mr-2" size={20} />
              <span>{course.video_count} video lectures</span>
            </div>
            {course.has_templates && (
              <div className="flex items-center">
                <FiFileText className="mr-2" size={20} />
                <span>Templates included</span>
              </div>
            )}
            <div className="flex items-center">
              <FiUsers className="mr-2" size={20} />
              <span>{course.enrolled_count} students enrolled</span>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        ) : (
          <div className="p-8">
            <div className="mb-8">
              <button
                onClick={() => setShowEnrollModal(true)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Course
              </button>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {learningPoints.map((point) => (
                  <div key={point.id} className="flex items-start">
                    <FiCheck className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{point.point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Modules</h2>
              <div className="space-y-4">
                {modules.map((module, index) => (
                  <div key={module.id} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                    <div className="flex items-start">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{module.title}</h3>
                        {module.description && (
                          <p className="text-gray-600">{module.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {resources.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Downloadable Resources</h2>
                <div className="space-y-3">
                  {resources.map((resource) => (
                    <div key={resource.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                      <div className="flex items-center">
                        {getResourceIcon(resource.resource_type)}
                        <span className="ml-3 font-medium text-gray-900">{resource.title}</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-semibold">
                        {resource.resource_type === 'download' ? 'Download' : 'View'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {showEnrollModal && (
        <EnrollmentModal
          course={course}
          onClose={() => setShowEnrollModal(false)}
        />
      )}
    </div>
  );
};

export default CourseDetails;
