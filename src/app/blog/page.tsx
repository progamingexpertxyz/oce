"use client";
import { useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { ArrowRight, Calendar } from 'lucide-react';

const BlogPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Academic Tips & Resources Blog | Online Course Experts';
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      title: '5 Time Management Hacks for Nursing Students',
      excerpt: 'Balancing clinical rotations, coursework, and personal life can be challenging. These practical time management strategies can help nursing students stay organized and reduce stress.',
      date: 'May 15, 2024',
      category: 'Study Strategies',
      image: 'https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Active Learning Strategies for Online Courses',
      excerpt: 'Online learning requires different engagement techniques than traditional classrooms. Discover effective methods to actively participate in virtual learning environments.',
      date: 'May 1, 2024',
      category: 'Online Learning',
      image: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Decoding Assignment Prompts: A Step-by-Step Guide',
      excerpt: 'Understanding exactly what your instructor is asking for is the first step to a successful assignment. Learn how to analyze prompts effectively.',
      date: 'April 22, 2024',
      category: 'Academic Writing',
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Maintaining Academic Integrity in Online Learning',
      excerpt: 'Ethical academic conduct is essential in all learning environments. This guide outlines best practices for maintaining integrity in virtual classrooms.',
      date: 'April 10, 2024',
      category: 'Academic Ethics',
      image: 'https://images.pexels.com/photos/5428146/pexels-photo-5428146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Mastering APA Citation Style: Common Mistakes and How to Avoid Them',
      excerpt: 'Proper citations are crucial for academic writing. This article covers frequently made errors in APA formatting and provides solutions.',
      date: 'March 28, 2024',
      category: 'Citation Guides',
      image: 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Study Techniques That Actually Work, According to Science',
      excerpt: 'Not all study methods are created equal. Explore evidence-based learning techniques that have been proven effective through research.',
      date: 'March 15, 2024',
      category: 'Study Strategies',
      image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const categories = [
    'All Categories',
    'Study Strategies',
    'Online Learning',
    'Academic Writing',
    'Citation Guides',
    'Academic Ethics',
    'Nursing Education',
  ];

  return (
    <>
      <Head>
        <title>Academic Tips & Resources Blog | Online Course Experts</title>
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6">Academic Tips & Resources</h1>
              <p className="text-lg text-neutral-700">
                Explore helpful articles, guides, and tips to enhance your academic journey. Our resources are designed to support your learning and academic success.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Categories */}
        <section className="py-8 border-b border-neutral-200">
          <div className="container-custom">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0
                      ? 'bg-primary-500 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="section">
          <div className="container-custom">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <span className="bg-secondary-100 text-secondary-600 text-sm font-medium px-3 py-1 rounded-full">Featured Post</span>
                <h2 className="text-3xl font-bold mt-4 mb-4">{blogPosts[0].title}</h2>
                <div className="flex items-center text-neutral-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{blogPosts[0].date}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm">{blogPosts[0].category}</span>
                </div>
                <p className="text-lg text-neutral-600 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <Button variant="primary" link="#">
                  Read Article
                </Button>
              </div>
              <div>
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="section bg-neutral-50">
          <div className="container-custom">
            <SectionTitle
              title="Latest Articles"
              subtitle="Browse our collection of resources to support your academic journey."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <motion.article
                  key={post.title}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">{post.category}</span>
                    <h3 className="text-xl font-bold mt-3 mb-2">{post.title}</h3>
                    <div className="flex items-center text-neutral-500 text-sm mb-3">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                    <a href="#" className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="section bg-primary-500 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Never Miss a New Resource</h2>
              <p className="text-lg mb-8 text-white/90">
                Subscribe to receive notifications when we publish new articles and guides to support your academic journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-md flex-grow text-neutral-800 focus:outline-none focus:ring-2 focus:ring-secondary-400"
                />
                <Button variant="secondary">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm mt-4 text-white/70">
                We respect your privacy and will never share your information. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default BlogPage;
