import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Background with gradient and noise */}
      <div className="absolute inset-0 bg-indigo-600">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-indigo-600 to-blue-600" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        
        {/* Animated circle */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-white/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-4 tracking-tight leading-tight">
            Ready to Join the <br />
            <span className="text-indigo-200">Cyber Revolution?</span>
          </h2>
          <p className="text-base md:text-lg text-indigo-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're a student looking to learn, an organization needing protection, or a victim seeking help, we're here for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-indigo-600 font-bold text-base shadow-xl hover:bg-indigo-50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
              Get Started Now
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-500/20 backdrop-blur-md text-white font-bold text-base border border-white/20 hover:bg-indigo-500/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Contact Our Experts
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
