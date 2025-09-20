'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import profilePhoto from '@/assets/images/profile-photo.png'; // Add your photo here
import { stats } from '@/data/stats';

const experiences = [
  {
    year: '2022 - Present',
    role: 'Senior Shopify Developer',
    company: 'Ecommerce Solutions Pro',
    description: 'Leading Shopify Plus implementations, custom theme development, and app integrations for enterprise clients. Specializing in complex B2B solutions and multi-store management.',
  },
  {
    year: '2020 - 2022',
    role: 'Shopify Developer',
    company: 'Digital Commerce Agency',
    description: 'Developed custom Shopify themes, integrated third-party apps, and optimized store performance. Built custom solutions for inventory management and automated workflows.',
  },
  {
    year: '2019 - 2020',
    role: 'Frontend Developer',
    company: 'Web Development Studio',
    description: 'Started with general web development before specializing in ecommerce. Gained expertise in responsive design, user experience optimization, and conversion rate optimization.',
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized Shopify developer with expertise in building high-converting
              ecommerce stores and custom solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left Column - Personal Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative">
                <motion.div
                  className="w-full h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl overflow-hidden relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >

                  <Image
                    src={profilePhoto}
                    alt="Henry Yim - Shopify Developer"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Placeholder - Remove this when you add your photo */}
                  <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold">
                    HY
                  </div>
                </motion.div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Hello! I&apos;m a Shopify Expert
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I am Henry, a dedicated Shopify expert, I&apos;ve successfully launched and optimized numerous 
                  online Shopify stores that generate revenue and create exceptional user experiences. As a 
                  Shopify expert, I focus not only on developing your online store but also on optimizing it for 
                  speed, technical SEO, and overall performance to maximize revenue and customer lifetime value. 
                </p>
              </div>
            </motion.div>

            {/* Right Column - Experience */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Experience Timeline
              </h3>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8 border-l-2 border-blue-200"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {exp.role}
                        </h4>
                        <span className="text-sm text-blue-600 font-medium">
                          {exp.year}
                        </span>
                      </div>
                      <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                      <p className="text-gray-600 text-sm">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 group"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon size={24} />
                </motion.div>
                <motion.div
                  className="text-2xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}