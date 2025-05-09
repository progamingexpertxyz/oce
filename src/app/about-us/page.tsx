"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/app/components/ui/SectionTitle';
import Button from '@/app/components/ui/Button';
import { Award, Book, Users, Shield, Lightbulb } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Online Course Experts';
    window.scrollTo(0, 0);
  }, []);

  const values = [
    { 
      name: 'Integrity', 
      description: 'We uphold the highest standards of academic honesty and ethical support.',
      icon: <Shield className="h-8 w-8 text-primary-500" />
    },
    { 
      name: 'Expertise', 
      description: 'Our team consists of qualified professionals with strong academic backgrounds.',
      icon: <Award className="h-8 w-8 text-primary-500" />
    },
    { 
      name: 'Personalization', 
      description: 'We tailor our support to your specific learning style and goals.',
      icon: <Users className="h-8 w-8 text-primary-500" />
    },
    { 
      name: 'Empowerment', 
      description: 'We focus on building your skills and confidence as an independent learner.',
      icon: <Lightbulb className="h-8 w-8 text-primary-500" />
    },
    { 
      name: 'Confidentiality', 
      description: 'We respect your privacy and maintain strict confidentiality of your information.',
      icon: <Book className="h-8 w-8 text-primary-500" />
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">About Online Course Experts: Your Partner in Ethical Academic Success</h1>
              <p className="text-lg text-neutral-700 mb-6">
                At Online Course Experts, we believe in the power of genuine learning and academic integrity. Our mission is to provide high-quality, ethical academic support services that empower students to truly understand their coursework, develop essential skills and strategies, and achieve their educational goals with confidence.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Academic support team" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Our Mission & Values"
            subtitle="We're dedicated to fostering independent learning and helping students navigate their academic journey successfully."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary-50 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-neutral-700">
                To provide personalized, expert academic support that enhances understanding, builds critical skills and effective strategies, and promotes ethical learning practices.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <div className="space-y-4">
                {values.map((value) => (
                  <div key={value.name} className="flex items-start">
                    <div className="mr-4 mt-1">{value.icon}</div>
                    <div>
                      <h4 className="font-bold">{value.name}</h4>
                      <p className="text-neutral-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <SectionTitle 
            title="Why Choose Us?"
            subtitle="What sets Online Course Experts apart from other academic support services."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-3">Focus on Deep Understanding</h3>
              <p className="text-neutral-600">
                We prioritize genuine comprehension and skill development, ensuring you grasp the material rather than just completing assignments.
              </p>
            </motion.div>
            
            <motion.div 
              className="card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-3">Experienced & Vetted Tutors</h3>
              <p className="text-neutral-600">
                Our team consists of qualified professionals with strong academic backgrounds and teaching experience in their respective fields.
              </p>
            </motion.div>
            
            <motion.div 
              className="card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-3">Personalized Learning</h3>
              <p className="text-neutral-600">
                We tailor our approach to your learning style, academic goals, and specific areas of challenge to maximize effectiveness.
              </p>
            </motion.div>
            
            <motion.div 
              className="card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-3">Commitment to Integrity</h3>
              <p className="text-neutral-600">
                We adhere to strict ethical guidelines and support academic policies, ensuring all assistance promotes learning integrity.
              </p>
            </motion.div>
            
            <motion.div 
              className="card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-3">Flexible Online Sessions</h3>
              <p className="text-neutral-600">
                Access expert support from anywhere through our secure online platform, with scheduling that accommodates your busy student life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academic Journey */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle 
            title="Supporting Your Academic Journey"
            align="left"
            className="mb-6"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg mb-6">
                We understand the challenges students face. Our services cover both deep subject-matter understanding through tutoring and the development of crucial academic strategies through personalized support, helping you build a strong foundation for success.
              </p>
              <p className="mb-6">
                Whether you're struggling with specific course content, need guidance on developing better study habits, or want to ensure your papers are polished and professional, our team is here to provide ethical, effective support.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Student working with academic support" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Experts */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <SectionTitle 
            title="Meet Our Experts"
            subtitle="Our team comprises dedicated professionals with strong academic backgrounds and a passion for helping students succeed."
          />
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-center text-lg">
              Our tutors and academic coaches bring extensive knowledge in their fields of expertise, including nursing, business, sciences, humanities, and more. Many hold advanced degrees and have years of teaching or professional experience.
            </p>
            <p className="text-center text-xl font-semibold mt-6">
              You're in good hands with Online Course Experts.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Get Started Today</h2>
          <p className="text-lg mb-8">
            Join the many students who have already found success with our expert support. Whether you need help with a specific course or want personalized strategies for academic growth, we're here to help.
          </p>
          <Button label="Start Your Journey" link="/contact" className="w-full sm:w-auto" children={undefined} />
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
