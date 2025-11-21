import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { Mail, Phone, Linkedin, MapPin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            I'm currently looking for full-time opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors bg-white/5 px-6 py-4 rounded-xl border border-white/10 hover:border-purple-500/50 group">
              <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                <Mail className="text-purple-400" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider">Email</div>
                <div className="font-medium">{personalInfo.email}</div>
              </div>
            </a>

            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors bg-white/5 px-6 py-4 rounded-xl border border-white/10 hover:border-blue-500/50 group">
              <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                <Phone className="text-blue-400" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider">Phone</div>
                <div className="font-medium">{personalInfo.phone}</div>
              </div>
            </a>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors"><Github size={24} /></a>
          </div>

          <footer className="text-gray-600 text-sm border-t border-white/5 pt-8">
            <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          </footer>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
