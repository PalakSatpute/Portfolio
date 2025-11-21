import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, experience } from '../data';
import { ChevronDown, Github, Linkedin } from 'lucide-react';
import resume from '../assets/palak_latest.pdf';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-start overflow-hidden bg-black pt-24 sm:pt-32 md:pt-40">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center items-center mb-4 md:mb-6 space-x-3">
             <img 
               src={personalInfo.logo} 
               alt="IIT Bombay Logo" 
               className="w-12 h-12 md:w-20 md:h-20 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
             />
             <span className="text-xs md:text-base font-medium tracking-widest text-gray-400 uppercase border border-white/10 px-2 py-1 md:px-3 md:py-1 rounded-full bg-white/5 backdrop-blur-sm">
               {personalInfo.institution}
             </span>
          </div>

          <h2 className="text-lg md:text-2xl text-purple-400 font-medium mb-2">Hello, I'm</h2>
          <h1 className="text-4xl md:text-8xl font-bold text-white mb-4 md:mb-6 tracking-tight">
            {personalInfo.name}
          </h1>
          <h3 className="text-xl md:text-4xl text-gray-400 mb-6 md:mb-8 font-light px-2">
            {personalInfo.role}
          </h3>
          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10 px-2">
            {personalInfo.bio.split(personalInfo.institution).map((part, index, array) => (
              <React.Fragment key={index}>
                {part}
                {index < array.length - 1 && (
                  <span className="text-white font-bold border-b-2 border-purple-500">
                    {personalInfo.institution}
                  </span>
                )}
              </React.Fragment>
            ))}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
                <a 
                href="#contact"
                className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors flex-shrink-0"
                >
                Get in Touch
                </a>
                <a 
                href="#projects"
                className="px-8 py-3 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors flex-shrink-0"
                >
                View Work
                </a>
                <a 
                href={resume}
                download="palak_latest.pdf"
                className="px-8 py-3 border border-purple-500 text-purple-400 font-bold rounded-full hover:bg-purple-500/10 transition-colors flex-shrink-0"
                >
                Download Resume
                </a>
            </div>
            <div className="flex gap-4 mt-4 sm:mt-0 sm:ml-4">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-colors text-white">
                    <Github size={24} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-colors text-blue-400">
                    <Linkedin size={24} />
                </a>
            </div>
          </div>

          {/* Previously At Section */}
          <div className="flex flex-col items-center mt-16 md:mt-20">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">Previously At</p>
            <div className="flex flex-wrap justify-center gap-6 max-w-xl mx-auto">
              {experience.map((exp, index) => (
                exp.logo && (
                  <div key={index} className="group relative flex flex-col items-center w-20 h-20">
                    <div className="w-full h-full bg-white rounded-lg p-2 flex items-center justify-center opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer shadow-lg">
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                    </div>
                    <span className="absolute top-full mt-2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pt-1">
                      {exp.company}
                    </span>
                  </div>
                )
              ))}
            </div>
          </div>

        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
