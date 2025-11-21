import React from 'react';
import { motion } from 'framer-motion';
import { responsibilities, achievements } from '../data';
import { Award, Users } from 'lucide-react';

const MoreInfo = () => {
  return (
    <section className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Responsibilities */}
          <div>
             <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                <Users className="mr-3 text-green-500" /> Positions of Responsibility
              </h2>
              <div className="space-y-8">
                {responsibilities.map((resp, index) => (
                  <div key={index} className="border-l-2 border-gray-800 pl-6 relative">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 bg-green-500 rounded-full"></div>
                    <h3 className="text-lg font-bold text-white">{resp.role}</h3>
                    <p className="text-green-400 text-sm mb-1">{resp.organization} | {resp.period}</p>
                    <p className="text-gray-400 text-sm">{resp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Achievements */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                <Award className="mr-3 text-yellow-500" /> Achievements
              </h2>
              <div className="grid gap-4">
                {achievements.map((ach, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/5 flex items-start">
                    <div className="mr-3 mt-1 min-w-[20px] text-yellow-500">★</div>
                    <p className="text-gray-300 text-sm md:text-base">{ach}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MoreInfo;
