'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { Project } from '@/types';

const categories = ['Featured', 'Shopify Plus', 'Custom Themes', 'Apps & Integrations', 'Migrations'];

export default function Projects() {
  const [filter, setFilter] = useState('Featured');
  const [filteredProjects, setFilteredProjects] = useState(projects.filter(project => project.featured));
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleFilter = (category: string) => {
    setFilter(category);

    if (category === 'Featured') {
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
    } else if (category === 'Migrations') {
      setFilteredProjects(projects.filter(project =>
        project.technologies.some(tech => ['Data Migration Tools', 'Migration', 'API Integration'].includes(tech))));
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
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Works
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Showcase of my past work, from custom themes to complex Shopify Plus
              implementations and everything in between.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => handleFilter(category)}
                  className={`px-3 py-1 rounded-full font-medium transition-all duration-300 ${
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
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    y: { duration: 0.15, ease: "easeOut" }
                  }}
                  className="group bg-white rounded-2xl shadow-xl hover:bg-gray-200 hover:shadow-3xl transition-all duration-300 cursor-pointer"
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.15, ease: "easeOut" }
                  }}
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-64 rounded-t-2xl p-6">
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    {/* <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div> */}

                    {/* Action Buttons */}
                    {/* <div className="flex space-x-3">
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
                    </div> */}
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

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={closeModal} 
        />
      )}
    </section>
  );
}

// Project Modal Component
interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Prevent background scroll when scrolling inside modal
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const target = e.target as Element;
      const modalContent = document.querySelector('.modal-content');
      
      // Check if the scroll is happening inside the modal content
      if (modalContent && modalContent.contains(target)) {
        // Check if modal content can scroll
        const canScrollDown = modalContent.scrollTop < modalContent.scrollHeight - modalContent.clientHeight;
        const canScrollUp = modalContent.scrollTop > 0;
        
        // If trying to scroll beyond modal content bounds, allow background scroll
        if ((e.deltaY > 0 && !canScrollDown) || (e.deltaY < 0 && !canScrollUp)) {
          return; // Allow background scroll
        }
        
        // Otherwise prevent background scroll
        e.preventDefault();
      }
    };
    
    // Add event listener to window to catch all wheel events
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
  
  // Mock additional images - in real implementation, you'd get these from project data
  const projectImages = [
    project.image,
    project.image, // You can replace with actual additional images
    project.image,
    project.image,
    project.image,
    project.image
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4" 
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="bg-white rounded-2xl max-w-5xl w-full max-h-[85vh] overflow-y-auto scrollbar-hide shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => {
          // Prevent wheel events from bubbling to parent (overlay)
          // This allows modal content to scroll independently
          e.stopPropagation();
        }}
      >
        {/* Modal Header with Close Button */}
        <div className="relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 text-gray-700 rounded-full p-2 shadow-lg transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Main Image Carousel */}
          <div className="relative h-96 bg-gray-100 rounded-t-2xl overflow-hidden">
            <Image
              src={projectImages[currentImageIndex]}
              alt={project.title}
              fill
              className="object-cover"
            />
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-700 rounded-full p-2 shadow-lg transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-700 rounded-full p-2 shadow-lg transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {projectImages.length}
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="p-6 bg-white border-b border-gray-200">
          <div className="flex justify-center space-x-2">
            {projectImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentImageIndex 
                    ? 'border-blue-500 scale-105' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <Image
                  src={img}
                  alt={`${project.title} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Project Details Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">Project Details</h3>
              <div className="text-gray-700 space-y-2">
                <p>Comprehensive project showcasing advanced Shopify development capabilities with modern technologies and best practices.</p>
                <p>Built with performance, scalability, and user experience as primary focuses.</p>
                <p>Implemented cutting-edge features and integrations to deliver exceptional results.</p>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">Key Features & Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm">Shopify Plus Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm">Custom Theme Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm">API Integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm">Performance Optimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm">Responsive Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm">User Experience Design</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Visit Website
              </motion.a>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 text-center py-3 px-6 rounded-lg transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Source Code
              </motion.a>
            </div>
        </div>
      </motion.div>
    </motion.div>
  );
}