import React from 'react';
import { motion } from 'framer-motion';

export default function ZaptBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-4 right-4 z-40"
    >
      <a
        href="https://www.zapt.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-4 py-2 bg-glass rounded-full text-sm border border-white/10 
        hover:border-nebula-500/50 transition-all duration-300 hover:shadow-neon cursor-pointer"
      >
        <span className="pr-1.5">Made on</span>
        <span className="font-bold text-gradient-nebula">ZAPT</span>
      </a>
    </motion.div>
  );
}