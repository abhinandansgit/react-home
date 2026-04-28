import React from 'react';
import { motion } from 'framer-motion';
import { Counter } from '../ui/Counter';

const stats = [
  { id: 1, name: 'People Trained', value: '15,000+' },
  { id: 2, name: 'Projects Delivered', value: '250+' },
  { id: 3, name: 'Awareness Campaigns', value: '1,200+' },
  { id: 4, name: 'Partner Institutions', value: '85+' },
];

export function TrustBar() {
  return (
    <section className="py-8 md:py-12 bg-white border-y border-slate-100 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 divide-x divide-slate-100">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col items-center justify-center ${
                index % 2 !== 0 ? 'pl-8 md:pl-0' : '' // Adjust padding for grid lines on mobile
              }`}
            >
              <dt className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2 text-center">
                {stat.name}
              </dt>
              <dd className="order-first text-3xl md:text-4xl font-display font-extrabold text-indigo-600 mb-1">
                <Counter value={stat.value} delay={index * 0.1} />
              </dd>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
