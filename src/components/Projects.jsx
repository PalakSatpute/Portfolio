import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-6 right-6 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Github className="text-gray-400 hover:text-white cursor-pointer" size={20} />
                <ExternalLink className="text-gray-400 hover:text-white cursor-pointer" size={20} />
              </div>
              
              <div className="mb-4 text-pink-500">
                <Folder size={40} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-medium text-gray-300 bg-gray-800 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
