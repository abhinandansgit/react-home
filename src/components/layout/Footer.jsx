import React from 'react';
import { 
  X,
  Share2,
  Link,
  Camera,
  Video,
  MessageCircle, 
  Send, 
  Globe, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import logo from '/src/assets/logo.png';


export function Footer() {
  return (
    <footer className="bg-[#0b2144] text-white pt-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-12 mb-6">
          {/* Logo & Description */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col items-start gap-4">
              <img 
                src={logo} 
                alt="CRCCF Logo" 
                className="w-16 h-16 object-contain" 
              />
              <p className="text-sm text-slate-300 leading-relaxed max-w-xs">
                CR Cyber Crime Foundation (CRCCF) is a dedicated to advancing cybercrime awareness, supporting digital investigations, and transforming digital engagement through cutting‑edge technology, research, and industry‑oriented training programs.
              </p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">
              Useful Links
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2">
                {['Home', 'Internship', 'Recruitment', 'Awareness', 'Report Crime'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {['About Us', 'IT Services', 'Resources', 'Gallery', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-500">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                <p className="text-sm text-slate-300">DLF Cyber City, Patia, Bhubaneswar — 751024</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <p className="text-sm text-slate-300">+91 9777999529</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <p className="text-sm text-slate-300">hr@crcybercrime.org</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions & Socials */}
        <div className="pt-6 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 rounded-lg bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
              Emergency
            </button>
            <button className="px-6 py-2.5 rounded-lg bg-slate-800 text-white font-bold text-sm hover:bg-slate-700 transition-colors">
              Review
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
            {[Share2, X, Link, Camera, Video, MessageCircle, Send, Globe].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="text-slate-400 hover:text-white transition-all transform hover:scale-110 p-2 rounded-full hover:bg-white/5"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

      </div>
      
      {/* Copyright Strip */}
      <div className="mt-2 md:mt-4 bg-white py-3">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-900 text-[10px] md:text-xs font-extrabold uppercase tracking-[0.2em]">
            © 2026 CR Cyber Crime Foundation
          </p>
        </div>
      </div>
    </footer>
  );
}
