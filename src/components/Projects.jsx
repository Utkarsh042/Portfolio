import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, MessageCircle, Image, Type } from 'lucide-react';

const Projects = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        triggerOnce: true,
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const projects = [
    {
      title: 'Real-Time Chat Application',
      description: 'A modern chat application built with MERN stack and Socket.io for real-time communication. Features include user authentication, private messaging, group chats, and emoji support.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'Express.js'],
      icon: MessageCircle,
      color: 'from-cyan-400 to-blue-500',
      github: 'https://github.com/Utkarsh042/chat-app.git',
      demo: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'AI Image Enhancer',
      description: 'An intelligent image enhancement tool using React.js and PicWish API. Automatically improves image quality, removes backgrounds, and applies smart filters with AI-powered algorithms.',
      technologies: ['React.js', 'PicWish API', 'CSS3', 'JavaScript'],
      icon: Image,
      color: 'from-purple-400 to-pink-500',
      github: '#',
      demo: 'https://image-enhancer-tau.vercel.app/',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Sentence Construction App',
      description: 'An educational web application built with React, Vite, and Tailwind CSS. Helps users learn and practice sentence construction with interactive exercises and real-time feedback.',
      technologies: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript'],
      icon: Type,
      color: 'from-green-400 to-teal-500',
      github: '#',
      demo: 'https://sentence-construction-phi.vercel.app/',
      image: '/api/placeholder/400/250'
    },
  ];

  return (
    <section id="projects" className="py-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-4"></div>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Showcasing my passion for creating innovative web solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300`}></div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="relative bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
              >
                {/* Project Header */}
                <div className="relative h-32 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center`}>
                      <project.icon className="text-white" size={20} />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 flex space-x-1">
                    {project.github !== '#' && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-gray-800/80 backdrop-blur-sm rounded-md text-white hover:text-cyan-400 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={14} />
                      </motion.a>
                    )}
                    {project.demo !== '#' && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-gray-800/80 backdrop-blur-sm rounded-md text-white hover:text-cyan-400 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={14} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-3 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 text-xs font-medium bg-gray-800/50 text-cyan-400 rounded-full border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    {project.demo !== '#' && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-1.5 px-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center rounded-md text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Live Demo
                      </motion.a>
                    )}
                    {project.github !== '#' && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-1.5 px-3 bg-gray-800/50 text-white text-center rounded-md text-sm font-medium border border-gray-700/50 hover:border-cyan-400/50 hover:bg-gray-700/50 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Source Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 mb-4 text-sm">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/Utkarsh042"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={16} />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;