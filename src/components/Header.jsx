import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="bg-glass sticky top-0 z-10 border-b border-white/5 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.img
              src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=96&height=96"
              alt="ZAPT Logo"
              className="w-12 h-12 md:w-16 md:h-16 animate-float"
              style={{ filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))" }}
              whileHover={{ scale: 1.05, rotate: 5 }}
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-col"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="font-display text-2xl md:text-3xl bg-gradient-to-r from-cosmic-100 via-nebula-300 to-cosmic-100 bg-clip-text text-transparent font-bold">
              ZAPT
            </h1>
            <p className="font-body text-xs md:text-sm text-cosmic-100 opacity-80">
              Revolutionary App Creation
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="https://www.zapt.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:block px-4 py-2 text-sm font-medium bg-nebula-600/20 hover:bg-nebula-600/40 
            border border-nebula-500/20 hover:border-nebula-500/40 rounded-lg 
            transition-all duration-300 text-white hover:shadow-neon cursor-pointer"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </header>
  );
}