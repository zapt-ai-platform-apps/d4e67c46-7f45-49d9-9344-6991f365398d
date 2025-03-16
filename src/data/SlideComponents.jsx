import React from "react";
import { motion } from "framer-motion";

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export const VisionSlide = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.div variants={itemVariants} className="relative group">
      <img 
        src="https://images.unsplash.com/photo-1505243542579-da5adfe8338f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxMHx8ZnV0dXJpc3RpYyUyMHRlY2hub2xvZ3klMjBlbXBvd2VyaW5nJTIwaHVtYW4lMjBwb3RlbnRpYWx8ZW58MHx8fHwxNzM5NzQzNjI4fDA&ixlib=rb-4.0.3&q=80&w=1080" 
        alt="Visionary technology" 
        className="w-full max-h-[300px] sm:max-h-96 object-cover rounded-xl mb-6 shadow-xl"
        data-image-request="futuristic technology empowering human potential"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
    </motion.div>
    
    <motion.p variants={itemVariants} className="text-xl mb-6 text-gray-100 font-medium leading-relaxed">
      Before humans could read and write, our potential was limited. Today, ZAPT empowers anyone to transcend technical barriers and create groundbreaking apps with ease.
    </motion.p>
    
    <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
      Our platform reimagines digital innovation by providing a complete suite of tools – from databases and back-end functions to error monitoring, web analytics, and customer support. We enable creators to build fully featured products without the traditional complexities of code.
    </motion.p>
  </motion.div>
);

export const MarketSlide = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.div variants={itemVariants} className="relative group">
      <img 
        src="https://images.unsplash.com/photo-1508589066756-c5dfb2cb7587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwzfHxleHBhbmRpbmclMjBkaWdpdGFsJTIwbWFya2V0JTIwb3Bwb3J0dW5pdGllcyUyMGdyYXBofGVufDB8fHx8MTczOTc0MzYyOHww&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Market growth"
        className="w-full max-h-[300px] sm:max-h-96 object-cover rounded-xl mb-6 shadow-xl"
        data-image-request="expanding digital market opportunities graph"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
    </motion.div>
    
    <motion.p variants={itemVariants} className="text-xl mb-6 text-gray-100 font-medium leading-relaxed">
      The digital transformation wave is unstoppable.
    </motion.p>
    
    <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
      ZAPT captures this momentum by democratizing app creation, enabling a vast market of innovators to launch impactful products without traditional tech constraints.
    </motion.p>
  </motion.div>
);

export const AICoreSlide = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.div variants={itemVariants} className="relative group">
      <img 
        src="https://images.unsplash.com/photo-1579226905180-636b76d96082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw3fHxuZXVyYWwlMjBuZXR3b3JrJTIwQUklMjBzeXN0ZW0lMjBwcm9jZXNzaW5nJTIwZGF0YXxlbnwwfHx8fDE3Mzk3NDM2Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080"
        alt="AI technology"
        className="w-full max-h-[300px] sm:max-h-96 object-cover rounded-xl mb-6 shadow-xl"
        data-image-request="neural network AI system processing data"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
    </motion.div>
    
    <motion.p variants={itemVariants} className="text-xl mb-6 text-gray-100 font-medium leading-relaxed">
      AI-Powered Automation That Integrates Every Essential Element
    </motion.p>
    
    <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
      ZAPT's advanced AI not only writes code but also embeds critical features such as databases, security protocols, and analytics. This streamlines development and delivers production-ready solutions effortlessly.
    </motion.p>
  </motion.div>
);

export const EcosystemSlide = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.div variants={itemVariants} className="relative group">
      <img 
        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw3fHxpbnRlcmNvbm5lY3RlZCUyMGRpZ2l0YWwlMjBlY29zeXN0ZW0lMjBkaWFncmFtfGVufDB8fHx8MTczOTc0MzYyOXww&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Technology ecosystem"
        className="w-full max-h-[300px] sm:max-h-96 object-cover rounded-xl mb-6 shadow-xl"
        data-image-request="interconnected digital ecosystem diagram"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
    </motion.div>
    
    <motion.p variants={itemVariants} className="text-xl mb-6 text-gray-100 font-medium leading-relaxed">
      Integrated Tools for a Complete Product Experience
    </motion.p>
    
    <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
      Our platform goes further by automatically including database integration, back-end functions, error monitoring, analytics, and customer support – ensuring your app is robust and market‐ready from day one.
    </motion.p>
  </motion.div>
);