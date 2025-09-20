'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { SocialLink } from '@/types';

const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:hello@example.com', icon: 'mail' },
];

const getSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'github':
      return <Github size={20} />;
    case 'linkedin':
      return <Linkedin size={20} />;
    case 'mail':
      return <Mail size={20} />;
    default:
      return null;
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold">Henry Yim</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate developer creating innovative solutions with modern technologies.
              Let&apos;s build something amazing together.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-all duration-300 group"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="text-gray-400 group-hover:text-white transition-colors duration-200"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    {getSocialIcon(social.icon)}
                  </motion.div>
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Available for freelance opportunities
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>© {currentYear} Portfolio. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart size={16} className="text-red-500 fill-current" />
            </motion.div>
            <span>and Henry</span>
          </div>
          
          <motion.div
            className="text-sm text-gray-400"
            whileHover={{ scale: 1.05 }}
          >
            <span>Designed & Built by Henry Yim</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}