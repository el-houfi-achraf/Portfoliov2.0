"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    type: "work",
    role: "Intern Developer",
    company: "Le Gestionnaire",
    period: "2025",
    fullPeriod: "07/2025 - 08/2025",
    description: "AtlasDocs (SaaS) - Document management platform.",
    tech: ["Django", "React", "Docker", "GCP"],
    color: "from-blue-500/20 to-purple-500/20",
    glow: "group-hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.5)]",
    logo: "https://ui-avatars.com/api/?name=LG&background=random" 
  },
  {
    type: "work",
    role: "Intern Developer",
    company: "Vigon Systems",
    period: "2024",
    fullPeriod: "07/2024",
    description: "VGT - Internal ticket management solution.",
    tech: ["Django", "Tailwind", "MySQL"],
    color: "from-emerald-500/20 to-cyan-500/20",
    glow: "group-hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)]",
    logo: "https://ui-avatars.com/api/?name=VS&background=random" 
  },
  {
    type: "work",
    role: "Intern Developer",
    company: "Allianz Imasnaoune",
    period: "2022",
    fullPeriod: "07/2022",
    description: "Analytical dashboard for insurance contracts.",
    tech: ["Python", "Pandas", "Tailwind"],
    color: "from-orange-500/20 to-red-500/20",
    glow: "group-hover:shadow-[0_0_50px_-12px_rgba(249,115,22,0.5)]",
    logo: "https://ui-avatars.com/api/?name=AI&background=random" 
  },
  {
    type: "edu",
    role: "Engineering Cycle",
    company: "EMSI Marrakech",
    period: "2023",
    fullPeriod: "2023 - Present",
    description: "Computer Science & Networks (MIAGE)",
    tech: ["Engineering", "CS"],
    color: "from-indigo-500/20 to-blue-500/20",
    glow: "group-hover:shadow-[0_0_50px_-12px_rgba(99,102,241,0.5)]",
    logo: "/emsi-logo.png"
  },
  {
    type: "edu",
    role: "Preparatory Cycle",
    company: "EMSI Marrakech",
    period: "2021",
    fullPeriod: "2021 - 2023",
    description: "Foundational Engineering Studies",
    tech: ["Math", "Physics"],
    color: "from-violet-500/20 to-fuchsia-500/20",
    glow: "group-hover:shadow-[0_0_50px_-12px_rgba(139,92,246,0.5)]",
    logo: "/emsi-logo.png"
  },
  {
    type: "edu",
    role: "Baccalaureate",
    company: "Nour El Khalil",
    period: "2020",
    fullPeriod: "2019 - 2020",
    description: "Physical Sciences",
    tech: ["Science"],
    color: "from-pink-500/20 to-rose-500/20",
    glow: "group-hover:shadow-[0_0_50px_-12px_rgba(236,72,153,0.5)]",
    logo: "/nour-el-khalil-logo.png"
  }
];

const Card = ({ item, index }: any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0 mb-20 last:mb-0 group"
    >
      {/* Timeline Node */}
      <div className="absolute left-[-9px] top-0 w-5 h-5 rounded-full border-4 border-black bg-white z-20 md:left-1/2 md:-translate-x-1/2 md:top-8 shadow-[0_0_20px_rgba(255,255,255,0.5)]" />

      {/* Content Container */}
      <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Date / Parallax Year */}
        <div className="flex-1 w-full md:text-right relative">
          <span className={`hidden md:block text-[8rem] font-black text-white/5 absolute -top-20 ${index % 2 === 0 ? 'left-0' : 'right-0'} select-none pointer-events-none`}>
            {item.period}
          </span>
          <div className={`relative z-10 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
             <span className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-mono text-indigo-300 mb-2">
                {item.fullPeriod}
             </span>
          </div>
        </div>

        {/* Card */}
        <div className="flex-1 w-full">
            <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl p-8 transition-all duration-500 hover:border-white/20 hover:-translate-y-2 ${item.glow}`}>
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
                            {item.type === 'work' ? 'Experience' : 'Education'}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-white/10 p-2">
                             <img src={item.logo} alt={item.company} className="w-full h-full object-contain" />
                        </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.role}</h3>
                    <div className="text-lg text-indigo-400 mb-4">{item.company}</div>
                    <p className="text-gray-400 leading-relaxed mb-6">{item.description}</p>

                    <div className="flex flex-wrap gap-2">
                        {item.tech.map((t: string, i: number) => (
                            <span key={i} className="px-3 py-1 bg-white/5 rounded-md text-xs text-gray-300 border border-white/5 group-hover:border-white/20 transition-colors">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>

      </div>
    </motion.div>
  )
}

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Title */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-32 relative z-10"
        >
            <h2 className="text-[12vw] md:text-[8vw] font-black uppercase leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mix-blend-difference">
                Journey
            </h2>
            <p className="text-xl text-gray-400 mt-4 font-light">
                Milestones & Achievements
            </p>
        </motion.div>

        {/* Central Timeline Line */}
        <div className="absolute left-6 md:left-1/2 top-64 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2">
            <motion.div 
                style={{ height }} 
                className="w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_20px_rgba(99,102,241,0.8)]" 
            />
        </div>

        {/* Items */}
        <div className="relative z-10">
            {items.map((item, i) => (
                <Card key={i} item={item} index={i} />
            ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
