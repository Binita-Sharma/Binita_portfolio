import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const FloatingBadge = ({ children, className, delay = 0, xOffset = 0, yOffset = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        delay,
        duration: 0.5,
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      className={`absolute z-20 ${className}`}
      style={{ x: xOffset, y: yOffset }}
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cloud1X = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const cloud1Y = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

  const cloud2X = useTransform(mouseX, [0, window.innerWidth], [30, -30]);
  const cloud2Y = useTransform(mouseY, [0, window.innerHeight], [30, -30]);

  const cloud3X = useTransform(mouseX, [0, window.innerWidth], [-50, 50]);
  const cloud3Y = useTransform(mouseY, [0, window.innerHeight], [-50, 50]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 pb-10 text-center relative overflow-hidden bg-[#fdf2f0]">
      {/* Parallax Clouds Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div style={{ x: cloud1X, y: cloud1Y }} className="absolute top-[15%] left-[10%] opacity-40 text-8xl text-white drop-shadow-xl">
          <i className="ph ph-cloud"></i>
        </motion.div>
        <motion.div style={{ x: cloud2X, y: cloud2Y }} className="absolute top-[25%] right-[15%] opacity-30 text-[120px] text-white drop-shadow-xl">
          <i className="ph ph-cloud"></i>
        </motion.div>
        <motion.div style={{ x: cloud3X, y: cloud3Y }} className="absolute bottom-[20%] left-[20%] opacity-50 text-[100px] text-white drop-shadow-xl">
          <i className="ph ph-cloud"></i>
        </motion.div>
        <motion.div style={{ x: cloud1X, y: cloud2Y }} className="absolute bottom-[30%] right-[10%] opacity-40 text-8xl text-white drop-shadow-xl">
          <i className="ph ph-cloud"></i>
        </motion.div>
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h1 className="text-[40px] md:text-[64px] lg:text-[72px] font-medium leading-[1.1] mb-8 tracking-tight text-[#111111]">
              Hello!
              <div className="inline-block relative mx-4 align-middle">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-black bg-white flex items-center justify-center overflow-hidden">
                  <img src="/assets/avatar_small.jpeg" alt="Binita" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white border border-black rounded-full px-2 py-1 text-sm font-bold shadow-sm">Bin</div>
              </div>
              I'm Binita, <br />
              Designer by passion, <br />
              developer by logic, and <br />
              debugger by <span className="text-[#c23b22]">destiny.</span>
            </h1>

            {/* Design Tags Grid */}
            <div className="flex flex-col items-center gap-4 mb-16 mt-12">
              {/* Row 1 */}
              <div className="flex flex-wrap justify-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="bg-[#f2b842] border border-black rounded-lg px-8 py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] interactive cursor-default"
                >
                  <span className="text-2xl md:text-4xl font-medium tracking-tight">Interaction Design</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 md:w-20 md:h-20 bg-[#f2b842] border-2 border-dashed border-black flex items-center justify-center p-2"
                >
                  <div className="w-full h-full bg-black rotate-45 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="bg-[#3da37a] border border-black rounded-lg px-8 py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] interactive cursor-default"
                >
                  <span className="text-2xl md:text-4xl font-medium tracking-tight">Prototyping</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-14 h-14 md:w-20 md:h-20 bg-[#3da37a] border border-black flex items-center justify-center overflow-hidden"
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-[#c23b22] rounded-full flex items-center justify-center">
                    <div className="w-full h-full animate-pulse-slow"></div>
                  </div>
                </motion.div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap justify-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="bg-[#c23b22] border border-black rounded-lg px-8 py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] interactive cursor-default"
                >
                  <span className="text-2xl md:text-4xl font-medium tracking-tight text-white">User Research</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  className="bg-[#c23b22] border border-black rounded-lg px-6 py-4 flex items-center justify-center"
                >
                  <div className="w-12 h-8 md:w-16 md:h-10 bg-white rounded-[100%] flex items-center justify-center relative overflow-hidden">
                    <div className="w-4 h-4 md:w-6 md:h-6 bg-[#c23b22] rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-[#f2b842] rotate-45"></div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="bg-[#4fbde7] border border-black rounded-lg px-8 py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] interactive cursor-default"
                >
                  <span className="text-2xl md:text-4xl font-medium tracking-tight">Wireframing</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-14 h-14 md:w-20 md:h-20 bg-[#4fbde7] border border-black p-2 flex flex-wrap gap-1 items-center justify-center"
                >
                  <div className="w-3 h-3 bg-[#c23b22] rounded-full translate-x-[-4px] translate-y-[-4px]"></div>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                  </div>
                  <div className="w-2 h-2 bg-[#c23b22] rounded-full translate-x-[4px] translate-y-[4px]"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Floating Badges */}
          <FloatingBadge className="top-10 left-[5%] md:left-[10%]" delay={0.2}>
            <div className="bg-[#d8ecf8] border border-black rounded-full px-6 py-3 flex items-center gap-2 shadow-sm whitespace-nowrap">
              <span className="text-orange-400">✨</span>
              <span className="font-medium text-sm">Web Development</span>
            </div>
          </FloatingBadge>

          <FloatingBadge className="bottom-20 left-[10%] md:left-[15%]" delay={0.4}>
            <div className="bg-white border border-black rounded-xl p-4 shadow-sm">
              <i className="ph ph-pen-nib text-2xl"></i>
            </div>
          </FloatingBadge>

          <FloatingBadge className="top-20 right-[5%] md:right-[12%]" delay={0.3}>
            <div className="bg-white border border-black rounded-full w-14 h-14 flex items-center justify-center shadow-sm">
              <i className="ph ph-coffee text-2xl"></i>
            </div>
          </FloatingBadge>

          <FloatingBadge className="bottom-24 right-[8%] md:right-[15%]" delay={0.5}>
            <div className="bg-[#fbe29f] border border-black rounded-full px-6 py-3 flex items-center gap-2 shadow-sm whitespace-nowrap">
              <span className="text-orange-500">🔥</span>
              <span className="font-medium text-sm">No-code Design</span>
            </div>
          </FloatingBadge>
        </div>
      </div>
    </section>
  );
};

export default Hero;
