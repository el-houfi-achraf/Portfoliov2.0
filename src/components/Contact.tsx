"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Github, Linkedin, Instagram } from "lucide-react";
import { useState, useRef } from "react";

const MagneticButton = ({ children, href }: { children: React.ReactNode; href: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-mono uppercase tracking-widest hover:bg-white/10 hover:border-white/30 transition-colors flex items-center gap-2 group overflow-hidden"
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.a>
  );
};

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col justify-between py-32 px-6 md:px-12 bg-black text-white relative overflow-hidden">
      
      {/* Background Grid Animation */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px]" />
      </div>

      <div className="flex-grow flex flex-col justify-center max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-12 left-0 text-xs font-mono text-indigo-500 mb-4 tracking-widest uppercase opacity-70">
            &lt;System.Connect /&gt;
          </div>
          
          <h2 className="text-[12vw] font-black uppercase leading-[0.8] tracking-tighter mb-12 mix-blend-difference group cursor-default">
            <span className="inline-block hover:text-indigo-500 transition-colors duration-300">L</span>
            <span className="inline-block hover:text-purple-500 transition-colors duration-300">e</span>
            <span className="inline-block hover:text-pink-500 transition-colors duration-300">t</span>
            <span className="inline-block hover:text-indigo-500 transition-colors duration-300">'</span>
            <span className="inline-block hover:text-purple-500 transition-colors duration-300">s</span>
            <br />
            <span className="inline-block hover:text-pink-500 transition-colors duration-300">T</span>
            <span className="inline-block hover:text-indigo-500 transition-colors duration-300">a</span>
            <span className="inline-block hover:text-purple-500 transition-colors duration-300">l</span>
            <span className="inline-block hover:text-pink-500 transition-colors duration-300">k</span>
          </h2>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <a 
                href="mailto:elhoufiashraf@gmail.com" 
                className="group relative inline-flex items-center gap-4 text-2xl md:text-4xl font-light overflow-hidden"
            >
                <span className="relative z-10 border-b border-white/30 pb-2 group-hover:border-white transition-colors">
                    elhoufiashraf@gmail.com
                </span>
                <motion.span 
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="inline-block"
                >
                    <ArrowRight className="w-8 h-8 -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-indigo-500" />
                </motion.span>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8 relative z-10">
        <div className="flex flex-wrap gap-4 mb-8 md:mb-0">
          <MagneticButton href="https://www.linkedin.com/in/achraf-el-houfi-136b4230b">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </MagneticButton>
          <MagneticButton href="https://github.com/el-houfi-achraf">
            <Github className="w-4 h-4" /> GitHub
          </MagneticButton>
          <MagneticButton href="https://www.instagram.com/ashraf_elhoufi/">
            <Instagram className="w-4 h-4" /> Instagram
          </MagneticButton>
        </div>
        
        <div className="text-sm text-gray-500 font-mono flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          System Online • © {new Date().getFullYear()}
        </div>
      </div>
    </section>
  );
};

export default Contact;
