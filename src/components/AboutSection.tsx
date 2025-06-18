
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, User, Calendar } from 'lucide-react';

const AboutSection = () => {
  const timeline = [
    { year: '2022', event: 'Started Web Development Journey' },
    { year: '2023', event: 'Learned React.js & Python' },
    { year: '2024', event: 'Completed Multiple Internships' },
    { year: '2024', event: 'Built Professional Projects' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <User className="text-cyan-400 mr-3" size={24} />
              <h3 className="text-2xl font-semibold">Professional Bio</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm a passionate web developer with expertise in React.js, Python, and modern web technologies. 
              Currently pursuing my studies while actively building projects and gaining real-world experience 
              through internships. I love creating user-friendly interfaces and solving complex problems with clean, 
              efficient code.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              My journey in tech has been driven by curiosity and a desire to create meaningful digital experiences. 
              I've worked on various projects ranging from AI-powered applications to responsive web designs, 
              always focusing on delivering quality and innovation.
            </p>
            
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <FileText className="mr-2" size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Calendar className="text-cyan-400 mr-3" size={24} />
              <h3 className="text-2xl font-semibold">Learning Journey</h3>
            </div>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {item.year}
                  </div>
                  <div className="flex-1">
                    <div className="bg-slate-700/50 rounded-lg p-4 border border-cyan-500/20">
                      <p className="text-gray-300">{item.event}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
