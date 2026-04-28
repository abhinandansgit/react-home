import React from 'react';
import { motion } from 'framer-motion';
import { Users, Presentation, Lightbulb, Heart } from 'lucide-react';
import { Counter } from '../ui/Counter';

const activities = [
  {
    title: 'Awareness Campaigns',
    metric: '1,200+',
    description: 'Successful sessions conducted across schools, colleges, and rural areas.',
    icon: Users,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Workshops',
    metric: '500+',
    description: 'Hands-on technical training for professionals and students.',
    icon: Presentation,
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    title: 'Research Papers',
    metric: '45+',
    description: 'Published studies on emerging cyber threats and mitigation.',
    icon: Lightbulb,
    color: 'bg-amber-100 text-amber-600',
  },
  {
    title: 'Victims Assisted',
    metric: '5,000+',
    description: 'Free digital forensic and legal support provided to cybercrime victims.',
    icon: Heart,
    color: 'bg-rose-100 text-rose-600',
  },
];

export function Impact() {
  return (
    <section id="impact" className="py-12 md:py-16 bg-white relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Our Activities</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Digital Safety & <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Community Engagement</span>
          </h3>
          <p className="text-lg text-slate-600">
            We continuously work to promote innovation, knowledge-sharing, and cyber safety across diverse communities through structured initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 md:p-8 rounded-4xl border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 bg-white"
            >
              <div className={`w-14 h-14 rounded-2xl ${activity.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <activity.icon className="w-7 h-7" />
              </div>
              <h4 className="text-4xl font-extrabold text-slate-900 mb-2">
                <Counter value={activity.metric} delay={index * 0.1} />
              </h4>
              <p className="text-lg font-bold text-slate-800 mb-4">{activity.title}</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Community Engagement Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 relative h-100 rounded-[2.5rem] overflow-hidden group shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80"
            alt="Community Engagement"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-linear-to-r from-indigo-900/90 to-transparent flex items-center p-8 md:p-16">
            <div className="max-w-md text-white">
              <h4 className="text-3xl font-display font-bold mb-4">Driving Change Through Collaboration</h4>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                We believe in the power of people. Join our network of researchers, investigators, and volunteers making the internet safer for everyone.
              </p>
              <button className="px-8 py-3 rounded-xl bg-white text-indigo-900 font-bold hover:bg-indigo-50 transition-colors shadow-lg">
                Join the Movement
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
