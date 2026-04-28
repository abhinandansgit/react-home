import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, UserCheck, BookOpen, Fingerprint } from 'lucide-react';

const categories = [
  { id: 'awareness', label: 'Awareness Programs', icon: UserCheck },
  { id: 'investigation', label: 'Investigation Support', icon: Fingerprint },
  { id: 'software', label: 'Software Solutions', icon: ShieldCheck },
  { id: 'training', label: 'Training Programs', icon: BookOpen },
];

const contentMap = {
  awareness: {
    title: 'Cybersecurity Awareness Campaigns',
    description:
      'We run large-scale campaigns across schools, colleges, and corporate organizations to educate people about phishing, online scams, and data privacy.',
    features: [
      'Corporate Security Workshops',
      'School & College Seminars',
      'Public Awareness Rallies',
      'Digital Hygiene Training',
    ],
    image:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
  },
  investigation: {
    title: 'Digital Forensics & Incident Response',
    description:
      'Our team assists law enforcement agencies and corporate clients in investigating cybercrimes, tracking malicious actors, and recovering compromised systems.',
    features: [
      'OSINT Data Gathering',
      'Mobile & Web Forensics',
      'Social Media Profiling',
      'Financial Fraud Tracing',
    ],
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
  },
  software: {
    title: 'Secure IT Infrastructure Development',
    description:
      'We design and develop advanced software solutions that are practical, user-friendly, and aligned with real-world needs, integrating modern AI to enhance efficiency.',
    features: [
      'Custom Web Applications',
      'AI-Driven Security Tools',
      'Reliable & Scalable Systems',
      'Accessible Digital Solutions',
    ],
    image:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
  },
  training: {
    title: 'Certified Cybersecurity Training',
    description:
      'From ethical hacking to advanced SOC analysis, we provide industry-recognized training programs to shape the next generation of cyber defenders.',
    features: [
      'Ethical Hacking (CEH)',
      'Cyber Crime Investigation Internships',
      'Secure Coding Practices',
      'Professional Exposure',
    ],
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
  },
};

export function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveTab((current) => {
          const currentIndex = categories.findIndex((cat) => cat.id === current);
          const nextIndex = (currentIndex + 1) % categories.length;
          return categories[nextIndex].id;
        });
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleTabClick = (id) => {
    setActiveTab(id);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-8 md:py-12 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-100 h-100 md:w-150 md:h-150 bg-indigo-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-2">
            Deep Dive
          </h2>
          <h3 className="text-2xl md:text-5xl font-bold">
            Detailed Service Capabilities
          </h3>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-12">
          {categories.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => handleTabClick(category.id)}
                className={`flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-semibold transition ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="bg-slate-800/60 backdrop-blur rounded-3xl p-4 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center"
            >
              {/* Text */}
              <div className="w-full lg:w-3/5 space-y-4">
                <h4 className="text-xl md:text-3xl font-bold">
                  {contentMap[activeTab].title}
                </h4>

                {/* ✅ SIMPLE TEXT (NO EXPANDABLE) */}
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {contentMap[activeTab].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {contentMap[activeTab].features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center">
                        <ShieldCheck className="w-3 h-3 text-indigo-400" />
                      </div>
                      <span className="text-xs font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-4 px-5 py-2.5 rounded-lg bg-white text-slate-900 text-sm font-bold hover:bg-indigo-50 transition">
                  Request Info
                </button>
              </div>

              {/* Image */}
              <div className="w-full lg:w-2/5">
                <div className="relative rounded-xl overflow-hidden aspect-video">
                  <img
                    src={contentMap[activeTab].image}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}