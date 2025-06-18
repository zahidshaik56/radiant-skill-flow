
import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    { name: 'React.js', level: 90, color: 'from-blue-400 to-blue-600' },
    { name: 'Python', level: 85, color: 'from-green-400 to-green-600' },
    { name: 'JavaScript', level: 88, color: 'from-yellow-400 to-yellow-600' },
    { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-orange-600' },
    { name: 'Tailwind CSS', level: 90, color: 'from-cyan-400 to-cyan-600' },
    { name: 'MySQL', level: 75, color: 'from-purple-400 to-purple-600' },
    { name: 'Firebase', level: 80, color: 'from-red-400 to-red-600' },
    { name: 'Git/GitHub', level: 85, color: 'from-gray-400 to-gray-600' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are the technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Code className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
              </div>
              
              <div className="w-full bg-slate-700 rounded-full h-2">
                <motion.div
                  className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
