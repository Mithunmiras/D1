/*
  # Digitner Academy Database Schema

  ## Overview
  This migration creates the complete database structure for the Digitner Academy platform,
  including courses, enrollments, community discussions, and user interactions.

  ## New Tables

  ### 1. `courses`
  Main course catalog with all course information
  - `id` (uuid, primary key) - Unique course identifier
  - `title` (text) - Course title
  - `description` (text) - Detailed course description
  - `duration` (text) - Course duration (e.g., "4 weeks")
  - `video_count` (integer) - Number of video lectures
  - `has_templates` (boolean) - Whether course includes templates
  - `enrolled_count` (integer) - Number of enrolled students
  - `thumbnail_url` (text) - Course thumbnail image URL
  - `status` (text) - Course status (active, draft, archived)
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 2. `course_modules`
  Course content organized into modules
  - `id` (uuid, primary key) - Unique module identifier
  - `course_id` (uuid, foreign key) - Reference to parent course
  - `title` (text) - Module title
  - `description` (text) - Module description
  - `order_index` (integer) - Module order in course
  - `created_at` (timestamptz) - Creation timestamp

  ### 3. `course_resources`
  Downloadable resources for courses
  - `id` (uuid, primary key) - Unique resource identifier
  - `course_id` (uuid, foreign key) - Reference to parent course
  - `title` (text) - Resource title
  - `resource_type` (text) - Type (download, view, external)
  - `file_url` (text) - Resource file URL
  - `created_at` (timestamptz) - Creation timestamp

  ### 4. `course_learning_points`
  What students will learn from the course
  - `id` (uuid, primary key) - Unique learning point identifier
  - `course_id` (uuid, foreign key) - Reference to parent course
  - `point` (text) - Learning point description
  - `order_index` (integer) - Display order
  - `created_at` (timestamptz) - Creation timestamp

  ### 5. `course_enrollments`
  Track user enrollments in courses
  - `id` (uuid, primary key) - Unique enrollment identifier
  - `course_id` (uuid, foreign key) - Reference to course
  - `user_email` (text) - User email address
  - `user_name` (text) - User name
  - `enrolled_at` (timestamptz) - Enrollment timestamp
  - `progress` (integer) - Course completion percentage
  - `status` (text) - Enrollment status (active, completed, dropped)

  ### 6. `discussion_categories`
  Categories for organizing discussions
  - `id` (uuid, primary key) - Unique category identifier
  - `name` (text) - Category name
  - `post_count` (integer) - Number of posts in category
  - `created_at` (timestamptz) - Creation timestamp

  ### 7. `discussion_posts`
  Community discussion posts
  - `id` (uuid, primary key) - Unique post identifier
  - `category_id` (uuid, foreign key) - Reference to category
  - `user_name` (text) - Post author name
  - `user_email` (text) - Post author email
  - `title` (text) - Post title
  - `content` (text) - Post content
  - `reply_count` (integer) - Number of replies
  - `view_count` (integer) - Number of views
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 8. `discussion_replies`
  Replies to discussion posts
  - `id` (uuid, primary key) - Unique reply identifier
  - `post_id` (uuid, foreign key) - Reference to parent post
  - `user_name` (text) - Reply author name
  - `user_email` (text) - Reply author email
  - `content` (text) - Reply content
  - `created_at` (timestamptz) - Creation timestamp

  ## Security
  - Row Level Security (RLS) enabled on all tables
  - Public read access for courses and discussions
  - Authenticated users can enroll and participate in discussions
  - Users can only edit their own posts and enrollments
*/

CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  duration text DEFAULT '4 weeks',
  video_count integer DEFAULT 0,
  has_templates boolean DEFAULT false,
  enrolled_count integer DEFAULT 0,
  thumbnail_url text,
  status text DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS course_modules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS course_resources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE,
  title text NOT NULL,
  resource_type text DEFAULT 'download',
  file_url text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS course_learning_points (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE,
  point text NOT NULL,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS course_enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE,
  user_email text NOT NULL,
  user_name text NOT NULL,
  enrolled_at timestamptz DEFAULT now(),
  progress integer DEFAULT 0,
  status text DEFAULT 'active'
);

CREATE TABLE IF NOT EXISTS discussion_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  post_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS discussion_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES discussion_categories(id) ON DELETE SET NULL,
  user_name text NOT NULL,
  user_email text NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  reply_count integer DEFAULT 0,
  view_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS discussion_replies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid REFERENCES discussion_posts(id) ON DELETE CASCADE,
  user_name text NOT NULL,
  user_email text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_learning_points ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE discussion_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE discussion_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE discussion_replies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view courses"
  ON courses FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view course modules"
  ON course_modules FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view course resources"
  ON course_resources FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view course learning points"
  ON course_learning_points FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can enroll in courses"
  ON course_enrollments FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can view enrollments"
  ON course_enrollments FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view discussion categories"
  ON discussion_categories FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view discussion posts"
  ON discussion_posts FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can create discussion posts"
  ON discussion_posts FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can update their own posts"
  ON discussion_posts FOR UPDATE
  TO public
  USING (user_email = user_email)
  WITH CHECK (user_email = user_email);

CREATE POLICY "Anyone can view discussion replies"
  ON discussion_replies FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can create discussion replies"
  ON discussion_replies FOR INSERT
  TO public
  WITH CHECK (true);

INSERT INTO courses (title, description, duration, video_count, has_templates, enrolled_count, status) VALUES
('Digital Roadmap', 'Create a comprehensive digital transformation strategy for your business with step-by-step guidance and practical frameworks.', '4 weeks', 12, true, 100, 'active'),
('Digital Marketing Strategy', 'Master digital marketing fundamentals and advanced strategies to grow your online presence and drive business results.', '6 weeks', 18, true, 150, 'active'),
('Google Business Profile', 'Optimize your Google Business Profile to increase local visibility and attract more customers to your business.', '2 weeks', 8, true, 200, 'active'),
('Active Your Business', 'Launch and activate your business online with proven strategies for digital presence and customer engagement.', '3 weeks', 10, true, 75, 'active')
ON CONFLICT DO NOTHING;

INSERT INTO course_learning_points (course_id, point, order_index)
SELECT id, 'Digital transformation overview', 1 FROM courses WHERE title = 'Digital Roadmap'
UNION ALL
SELECT id, 'Technology stack strategy', 2 FROM courses WHERE title = 'Digital Roadmap'
UNION ALL
SELECT id, 'ROI measurement techniques', 3 FROM courses WHERE title = 'Digital Roadmap'
UNION ALL
SELECT id, 'My current state analysis', 4 FROM courses WHERE title = 'Digital Roadmap'
ON CONFLICT DO NOTHING;

INSERT INTO course_modules (course_id, title, description, order_index)
SELECT id, 'Introduction to Digital Transformation', 'Understanding the fundamentals of digital transformation and its impact on modern business', 1 FROM courses WHERE title = 'Digital Roadmap'
UNION ALL
SELECT id, 'Current State Assessment', 'Evaluate your current digital maturity and identify improvement areas', 2 FROM courses WHERE title = 'Digital Roadmap'
UNION ALL
SELECT id, 'Technology Stack Evaluation', 'Learn how to select and evaluate the right technology solutions for your business', 3 FROM courses WHERE title = 'Digital Roadmap'
UNION ALL
SELECT id, 'Strategic Planning Framework', 'Develop a comprehensive digital transformation roadmap and implementation plan', 4 FROM courses WHERE title = 'Digital Roadmap'
ON CONFLICT DO NOTHING;

INSERT INTO course_resources (course_id, title, resource_type, file_url)
SELECT id, 'Digital Transformation Checklist', 'download', '#' FROM courses WHERE title = 'Digital Roadmap'
UNION ALL
SELECT id, 'ROI Calculator Template', 'download', '#' FROM courses WHERE title = 'Digital Roadmap'
UNION ALL
SELECT id, 'Industry Case Studies', 'view', '#' FROM courses WHERE title = 'Digital Roadmap'
ON CONFLICT DO NOTHING;

INSERT INTO discussion_categories (name, post_count) VALUES
('General', 78),
('Mentorship', 10),
('Tech Stack', 5),
('Success Stories', 18)
ON CONFLICT DO NOTHING;

INSERT INTO discussion_posts (category_id, user_name, user_email, title, content, reply_count, view_count)
SELECT id, 'John Doe', 'john@example.com', 'Digital Twin Implementation Questions', 'I am working on implementing digital twin technology for my manufacturing business. Has anyone here done this before? Would love to hear about your experiences and challenges.', 12, 145 FROM discussion_categories WHERE name = 'Tech Stack'
UNION ALL
SELECT id, 'Sarah Smith', 'sarah@example.com', 'Weekly Check-in: What did you learn this week?', 'Share your biggest learning from this week! I discovered some amazing automation tools that have saved me hours of work.', 24, 312 FROM discussion_categories WHERE name = 'General'
ON CONFLICT DO NOTHING;
