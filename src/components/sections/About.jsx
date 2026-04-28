import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb } from 'lucide-react';
import { ExpandableText } from '../ui/ExpandableText';

const highlights = [
  {
    title: 'Our Mission',
    description: 'Our mission is to lead the Cyber Revolution by integrating cybersecurity awareness, advanced technology, and research-driven solutions to empower the next generation with practical skills, industry knowledge, and ethical values for a secure, innovative digital ecosystem.',
    icon: Target,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Our Vision',
    description: 'We envision building a secure, innovative, and future‑ready digital ecosystem by integrating cutting‑edge technology, rigorous research, and cyber intelligence, equipping individuals and organizations to thrive in a rapidly evolving digital landscape.',
    icon: Eye,
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    title: 'Our Purpose',
    description: 'Our purpose is to strengthen digital safety and awareness by bridging the gap between knowledge and real‑world cyber challenges, providing research‑driven insights, guidance, and practical resources to combat evolving threats.',
    icon: Lightbulb,
    color: 'bg-emerald-100 text-emerald-600',
  },
];

export function About() {
  return (
    <section id="about" className="py-8 md:py-16 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 md:gap-16">
          {/* Left: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between py-1">
            <div className="mb-4">
              <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-1">About the Organization</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4 leading-tight">
                Who <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500">We Are</span>
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                CR Cyber Crime Foundation (CRCCF) is a organization dedicated to advancing cybercrime awareness, supporting digital investigations, and transforming how individuals and organizations engage with the digital world.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-3 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-slate-100"
                >
                  <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-0.5">{item.title}</h4>
                    <ExpandableText 
                      text={item.description} 
                      limit={80} 
                      className="text-xs text-slate-600 leading-relaxed" 
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="aspect-square md:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl relative">
                {/* Fallback pattern/gradient if image fails or isn't provided */}
                <div className="absolute inset-0 bg-linear-to-br from-indigo-500 to-blue-600 opacity-90" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
                
                {/* Decorative UI inside the image frame */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                  <div className="w-24 h-24 border-4 border-white/20 rounded-full flex items-center justify-center mb-6">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-2">Secure. Educate. Innovate.</h3>
                  <p className="text-white/80 max-w-sm">Building the foundation for tomorrow's cyber-resilient infrastructure.</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative background elements behind image */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full blur-2xl z-0" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-100 rounded-full blur-3xl z-0" />
            
            {/* Floating stats card - Overlapping corner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 left-6 md:-left-6 glass p-5 rounded-2xl z-20 shadow-2xl border border-white/20"
            >
              <p className="text-3xl font-extrabold text-indigo-600 mb-0.5">100%</p>
              <p className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Commitment</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
