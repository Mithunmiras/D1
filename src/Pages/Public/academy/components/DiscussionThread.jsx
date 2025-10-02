import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiMessageSquare, FiEye } from 'react-icons/fi';

const DiscussionThread = ({ post, onBack }) => {
  const [replies, setReplies] = useState([]);
  const [replyForm, setReplyForm] = useState({
    name: '',
    email: '',
    content: ''
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchReplies();
    incrementViewCount();
  }, [post.id]);

  const fetchReplies = async () => {
    try {
      // Mock replies data
      const mockReplies = [
        {
          id: 1,
          post_id: post.id,
          user_name: 'David Wilson',
          user_email: 'david@example.com',
          content: 'Great question! I\'ve been working with hooks for a while now and I\'d recommend starting with useState and useEffect...',
          created_at: '2024-01-15T14:20:00Z'
        },
        {
          id: 2,
          post_id: post.id,
          user_name: 'Sarah Chen',
          user_email: 'sarah@example.com',
          content: 'I agree with David. Also, make sure to check out the official React documentation on hooks - it\'s really comprehensive.',
          created_at: '2024-01-15T16:45:00Z'
        }
      ];
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setReplies(post.id === 1 ? mockReplies : []); // Only show replies for the first post
    } catch (error) {
      console.error('Error fetching replies:', error);
    } finally {
      setLoading(false);
    }
  };

  const incrementViewCount = async () => {
    try {
      // Mock view count increment
      console.log(`View count incremented for post ${post.id}`);
    } catch (error) {
      console.error('Error updating view count:', error);
    }
  };

  const handleSubmitReply = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful reply creation
      console.log('Mock reply created:', {
        post_id: post.id,
        user_name: replyForm.name,
        user_email: replyForm.email,
        content: replyForm.content,
        created_at: new Date().toISOString()
      });

      // Add the new reply to the current replies
      const newReply = {
        id: Date.now(),
        post_id: post.id,
        user_name: replyForm.name,
        user_email: replyForm.email,
        content: replyForm.content,
        created_at: new Date().toISOString()
      };
      
      setReplies(prev => [...prev, newReply]);
      setReplyForm({ name: '', email: '', content: '' });
    } catch (err) {
      setError('Failed to post reply. Please try again.');
      console.error('Reply error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setReplyForm({
      ...replyForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-700 mb-6 font-semibold"
      >
        <FiArrowLeft className="mr-2" />
        Back to Discussions
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
        <div className="p-8">
          <div className="mb-6">
            {post.discussion_categories && (
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                {post.discussion_categories.name}
              </span>
            )}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex items-center text-sm text-gray-500 space-x-4 mb-6">
              <span className="font-medium text-gray-700">{post.user_name}</span>
              <span>•</span>
              <span>{new Date(post.created_at).toLocaleDateString()}</span>
            </div>
          </div>

          <div className="prose max-w-none mb-6">
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{post.content}</p>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-500 pt-6 border-t border-gray-200">
            <div className="flex items-center">
              <FiMessageSquare className="mr-2" />
              <span>{post.reply_count} replies</span>
            </div>
            <div className="flex items-center">
              <FiEye className="mr-2" />
              <span>{post.view_count + 1} views</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {replies.length} {replies.length === 1 ? 'Reply' : 'Replies'}
        </h2>

        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        ) : (
          <div className="space-y-6">
            {replies.map((reply) => (
              <div key={reply.id} className="border-l-4 border-blue-600 pl-6 py-4">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="font-semibold text-gray-900">{reply.user_name}</span>
                  <span className="text-sm text-gray-500">
                    {new Date(reply.created_at).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{reply.content}</p>
              </div>
            ))}

            {replies.length === 0 && (
              <p className="text-gray-500 text-center py-8">
                No replies yet. Be the first to respond!
              </p>
            )}
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Add Your Reply</h3>
        <form onSubmit={handleSubmitReply}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={replyForm.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={replyForm.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              Your Reply
            </label>
            <textarea
              id="content"
              name="content"
              value={replyForm.content}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Share your thoughts..."
            ></textarea>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {submitting ? 'Posting...' : 'Post Reply'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DiscussionThread;
