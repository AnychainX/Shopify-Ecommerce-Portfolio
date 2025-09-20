'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { Project } from '@/types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Custom Shopify Plus Store',
    description: 'Enterprise-level Shopify Plus store with custom checkout flow, advanced product configurator, B2B wholesale portal, and multi-currency support. Integrated with ERP systems and custom inventory management.',
    image: '/api/placeholder/600/400',
    technologies: ['Shopify Plus', 'Liquid', 'JavaScript', 'Shopify Scripts', 'GraphQL', 'REST API'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Shopify Theme Development',
    description: 'Custom responsive Shopify theme built from scratch with advanced filtering, quick view functionality, mega menu navigation, and optimized for conversion. Includes dynamic sections and mobile-first design.',
    image: '/api/placeholder/600/400',
    technologies: ['Shopify', 'Liquid', 'CSS3', 'JavaScript', 'SCSS', 'Theme Kit'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Shopify App Development',
    description: 'Custom Shopify app for inventory management and automated product recommendations. Features real-time sync, analytics dashboard, and seamless integration with store admin.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'Shopify API', 'MongoDB', 'Polaris'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: '4',
    title: 'Headless Commerce Solution',
    description: 'Headless ecommerce platform using Shopify as backend with Next.js frontend. Features custom checkout, subscription management, and advanced SEO optimization.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'Shopify Storefront API', 'GraphQL', 'Tailwind CSS'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: '5',
    title: 'Multi-Store Management',
    description: 'Central dashboard for managing multiple Shopify stores with unified inventory, order processing, and analytics. Streamlines operations for multi-brand businesses.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Shopify Admin API', 'Node.js', 'PostgreSQL'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: '6',
    title: 'Shopify Migration Service',
    description: 'Complete store migration from Magento to Shopify Plus, including data migration, theme recreation, and custom functionality preservation. Zero downtime migration strategy.',
    image: '/api/placeholder/600/400',
    technologies: ['Shopify Plus', 'Magento', 'Data Migration', 'Liquid', 'PHP'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
];

const categories = ['All', 'Featured', 'Shopify Plus', 'Custom Themes', 'Apps & Integrations'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilter = (category: string) => {
    setFilter(category);
    
    if (category === 'All') {
      setFilteredProjects(projects);
    } else if (category === 'Featured') {
      setFilteredProjects(projects.filter(project => project.featured));
    } else if (category === 'Shopify Plus') {
      setFilteredProjects(projects.filter(project => 
        project.technologies.some(tech => tech.includes('Shopify Plus'))));
    } else if (category === 'Custom Themes') {
      setFilteredProjects(projects.filter(project => 
        project.technologies.some(tech => ['Liquid', 'Theme Kit', 'SCSS'].includes(tech))));
    } else if (category === 'Apps & Integrations') {
      setFilteredProjects(projects.filter(project => 
        project.technologies.some(tech => ['Shopify API', 'GraphQL', 'REST API'].includes(tech))));
    } else {
      setFilteredProjects(projects);
    }
  };

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
    <section id="projects" className="py-20 bg-white">
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
              Shopify & Ecommerce Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here's a showcase of my Shopify and ecommerce development work, from custom themes 
              to complex Shopify Plus implementations and everything in between.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                  whileHover={{ y: -10 }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-400 to-purple-600">
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                    <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center space-x-4"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white text-gray-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white text-gray-900 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Link href="/projects">
              <motion.button
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-blue-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}