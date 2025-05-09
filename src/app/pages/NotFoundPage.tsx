import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Page Not Found | Online Course Experts';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="py-20 md:py-28"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-8xl font-bold text-primary-300 mb-8">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-lg text-neutral-600 mb-8">
            The page you are looking for does not exist or has been moved. Please check the URL or return to our homepage.
          </p>
          <Button link="/" variant="primary">
            Return to Homepage
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;