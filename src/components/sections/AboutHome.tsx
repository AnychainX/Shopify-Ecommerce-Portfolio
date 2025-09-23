'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import profilePhoto from '@/assets/images/profile-photo.png'; // Add your photo here
import { stats } from '@/data/stats';

export default function AboutHome() {
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
                <p className="text-gray-600 leading-relaxed text-justify">
                  I am Henry, a dedicated Shopify expert, I&apos;ve successfully launched and optimized numerous 
                  online Shopify stores that generate revenue and create exceptional user experiences. As a 
                  Shopify expert, I focus not only on developing your online store but also on optimizing it for 
                  speed, technical SEO, and overall performance to maximize revenue and customer lifetime value. 
                </p>
              </div>
            </motion.div>

            {/* Right Column - Stats in 2x2 Grid */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-center text-2xl font-semibold text-gray-900 mb-6">
                My Achievements
              </h3>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-8 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 group"
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
                      <stat.icon size={32} />
                    </motion.div>
                    <motion.div
                      className="text-4xl font-bold text-gray-900 mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-gray-600 text-md">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* View Details Button */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg space-x-2"
              >
                <span>View Details</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}