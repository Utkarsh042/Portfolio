import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    submitted: false,
    error: null
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'singhutkarsh919@gmail.com',
      href: 'mailto:singhutkarsh919@gmail.com',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 XXXXXXXXXX',
      href: 'tel:+91XXXXXXXXXX',
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Noida, UP',
      href: '#',
      color: 'from-blue-400 to-cyan-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/Utkarsh042',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/utkarsh-singh-4bb919311/',
      color: 'hover:text-blue-400'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (formStatus.error) {
      setFormStatus(prev => ({ ...prev, error: null }));
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      return 'Please enter your name';
    }
    if (!formData.email.trim()) {
      return 'Please enter your email';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      return 'Please enter a subject';
    }
    if (!formData.message.trim()) {
      return 'Please enter a message';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setFormStatus({
        isSubmitting: false,
        submitted: false,
        error: validationError
      });
      return;
    }

    // Set submitting state
    setFormStatus({
      isSubmitting: true,
      submitted: false,
      error: null
    });

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create mailto link with form data
      const mailtoLink = `mailto:singhutkarsh919@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      // Reset form and show success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setFormStatus({
        isSubmitting: false,
        submitted: true,
        error: null
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);

    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <section id="contact" className="py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-gray-900/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 opacity-0 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-6 opacity-0 animate-slideInLeft">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Let's Start a Conversation</h3>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                I'm always interested in hearing about new opportunities, interesting projects, 
                or just having a chat about technology and innovation. Feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="group">
                  <a
                    href={contact.href}
                    className="flex items-center gap-3 p-3 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-cyan-400/50 transition-all duration-300 hover:translate-x-2"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${contact.color} rounded-lg flex items-center justify-center`}>
                      <contact.icon className="text-white" size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300 text-sm">
                        {contact.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{contact.value}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Follow Me</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 ${social.color} hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-cyan-500/20 to-blue-500/20 rounded-xl blur-xl"></div>
              <div className="relative bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Available for Work</h4>
                    <p className="text-gray-400 text-xs">Currently open to new opportunities and projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative opacity-0 animate-slideInRight">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <MessageCircle className="text-white" size={18} />
                </div>
                <h3 className="text-xl font-bold text-white">Send a Message</h3>
              </div>

              {/* Success Message */}
              {formStatus.submitted && (
                <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3">
                  <CheckCircle className="text-green-400" size={18} />
                  <div>
                    <p className="text-green-400 font-medium text-sm">Message sent successfully!</p>
                    <p className="text-green-300/80 text-xs">Your default email client should open shortly.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {formStatus.error && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3">
                  <AlertCircle className="text-red-400" size={18} />
                  <div>
                    <p className="text-red-400 font-medium text-sm">Error</p>
                    <p className="text-red-300/80 text-xs">{formStatus.error}</p>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 text-sm"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 text-sm"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 text-sm"
                    placeholder="Project Discussion"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 resize-none text-sm"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={formStatus.isSubmitting}
                  className={`w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm ${
                    formStatus.isSubmitting 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98]'
                  }`}
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-700/50 text-center opacity-0 animate-fadeInUp">
          <p className="text-gray-400 mb-3 text-sm">
            © 2025 Utkarsh Singh. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Built with React.js, Three.js, and lots of ☕
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out 0.2s forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out 0.4s forwards;
        }
      `}</style>
    </section>
  );
};

export default Contact;