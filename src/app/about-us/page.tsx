"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/app/components/ui/SectionTitle';
import { Award, Book, Users, Shield, Lightbulb } from 'lucide-react';
import NursingDiscountForm from '../components/home/form';

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
      <section className="py-20 md:py-28  w-full h-[65vh] bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ml-5">
            <div>
              <h1 className="mb-2 text-4xl leading-9">
                About Online Course Experts <br /> Your Partner in Ethical Academic Success</h1>
              <p className="text-md text-neutral-700 mb-6 leading-5">
                At Online Course Experts, we believe in the power of genuine learning and academic integrity. Our mission is to provide high-quality, ethical academic support services that empower students to truly understand their coursework, develop essential skills and strategies, and achieve their educational goals with confidence.
              </p>
            </div>
            <div>
              <img
                src="/about.png"
                alt="Academic support team"
                className="rounded-lg shadow-xl w-[40%] h-auto ml-48"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Mission & Values */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Our Mission & Values"
            subtitle="We're dedicated to fostering independent learning and helping students navigate their academic journey successfully."
          />

          <div className="flex flex-col gap-16">
            {/* Mission Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-50 w-full px-6 py-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform ease-in-out"
            >
              <h3 className="text-3xl font-semibold mb-4 text-primary-700">Our Mission</h3>
              <p className="text-neutral-700 text-lg leading-relaxed">
                To provide personalized, expert academic support that enhances understanding, <br />
                builds critical skills and effective strategies, and promotes ethical learning practices.
              </p>
            </motion.div>

            {/* Values Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white w-full p-6 rounded-xl -mt-14 shadow-lg transform hover:scale-105 transition-transform ease-in-out"
            >
              <h3 className="text-3xl font-semibold mb-6 text-primary-700">Our Values</h3>
              <div className="space-y-6">
                {values.map((value) => (
                  <div key={value.name} className="flex items-start space-x-4">
                    <div className="text-primary-500 text-3xl">{value.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-primary-700">{value.name}</h4>
                      <p className="text-neutral-600 text-base">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="py-2 bg-neutral-50">
        <div className="container-custom">
          <SectionTitle
            title="Why Choose Us?"
            subtitle="What sets Online Course Experts apart from other academic support services."
          />

          {/* Top 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white shadow-md p-6 rounded-lg"
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
              className="bg-white shadow-md p-6 rounded-lg"
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
              className="bg-white shadow-md p-6 rounded-lg"
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
          </div>


          <div className="mt-10 flex flex-col lg:flex-row justify-center items-center gap-8">
            <motion.div
              className="bg-white shadow-md p-6 rounded-lg w-full lg:w-[40%] min-h-[180px]"
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
              className="bg-white shadow-md p-6 rounded-lg w-full lg:w-[40%] min-h-[150px]"
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
      <section className="py-6 ml-5 ">
        <div className="container-custom">
          <div className="mb-0">
            <h2 className="text-3xl mt-10 md:text-5xl font-extrabold text-neutral-800 leading-snug text-left">
              <span className="block text-secondary-500">Supporting Your</span>
              <span className="block text-primary-600">Academic Journey</span>
            </h2>

          </div>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-base mb-2 leading-5">
                We understand the challenges students face. Our services cover both deep subject-matter understanding through tutoring and the development of crucial academic strategies through personalized support, helping you build a strong foundation for success.
              </p>
              <p className="text-sm leading-5">
                Whether you're struggling with specific course content, need guidance on developing better study habits, or want to ensure your papers are polished and professional, our <br/>
                 team is here to provide ethical, effective support.
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="/online1.png"
                alt="Student working with academic support"
                className="rounded-lg shadow-lg -mt-28 w-[80%] ml-14 h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>


 
  <section className="relative py-4 text-white overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
    style={{ backgroundImage: "url('/bg.jpg')", opacity: 0.35 }}
  ></div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-tr from-pink-600 to-blue-100 opacity-30 z-0"></div>

  {/* Foreground Content */}
  <div className="relative z-10 container-custom mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
    {/* Left Text Block */}
    <div className="md:w-1/2 mt-6 md:mt-0 md:ml-20">
      <h2 className="text-5xl font-semibold mb-1 text-black">
        Get Started Today
      </h2>
      <p className="text-xl text-black/90 leading-6 mb-4 ml-2">
        Join the many students who have already <br/> found success with our expert support.
      </p>
    </div>

    {/* Right Form */}
    <div >
      <NursingDiscountForm />
    </div>
  </div>
</section>
  </motion.div>
  );
};

export default AboutPage;
