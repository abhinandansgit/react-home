import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { TrustBar } from './components/sections/TrustBar';
import { About } from './components/sections/About';
import { CoreOfferings } from './components/sections/CoreOfferings';
import { ServicesTabs } from './components/sections/ServicesTabs';
import { ProcessTimeline } from './components/sections/ProcessTimeline';
import { Projects } from './components/sections/Projects';
import { Technology } from './components/sections/Technology';
import { Impact } from './components/sections/Impact';
import { CTA } from './components/sections/CTA';
import { Footer } from './components/layout/Footer';
import { AwarenessTicker } from './components/ui/AwarenessTicker';
import { LiveClock } from './components/ui/LiveClock';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-500 selection:text-white">
      <div className="fixed top-0 left-0 right-0 z-[100]">
        <AwarenessTicker />
        <Navbar />
      </div>
      <main>
        <Hero />
        <TrustBar />
        <About />
        <CoreOfferings />
        <ServicesTabs />
        <ProcessTimeline />
        <Projects />
        <Technology />
        <Impact />
        <CTA />
      </main>
      <Footer />
      <LiveClock />
    </div>
  );
}

export default App;
