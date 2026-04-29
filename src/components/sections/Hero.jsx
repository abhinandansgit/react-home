import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Lock } from 'lucide-react';
import { HeroInteractive } from '../ui/HeroInteractive';
import { TextShuffler } from '../ui/TextShuffler';
import { ExpandableText } from '../ui/ExpandableText';
import { NetworkBackground } from '../ui/NetworkBackground';
import { BinaryRain } from '../ui/BinaryRain';
import { TiltCard } from '../ui/TiltCard';
import heroBg from '../../assets/hero-bg.png';

export function Hero() {
  const shufflePhrases = [
    'Cyber Revolution',
    'AI Development',
    'Security Innovation',
    'Digital Excellence'
  ];

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-6 md:pb-12 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Tech Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/80 via-slate-900/60 to-slate-900/80" />
        <NetworkBackground />
        <BinaryRain />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6 md:mb-8 mt-4 md:mt-0 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wide text-indigo-300 uppercase">
              Cybersecurity & Innovation Hub
            </span>
          </div>

          <h1 className="text-3xl md:text-8xl font-display font-extrabold text-white tracking-tight leading-tight mb-4 md:mb-8 min-h-27.5 md:min-h-55 wrap-break-word overflow-hidden">
            <span className="block opacity-80">Leading the</span>
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-cyan-400 to-indigo-400 opacity-70 min-h-[1.2em]">
              <TextShuffler phrases={shufflePhrases} />
            </span>
          </h1>

          {/* Desktop Description */}
          <p className="hidden md:block text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            CRCCF: Empowering a secure digital future through cybersecurity innovation, ethical education, and research-driven solutions.
          </p>

          {/* Mobile Description */}
          <div className="md:hidden mb-4 max-w-xs">
            <ExpandableText
              text="CRCCF empowers the next generation with advanced cybersecurity skills and AI-driven solutions for a secure digital future."
              limit={50}
              className="text-sm text-slate-300 leading-relaxed"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold text-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1"
            >
              Explore Services
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="#programs"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-slate-900 font-semibold text-lg border border-slate-200 flex items-center justify-center gap-2 hover:bg-slate-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              Join Programs
            </a>
          </div>

          {/* New Interactive Circular Section */}
          <div className="mt-8 md:mt-12 w-full max-w-lg mx-auto">
            <HeroInteractive />
          </div>
        </motion.div>

        {/* Floating Abstract UI Elements to give the "Startup/Gov hybrid" feel */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
          transition={{ 
            opacity: { duration: 1, delay: 0.5 },
            x: { duration: 1, delay: 0.5 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
          }}
          className="hidden lg:flex absolute top-1/4 left-10 z-20"
        >
          <TiltCard className="glass p-4 rounded-2xl items-center gap-4 flex shadow-xl shadow-indigo-900/20 hover:shadow-indigo-500/30">
            <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900">Secure Systems</p>
              <p className="text-xs text-slate-500">Government Grade</p>
            </div>
          </TiltCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, y: [0, 15, 0] }}
          transition={{ 
            opacity: { duration: 1, delay: 0.7 },
            x: { duration: 1, delay: 0.7 },
            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.7 }
          }}
          className="hidden lg:flex absolute bottom-1/4 right-10 z-20"
        >
          <TiltCard className="glass p-4 rounded-2xl items-center gap-4 flex shadow-xl shadow-blue-900/20 hover:shadow-blue-500/30">
            <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
              <Lock className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900">Data Protection</p>
              <p className="text-xs text-slate-500">100% Encrypted</p>
            </div>
          </TiltCard>
        </motion.div>

      </div>
    </section>
  );
}
