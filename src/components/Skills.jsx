import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const SkillCategory = ({ title, items, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors"
  >
    <h3 className="text-xl font-semibold text-purple-400 mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((skill, index) => (
        <span 
          key={index} 
          className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm border border-white/5 hover:bg-white/10 hover:text-white transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCategory title="Languages & Libraries" items={[...skills.languages, ...skills.libraries]} delay={0.1} />
          <SkillCategory title="Data Tools & Platforms" items={skills.tools} delay={0.2} />
          <SkillCategory title="Analysis & Modeling" items={skills.other} delay={0.3} />
          <SkillCategory title="AI Tools" items={skills.aiTools} delay={0.4} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
