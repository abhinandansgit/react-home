import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Search, Code, CheckCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

const steps = [
  {
    id: 1,
    title: 'Awareness',
    description: 'Identifying vulnerabilities and educating stakeholders.',
    icon: Lightbulb,
    color: 'text-amber-500',
    bgColor: 'bg-amber-100',
  },
  {
    id: 2,
    title: 'Research & Investigate',
    description: 'Gathering intelligence and analyzing threat vectors.',
    icon: Search,
    color: 'text-blue-500',
    bgColor: 'bg-blue-100',
  },
  {
    id: 3,
    title: 'Development',
    description: 'Building secure systems to counter identified threats.',
    icon: Code,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-100',
  },
  {
    id: 4,
    title: 'Implementation',
    description: 'Deploying solutions and monitoring for resilience.',
    icon: CheckCircle,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-100',
  },
];

export function ProcessTimeline() {
  const [hoveredStep, setHoveredStep] = React.useState(0);

  return (
    <section className="py-12 bg-slate-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">Our Process</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            How We Execute
          </h3>
        </div>

        <div className="relative max-w-full mx-auto py-8 px-4">
          {/* Progress Line (Absolute Foreground) */}
          <div className="hidden md:block absolute top-1/2 left-[12.5%] right-[12.5%] h-1 bg-slate-200 -translate-y-1/2 z-50 rounded-full overflow-hidden pointer-events-none">
            <motion.div
              animate={{ 
                width: hoveredStep === 0 ? '0%' : `${((hoveredStep - 1) / (steps.length - 1)) * 100}%` 
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-full bg-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.8)]"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-12 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(0)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex-1 flex flex-col items-center text-center relative group"
              >
                {/* Connection Dot on Line (Above the line) */}
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-50 border-2 border-indigo-500 z-60 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />

                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                  className={cn(
                    "w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl mb-6 relative z-10 border border-white/20 transition-all group-hover:rotate-6",
                    step.bgColor,
                    step.color
                  )}
                >
                  <step.icon className="w-9 h-9" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-mono font-bold text-xs border border-white/10 shadow-lg">
                    0{step.id}
                  </div>
                </motion.div>
                
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-transparent group-hover:border-slate-100 group-hover:bg-white transition-all">
                  <h4 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-tight">{step.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-50 mx-auto">{step.description}</p>
                </div>

                {/* Vertical Line for Mobile */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-linear-to-b from-indigo-500 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
