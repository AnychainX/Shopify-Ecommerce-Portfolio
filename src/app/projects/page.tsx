'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft, Filter } from 'lucide-react';
import Link from 'next/link';
import { Project } from '@/types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Custom Shopify Plus Store',
    description: 'Enterprise-level Shopify Plus store with custom checkout flow, advanced product configurator, B2B wholesale portal, and multi-currency support. Integrated with ERP systems for seamless inventory management. Features custom Shopify Scripts for dynamic pricing, automated workflows, and advanced analytics dashboard.',
    image: '/api/placeholder/600/400',
    technologies: ['Shopify Plus', 'Liquid', 'JavaScript', 'Shopify Scripts', 'GraphQL', 'REST API', 'ERP Integration'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Custom Shopify Theme Development',
    description: 'Fully responsive custom Shopify theme built from scratch with advanced filtering system, quick view functionality, mega menu navigation, and conversion-optimized design. Includes dynamic sections, customizable homepage layouts, and mobile-first approach with exceptional performance scores.',
    image: '/api/placeholder/600/400',
    technologies: ['Shopify', 'Liquid', 'CSS3', 'JavaScript', 'SCSS', 'Theme Kit', 'Shopify CLI'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Shopify App Development',
    description: 'Custom Shopify app for advanced inventory management and automated product recommendations using machine learning. Features real-time synchronization, comprehensive analytics dashboard, bulk operations, and seamless integration with Shopify admin. Built with modern React and Node.js architecture.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'Shopify API', 'MongoDB', 'Polaris', 'GraphQL', 'Webhook'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '4',
    title: 'Headless Commerce Solution',
    description: 'Modern headless ecommerce platform using Shopify as backend with Next.js frontend for ultimate performance and flexibility. Features custom checkout experience, subscription management, advanced SEO optimization, and progressive web app capabilities with offline support.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'Shopify Storefront API', 'GraphQL', 'Tailwind CSS', 'PWA', 'TypeScript'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: '5',
    title: 'Multi-Store Management Platform',
    description: 'Centralized dashboard for managing multiple Shopify stores with unified inventory management, cross-store order processing, consolidated analytics, and automated reporting. Streamlines operations for multi-brand businesses with role-based access control and custom workflow automation.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Shopify Admin API', 'Node.js', 'PostgreSQL', 'Redis', 'JWT'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: '6',
    title: 'Shopify Migration Service',
    description: 'Complete store migration from legacy platforms (Magento, WooCommerce) to Shopify Plus with zero downtime strategy. Includes comprehensive data migration, theme recreation, custom functionality preservation, SEO maintenance, and post-migration optimization and training.',
    image: '/api/placeholder/600/400',
    technologies: ['Shopify Plus', 'Data Migration Tools', 'Liquid', 'Python', 'API Integration'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: '7',
    title: 'Shopify POS Integration',
    description: 'Custom point-of-sale integration connecting physical retail locations with Shopify online store. Features real-time inventory sync, unified customer profiles, loyalty program integration, and comprehensive reporting across all sales channels with offline capability.',
    image: '/api/placeholder/600/400',
    technologies: ['Shopify POS', 'REST API', 'React Native', 'SQLite', 'Sync Engine'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: '8',
    title: 'Subscription Commerce Platform',
    description: 'Advanced subscription ecommerce solution built on Shopify with custom subscription management, flexible billing cycles, customer portal, dunning management, and comprehensive analytics. Integrates with popular subscription apps and payment gateways.',
    image: '/api/placeholder/600/400',
    technologies: ['Shopify', 'Subscription APIs', 'Liquid', 'JavaScript', 'Stripe', 'Customer Portal'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: '9',
    title: 'B2B Wholesale Portal',
    description: 'Comprehensive B2B wholesale solution on Shopify Plus with tiered pricing, bulk ordering, quote management, credit terms, and dedicated customer accounts. Features advanced user roles, approval workflows, and integration with accounting systems.',
    image: '/api/placeholder/600/400',
    technologies: ['Shopify Plus', 'Shopify Scripts', 'B2B APIs', 'Liquid', 'Custom Checkout'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: '10',
    title: 'Shopify Performance Optimization',
    description: 'Comprehensive performance optimization project improving site speed by 60% and conversion rates by 25%. Includes code optimization, image compression, lazy loading implementation, and Core Web Vitals improvements with ongoing monitoring and maintenance.',
    image: '/api/placeholder/600/400',
    technologies: ['Shopify', 'Performance Optimization', 'Liquid', 'JavaScript', 'Web Vitals'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
];

const categories = ['All', 'Featured', 'Shopify Plus', 'Custom Themes', 'Apps & Integrations', 'Migrations'];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'All' || 
      (filter === 'Featured' && project.featured) ||
      (filter === 'Shopify Plus' && project.technologies.some(tech => 
        tech.includes('Shopify Plus'))) ||
      (filter === 'Custom Themes' && project.technologies.some(tech => 
        ['Liquid', 'Theme Kit', 'SCSS', 'Shopify CLI'].includes(tech))) ||
      (filter === 'Apps & Integrations' && project.technologies.some(tech => 
        ['Shopify API', 'GraphQL', 'REST API', 'Polaris', 'Webhook'].includes(tech))) ||
      (filter === 'Migrations' && project.technologies.some(tech => 
        ['Data Migration Tools', 'Migration', 'API Integration'].includes(tech)));

    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <ArrowLeft size={20} />
                <span>Back to Home</span>
              </Link>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Shopify & Ecommerce Projects</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Search and Filter Section */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Filter Toggle */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="md:hidden flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  <Filter size={16} />
                  <span>Filters</span>
                </button>
                <span className="text-gray-600">
                  {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
                </span>
              </div>
            </div>

            {/* Filter Categories */}
            <div className={`${showFilters ? 'block' : 'hidden'} md:block mt-4`}>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      filter === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -5 }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-400 to-purple-600">
                    {project.featured && (
                      <div className="absolute top-3 right-3 z-10">
                        <span className="px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                    <div className="w-full h-full flex items-center justify-center text-white text-3xl font-bold">
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
                        className="p-2 bg-white text-gray-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white text-gray-900 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={18} />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 text-white text-center py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium"
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

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              variants={itemVariants}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg mb-4">No projects found</p>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}