import React from 'react';
import { motion } from 'framer-motion';
import SlideDecoration from '../components/SlideDecoration';

const SlideContent = ({ content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative"
    >
      {/* Decorative elements */}
      <SlideDecoration />
      
      {/* Slide content with enhanced styling */}
      <div className="space-y-6 text-gray-100 relative z-10">
        {React.isValidElement(content) ? (
          React.cloneElement(content, {
            className: `${content.props.className || ''} slide-content`
          })
        ) : content}
      </div>
      
      {/* Enhanced text readability styles */}
      <style jsx global>{`
        .slide-content img {
          border-radius: 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }
        
        .slide-content img:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 30px rgba(99, 102, 241, 0.3);
        }
        
        .slide-content p {
          line-height: 1.9;
          margin-bottom: 1.5rem;
          letter-spacing: 0.01em;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
        
        .slide-content p:first-of-type {
          font-weight: 600;
          letter-spacing: 0.015em;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </motion.div>
  );
};

export default SlideContent;