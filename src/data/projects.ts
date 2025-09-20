import { Project } from '@/types';

import project1Image from '@/assets/images/projects/project-1.png';
import project2Image from '@/assets/images/projects/project-2.png';
import project3Image from '@/assets/images/projects/project-3.png';
import project4Image from '@/assets/images/projects/project-4.png';
import project5Image from '@/assets/images/projects/project-5.png';
import project6Image from '@/assets/images/projects/project-6.png';
import project7Image from '@/assets/images/projects/project-7.png';
import project8Image from '@/assets/images/projects/project-8.png';
import project9Image from '@/assets/images/projects/project-9.png';
import project10Image from '@/assets/images/projects/project-10.png';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Custom Shopify Plus Store',
    description: 'Enterprise-level Shopify Plus store with custom checkout flow, advanced product configurator, B2B wholesale portal, and multi-currency support. Integrated with ERP systems for seamless inventory management. Features custom Shopify Scripts for dynamic pricing, automated workflows, and advanced analytics dashboard.',
    image: project1Image,
    technologies: ['Shopify Plus', 'Liquid', 'JavaScript', 'Shopify Scripts', 'GraphQL', 'REST API', 'ERP Integration'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Custom Shopify Theme Development',
    description: 'Fully responsive custom Shopify theme built from scratch with advanced filtering system, quick view functionality, mega menu navigation, and conversion-optimized design. Includes dynamic sections, customizable homepage layouts, and mobile-first approach with exceptional performance scores.',
    image: project2Image,
    technologies: ['Shopify', 'Liquid', 'CSS3', 'JavaScript', 'SCSS', 'Theme Kit', 'Shopify CLI'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Shopify App Development',
    description: 'Custom Shopify app for advanced inventory management and automated product recommendations using machine learning. Features real-time synchronization, comprehensive analytics dashboard, bulk operations, and seamless integration with Shopify admin. Built with modern React and Node.js architecture.',
    image: project3Image,
    technologies: ['React', 'Node.js', 'Shopify API', 'MongoDB', 'Polaris', 'GraphQL', 'Webhook'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '4',
    title: 'Headless Commerce Solution',
    description: 'Modern headless ecommerce platform using Shopify as backend with Next.js frontend for ultimate performance and flexibility. Features custom checkout experience, subscription management, advanced SEO optimization, and progressive web app capabilities with offline support.',
    image: project4Image,
    technologies: ['Next.js', 'Shopify Storefront API', 'GraphQL', 'Tailwind CSS', 'PWA', 'TypeScript'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: '5',
    title: 'Multi-Store Management Platform',
    description: 'Centralized dashboard for managing multiple Shopify stores with unified inventory management, cross-store order processing, consolidated analytics, and automated reporting. Streamlines operations for multi-brand businesses with role-based access control and custom workflow automation.',
    image: project5Image,
    technologies: ['React', 'Shopify Admin API', 'Node.js', 'PostgreSQL', 'Redis', 'JWT'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: '6',
    title: 'Shopify Migration Service',
    description: 'Complete store migration from legacy platforms (Magento, WooCommerce) to Shopify Plus with zero downtime strategy. Includes comprehensive data migration, theme recreation, custom functionality preservation, SEO maintenance, and post-migration optimization and training.',
    image: project6Image,
    technologies: ['Shopify Plus', 'Data Migration Tools', 'Liquid', 'Python', 'API Integration'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: '7',
    title: 'Shopify POS Integration',
    description: 'Custom point-of-sale integration connecting physical retail locations with Shopify online store. Features real-time inventory sync, unified customer profiles, loyalty program integration, and comprehensive reporting across all sales channels with offline capability.',
    image: project7Image,
    technologies: ['Shopify POS', 'REST API', 'React Native', 'SQLite', 'Sync Engine'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: '8',
    title: 'Subscription Commerce Platform',
    description: 'Advanced subscription ecommerce solution built on Shopify with custom subscription management, flexible billing cycles, customer portal, dunning management, and comprehensive analytics. Integrates with popular subscription apps and payment gateways.',
    image: project8Image,
    technologies: ['Shopify', 'Subscription APIs', 'Liquid', 'JavaScript', 'Stripe', 'Customer Portal'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: '9',
    title: 'B2B Wholesale Portal',
    description: 'Comprehensive B2B wholesale solution on Shopify Plus with tiered pricing, bulk ordering, quote management, credit terms, and dedicated customer accounts. Features advanced user roles, approval workflows, and integration with accounting systems.',
    image: project9Image,
    technologies: ['Shopify Plus', 'Shopify Scripts', 'B2B APIs', 'Liquid', 'Custom Checkout'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: '10',
    title: 'Shopify Performance Optimization',
    description: 'Comprehensive performance optimization project improving site speed by 60% and conversion rates by 25%. Includes code optimization, image compression, lazy loading implementation, and Core Web Vitals improvements with ongoing monitoring and maintenance.',
    image: project10Image,
    technologies: ['Shopify', 'Performance Optimization', 'Liquid', 'JavaScript', 'Web Vitals'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
];