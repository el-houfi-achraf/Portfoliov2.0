"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const languages = [
  { name: "French", level: "Fluent", percent: 95, color: "#60A5FA" }, // Blue
  { name: "English", level: "Intermediate", percent: 75, color: "#A78BFA" }, // Purple
  { name: "Arabic", level: "Native", percent: 100, color: "#34D399" } // Emerald
];

const interests = [
  { name: "Football", x: -10, y: -20, scale: 1.2 },
  { name: "Basketball", x: 30, y: 40, scale: 1.1 },
  { name: "Travel", x: -40, y: 30, scale: 1.3 },
  { name: "Tech", x: 20, y: -50, scale: 1.4 },
  { name: "Music", x: 50, y: 10, scale: 1.0 },
  { name: "Gaming", x: -30, y: -40, scale: 1.1 },
  { name: "Reading", x: 0, y: 60, scale: 1.2 }
];

const CircularProgress = ({ lang, index }: any) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, type: "spring" }}
      className="flex flex-col items-center gap-4"
    >
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-white/10"
          />
          {/* Progress Circle */}
          <motion.circle
            cx="64"
            cy="64"
            r={radius}
            stroke={lang.color}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference - (lang.percent / 100) * circumference }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + index * 0.2 }}
            strokeLinecap="round"
            className="drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-white">{lang.percent}%</span>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-bold text-white">{lang.name}</h3>
        <p className="text-sm text-gray-400">{lang.level}</p>
      </div>
    </motion.div>
  );
};

const FloatingBubble = ({ item, index }: any) => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      whileHover={{ scale: 1.1, cursor: "grab" }}
      whileDrag={{ scale: 1.2, cursor: "grabbing" }}
      initial={{ x: item.x * 5, y: item.y * 5, opacity: 0 }}
      whileInView={{ 
        x: [item.x, item.x + Math.random() * 20 - 10, item.x], 
        y: [item.y, item.y + Math.random() * 20 - 10, item.y],
        opacity: 1 
      }}
      viewport={{ once: true }}
      transition={{ 
        opacity: { duration: 0.5, delay: index * 0.1 },
        x: { duration: 3 + Math.random() * 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
        y: { duration: 3 + Math.random() * 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
      }}
      className="absolute flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg hover:bg-white/10 hover:border-white/30 transition-colors"
      style={{
        width: `${item.scale * 80}px`,
        height: `${item.scale * 80}px`,
        left: `calc(50% + ${item.x}px)`,
        top: `calc(50% + ${item.y}px)`,
        zIndex: Math.floor(item.scale * 10)
      }}
    >
      <span className="text-sm font-medium text-white tracking-wider">{item.name}</span>
    </motion.div>
  );
};

const Interests = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-32 px-6 md:px-12 bg-black text-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Languages - Circular Progress */}
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-[5vw] md:text-5xl font-black uppercase tracking-tighter mb-4">
              Languages
            </h2>
            <p className="text-gray-400 font-light">Global communication skills.</p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12">
            {languages.map((lang, index) => (
              <CircularProgress key={index} lang={lang} index={index} />
            ))}
          </div>
        </div>

        {/* Passions - Floating Bubbles */}
        <div className="relative h-[500px] w-full flex items-center justify-center">
           <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute top-0 right-0 z-0 text-right pointer-events-none"
          >
            <h2 className="text-[5vw] md:text-5xl font-black uppercase tracking-tighter mb-4">
              Passions
            </h2>
            <p className="text-gray-400 font-light">What fuels my creativity.</p>
          </motion.div>

          <div className="relative w-full h-full">
            {interests.map((item, index) => (
              <FloatingBubble key={index} item={item} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Interests;
