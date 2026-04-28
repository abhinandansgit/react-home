import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Shield, Activity } from 'lucide-react';
import { ExpandableText } from '../ui/ExpandableText';

const technologies = [
  {
    title: 'AI Integration',
    description: 'Integrating cybersecurity awareness with AI-driven solutions to proactively detect and neutralize threats, empowering the next generation with practical skills and ethical values.',
    icon: Cpu,
  },
  {
    title: 'Scalable Systems',
    description: 'Advanced IT and software development delivering scalable, secure infrastructure that supports industry-oriented training and internship programs.',
    icon: Server,
  },
  {
    title: 'Secure Architecture',
    description: 'Zero‑trust foundations and industry‑oriented training programs designed to meet the highest standards of government and institutional safety.',
    icon: Shield,
  },
  {
    title: 'Real-time Auditing',
    description: 'Continuous monitoring, automated reporting, and practical resources to combat evolving cyber threats and ensure compliance 24/7.',
    icon: Activity,
  },
];

export function Technology() {
  return (
    <section className="py-8 md:py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute -top-64 -right-64 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-64 -left-64 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
          <div className="w-full lg:w-3/5">
            <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">Software & Innovation</h2>
            <h3 className="text-2xl md:text-4xl font-display font-bold mb-4 leading-tight">
              Advanced Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                AI Solutions
              </span>
            </h3>
            <p className="text-sm md:text-base text-slate-300 mb-4 md:mb-6 leading-relaxed max-w-xl">
              We design and develop advanced software solutions that are practical, user-friendly, and aligned with real-world needs. Our systems integrate modern Artificial Intelligence to enhance efficiency and simplify complex activities.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
                    <tech.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold mb-1">{tech.title}</h4>
                    <ExpandableText 
                      text={tech.description} 
                      limit={70} 
                      className="text-slate-400 text-xs leading-relaxed" 
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-2/5 relative">
            <motion.div
              animate={{ 
                rotateY: [0, 3, 0],
                rotateX: [0, -3, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-video lg:aspect-square glass-dark rounded-[2rem] p-6 border border-white/10 flex items-center justify-center overflow-hidden max-w-sm mx-auto"
            >
              {/* Animated "Code/Data" visual */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="w-full h-full bg-[size:20px_20px] bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)]" />
              </div>
              
              <div className="relative z-10 text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-indigo-500/20 border-2 border-indigo-500/50 flex items-center justify-center mx-auto animate-pulse">
                  <Shield className="w-10 h-10 text-indigo-400" />
                </div>
                <div>
                  <p className="text-indigo-400 font-mono text-[10px] tracking-tighter mb-0.5">ENCRYPT_SECURE</p>
                  <h4 className="text-xl font-display font-bold">Secure Architecture</h4>
                </div>
                <div className="flex justify-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [8, 16, 8] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                      className="w-0.5 bg-indigo-400/50 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
