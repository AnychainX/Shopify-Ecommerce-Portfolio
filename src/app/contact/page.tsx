'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, Facebook, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/types';
import { validateEmail } from '@/lib/utils';

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'anychainx@gmail.com',
      href: 'mailto:anychainx@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (615) 530-1189',
      href: 'tel:+16155301189',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Franklin, WI',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/anychainx',
      color: 'hover:text-gray-900',
    },
    // {
    //   icon: Linkedin,
    //   label: 'LinkedIn',
    //   href: 'https://linkedin.com',
    //   color: 'hover:text-blue-600',
    // },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://x.com/AnychainX',
      color: 'hover:text-blue-400',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://facebook.com/anychainx',
      color: 'hover:text-blue-700',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/anychainx',
      color: 'hover:text-pink-500',
    },
  ];

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
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 font-bold"
              >
                <ArrowLeft size={20} />
                <span>Back to Home</span>
              </Link>
            </div>
            {/* <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Contact Me</h1> */}
          </div>
        </div>
      </div>
      
      <main className="flex-grow">
        <div className="min-h-screen bg-white pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-10"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
                Let&apos;s work <span className="text-blue-600">together</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have any project idea in your mind? Let&apos;s discuss and bring your vision to life.
              </p>
            </motion.div>

            {/* Contact Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            >
              
              {/* Contact Information */}
              <motion.div variants={itemVariants} className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in touch</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    I&apos;m always excited to discuss new projects and opportunities. 
                    Whether you have a specific idea in mind or just want to explore possibilities, 
                    I&apos;d love to hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <info.icon size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{info.label}</div>
                        <a
                          href={info.href}
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Follow me
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-white text-gray-600 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 ${social.color}`}
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={itemVariants} className="bg-gray-50 rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <motion.input
                        type="text"
                        id="firstName"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                          errors.name ? 'border-red-300' : 'border-gray-200'
                        }`}
                        placeholder="Your first name"
                        whileFocus={{ scale: 1.02 }}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.email ? 'border-red-300' : 'border-gray-200'
                      }`}
                      placeholder="your.email@example.com"
                      whileFocus={{ scale: 1.02 }}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <div className="relative">
                      <select
                        id="project"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full pl-4 pr-12 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white ${
                          errors.subject ? 'border-red-300' : 'border-gray-200'
                        }`}
                      >
                        <option value="">Select project type</option>
                        <option value="Shopify Store Development">Shopify Store Development</option>
                        <option value="Custom Shopify Theme">Custom Shopify Theme</option>
                        <option value="Shopify App Development">Shopify App Development</option>
                        <option value="Ecommerce Migration">Ecommerce Migration</option>
                        <option value="Shopify Plus Implementation">Shopify Plus Implementation</option>
                        <option value="Store Optimization">Store Optimization</option>
                        <option value="Third-party Integrations">Third-party Integrations</option>
                        <option value="Payment Gateway Setup">Payment Gateway Setup</option>
                        <option value="SEO & Marketing Setup">SEO & Marketing Setup</option>
                        <option value="Maintenance & Support">Maintenance & Support</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
                        errors.message ? 'border-red-300' : 'border-gray-200'
                      }`}
                      placeholder="Tell me about your project..."
                      whileFocus={{ scale: 1.02 }}
                    ></motion.textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium flex items-center justify-center space-x-2"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </main>
    </div>
  );
}