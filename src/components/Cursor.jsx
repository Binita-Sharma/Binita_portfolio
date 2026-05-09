import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    document.addEventListener('mousemove', handleMouseMove);
    
    // Update listeners for existing and future elements
    const updateListeners = () => {
      const interactables = document.querySelectorAll('a, button, .interactive');
      interactables.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    updateListeners();
    const observer = new MutationObserver(updateListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor flex items-start gap-1"
      animate={{
        x: position.x - 4,
        y: position.y - 4,
        scale: isHovered ? 1.5 : 1
      }}
      transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.5 }}
    >
      {/* Dot */}
      <div className="w-2 h-2 bg-black rounded-full shrink-0 shadow-sm" />
      
      {/* "YOU" Bubble */}
      <div className="bg-black text-white text-[10px] font-bold px-2 py-1 rounded-full rounded-tl-none -mt-1 shadow-md select-none tracking-wider">
        YOU
      </div>
    </motion.div>
  );
};

export default Cursor;
