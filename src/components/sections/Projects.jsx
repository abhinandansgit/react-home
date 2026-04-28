import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { ExpandableText } from '../ui/ExpandableText';

const projects = [
  {
    title: 'GovShield AI',
    category: 'Government Solutions',
    description: 'An AI-powered monitoring system designed for real-time threat detection in government networks.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    tags: ['AI', 'Cybersecurity', 'GovTech'],
  },
  {
    title: 'CyberEdu Portal',
    category: 'Institutional Tools',
    description: 'A comprehensive learning management system for cybersecurity training and certifications.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    tags: ['EdTech', 'LMS', 'Certification'],
  },
  {
    title: 'SecureFlow ERP',
    category: 'AI-Based Systems',
    description: 'Enterprise resource planning with built-in end-to-end encryption and automated security auditing.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
    tags: ['SaaS', 'ERP', 'Encryption'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-8 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-8 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">Our Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4 leading-tight">
              Projects & <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Technology Solutions</span>
            </h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              We actively build innovative and unique projects tailored for government bodies, institutions, and various sectors. Our focus is on delivering impactful technology solutions that address real-world challenges through continuous research and innovation.
            </p>
          </div>
          <button className="px-5 py-2 rounded-lg border border-slate-200 text-slate-900 text-sm font-semibold hover:bg-slate-50 transition-all shadow-xs">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                  <div className="flex gap-3">
                    <button className="p-2.5 rounded-full bg-white text-slate-900 hover:bg-indigo-600 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="p-2.5 rounded-full bg-white text-slate-900 hover:bg-indigo-600 hover:text-white transition-colors">
                      <Code2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1">
                  {project.category}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h4>
                <ExpandableText 
                  text={project.description} 
                  limit={60} 
                  className="text-xs text-slate-600 mb-4 leading-relaxed" 
                />
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-50 text-slate-500 text-[9px] font-bold">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
