import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, ArrowRight, UserPlus, GraduationCap, Building2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Counter } from '../ui/Counter';

// Import the generated 3D assets from local assets directory
import megaphone3d from '../../assets/3d-icons/megaphone.png';
import laptop3d from '../../assets/3d-icons/laptop.png';
import notepad3d from '../../assets/3d-icons/notepad.png';
import heart3d from '../../assets/3d-icons/heart-hands.png';
import shield3d from '../../assets/3d-icons/shield.png';

const activities = [
  {
    title: 'Awareness Campaigns',
    metric: '1,200+',
    description: 'Empowering communities through widespread digital literacy and cyber safety initiatives.',
    image: megaphone3d,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    accentColor: 'blue'
  },
  {
    title: 'Workshops',
    metric: '500+',
    description: 'Immersive technical training sessions designed for working professionals and tech enthusiasts.',
    image: laptop3d,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    accentColor: 'indigo'
  },
  {
    title: 'Research Papers',
    metric: '45+',
    description: 'Leading-edge publications in global journals, focusing on AI-driven threat intelligence.',
    image: notepad3d,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    accentColor: 'amber'
  },
  {
    title: 'Victims Assisted',
    metric: '5,000+',
    description: 'Providing critical digital forensic support and pro-bono legal guidance to victims.',
    image: heart3d,
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    accentColor: 'rose'
  },
];

export function Impact() {
  return (
    <section id="impact" className="py-6 md:py-10 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-blue-50/20 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-indigo-50/30 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-360 mx-auto px-4 md:px-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-4 lg:mb-8 gap-6 lg:gap-10">
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-xs uppercase tracking-widest mb-6"
            >
              <Zap className="w-3 h-3" />
              Our Activities
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-5xl font-display font-black text-slate-900 leading-tight mb-2"
            >
              Digital Safety & <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Community Engagement</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm md:text-base text-slate-600 leading-relaxed mb-4 max-w-lg mx-auto lg:mx-0"
            >
              We continuously work to promote innovation, knowledge-sharing, and cyber safety 
              across diverse communities through structured initiatives.
            </motion.p>

            {/* Quick Stats/Badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6 lg:mb-0">
              {[
                { label: 'Empowering', sub: 'Safer Communities', icon: UserPlus },
                { label: 'Educating', sub: 'Every Generation', icon: GraduationCap },
                { label: 'Building', sub: 'A Safer Tomorrow', icon: Building2 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-blue-600 border border-slate-100 shadow-sm">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-slate-900 uppercase leading-none mb-1">{item.label}</p>
                    <p className="text-[10px] text-slate-500 font-bold">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex-1 max-w-70 md:max-w-lg relative mb-8 lg:mb-0"
          >
            {/* Main 3D Shield */}
            <motion.img
              src={shield3d}
              alt="Cyber Security Shield"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-[85%] md:w-full h-auto mx-auto drop-shadow-[0_20px_50px_rgba(59,130,246,0.3)]"
            />
            
            {/* Orbiting particles/glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] -z-10" />
          </motion.div>
        </div>

        {/* Activity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="relative p-8 rounded-[3rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group overflow-hidden"
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform group-hover:scale-110 duration-500", activity.bgColor)}>
                 <Shield className={cn("w-7 h-7", activity.color)} />
              </div>
              
              <div className="relative z-10">
                <h4 className="text-4xl font-display font-black text-slate-900 mb-2 flex items-baseline gap-1">
                  <Counter value={activity.metric} delay={index * 0.1} />
                </h4>
                <p className="text-lg font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">{activity.title}</p>
                <p className="text-slate-500 text-xs leading-relaxed mb-6">
                  {activity.description}
                </p>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className={cn("w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer", activity.bgColor)}
                >
                  <ArrowRight className={cn("w-5 h-5", activity.color)} />
                </motion.div>
              </div>

              {/* 3D Icon Overlay */}
              <motion.img
                src={activity.image}
                alt={activity.title}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
                className="absolute -bottom-1 -right-1 w-24 h-24 md:w-32 md:h-32 object-contain group-hover:scale-110 transition-transform duration-700 select-none pointer-events-none opacity-90 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 flex justify-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
}
