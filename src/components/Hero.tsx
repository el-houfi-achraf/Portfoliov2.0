"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden pb-20 md:pb-0">
      {/* Video Background */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://cdn.pixabay.com/video/2020/04/18/36467-409397669_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-10 md:mt-0">
        
        {/* Text Content */}
        <div className="z-10 order-2 lg:order-1">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12vw] lg:text-[8vw] leading-[0.9] font-black tracking-tighter uppercase mix-blend-difference"
          >
            Achraf <br />
            El Houfi
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8"
          >
            <div className="text-lg md:text-2xl font-light tracking-wide uppercase max-w-md text-gray-300">
              Computer Engineering <br />
              Student
            </div>
            
            <div className="flex flex-col gap-2 text-xs md:text-sm font-mono text-gray-400">
              <span>Based in Marrakech, Morocco</span>
              <span>Available for 2026 Internship</span>
            </div>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 1, type: "spring" }}
          className="relative block justify-self-center lg:justify-self-end order-1 lg:order-2"
        >
          <div className="relative w-[250px] h-[312px] md:w-[400px] md:h-[500px] rounded-full overflow-hidden border-4 border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
            <img 
              src="/profile.png" 
              alt="Ashraf El Houfi" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          
          {/* Decorative Elements */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-24 h-24 md:w-32 md:h-32 border border-dashed border-white/20 rounded-full"
          />
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden md:flex"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-gray-400">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;

