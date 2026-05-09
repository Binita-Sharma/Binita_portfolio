import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FlipCard = ({ title, description, icon, badge, bgColor }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`perspective h-[350px] cursor-pointer`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="flip-card-inner h-full w-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div className={`flip-card-front bg-white border border-text-primary p-10 flex flex-col items-center justify-center text-center shadow-sm`}>
          <div className="text-6xl mb-6">{icon}</div>
          <h3 className="text-2xl font-medium mb-4">{title}</h3>
          <div className="w-12 h-12 rounded-full border border-text-primary flex items-center justify-center">
             <i className="ph ph-arrow-right text-xl"></i>
          </div>
          {badge && (
            <div className={`absolute -bottom-3 right-6 ${bgColor} border border-text-primary px-4 py-1 rounded-full text-sm font-bold`}>
              {badge}
            </div>
          )}
        </div>

        {/* Back */}
        <div className={`flip-card-back bg-text-primary text-white border border-text-primary p-10 flex flex-col items-center justify-center text-center shadow-lg`}>
          <h3 className="text-2xl font-medium mb-4 text-accent-yellow">{title}</h3>
          <p className="text-gray-300 mb-6">{description}</p>
          <button className="bg-accent-red text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform">
            View Details
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const QuickLinks = () => {
  const links = [
    {
      title: "UI Design",
      description: "Crafting beautiful and functional interfaces that delight users and drive engagement.",
      icon: "🎨",
      badge: "CREATIVE",
      bgColor: "bg-accent-blue"
    },
    {
      title: "UX Research",
      description: "Understanding user behavior through data-driven research to build better products.",
      icon: "🔍",
      badge: "INSIGHTS",
      bgColor: "bg-accent-yellow"
    },
    {
      title: "Development",
      description: "Bringing designs to life with clean, efficient, and maintainable code.",
      icon: "💻",
      badge: "TECH",
      bgColor: "bg-accent-green"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {links.map((link, index) => (
            <FlipCard key={index} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
