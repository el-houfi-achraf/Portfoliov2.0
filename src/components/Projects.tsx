"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "FaceSmart",
    description: "Intelligent facial recognition system.",
    tags: ["Python", "OpenCV", "Deep Learning"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1000&auto=format&fit=crop",
    color: "bg-blue-950"
  },
  {
    title: "STEVIA",
    description: "Health management platform for diabetes.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
    color: "bg-green-950"
  },
  {
    title: "Mobile App Pharmacy",
    description: "Pharmaceutical tracking application.",
    tags: ["Flutter", "Firebase", "Dart"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1000&auto=format&fit=crop",
    color: "bg-purple-950"
  },
  {
    title: "Coming Soon",
    description: "More exciting projects in the works.",
    tags: ["Next.js", "Three.js"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    color: "bg-zinc-900"
  }
];

const Projects = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative md:h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden hidden md:flex">
        <motion.div style={{ x }} className="flex gap-10 px-10">
          <div className="flex flex-col justify-center min-w-[300px] md:min-w-[400px] z-10">
            <h2 className="text-6xl md:text-8xl font-bold text-white leading-tight">
              Selected <br /> Works
            </h2>
            <p className="mt-4 text-gray-400 text-xl">
              A collection of my recent projects.
            </p>
          </div>

          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative h-[60vh] w-[40vw] flex-shrink-0 rounded-3xl overflow-hidden border border-white/10 group transition-transform hover:scale-[1.02] duration-500`}
            >
              {/* Project Image */}
              <div className="absolute inset-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                />
                <div className={`absolute inset-0 ${project.color} mix-blend-multiply opacity-80`} />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
                <h3 className="text-4xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4 font-light">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a href={project.github} className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.link} className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden py-20 px-6">
        <div className="mb-10">
            <h2 className="text-[12vw] font-bold text-white leading-none">
              Selected <br /> Works
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              A collection of my recent projects.
            </p>
        </div>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-10 -mx-6 px-6 scrollbar-hide">
            {projects.map((project, index) => (
                <div
                key={index}
                className={`relative h-[50vh] w-[85vw] flex-shrink-0 rounded-3xl overflow-hidden border border-white/10 snap-center`}
                >
                {/* Project Image */}
                <div className="absolute inset-0">
                    <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-60"
                    />
                    <div className={`absolute inset-0 ${project.color} mix-blend-multiply opacity-80`} />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black via-black/50 to-transparent">
                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 mb-4 font-light text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/10">
                        {tag}
                        </span>
                    ))}
                    </div>
                    <div className="flex gap-4">
                    <a href={project.github} className="p-2 bg-white text-black rounded-full">
                        <Github size={18} />
                    </a>
                    <a href={project.link} className="p-2 bg-white text-black rounded-full">
                        <ExternalLink size={18} />
                    </a>
                    </div>
                </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
