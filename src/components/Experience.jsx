import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      position: 'Web Developer Intern',
      company: 'Enego Services Pvt. Ltd.',
      duration: 'Current Position',
      location: 'Remote',
      type: 'Internship',
      description: 'Working on modern web applications using React.js and Node.js. Collaborating with senior developers to build scalable solutions and improve user experience.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'JavaScript', 'CSS3'],
      color: 'from-cyan-400 to-blue-500',
      status: 'current'
    },
    {
      position: 'Web Development Intern',
      company: 'Safe Your Web',
      duration: '2023',
      location: 'Remote',
      type: 'Internship',
      description: 'Developed responsive web applications and worked on frontend optimization. Gained experience in modern web development practices and collaborative coding.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery'],
      color: 'from-purple-400 to-pink-500',
      status: 'completed'
    },
    {
      position: 'Frontend Developer Intern',
      company: 'CodSoft',
      duration: '2023',
      location: 'Remote',
      type: 'Internship',
      description: 'Created responsive user interfaces and implemented interactive features. Learned best practices in frontend development and UI/UX design principles.',
      technologies: ['React.js', 'CSS3', 'JavaScript', 'Figma', 'Git'],
      color: 'from-green-400 to-teal-500',
      status: 'completed'
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My professional journey in web development and software engineering
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                } justify-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full border-4 border-gray-900 z-10 hidden lg:block"></div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full max-w-lg ${
                    index % 2 === 0 ? 'lg:mr-8 lg:text-right' : 'lg:ml-8 lg:text-left'
                  } text-left`}
                >
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                    <div className="relative bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                      
                      {/* Status Badge */}
                      <div className={`flex items-center gap-3 mb-4 ${
                        index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                      } justify-start`}>
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          exp.status === 'current'
                            ? 'bg-green-400/20 text-green-400 border border-green-400/30'
                            : 'bg-blue-400/20 text-blue-400 border border-blue-400/30'
                        }`}>
                          {exp.status === 'current' ? 'Currently Working' : 'Completed'}
                        </div>
                        <div className={`w-12 h-12 bg-gradient-to-br ${exp.color} rounded-lg flex items-center justify-center`}>
                          <Briefcase className="text-white" size={20} />
                        </div>
                      </div>

                      {/* Position and Company */}
                      <div className={`mb-4 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-left`}>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                        <div className="flex items-center gap-2 text-purple-400 font-semibold text-lg mb-3">
                          <Building size={18} />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      {/* Details */}
                      <div className={`space-y-2 mb-6 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-left`}>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className={`text-gray-300 leading-relaxed mb-6 ${
                        index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                      } text-left`}>
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                      } justify-start`}>
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-cyan-400 rounded-full border border-gray-700/50 hover:border-cyan-400/50 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            { number: '3+', label: 'Companies Worked With', color: 'from-cyan-400 to-blue-500' },
            { number: '2+', label: 'Years of Experience', color: 'from-purple-400 to-pink-500' },
            { number: '10+', label: 'Projects Completed', color: 'from-green-400 to-teal-500' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="text-center group"
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                  <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;