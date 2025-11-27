"use client";

import { motion } from "framer-motion";

const skills = [
  "Python", "Java", "C++", "Django", "SpringBoot", "ReactJs", "PySpark", 
  "Git", "Github", "Jira", "SonarQube", "Selenium", "JMeter", 
  "Oracle", "MySql", "SqlServer", "PostgreSql"
];

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12 bg-black text-white">
      <div className="max-w-4xl w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-mono text-gray-400 mb-8 uppercase tracking-widest"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-light leading-tight mb-16"
        >
          <p>
            I'm a student developer passionate about creating immersive digital experiences. 
            I combine technical expertise with a keen eye for design to build websites that leave a lasting impression.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-mono text-gray-400 mb-6 uppercase tracking-widest">Skills</h3>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {skills.map((skill, index) => (
                <span key={index} className="text-xl font-light border-b border-white/20 pb-1">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-sm font-mono text-gray-400 mb-6 uppercase tracking-widest">Education</h3>
            <div className="space-y-4">
              <div>
                <div className="text-xl font-light">Computer Science Student</div>
                <div className="text-gray-500">Morocco</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
