'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/app/components/ui/Button';
import { BookOpen, BookText, FileEdit } from 'lucide-react';

import NursingDiscountForm from '@/app/components/home/form';

const ServicesPage: React.FC = () => {
    React.useEffect(() => {
        document.title = 'How Our Services Work | Online Course Experts';
        window.scrollTo(0, 0);
      }, []);
    
  return (
    <>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
       {/* Hero Section */}
<section className="py-20 mx-h-auto bg-gradient-to-br from-primary-50 via-white to-secondary-50">
  <div className="container-custom flex flex-col md:flex-row items-center gap-10">
    
    {/* Left: Text Content */}
    <div className="md:w-1/2 text-left mt-8 ml-3">
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-black">
        Ethical Academic Support <br /> Services Tailored for You
      </h1>
      <p className="text-md text-gray-800 leading-5">
        Online Course Experts offers a range of personalized academic support
        services designed to help you understand challenging subjects, develop
        crucial learning strategies, and present your work professionally.
 
        </p>
        <p className="text-md text-gray-800 -mt-2 leading-5">
        We are committed to providing ethical assistance that fosters genuine learning
        and academic integrity. Explore our core services below.<br />
        Please contact us for current service rates.
      </p>
    </div>

    {/* Right: Optional Image */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src="/bg3.jpg"
        alt="Academic Support"
        className="rounded-xl w-[90%] md:w-full object-cover"
      />
    </div>
  </div>
</section>


        {/* Subject-Matter Tutoring Section */}
        <section className="py-8">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ml-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-2 bg-primary-50 rounded-full w-12 h-12 flex items-center justify-center text-primary-500 -mt-5 mb-8">
                  <BookOpen className="h-6 w-6 mt-1" />
                </div>
                <h2 className="text-3xl font-bold mb-1 -mt-8">Subject-Matter Tutoring</h2>
                <p className="text-lg mb-1">
                  Struggling with specific course content? Our expert tutors provide one-on-one online sessions focused on explaining complex concepts, working through problems, and building deep understanding in subjects across Nursing, Business, Sciences, Humanities, and more.
                </p>
                <ul className="list-disc list-inside mb-6 text-neutral-700">
                  <li>Personalized explanations of complex concepts</li>
                  <li>Practice problem-solving and application of knowledge</li>
                  <li>Review of challenging course material</li>
                  <li>Preparation for exams and assessments</li>
                  <li>Special focus on nursing and healthcare subjects</li>
                </ul>
                <Button link="/nursing-tutoring" variant="primary" className="-mt-6">
                  Explore Subject Tutoring
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src="/online1.png"
                  alt="Subject tutoring session"
                  width={480}
                  height={320}
                  className="rounded-lg shadow-lg w-[80%] h-auto mt-10 ml-18"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Nursing Academic Support Section */}
        <section className="py-12 bg-neutral-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ml-5">
              <motion.div
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src="/prepare1.png"
                  alt="Nursing student receiving academic support"
                  width={480}
                  height={320}
                  className="rounded-lg shadow-lg w-[80%] h-auto"
                />
              </motion.div>

              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-2 bg-primary-50 rounded-full w-12 h-12 flex items-center justify-center text-primary-500 -mt-10">
                  <BookText className="h-6 w-6 mt-1" />
                </div>
                <h2 className="text-3xl font-bold mb-3 mt-0">Nursing Academic Support</h2>
                <p className="text-md mb-2 -mt-3">
                  Navigate the unique demands of your nursing program with confidence. This personalized support focuses on developing <br/>
                  effective study habits, time management techniques, research <br />
                  skills, strategies for approaching assignments ethically, <br/>
                  and navigating online learning environments successfully.
                </p>
                <ul className="list-disc list-inside mb-6 text-neutral-700">
                  <li>Effective study techniques for nursing content</li>
                  <li>Time management and organization strategies</li>
                  <li>Research and evidence-based practice skills</li>
                  <li>Academic writing structure and planning</li>
                  <li>Strategies for clinical preparation</li>
                </ul>
                <Button link="/nursing-academic-support" variant="primary" className="-mt-6">
                  Learn About Nursing Academic Support
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Proofreading Section */}
        <section className="py-8">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ml-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-2 bg-primary-50 rounded-full w-12 h-12 flex items-center justify-center text-primary-500 mb-6">
                  <FileEdit className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold mb-2 -mt-6">Proofreading & Formatting Assistance</h2>
                <p className="text-md mb-6">
                  Ensure your hard work is presented clearly and professionally. Our meticulous proofreaders check your academic papers for grammar, spelling, punctuation, syntax, and citation style adherence (APA, MLA, Chicago, etc.). Strictly polishing, no content generation.
                </p>
                <ul className="list-disc list-inside mb-6 text-neutral-700 -mt-5">
                  <li>Grammar, spelling, and punctuation review</li>
                  <li>Syntax and sentence structure improvements</li>
                  <li>Citation formatting (APA, MLA, Chicago, etc.)</li>
                  <li>Document formatting and layout consistency</li>
                  <li>Final polish for clarity and professionalism</li>
                </ul>
                <Button link="/proofreading-formatting-services" variant="primary">
                  Discover Proofreading Services
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src="/write1.png"
                  alt="Proofreading and formatting service"
                  width={480}
                  height={320}
                  className="rounded-lg shadow-lg w-[80%] h-auto mt-10 ml-18"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final Section with Form */}
        <section className="relative py-4 text-white overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('/bg1.jpg')", opacity: 0.55 }}
          ></div>
          <div className="absolute inset-0 opacity-50 z-0"></div>
          <div className="relative z-10 container-custom mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
              <h2 className="text-4xl md:text-4xl font-bold mb-7 text-black">
                Find the Right Support for <br /> Your Needs
              </h2>
              <p className="text-lg mb-2 text-black -mt-5 leading-6 ml-1">
                All our services uphold strict standards of academic integrity. Contact us if you're unsure which service is right for you or to inquire about session rates.
              </p>
            </div>
            <NursingDiscountForm />
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default ServicesPage;
