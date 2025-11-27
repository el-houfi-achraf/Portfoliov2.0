"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    name: "Software Design and Project Management",
    link: "https://www.coursera.org/account/accomplishments/verify/MKU9MQ5NXM6V?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    name: "Virtual Networks in Azure",
    link: "https://www.coursera.org/account/accomplishments/verify/38KR5AE93V6W?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    name: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
    link: "https://www.coursera.org/account/accomplishments/verify/368YH98MG1GN?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    name: "AWS Cloud Technical Essentials",
    link: "https://www.coursera.org/account/accomplishments/verify/GXDVCBYN89JS?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    name: "The Unix Workbench",
    link: "https://www.coursera.org/account/accomplishments/verify/SJ32Y9ECYTC2?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    name: "Introduction to Cloud Computing",
    link: "https://www.coursera.org/account/accomplishments/verify/VPA8ZCZGSKEL?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    name: "Introduction to Machine Learning with Python",
    link: "https://www.coursera.org/account/accomplishments/verify/8ICKTU0QN93I?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  }
];

const Certificates = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative md:h-[300vh] bg-black text-white">
      {/* Desktop View */}
      <div className="sticky top-0 hidden md:flex flex-col h-screen justify-center overflow-hidden">
        
        <div className="pl-12 mb-12 z-10 max-w-[90vw]">
          <h2 className="text-[6vw] font-black uppercase leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600 mix-blend-difference break-words">
            Certifications
          </h2>
          <p className="text-xl text-gray-400 mt-4 font-light mix-blend-difference">
            Continuous learning & Professional Development
          </p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-12">
          {certificates.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
              className="relative h-[400px] w-[350px] flex-shrink-0 rounded-3xl border border-white/10 bg-zinc-900/30 backdrop-blur-md p-8 flex flex-col justify-between group transition-all"
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
              
              <Award className="w-16 h-16 text-indigo-500 mb-6 group-hover:text-indigo-400 transition-colors" />
              
              <div>
                <h3 className="text-2xl font-bold leading-tight text-gray-200 group-hover:text-white transition-colors mb-4">
                  {cert.name}
                </h3>
                <div className="h-1 w-12 bg-indigo-500/50 rounded-full group-hover:w-24 transition-all duration-300" />
              </div>

              <div className="mt-4 text-sm font-mono text-gray-500 group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                Verify Credential <span className="text-lg">&rarr;</span>
              </div>
            </motion.a>
          ))}
          {/* Spacer to ensure full scroll */}
          <div className="w-[10vw]"></div>
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden py-20 px-6">
        <div className="mb-10">
          <h2 className="text-[10vw] font-black uppercase leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600 mix-blend-difference break-words">
            Certifications
          </h2>
          <p className="text-sm text-gray-400 mt-2 font-light mix-blend-difference">
            Continuous learning & Professional Development
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-10 -mx-6 px-6 scrollbar-hide">
            {certificates.map((cert, index) => (
                <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-[350px] w-[85vw] flex-shrink-0 rounded-3xl border border-white/10 bg-zinc-900/30 backdrop-blur-md p-6 flex flex-col justify-between snap-center"
                >
                <div className="absolute top-6 right-6">
                    <ExternalLink className="w-5 h-5 text-white/50" />
                </div>
                
                <Award className="w-12 h-12 text-indigo-500 mb-4" />
                
                <div>
                    <h3 className="text-xl font-bold leading-tight text-gray-200 mb-4">
                    {cert.name}
                    </h3>
                    <div className="h-1 w-12 bg-indigo-500/50 rounded-full" />
                </div>

                <div className="mt-4 text-sm font-mono text-gray-500 flex items-center gap-2">
                    Verify Credential <span className="text-lg">&rarr;</span>
                </div>
                </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
