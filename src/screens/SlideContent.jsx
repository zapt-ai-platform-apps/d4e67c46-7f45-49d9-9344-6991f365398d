import React from 'react';
import { motion } from 'framer-motion';

const SlideContent = ({ content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {content}
    </motion.div>
  );
};

export default SlideContent;