import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  course?: string;
  delay?: number;
  imageUrl?: string;
  rating?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  course,
  delay = 0,
  imageUrl = '',
  rating = 0,
}) => {
  return (
    <motion.div
    className="bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-xl p-6 border-l-4 border-primary-500 h-full flex flex-col transform transition-all hover:scale-105 hover:shadow-2xl"

      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <Quote className="h-6 w-6 text-primary-200 mb-3" />
      <p className="text-neutral-700 italic mb-4 flex-grow text-sm">{quote}</p>

      {/* Author and Profile Section */}
      <div className="flex items-center gap-3 mt-auto">
        <img
          src={imageUrl}
          alt={`${author}'s profile`}
          className="w-12 h-12 rounded-full object-cover border"
        />
        <div className="flex flex-col justify-start mt-3">
          <p className="font-semibold text-neutral-900 text-sm mb-0">{author}</p>
          {course && <p className="text-xs text-neutral-500">{course}</p>}
        </div>
      </div>

      {/* Rating Section */}
      <div className="flex items-center gap-1 mt-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-3 w-3 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill={index < rating ? '#facc15' : 'none'}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
