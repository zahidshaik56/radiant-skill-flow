
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const InternshipSection = () => {
  const internships = [
    {
      company: 'RSF Soft',
      position: 'Frontend Developer Intern',
      duration: 'Jun 2024 - Aug 2024',
      location: 'Remote',
      description: 'Developed responsive web applications using React.js and collaborated with cross-functional teams to deliver high-quality user interfaces.',
      achievements: [
        'Built 3 client-facing React applications',
        'Improved page load speed by 40%',
        'Implemented responsive design for mobile devices'
      ],
      technologies: ['React.js', 'JavaScript', 'CSS3', 'Git']
    },
    {
      company: 'MotionCut',
      position: 'Python Developer Intern',
      duration: 'Mar 2024 - May 2024',
      location: 'Remote',
      description: 'Worked on Python-based projects, developed automation scripts, and contributed to backend development using modern Python frameworks.',
      achievements: [
        'Created 5 automation scripts for data processing',
        'Developed REST APIs using Flask',
        'Optimized database queries for better performance'
      ],
      technologies: ['Python', 'Flask', 'MySQL', 'REST APIs']
    },
    {
      company: 'BharatIntern',
      position: 'Web Development Intern',
      duration: 'Jan 2024 - Feb 2024',
      location: 'Remote',
      description: 'Focused on full-stack web development, created interactive websites, and gained hands-on experience with modern web technologies.',
      achievements: [
        'Delivered 4 complete web projects',
        'Learned modern JavaScript frameworks',
        'Implemented user authentication systems'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Internship Experience
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Real-world experience gained through professional internships
          </p>
        </motion.div>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-700/30 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Briefcase className="text-cyan-400 mr-3" size={24} />
                    <h3 className="text-2xl font-bold text-white">{internship.position}</h3>
                  </div>
                  <h4 className="text-xl text-cyan-400 font-semibold mb-3">{internship.company}</h4>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="mr-2" size={16} />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2" size={16} />
                      <span>{internship.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                {internship.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-lg font-semibold text-white mb-3">Key Achievements</h5>
                  <ul className="space-y-2">
                    {internship.achievements.map((achievement, achievementIndex) => (
                      <motion.li
                        key={achievementIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start text-gray-300"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-white mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
