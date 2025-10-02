import React, { useState, useEffect } from 'react';
import { FiMessageSquare, FiEye, FiPlus } from 'react-icons/fi';
import CreatePostModal from './CreatePostModal';
import DiscussionThread from './DiscussionThread';

const CommunityDiscussions = () => {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Mock data for categories and posts
      const mockCategories = [
        { id: 1, name: 'General Discussion', post_count: 5 },
        { id: 2, name: 'React Help', post_count: 8 },
        { id: 3, name: 'JavaScript Tips', post_count: 12 },
        { id: 4, name: 'Career Advice', post_count: 3 }
      ];

      const mockPosts = [
        {
          id: 1,
          title: 'Getting started with React Hooks',
          content: 'I\'m new to React and wondering about the best practices for using hooks...',
          user_name: 'Alice Johnson',
          user_email: 'alice@example.com',
          created_at: '2024-01-15T10:30:00Z',
          reply_count: 5,
          view_count: 23,
          discussion_categories: { name: 'React Help' }
        },
        {
          id: 2,
          title: 'JavaScript ES6 Features You Should Know',
          content: 'Let\'s discuss the most important ES6 features that every developer should master...',
          user_name: 'Bob Smith',
          user_email: 'bob@example.com',
          created_at: '2024-01-14T15:45:00Z',
          reply_count: 12,
          view_count: 45,
          discussion_categories: { name: 'JavaScript Tips' }
        },
        {
          id: 3,
          title: 'How to transition from junior to senior developer?',
          content: 'I\'ve been working as a junior developer for 2 years now. What steps should I take...',
          user_name: 'Carol Davis',
          user_email: 'carol@example.com',
          created_at: '2024-01-13T09:20:00Z',
          reply_count: 8,
          view_count: 67,
          discussion_categories: { name: 'Career Advice' }
        }
      ];
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      setCategories(mockCategories);
      setPosts(mockPosts);
    } catch (error) {
      console.error('Error fetching discussions:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.discussion_categories?.name === selectedCategory);

  const handlePostCreated = () => {
    setShowCreateModal(false);
    fetchData();
  };

  if (selectedPost) {
    return (
      <DiscussionThread
        post={selectedPost}
        onBack={() => {
          setSelectedPost(null);
          fetchData();
        }}
      />
    );
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Community Discussions</h2>
          <p className="text-gray-600">Share your thoughts, ask questions, and connect with fellow learners.</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          <FiPlus className="mr-2" />
          Add New Post
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6 sticky top-6">
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                All Discussions
                <span className="float-right text-sm text-gray-500">
                  {posts.length}
                </span>
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.name
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {category.name}
                  <span className="float-right text-sm text-gray-500">
                    {category.post_count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="bg-white rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2 mb-3">{post.content}</p>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <span className="font-medium text-gray-700">{post.user_name}</span>
                        <span>•</span>
                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                        {post.discussion_categories && (
                          <>
                            <span>•</span>
                            <span className="text-blue-600">
                              {post.discussion_categories.name}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <FiMessageSquare className="mr-2" />
                      <span>{post.reply_count} replies</span>
                    </div>
                    <div className="flex items-center">
                      <FiEye className="mr-2" />
                      <span>{post.view_count} views</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && filteredPosts.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-gray-500 text-lg mb-4">No discussions found in this category.</p>
              <button
                onClick={() => setShowCreateModal(true)}
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Be the first to start a discussion
              </button>
            </div>
          )}
        </div>
      </div>

      {showCreateModal && (
        <CreatePostModal
          categories={categories}
          onClose={() => setShowCreateModal(false)}
          onPostCreated={handlePostCreated}
        />
      )}
    </div>
  );
};

export default CommunityDiscussions;
