import React from 'react';
import { motion } from 'framer-motion';

export default function SlideDecoration() {
  return (
    <>
      {/* Top left corner decoration */}
      <motion.div 
        className="absolute -top-1 -left-1 w-16 h-16 md:w-20 md:h-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-nebula-500 animate-pulse-slow" />
        <div className="absolute top-4 left-8 w-6 h-[1px] bg-nebula-500/40" />
        <div className="absolute top-8 left-4 w-[1px] h-6 bg-nebula-500/40" />
      </motion.div>
      
      {/* Top right decoration */}
      <motion.div 
        className="absolute -top-1 -right-1 w-20 h-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="absolute top-8 right-8 w-6 h-[1px] bg-nebula-500/40" />
        <div className="absolute top-4 right-8 w-[1px] h-6 bg-nebula-500/40" />
      </motion.div>
      
      {/* Bottom decorative elements */}
      <motion.div 
        className="absolute -bottom-1 -right-1 w-20 h-20 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="w-8 h-8 rounded-tr-xl border-t border-r border-nebula-500/30"></div>
      </motion.div>
      
      {/* Bottom left decoration */}
      <motion.div
        className="absolute bottom-0 left-0 w-32 h-32 overflow-hidden pointer-events-none opacity-20" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-nebula-400 rounded-bl-3xl" />
      </motion.div>
    </>
  );
}