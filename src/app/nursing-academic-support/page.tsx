"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { BookOpen, Clock, FileSearch, PenTool, Laptop, Layout, ChevronDown } from 'lucide-react';

import TestimonialsSection from '../components/home/TestimonialsSection';
import NursingDiscountForm from '../components/home/form';

const NursingAcademicSupportPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Nursing Academic Support | Study Skills & Strategies | Online Course Experts';
    window.scrollTo(0, 0);
  }, []);
  
  const faqs = [
    {
      question: "What's the difference between Nursing Academic Support and Subject Tutoring?",
      answer:
        "Subject Tutoring focuses on helping you understand specific course content (like Pharmacology). Nursing Academic Support focuses on developing your skills and strategies for studying, time management, writing structure, research, and navigating your program effectively.",
    },
    {
      question: "Will you help me write my papers or do my discussion posts?",
      answer:
        "Our focus is strictly on teaching you the skills to do your own work successfully and ethically. We guide you on structure, process, and strategies, but we adhere to academic integrity policies and do not complete assignments for students.",
    },
    {
      question: "How are the sessions structured?",
      answer:
        "Sessions are personalized to your needs, but typically include assessment of your current challenges, development of targeted strategies, demonstration of techniques, guided practice, and creation of an implementation plan you can use independently.",
    },
  ];

  const skills = [
    {
      title: 'Build Effective Study Habits',
      description: 'Master techniques like active recall, concept mapping, and spaced repetition tailored for nursing content.',
      icon: <BookOpen className="h-8 w-8 text-primary-500" />,
    },
    {
      title: 'Master Time Management',
      description: 'Create realistic schedules balancing coursework, clinicals, and personal life. Learn to prioritize tasks and avoid procrastination.',
      icon: <Clock className="h-8 w-8 text-primary-500" />,
    },
    {
      title: 'Strengthen Research Skills',
      description: 'Effectively find, evaluate, and utilize credible sources for evidence-based practice.',
      icon: <FileSearch className="h-8 w-8 text-primary-500" />,
    },
    {
      title: 'Improve Academic Writing Structure',
      description: 'Learn to organize your thoughts logically, craft clear arguments, and structure papers effectively.',
      icon: <PenTool className="h-8 w-8 text-primary-500" />,
    },
    {
      title: 'Navigate Online Learning Confidently',
      description: 'Understand how to best utilize Learning Management Systems (LMS), engage in online discussions productively, and manage digital resources.',
      icon: <Laptop className="h-8 w-8 text-primary-500" />,
    },
    {
      title: 'Approach Assignments Strategically',
      description: 'Break down complex assignment instructions and plan your approach ethically and effectively.',
      icon: <Layout className="h-8 w-8 text-primary-500" />,
    },
  ];

  const benefits = [
    'Become a more organized and efficient student.',
    'Reduce stress and anxiety related to coursework demands.',
    'Increase your confidence in your academic abilities.',
    'Develop stronger critical thinking and study skills.',
    'Navigate your nursing program more effectively and ethically.',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
     {/* Hero Section */}
<section className="py-10 mx-h-auto bg-gradient-to-br from-primary-50 via-white to-secondary-50">
  <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">

    {/* Left: Text Content */}
    <div className="md:w-1/2 ml-7 mt-16">
      <h1 className="mb-2 text-5xl font-bold text-gray-800">
        Academic Support <br/> & Strategies
      </h1>
      <p className="text-gray-900 text-xl ml-2 leading-7">
        Navigate the demands of your nursing program with greater confidence 
        and effectiveness. Our Nursing Academic Support service provides personalized guidance focused on empowering you with the <br/>
        essential skills and strategies needed to succeed.
      </p>
    </div>

    {/* Right: Image */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src="/k.png"
        alt="Academic Support"
        className="rounded-xl w-[80%] md:w-[65%] ml-2 mt-14 object-cover"
      />
    </div>

  </div>
</section>


      {/* Benefits Section */}
      <section className="py-10">
        <div className="container-custom">
          <SectionTitle title="Benefits of Nursing Academic Support" />
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-2">
              <div className="w-full h-full flex items-center justify-center">
                <video src="/oce1.mp4" controls autoPlay loop muted className="rounded-xl w-full h-72 object-cover shadow-lg" />
              </div>
              <div className="w-full h-full flex flex-col justify-center">
                {benefits.map((benefit, index) => (
                  <motion.div key={index} className="flex items-start mb-4 last:mb-0" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-base text-gray-700 mt-1">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="text-4xl font-semibold text-center text-gray-800 relative">
              <span className="absolute inset-0 h-1 w-full rounded-lg top-1/2 transform -translate-y-1/2"></span>
              <span className="relative z-10 text-md">Develop Key Skills for Nursing School Success</span>
            </h2>
            <p className="text-center text-xl text-gray-500 mt-3">We help you learn how to</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div key={skill.title} className="card-hover" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-neutral-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="relative py-4 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')", opacity: 0.35 }}></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-600 to-blue-100 opacity-30 z-0"></div>
        <div className="relative z-10 container-custom mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-32">
            <h2 className="text-4xl font-semibold mb-3 text-black">Ready to Enhance Your <br /> Nursing School Experience?</h2>
            <p className="text-xl text-black/90 leading-snug">
              Develop the skills and strategies you need to <br /> navigate your nursing program confidently.
            </p>
          </div>
          <NursingDiscountForm />
        </div>
      </section>

    
      <TestimonialsSection />

      <section className="py-4 bg-white">
        {/* Title */}
    <h2 className="text-5xl font-bold text-gray-800 mb-6 text-center -mt-4">
      FAQ 
    </h2>
  <div className="mx-auto bg-gradient-to-br from-primary-50 via-white to-secondary-50 rounded-xl shadow-xl px-6 py-8 w-full max-w-3xl">
    

    {/* FAQ + Image Row */}
    <div className="flex flex-col md:flex-row items-start gap-6">

      {/* FAQ Section */}
      <div className="flex-1 space-y-4">
        {faqs.map((faq, index) => {
          const [open, setOpen] = useState(false);

          return (
            <motion.div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-md p-4 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div
                className="flex justify-between items-start cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <h3 className="text-sm font-semibold text-gray-800 pr-3">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-4 h-4 mt-1 text-gray-500 transition-transform ${
                    open ? 'rotate-180' : ''
                  }`}
                />
              </div>
              {open && (
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Image Box */}
      <div className="w-[290px] shrink-0 -mr-6 -mt-9">
        <img
          src="/image23.png"
          alt="FAQ Visual"
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  </div>
</section>


    </motion.div>
  );
};

export default NursingAcademicSupportPage;
