import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l border-gray-800 ml-4 sm:ml-6 md:ml-10 space-y-12">
          {experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-0 w-3 h-3 bg-blue-500 rounded-full border border-black shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between md:items-start mb-6">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    {exp.logo && (
                      <div className="w-10 h-10 md:w-16 md:h-16 bg-white rounded-lg p-2 flex items-center justify-center flex-shrink-0">
                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white">{exp.role}</h3>
                      <div className="flex items-center text-blue-400 font-medium text-sm md:text-base mt-1">
                        <Briefcase size={16} className="mr-2" />
                        {exp.company}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 text-xs md:text-sm bg-white/5 px-3 py-1 rounded-full w-fit self-start">
                    <Calendar size={14} className="mr-2" />
                    {exp.period}
                  </div>
                </div>
                
                <ul className="space-y-2 mt-4">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start text-gray-300 text-sm">
                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-gray-500 rounded-full flex-shrink-0"></span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
