import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Calendar, Shield } from 'lucide-react';

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificates = [
    {
      title: 'O Level Certification',
      issuer: 'National Institute of Electronics & Information Technology (NIELIT)',
      date: 'Completed',
      description: 'Fundamental course in Computer Concepts and Application Certificate, covering essential computer skills, programming basics, and IT fundamentals.',
      icon: Shield,
      color: 'from-cyan-400 to-blue-500',
      link: 'https://drive.google.com/file/d/1xevaHmMRy-LGojRZ5X1VfUyegn9hkVsb/view?usp=sharing',
      skills: ['Computer Fundamentals', 'Programming Basics', 'IT Concepts', 'Data Processing']
    },
    {
      title: 'Course on Computer Concepts (CCC)',
      issuer: 'National Institute of Electronics & Information Technology (NIELIT)',
      date: 'Completed',
      description: 'Comprehensive certification covering computer fundamentals, office applications, internet usage, and digital literacy skills.',
      icon: Award,
      color: 'from-purple-400 to-pink-500',
      link: 'https://drive.google.com/file/d/1q3eqoG-CEofN2DpkMlhzW4FVWErtRcd6/view?usp=sharing',
      skills: ['MS Office Suite', 'Internet & Email', 'Digital Literacy', 'Computer Applications']
    },
  ];

  return (
    <section id="certificates" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional certifications that validate my technical skills and knowledge
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
              
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
              >
                {/* Certificate Header */}
                <div className={`relative p-8 bg-gradient-to-br ${cert.color} bg-opacity-10`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center`}>
                      <cert.icon className="text-white" size={32} />
                    </div>
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800/80 backdrop-blur-sm rounded-lg text-white hover:text-cyan-400 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-300 mb-4">
                    <Calendar size={16} />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Issued by</h4>
                    <p className="text-white font-medium">{cert.issuer}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Description</h4>
                    <p className="text-gray-300 leading-relaxed">{cert.description}</p>
                  </div>

                  {/* Skills Covered */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Skills Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-cyan-400 rounded-full border border-gray-700/50 hover:border-cyan-400/50 transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Certificate Button */}
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 w-full justify-center py-3 px-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Award className="text-white" size={24} />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">2</div>
                <div className="text-sm text-gray-400">Certifications Earned</div>
              </div>
            </div>
            
            <div className="w-px h-12 bg-gray-700"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                <Shield className="text-white" size={24} />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">NIELIT</div>
                <div className="text-sm text-gray-400">Certified by</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">Continuously learning and earning new certifications</p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-400 font-medium">More certifications coming soon...</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;