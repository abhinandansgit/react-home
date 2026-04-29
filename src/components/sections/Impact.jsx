import React from 'react';
import { motion } from 'framer-motion';
import { Users, Presentation, Lightbulb, Heart, ArrowRight, Shield, Zap, Globe } from 'lucide-react';
import { Counter } from '../ui/Counter';

const activities = [
  {
    title: 'Awareness Campaigns',
    metric: '1,200+',
    description: 'Empowering communities through widespread digital literacy and cyber safety initiatives across schools and rural sectors.',
    icon: Users,
    gradient: 'from-blue-500 to-cyan-400',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    title: 'Workshops',
    metric: '500+',
    description: 'Immersive technical training sessions designed for working professionals, investigators, and tech enthusiasts.',
    icon: Presentation,
    gradient: 'from-indigo-500 to-purple-400',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600'
  },
  {
    title: 'Research Papers',
    metric: '45+',
    description: 'Leading-edge publications in global cybersecurity journals, focusing on AI-driven threat intelligence.',
    icon: Lightbulb,
    gradient: 'from-amber-500 to-orange-400',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600'
  },
  {
    title: 'Victims Assisted',
    metric: '5,000+',
    description: 'Providing critical digital forensic support and pro-bono legal guidance to individuals targeted by cybercriminals.',
    icon: Heart,
    gradient: 'from-rose-500 to-pink-400',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600'
  },
];

export function Impact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="impact" className="py-24 bg-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-50/50 rounded-full blur-[120px] -z-10 translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4"
            >
              <Zap className="w-3 h-3" />
              Impact Report
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-black text-slate-900 leading-[1.1] mb-6"
            >
              Real-World Impact, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500">
                Driven by Action.
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed max-w-xl"
            >
              Our mission extends beyond theory. We are on the front lines of digital safety, 
              providing tangible solutions and building a more secure ecosystem for everyone.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex items-center gap-4 p-4 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="User" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-600 flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
                +15k
              </div>
            </div>
            <div className="pr-4">
              <p className="text-xs font-black text-slate-900 uppercase">Active Community</p>
              <p className="text-[10px] text-slate-500 font-bold">Volunteers & Researchers</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 group overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className={`absolute inset-0 bg-linear-to-br ${activity.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
              
              <div className={`w-14 h-14 rounded-2xl ${activity.iconBg} ${activity.iconColor} flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 relative z-10`}>
                <activity.icon className="w-7 h-7" />
              </div>
              
              <div className="relative z-10">
                <h4 className="text-4xl font-display font-black text-slate-900 mb-2 flex items-baseline gap-1">
                  <Counter value={activity.metric} delay={index * 0.1} />
                </h4>
                <p className="text-lg font-bold text-slate-800 mb-4 group-hover:text-indigo-600 transition-colors">{activity.title}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {activity.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-black text-indigo-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 cursor-pointer">
                  Learn More <ArrowRight className="w-3 h-3" />
                </div>
              </div>
              
              {/* Decorative background number */}
              <span className="absolute -bottom-4 -right-4 text-9xl font-black text-slate-100/30 select-none group-hover:text-indigo-500/5 transition-colors duration-500 leading-none">
                {index + 1}
              </span>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 relative rounded-[3rem] overflow-hidden bg-slate-900 p-8 md:p-16 shadow-3xl group"
        >
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#4f46e5_0%,transparent_50%)]" />
             <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#0ea5e9_0%,transparent_50%)]" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white font-bold text-[10px] uppercase tracking-widest mb-6">
                <Globe className="w-3 h-3 text-cyan-400" />
                Global Network
              </div>
              <h3 className="text-3xl md:text-5xl font-display font-black text-white mb-6 leading-tight">
                Join our mission to <br />
                <span className="text-cyan-400">Secure the Future.</span>
              </h3>
              <p className="text-indigo-100/80 text-lg mb-8 leading-relaxed max-w-md">
                We believe in the power of collective intelligence. Partner with us to build 
                a safer digital world through research and collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 rounded-2xl bg-indigo-600 text-white font-black uppercase tracking-widest text-xs hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-900/50 active:scale-95">
                  Become a Volunteer
                </button>
                <button className="px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all active:scale-95">
                  Partner With Us
                </button>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                   animate={{ y: [0, -10, 0] }} 
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
                >
                  <Shield className="w-8 h-8 text-indigo-400 mb-4" />
                  <p className="text-xl font-black text-white">Forensics</p>
                  <p className="text-xs text-indigo-200/60 font-bold">Post-Incident Support</p>
                </motion.div>
                <motion.div 
                   animate={{ y: [0, 10, 0] }} 
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="p-6 rounded-3xl bg-indigo-600/20 backdrop-blur-xl border border-indigo-500/20 mt-8"
                >
                  <Users className="w-8 h-8 text-cyan-400 mb-4" />
                  <p className="text-xl font-black text-white">Education</p>
                  <p className="text-xs text-indigo-200/60 font-bold">Skills & Training</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
