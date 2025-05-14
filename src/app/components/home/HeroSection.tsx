'use client';
import { FaPlay } from 'react-icons/fa';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { useState } from 'react';

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleVideoModal = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  return (
    <section className="relative  pt-64 pb-2  md:pt-28 md:pt-34 md:pb-8 lg:pt-40 lg:pb-12 bg-gradient-to-ll from-white via-white to-secondary-50">
      <div className="container-custom py-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center items-center relative"
          >
            <video
              src="/Header.mp4"
              autoPlay
              muted
              playsInline
              className="pointer-events-none select-none  w-[110%] md:w-[170%] lg:w-[190%] h-auto -mt-56 md:-mt-18 -left-6 transform lg:-left-2 z-0"
            />


          </motion.div>


          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-start text-left space-y-6 order-2 lg:order-1"
          >
            {/* Play Button */}
            <button
              onClick={toggleVideoModal}
              className="absolute top-0 -left-6 md:-left-7 -mt-5 md:-mt-0 transform translate-x-1/2 -translate-y-1/2 text-black border border-black p-2.5 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-10 bg-white"
            >
              <div className="block md:hidden text-[12px]">
                <FaPlay />
              </div>
              <div className="hidden md:block">
                <FaPlay size={15} />
              </div>
            </button>

            {/* Texts */}
            <div className="space-y-1 md:space-y-3 max-w-2xl  ">
              <h1 className="text-2xl md:text-3xl lg:text-4xl -mt-5 md:-mt-0 font-semibold leading-tight">
                Master Your Coursework with Expert Academic Support
              </h1>
              <p className="text-sm md:text-base text-neutral-700 ">
                Personalized Tutoring, Academic Strategies, and Proofreading to Help You Learn and Succeed Ethically.
              </p>
              <p className="text-neutral-600 text-xs md:text-base">
                Feeling overwhelmed by complex subjects or the demands<span className="inline-block w-2 md:hidden"></span> of your studies? Online Course Experts provides dedicated, one-on-one support focused on deepening your subject understanding, enhancing your academic strategies, and polishing your written work.
              </p>
            </div>
            <div className="flex gap-4  md:mt-6">
              <a
                href="/services"
                className="w-full text-sm md:text-base sm:w-auto  px-4 py-2 md:px-6 md:py-3 bg-primary-500 text-white font-semibold rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-24 right-4 md:right-12 w-24 h-24 bg-primary-100 rounded-full opacity-50 blur-2xl"></div>
      <div className="absolute bottom-12 left-8 md:left-24 w-32 h-32 bg-secondary-100 rounded-full opacity-40 blur-3xl"></div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="relative w-full max-w-2xl bg-white rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/dKnLWEkeGks?autoplay=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Video"
            ></iframe>
            <button
              onClick={toggleVideoModal}
              className="absolute top-2 right-2 text-white text-xl bg-black p-2 rounded-full"
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
