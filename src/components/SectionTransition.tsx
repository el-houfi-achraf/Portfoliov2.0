"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SectionTransition = ({ text = "CREATIVE DEVELOPER" }: { text?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 2, -2]);

  return (
    <div ref={containerRef} className="relative py-20 overflow-hidden bg-black z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black pointer-events-none" />
      
      <motion.div 
        style={{ x, rotate }}
        className="flex whitespace-nowrap"
      >
        <motion.div 
          style={{ x }} 
          className="flex whitespace-nowrap text-[15vw] font-black uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-white/10 to-white/30"
        >
          <span className="mr-12">{text}</span>
          <span className="mr-12">{text}</span>
          <span className="mr-12">{text}</span>
          <span className="mr-12">{text}</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionTransition;
