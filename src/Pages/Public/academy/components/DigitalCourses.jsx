import React, { useState, useEffect } from 'react';
import { supabase } from '../../../../lib/supabase';
import CourseCard from './CourseCard';
import CourseDetails from './CourseDetails';

const DigitalCourses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('status', 'active')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCourses(data || []);
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  if (selectedCourse) {
    return <CourseDetails course={selectedCourse} onBack={() => setSelectedCourse(null)} />;
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Digital Courses</h2>
        <p className="text-gray-600">Unlock your potential. Choose a course to start.</p>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onSelect={() => setSelectedCourse(course)}
            />
          ))}
        </div>
      )}

      {!loading && courses.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-500 text-lg">No courses available at the moment.</p>
        </div>
      )}
    </div>
  );
};

export default DigitalCourses;
