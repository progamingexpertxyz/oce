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
        <section className="py-6 md:py-10 mx-h-auto   bg-gradient-to-br from-primary-50 via-white to-secondary-50">
          <div className="container-custom flex flex-col-reverse md:flex-row items-center gap-10">

            {/* Left: Text Content */}
            <div className="w-full md:w-1/2 text-left -mt-6 md:mt-16 ml-3">
              <h1 className="text-xl md:text-4xl font-bold mb-2 md:mb-2 leading-6 md:leading-9 text-black">
                Ethical Academic Support <br /> Services Tailored for You
              </h1>
              <p className="text-sm md:text-base text-gray-800 leading-4 md:leading-5">
                Online Course Experts offers a range of  <span className="block w-2 md:hidden"></span>
                 personalized academic support services  <span className="block w-2 md:hidden"></span>
                 designed to help you understand challenging subjects, develop crucial
                learning strategies, <span className="block w-2 md:hidden"></span>
                 and present your work professionally.

              </p>
              <p className="text-xs md:text-sm text-gray-800 -mt-3 md:-mt-3 leading-4 md:leading-5">
                We are committed to providing ethical assistance <span className="block w-2 md:hidden"></span>
                 that fosters genuine learning and academic integrity. <span className="block w-2 md:hidden"></span>
                Explore our core services below.<br />
                Please contact us for current service rates.
              </p>
            </div>

            {/* Right: Optional Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/bg3.jpg"
                alt="Academic Support"
                className="rounded-xl w-full ml-1.5 md:ml-0 mt-18 md:mt-12  md:w-[60%] object-cover"
              />
            </div>
          </div>
        </section>


        <section className="py-8">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ml-5">
              {/* Image - comes first on mobile, second on desktop */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <Image
                  src="/online1.png"
                  alt="Subject tutoring session"
                  width={480}
                  height={320}
                  className="rounded-lg shadow-lg w-full md:w-[80%] h-auto mt-0 md:mt-10 -ml-1.5 md:ml-18"
                />
              </motion.div>

              {/* Text - comes second on mobile, first on desktop */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <div className=" p-0  md:p-2 bg-primary-50 rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center text-primary-500 -mt-8 md:-mt-5 mb-8">
                  <BookOpen className="w-6 h-6 md:h-6 md:w-6 mt-1" />
                </div>
                <h2 className="text-xl md:text-3xl font-bold mb-1 -mt-8">Subject-Matter Tutoring</h2>
                <p className="text-sm md:text-base mb-1">
                  Struggling with specific course content?
                  <span className="block w-2 md:hidden"></span>
                   Our expert tutors provide one-on-one online sessions focused on explaining complex concepts, working through problems, and building deep understanding in subjects
                  <span className="block w-2 md:hidden"></span>
                  across Nursing, Business, Sciences,
                  <span className="block w-2 md:hidden"></span>
                  Humanities, and more.
                </p>
                <ul className="list-disc list-inside mb-6 text-xs md:text-base text-neutral-700">
                  <li>Personalized explanations of complex concepts</li>
                  <li>Practice problem-solving and application of knowledge</li>
                  <li>Review of challenging course material</li>
                  <li>Preparation for exams and assessments</li>
                  <li>Special focus on nursing and healthcare subjects</li>
                </ul>
                <Button
                  link="/nursing-tutoring"
                  variant="primary"
                  className="-mt-4 md:mt-2 px-2 py-2 md:px-6 md:py-3 text-xs md:text-base bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300"
                >
                  Explore Subject Tutoring
                </Button>
              </motion.div>
            </div>
          </div>
        </section>


        <section className="py-12 bg-neutral-50">
  <div className="container-custom">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ml-5">
      
      {/* ✅ Image first on both mobile and desktop */}
      <motion.div
        className="" // ❌ Remove order classes
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
          className="rounded-lg shadow-lg w-full md:w-[80%] h-auto mt-0 md:mt-10 -ml-1.5 md:ml-18"
        />
      </motion.div>

      {/* ✅ Text second on both mobile and desktop */}
      <motion.div
        className="" // ❌ Remove order classes
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-0 md:p-2 bg-primary-50 rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center text-primary-500 -mt-8 md:-mt-5 mb-8">
          <BookText className="w-6 h-6 md:h-6 md:w-6 mt-1" />
        </div>

        <h2 className="text-xl md:text-3xl font-bold mb-3 -mt-7 md:-mt-7">Nursing Academic Support</h2>
        <p className="text-sm md:text-base mb-2 -mt-3">
          Navigate the unique demands of your nursing program with confidence. This personalized support focuses on developing <span className="hidden md:block"></span>
          effective study habits, time management techniques, research <span className="hidden md:block"></span>
          skills, strategies for approaching assignments ethically, <span className="hidden md:block"></span>
          and navigating online learning environments successfully.
        </p>
        <ul className="list-disc list-inside mb-6 text-xs md:text-base text-neutral-700">
          <li>Effective study techniques for nursing content</li>
          <li>Time management and organization strategies</li>
          <li>Research and evidence-based practice skills</li>
          <li>Academic writing structure and planning</li>
          <li>Strategies for clinical preparation</li>
        </ul>
       <Button
                  link="/nursing-tutoring"
                  variant="primary"
                  className="-mt-4 md:mt-2 px-2 py-2 md:px-6 md:py-3 text-xs md:text-base bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300"
                >
                Learn About Nursing Academic Support
                </Button>
      </motion.div>
       
    </div>
  </div>
</section>

       <section className="py-8">
  <div className="container-custom">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ml-5">

      {/* ✅ Image First on Mobile, Second on Desktop */}
      <motion.div
        className="order-1 lg:order-2"
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
          className="rounded-lg shadow-lg w-full md:w-[80%] h-auto mt-0 md:mt-10 -ml-1.5 md:ml-18"
        />
      </motion.div>

      {/* ✅ Text Second on Mobile, First on Desktop */}
      <motion.div
        className="order-2 lg:order-1"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-1 md:p-2 bg-primary-50 rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center text-primary-500 -mt-8 md:-mt-5 mb-8">
          <FileEdit className="w-6 h-6 md:h-6 md:w-6 mt-1" />
        </div>
        <h2 className="text-xl md:text-3xl font-bold mb-2 -mt-6">
          Proofreading & Formatting Assistance
        </h2>
        <p className="text-sm md:text-base mb-6">
          Ensure your hard work is presented clearly and professionally. Our meticulous proofreaders check your academic papers for grammar, spelling, punctuation, syntax, and citation style adherence (APA, MLA, Chicago, etc.). Strictly polishing, no content generation.
        </p>
        <ul className="list-disc list-inside mb-6 text-xs md:text-base text-neutral-700 -mt-5">
          <li>Grammar, spelling, and punctuation review</li>
          <li>Syntax and sentence structure improvements</li>
          <li>Citation formatting (APA, MLA, Chicago, etc.)</li>
          <li>Document formatting and layout consistency</li>
          <li>Final polish for clarity and professionalism</li>
        </ul>
        <Button
          link="/nursing-tutoring"
          variant="primary"
          className="-mt-4 md:mt-2 px-2 py-2 md:px-6 md:py-3 text-xs md:text-base bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300"
        >
          Discover Proofreading Services
        </Button>
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
            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8  text-center">
              <h2 className="text-2xl md:text-5xl font-bold mb-5 md:mb-7 text-black">
                Find the Right Support for  Your Needs
              </h2>
              <p className="text-sm md:text-lg mb-2 text-black -mt-5 leading-6 ml-1 leadimg-3 md:leading-6">
                All our services uphold strict standards of <span className="block w-2 md:hidden"></span>
                academic integrity. Contact us if you're <span className="block w-2 md:hidden"></span>
                 unsure which service is right for you or <span className="block w-2 md:hidden"></span>
                 to inquire about session rates.
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
