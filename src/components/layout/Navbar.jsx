import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, ChevronRight, Bell, ChevronDown, Search } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Services', href: '#services' },
  { name: 'Skill Development', href: '#skills', hasDropdown: true },
  { name: 'Insights', href: '#insights' },
  { name: 'Careers', href: '#careers' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const notificationRef = useRef(null);

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      // For a demo/static site, we'll just alert or could scroll to a section
      alert(`Searching for: ${searchQuery}\n(Search functionality would be connected to your backend/CMS here)`);
      setSearchQuery('');
      setIsSearchHovered(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
    };

    if (isNotificationsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNotificationsOpen]);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 z-50 transition-all duration-500 border-b border-transparent',
        isScrolled ? 'glass py-2 shadow-xl border-slate-100' : 'bg-transparent py-3 md:py-5',
        'top-8'
      )}
    >
      <div className="container mx-auto px-4 md:px-12 flex items-center justify-between">
        {/* Logo Branding */}
        <div className="flex items-center gap-2 md:gap-3 group cursor-pointer">
          <img 
            src="/src/assets/logo.png" 
            alt="CRCCF Logo" 
            className="w-8 h-8 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-500" 
          />
          <div className="flex flex-col">
            <span className={cn(
              "text-lg md:text-2xl font-display font-extrabold tracking-tight leading-none transition-colors duration-500",
              isScrolled ? "text-slate-900" : "text-white"
            )}>
              CRCCF
            </span>
            <span className={cn(
              "text-[7px] md:text-[9px] font-bold uppercase tracking-wider transition-colors duration-500 mt-0.5 md:mt-1",
              isScrolled ? "text-slate-500" : "text-slate-300"
            )}>
              CR Cyber Crime Foundation
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-[10px] xl:text-[11px] font-bold transition-all duration-300 relative group py-2 flex items-center gap-1",
                isScrolled ? "text-slate-600 hover:text-indigo-600" : "text-white/80 hover:text-white"
              )}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
              <span className={cn(
                "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                isScrolled ? "bg-indigo-600" : "bg-cyan-400"
              )} />
            </a>
          ))}
        </nav>

        {/* Action Icons & Interactive Search */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {/* Animated Search Bar */}
          <motion.div 
            onHoverStart={() => setIsSearchHovered(true)}
            onHoverEnd={() => setIsSearchHovered(false)}
            animate={{ width: isSearchHovered ? 240 : 40 }}
            className={cn(
              "relative h-10 flex items-center overflow-hidden rounded-full transition-all duration-500 border",
              isScrolled 
                ? "border-slate-200 bg-slate-50/50" 
                : "border-white/10 bg-white/5 backdrop-blur-md"
            )}
          >
            <div className={cn(
              "absolute left-3 transition-colors",
              isScrolled ? "text-slate-500" : "text-white/70"
            )}>
              <Search className="w-4 h-4" />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              placeholder="Search services..." 
              className={cn(
                "w-full bg-transparent pl-10 pr-4 text-xs font-medium outline-none transition-opacity duration-300",
                isSearchHovered ? "opacity-100" : "opacity-0",
                isScrolled ? "text-slate-900 placeholder:text-slate-400" : "text-white placeholder:text-white/40"
              )}
            />
          </motion.div>

          {/* Notifications */}
          <div className="relative" ref={notificationRef}>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsNotificationsOpen(!isNotificationsOpen);
              }}
              className="relative cursor-pointer group p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <Bell className={cn(
                "w-5 h-5 transition-colors",
                isScrolled ? "text-slate-600" : "text-white"
              )} />
              <span className="absolute top-1.5 right-1.5 w-3 h-3 bg-red-500 border-2 border-slate-900 rounded-full"></span>
            </button>

            <AnimatePresence>
              {isNotificationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-4 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-60"
                >
                  <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Alerts</h3>
                    <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">3 New</span>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {[
                      { title: 'Cyber Threat Alert', desc: 'New phishing campaign targeting local banks.', time: '2m ago', type: 'danger' },
                      { title: 'Security Update', desc: 'Core firewall modules successfully patched.', time: '1h ago', type: 'info' },
                      { title: 'System Notice', desc: 'Weekly backup completed successfully.', time: '3h ago', type: 'success' },
                    ].map((note, i) => (
                      <div key={i} className="p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer group">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{note.title}</h4>
                          <span className="text-[10px] text-slate-400">{note.time}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">{note.desc}</p>
                      </div>
                    ))}
                  </div>
                  <button className="w-full p-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:bg-slate-50 transition-colors border-t border-slate-100">
                    View All Notifications
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <a
            href="#report"
            className="px-5 py-2.5 bg-[#FF0000] hover:bg-red-700 text-white rounded-lg text-[11px] font-extrabold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] active:scale-95"
          >
            Report Crime
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "lg:hidden w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-300 border",
            isScrolled 
              ? "text-slate-900 border-slate-200 hover:bg-slate-50" 
              : "text-white border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 shadow-lg shadow-black/20"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: '100vh', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            className="fixed inset-0 top-0 left-0 right-0 z-60 lg:hidden bg-slate-900/95 backdrop-blur-xl overflow-y-auto"
          >

            <div className="flex flex-col min-h-screen p-8 pt-24 gap-8">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-6 p-2 rounded-full bg-white/10 text-white"
              >
                <X className="w-8 h-8" />
              </button>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                  href={link.href}
                  className="text-3xl font-display font-black text-white hover:text-indigo-400 transition-colors flex items-center justify-between group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative">
                    {link.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-1 bg-indigo-500 transition-all group-hover:w-full" />
                  </span>
                  <ChevronRight className="w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
              
              <div className="mt-auto pt-8 border-t border-white/10">
                <a
                  href="#report"
                  className="block w-full py-5 bg-[#FF0000] text-white text-center rounded-2xl text-lg font-black uppercase tracking-widest shadow-[0_10px_30px_rgba(255,0,0,0.3)]"
                  onClick={() => setIsOpen(false)}
                >
                  Report Crime
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
