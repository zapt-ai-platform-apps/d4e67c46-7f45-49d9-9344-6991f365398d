import React from "react";
import { motion } from "framer-motion";

// Animation variants
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

// Enhanced slide content
export const slideContents = [
  {
    title: "Business Model & Revenue Streams: Freemium to Enterprise",
    content: (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="relative group">
          <img 
            src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxMHx8c2NhbGFibGUlMjBidXNpbmVzcyUyMG1vZGVsJTIwaW5mb2dyYXBoaWN8ZW58MHx8fHwxNzM5NzQzNjI5fDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Business model"
            className="w-full max-h-[300px] sm:max-h-96 object-cover rounded-xl mb-6 shadow-xl"
            data-image-request="scalable business model infographic"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
        </motion.div>
        
        <motion.p variants={itemVariants} className="text-xl mb-6 text-gray-100 font-medium leading-relaxed">
          Scalable, Sustainable, and Strategic
        </motion.p>
        
        <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
          With a flexible freemium model that converts engaged users into premium subscribers, ZAPT lays the foundation for sustainable growth, reinvesting profits back into continuous innovation.
        </motion.p>
      </motion.div>
    ),
  },
  {
    title: "Traction & Milestones: Proof in the Pudding",
    content: (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="relative group">
          <img 
            src="https://images.unsplash.com/photo-1650959828226-f9d53a7c1f64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw1fHxncm93dGglMjBjaGFydCUyMHdpdGglMjB1cHdhcmQlMjB0cmVuZHxlbnwwfHx8fDE3Mzk3NDM2Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Growth chart"
            className="w-full max-h-[300px] sm:max-h-96 object-cover rounded-xl mb-6 shadow-xl"
            data-image-request="growth chart with upward trend"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
        </motion.div>
        
        <motion.p variants={itemVariants} className="text-xl mb-6 text-gray-100 font-medium leading-relaxed">
          Early Success and Continuous Growth
        </motion.p>
        
        <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
          Our platform has already empowered a growing community of innovators. Rapid user adoption and glowing testimonials validate the market need for a complete, accessible app development solution.
        </motion.p>
      </motion.div>
    ),
  },
  {
    title: "The ZAPT Differentiator: Empowering Creativity",
    content: (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="relative group">
          <img 
            src="https://images.unsplash.com/photo-1697820536894-59f79079687e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw5fHxzaWRlLWJ5LXNpZGUlMjBjb21wYXJpc29uJTIwc2hvd2luZyUyMFpBUFQlMjBhZHZhbnRhZ2VzfGVufDB8fHx8MTczOTc0MzYyOXww&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Comparison chart"
            className="w-full max-h-[300px] sm:max-h-96 object-cover rounded-xl mb-6 shadow-xl"
            data-image-request="side-by-side comparison showing ZAPT advantages"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
        </motion.div>
        
        <motion.p variants={itemVariants} className="text-xl mb-6 text-gray-100 font-medium leading-relaxed">
          Removing the Tech Barrier Forever
        </motion.p>
        
        <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
          Unlike traditional platforms that focus solely on code generation, ZAPT delivers a complete, production‐ready product—including all the critical extras—allowing visionaries to concentrate on creativity, strategy, and market expansion.
        </motion.p>
      </motion.div>
    ),
  },
  {
    title: "Join Us: Invest in the Revolution",
    content: (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="relative group">
          <img 
            src="https://images.unsplash.com/photo-1521830101529-057b1dfd9784?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw1fHxkaXZlcnNlJTIwdGVhbSUyMGNvbGxhYm9yYXRpbmclMjBvbiUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzM5NzQzNjI5fDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Team collaboration"
            className="w-full max-h-[300px] sm:max-h-96 object-cover rounded-xl mb-6 shadow-xl"
            data-image-request="diverse team collaborating on technology"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
        </motion.div>
        
        <motion.p variants={itemVariants} className="text-xl mb-6 text-gray-100 font-medium leading-relaxed">
          Your Invitation to the Future of Innovation
        </motion.p>
        
        <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
          Partner with ZAPT and be part of a groundbreaking movement that transforms the tech landscape, empowers creators, and democratizes innovation on a global scale.
        </motion.p>
      </motion.div>
    ),
  },
];