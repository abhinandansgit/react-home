import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, HelpCircle, Globe } from 'lucide-react';

const messages = [
  "Cyber Alert: Always verify email senders before clicking links.",
  "Security Tip: Use multi-factor authentication (MFA) on all accounts.",
  "Awareness: Never share your OTP with anyone, including bank officials.",
  "Innovation: Our AI-based threat detection is now live for institutional clients.",
  "Training: New internship batch starting next month. Register now!",
];

export function AwarenessTicker() {
  return (
    <div className="fixed top-0 left-0 right-0 h-8 bg-slate-900 text-white/70 flex items-center border-b border-white/5 z-60 overflow-hidden">
      <div className="flex-1 overflow-hidden relative flex items-center h-full">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="inline-flex gap-16 items-center whitespace-nowrap"
        >
          {[...messages, ...messages].map((msg, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-indigo-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{msg}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right Corner Actions */}
      <div className="flex items-center h-full px-4 gap-4 bg-slate-900 shadow-[-20px_0_30px_#0f172a] z-10">
        <button className="hover:text-white transition-colors cursor-pointer">
          <HelpCircle className="w-3.5 h-3.5" />
        </button>
        <a 
          href="https://abhi-crccf.netlify.app/" 
          className="flex items-center gap-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all shadow-lg shadow-blue-600/20 active:scale-95 group"
        >
          <Globe className="w-3 h-3 group-hover:rotate-12 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-wider">Reach Us</span>
        </a>
      </div>
    </div>
  );
}
