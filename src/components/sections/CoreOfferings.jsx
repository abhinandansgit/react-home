import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShieldAlert, Search, Code2, GraduationCap } from 'lucide-react';

const offerings = [
  {
    id: 'awareness',
    title: 'Cyber Awareness',
    desc: 'Promoting digital safety and awareness by bridging the gap between knowledge and real-world cyber challenges.',
    icon: ShieldAlert,
  },
  {
    id: 'investigation',
    title: 'Digital Investigation',
    desc: 'Supporting law enforcement and victims through digital investigation guidance and practical resources.',
    icon: Search,
  },
  {
    id: 'development',
    title: 'Software & IT Dev',
    desc: 'Designing and developing advanced software solutions that are practical, user-friendly, and secure.',
    icon: Code2,
  },
  {
    id: 'training',
    title: 'Professional Training',
    desc: 'Industry-oriented training and internship programs providing practical exposure and technical guidance.',
    icon: GraduationCap,
  },
];

function Card({ offering, idx }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-10 overflow-hidden transition-all duration-500 hover:border-blue-500/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
    >
      {/* Interactive Glow Effect (Light Mode) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.06), transparent 80%)`
          ),
        }}
      />

      <div className="relative z-10">
        <div className="mb-8">
          <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:shadow-[0_10px_25px_rgba(37,99,235,0.2)] transition-all duration-500">
            <offering.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-500" />
          </div>
        </div>

        <h4 className="text-xl font-display font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
          {offering.title}
        </h4>
        <p className="text-slate-500 text-sm leading-relaxed font-medium group-hover:text-slate-600 transition-colors duration-300">
          {offering.desc}
        </p>
      </div>

      {/* Subtle decorative accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[3rem] translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out" />
    </motion.div>
  );
}

export function CoreOfferings() {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Background Decorative Elements (Light Mode) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[70%] bg-blue-50 blur-[120px] rounded-full opacity-60" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[70%] bg-indigo-50 blur-[120px] rounded-full opacity-60" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600">Our Core Focus</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 leading-[1.1] tracking-tight">
              What <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">We Do</span>
            </h2>
          </div>
          
          <p className="text-slate-500 text-base md:text-lg max-w-sm lg:mb-2 font-medium leading-relaxed">
            We work across multiple domains to provide practical exposure and technical guidance in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((offering, idx) => (
            <Card key={offering.id} offering={offering} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
