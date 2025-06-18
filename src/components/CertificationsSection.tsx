
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      name: 'Web Development Bootcamp',
      issuer: 'NPTEL',
      date: '2024',
      credential: 'NPTEL24CS01',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&q=80',
      link: 'https://nptel.ac.in'
    },
    {
      name: 'Python Programming',
      issuer: 'MotionCut',
      date: '2024',
      credential: 'MC2024PY',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&q=80',
      link: 'https://motioncut.com'
    },
    {
      name: 'Frontend Development',
      issuer: 'BharatIntern',
      date: '2024',
      credential: 'BI2024FE',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80',
      link: 'https://bharatintern.com'
    },
    {
      name: 'React.js Certification',
      issuer: 'TechCorp',
      date: '2024',
      credential: 'TC2024RJ',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
      link: 'https://techcorp.com'
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements that validate my skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-slate-800/50 rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group cursor-pointer"
              onClick={() => window.open(cert.link, '_blank')}
            >
              <div className="relative">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute top-2 right-2">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-2 rounded-full">
                    <Award size={16} className="text-black" />
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {cert.name}
                </h3>
                <div className="space-y-1 text-sm">
                  <p className="text-cyan-400 font-semibold">{cert.issuer}</p>
                  <p className="text-gray-400">{cert.date}</p>
                  <p className="text-gray-500 font-mono text-xs">{cert.credential}</p>
                </div>
                
                <div className="mt-3 flex items-center text-cyan-400 text-sm font-semibold">
                  <Star size={14} className="mr-1" />
                  Verified
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg px-6 py-3">
            <Award className="text-cyan-400 mr-3" size={24} />
            <span className="text-white font-semibold">
              {certifications.length} Verified Certifications
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
