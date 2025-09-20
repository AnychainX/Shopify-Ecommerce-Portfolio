'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiShopify, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiTailwindcss,
  SiGit,
  SiStripe,
  SiGraphql,
  SiFigma,
  SiGoogleanalytics,
  SiWordpress
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Shopify Development',
    color: 'blue',
    skills: [
      { name: 'Shopify', level: 95, icon: SiShopify },
      { name: 'Shopify Plus', level: 90, icon: SiShopify },
      { name: 'Liquid', level: 92, icon: SiShopify },
      { name: 'Shopify CLI', level: 88, icon: SiShopify },
    ],
  },
  {
    title: 'Frontend & Integrations',
    color: 'green',
    skills: [
      { name: 'JavaScript', level: 93, icon: SiJavascript },
      { name: 'React', level: 88, icon: SiReact },
      { name: 'GraphQL', level: 85, icon: SiGraphql },
      { name: 'Tailwind CSS', level: 90, icon: SiTailwindcss },
    ],
  },
  {
    title: 'Ecommerce Tools',
    color: 'purple',
    skills: [
      { name: 'Stripe', level: 87, icon: SiStripe },
      { name: 'Google Analytics', level: 85, icon: SiGoogleanalytics },
      { name: 'Git', level: 90, icon: SiGit },
      { name: 'Figma', level: 82, icon: SiFigma },
    ],
  },
];

const getColorClasses = (color: string) => {
  const colorMap = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-600',
      progress: 'bg-blue-600',
      hover: 'hover:border-blue-300',
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-600',
      progress: 'bg-green-600',
      hover: 'hover:border-green-300',
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-600',
      progress: 'bg-purple-600',
      hover: 'hover:border-purple-300',
    },
  };
  return colorMap[color as keyof typeof colorMap];
};

export default function Skills() {
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
    <section id="skills" className="py-20 bg-gray-50">
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
              Shopify & Ecommerce Skills
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized skills and technologies for building successful Shopify stores and ecommerce solutions
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const colors = getColorClasses(category.color);
              
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className={`p-6 rounded-2xl border-2 ${colors.bg} ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-lg`}
                  whileHover={{ y: -5 }}
                >
                  <h3 className={`text-xl font-semibold ${colors.text} mb-6 text-center`}>
                    {category.title}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <motion.div
                              className={`${colors.text}`}
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <skill.icon size={20} />
                            </motion.div>
                            <span className="font-medium text-gray-700">
                              {skill.name}
                            </span>
                          </div>
                          <span className={`text-sm font-semibold ${colors.text}`}>
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full ${colors.progress}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3,
                              ease: [0.22, 0.1, 0.1, 0.9]
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Skills Cloud */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-8">
              Additional Ecommerce Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'HTML5', 'CSS3', 'SCSS', 'Theme Kit', 'Shopify Scripts', 'REST API',
                'Node.js', 'MongoDB', 'Payment Gateways', 'SEO Optimization', 'Conversion Optimization', 'A/B Testing'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}