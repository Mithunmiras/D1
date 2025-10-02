import React, { useState, useEffect } from 'react';
import { supabase } from '../../../../lib/supabase';
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
      const [learningData, modulesData, resourcesData] = await Promise.all([
        supabase
          .from('course_learning_points')
          .select('*')
          .eq('course_id', course.id)
          .order('order_index'),
        supabase
          .from('course_modules')
          .select('*')
          .eq('course_id', course.id)
          .order('order_index'),
        supabase
          .from('course_resources')
          .select('*')
          .eq('course_id', course.id)
      ]);

      if (learningData.error) throw learningData.error;
      if (modulesData.error) throw modulesData.error;
      if (resourcesData.error) throw resourcesData.error;

      setLearningPoints(learningData.data || []);
      setModules(modulesData.data || []);
      setResources(resourcesData.data || []);
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
