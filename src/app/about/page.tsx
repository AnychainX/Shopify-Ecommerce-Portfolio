'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/components/layout';
import { About, Skills } from '@/components/sections';

export default function AboutPage() {
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
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">About Me</h1>
          </div>
        </div>
      </div>

      <main className="flex-grow">
        <section className="bg-white py-10">
        </section>
      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* CTA Section with White Background Override */}
      <section className="bg-white">
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Have any project idea in your mind! Let&apos;s discuss it
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/contact"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Get In Touch
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}