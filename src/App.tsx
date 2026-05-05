/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Wind, 
  ShieldCheck, 
  Cpu, 
  RefreshCw, 
  CheckCircle, 
  ArrowRight, 
  Info, 
  Menu, 
  X,
  Play,
  Award,
  Zap,
  MousePointer2,
  Lock,
  ExternalLink,
  Instagram,
  Linkedin,
  MessageCircle,
  MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Types
interface SpecProps {
  label: string;
  value: string;
}

const SpecRow = ({ label, value }: SpecProps) => (
  <div className="flex justify-between py-3 border-b border-slate-100">
    <span className="text-slate-500 font-medium">{label}</span>
    <span className="text-slate-900 font-bold">{value}</span>
  </div>
);

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const navLinks = [
    { name: 'Benefits', href: '#benefits' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Specs', href: '#specs' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <div className="min-h-screen bg-brand-deep text-white font-sans selection:bg-brand-orange/30 selection:text-white">
      {/* --- Sticky Header --- */}
      <header className="fixed top-0 left-0 right-0 z-50 frosted border-b-0 m-4 rounded-2xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="https://activo-tech.com/">
              <img 
                src="/activo_logo.png" 
                alt="Activo Logo" 
                className="h-8 w-auto object-contain" 
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/160x60/f27d26/white?text=ACTIVO+TECH';
                  e.currentTarget.className = "h-8 w-auto rounded opacity-80";
                }}
              />
            </a>
            <div className="h-4 w-[1px] bg-white/20 hidden md:block"></div>
            <img 
              src="/difluid_logo.png" 
              alt="DiFluid Logo" 
              className="h-5 w-auto hidden md:block brightness-0 invert opacity-100"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/100x30/333/fff?text=DiFluid';
                e.currentTarget.className = "h-5 w-auto hidden md:block opacity-100";
              }}
            />
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs font-bold uppercase tracking-wider text-zinc-200 hover:text-brand-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="https://activo-tech.com/?page_id=1760"
              className="hidden sm:flex bg-white/10 border border-white/20 text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-all"
            >
              Get Your Custom Quote
            </a>
            <a 
              href="https://activo-tech.com/?add-to-cart=2257"
              className="btn-primary px-5 py-2 rounded-full text-[10px] flex items-center justify-center"
            >
              Buy Now
            </a>
            <button 
              className="lg:hidden p-2 text-white" 
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              {isNavOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 z-40 bg-zinc-900/95 backdrop-blur-2xl rounded-3xl pt-24 px-8 lg:hidden border border-white/10 shadow-2xl"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsNavOpen(false)}
                  className="text-3xl font-display font-black text-white hover:text-brand-orange transition-colors italic uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* --- Hero Section --- */}
        <section className="relative pt-40 pb-20 overflow-hidden">
          {/* Ambient light effects */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-orange/10 blur-[120px] rounded-full -z-10"></div>
          
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="label-caps">Professional Air Logistics</span>
                <div className="w-12 h-px bg-brand-orange/40"></div>
              </div>
              <h1 className="text-6xl xl:text-8xl font-display font-black leading-[0.95] mb-8 uppercase italic tracking-tighter">
                Roast In The City.<br />
                <span className="text-brand-orange">Breathe Mountain Air.</span>
              </h1>
              <p className="text-lg text-zinc-100 mb-12 leading-relaxed max-w-lg font-medium">
                The world's first industrial-grade molecular smoke catalyst scaled for the urban workstation. Zero pipes. Zero odors. Zero compromise.
              </p>
              
              <div className="flex flex-wrap gap-5 mb-16">
                <a 
                  href="https://activo-tech.com/?add-to-cart=2257" 
                  className="btn-primary flex items-center gap-3 px-10 py-5 rounded-2xl text-base"
                >
                  Order Now <ArrowRight size={18} />
                </a>
                <a 
                  href="https://activo-tech.com/?page_id=1760" 
                  className="flex items-center gap-3 bg-white/10 border border-white/20 text-white px-10 py-5 rounded-2xl text-base font-bold hover:bg-white/20 transition-all"
                >
                  Get Your Custom Quote
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {[
                  { value: "99.9%", label: "Filtration" },
                  { value: "No Ozone", label: "Pure Air" },
                  { value: "3 Modes", label: "Versatile" },
                  { value: "<76dB", label: "Ultra Quiet" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-2xl font-display font-black text-white italic">{item.value}</span>
                    <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative group cursor-pointer flex justify-center items-center lg:justify-end"
              onClick={(e) => {
                const video = e.currentTarget.querySelector('video');
                if (video) {
                  if (video.paused) {
                    video.play();
                    e.currentTarget.querySelector('.play-overlay')?.classList.add('opacity-0');
                  } else {
                    video.pause();
                    e.currentTarget.querySelector('.play-overlay')?.classList.remove('opacity-0');
                  }
                }
              }}
            >
              {/* Product Background Glow */}
              <div className="absolute inset-0 bg-brand-orange/20 blur-[100px] rounded-full animate-pulse-slow"></div>
              
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_35px_35px_rgba(242,125,38,0.2)] bg-black/20 w-full max-w-xl">
                <video 
                  src="/smoke_eliminator.mp4" 
                  poster="/airwave_main_render.png"
                  className="w-full h-auto scale-105 active:scale-100 transition-transform duration-500"
                  playsInline
                  loop
                  muted={false}
                />
                
                {/* Custom Play Overlay */}
                <div className="play-overlay absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all duration-300">
                  <div className="w-20 h-20 bg-brand-orange/90 rounded-full flex items-center justify-center text-white shadow-2xl backdrop-blur-md group-hover:scale-110 transition-transform">
                    <Play size={32} fill="currentColor" />
                  </div>
                </div>

                {/* Info Tag */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full flex items-center gap-2 pointer-events-none whitespace-nowrap">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">Plug and Play, Smoke Gone</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- The Dilemma --- */}
        <section className="py-24 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
              <div className="max-w-xl">
                <span className="label-caps mb-4">Spatial Optimization</span>
                <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tight">The Roasting Dilemma.</h2>
              </div>
              <p className="text-zinc-200 text-sm max-w-xs font-semibold uppercase leading-relaxed text-right border-r-2 border-brand-orange pr-6">
                Most urban roasting is crippled by architectural limits. Airwave removes the wall between you and your craft.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Complaints", desc: "VISIBLE SMOKE LEADS TO FINES AND NEIGHBOR FRICTION.", icon: "01" },
                { title: "Footprint", desc: "MASSIVE PIPES DESTROY INTERIOR DESIGN AND DRIVING UP COSTS.", icon: "02" },
                { title: "Fires", desc: "LINT AND OIL BUILDUP IN FILTERS ARE A TOP FIRE HAZARD.", icon: "03" }
              ].map((item, idx) => (
                <div key={idx} className="frosted p-10 rounded-[2.5rem] group hover:bg-white/[0.08] transition-all">
                  <span className="text-brand-orange font-display font-black text-5xl opacity-20 group-hover:opacity-100 transition-opacity mb-8 block font-italic">{item.icon}</span>
                  <h3 className="text-2xl font-black mb-4 uppercase italic">{item.title}</h3>
                  <p className="text-zinc-200 text-xs font-black tracking-widest leading-loose">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Comparison Module --- */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="frosted rounded-[3rem] overflow-hidden">
              <div className="grid grid-cols-3 font-display uppercase italic font-black text-center text-xs tracking-widest">
                <div className="p-8 bg-zinc-900 border-r border-white/5 flex items-center justify-center">Features</div>
                <div className="p-8 bg-brand-orange text-white flex items-center justify-center underline decoration-2 underline-offset-4">AirWave</div>
                <div className="p-8 bg-zinc-950/50 flex items-center justify-center opacity-40">Conventional</div>
              </div>
              {[
                { label: "Install Effort", air: "Instant", conv: "Wall Drill" },
                { label: "Maintenance", air: "Self-Clean", conv: "Dirty Filters" },
                { label: "By-product", air: "H₂O & CO₂", conv: "Ozone Leak" },
                { label: "Odor Removal", air: "Molecular", conv: "Venting Only" }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 border-t border-white/5 text-center text-[11px] font-black tracking-widest uppercase">
                  <div className="p-8 text-zinc-200 border-r border-white/5">{row.label}</div>
                  <div className="p-8 text-white">{row.air}</div>
                  <div className="p-8 text-zinc-300 italic">{row.conv}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

         {/* --- Principle Diagram 1 --- */}
        <section className="py-24 bg-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <span className="label-caps mb-6">Internal Physics</span>
              <h2 className="text-4xl font-display font-black text-white uppercase italic">Negative Pressure Logic</h2>
              <div className="w-16 h-1 bg-brand-orange mb-8"></div>
              <p className="text-zinc-200 mb-8 font-medium">
                Our built-in high-efficiency fan creates a stable negative pressure that captures smoke and chaff at the source without interfering with your roaster's delicate internal environment.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-bold uppercase text-zinc-100">
                  <CheckCircle size={16} className="text-brand-orange" /> Side vents for zero airflow interference
                </li>
                <li className="flex items-center gap-3 text-sm font-bold uppercase text-zinc-100">
                  <CheckCircle size={16} className="text-brand-orange" /> Built-in high-speed 130m³/h fan
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 rounded-[3rem] overflow-hidden frosted p-8">
              <img 
                src="/tech_airflow_logic.png" 
                alt="Airflow Logic" 
                className="w-full h-auto drop-shadow-2xl brightness-110" 
                onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400/121212/f27d26?text=Principle+Diagram+1:+Airflow')}
              />
            </div>
          </div>
        </section>

        {/* --- Video Section --- */}
         <section className="py-24 bg-zinc-950" id="video">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="frosted rounded-[2.5rem] overflow-hidden p-3 group">
                <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl">
                  <iframe 
                   className="w-full h-full"
                   src="https://www.youtube.com/embed/JJrntjSvTkQ" 
                   title="Meet AirWave" 
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                   allowFullScreen
                  ></iframe>
                </div>
                <div className="p-8">
                  <span className="label-caps mb-2">Introduction</span>
                  <h3 className="text-2xl font-display font-black uppercase italic">Meet AirWave – Smarter Filtration</h3>
                </div>
              </div>

              <div className="frosted rounded-[2.5rem] overflow-hidden p-3 group">
                <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl">
                  <iframe 
                   className="w-full h-full"
                   src="https://www.youtube.com/embed/4R7YBiCY9kI" 
                   title="AirWave Review" 
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                   allowFullScreen
                  ></iframe>
                </div>
                <div className="p-8">
                  <span className="label-caps mb-2">Technical Analysis</span>
                  <h3 className="text-2xl font-display font-black uppercase italic">Professional Review for Small Roasters</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3 Pillars --- */}
        <section className="py-24" id="benefits">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center uppercase tracking-tighter italic font-display">
             {[
               { title: "NovaCat™ Core", desc: "自研贵金属催化剂 HEATS TO 300°C TO VAPORIZE OIL AND ODORS AT THE MOLECULAR LEVEL.", icon: Cpu },
               { title: "Vacuum Capture", desc: "130m³/h STABLE NEGATIVE PRESSURE CAPTURES EVERY PARTICLE WITHOUT INTERFERING WITH ROAST PRESSURE.", icon: Wind },
               { title: "Self-Regenerate", desc: "AUTOMATIC HIGH-TEMP RECOVERY AT 400°C BURNS OFF RESIDUE FOR INFINITE MAINTENANCE-FREE POWER.", icon: RefreshCw }
             ].map((item, idx) => (
               <div key={idx} className="flex flex-col items-center">
                 <div className="w-24 h-24 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange mb-10 border border-brand-orange/20 shadow-[0_0_50px_rgba(242,125,38,0.1)]">
                    <item.icon size={36} />
                 </div>
                 <h3 className="text-4xl font-black mb-6 italic">{item.title}</h3>
                 <p className="text-zinc-200 not-italic font-sans text-xs font-bold tracking-widest leading-loose max-w-[200px]">{item.desc}</p>
               </div>
             ))}
          </div>
        </section>

        {/* --- Proof Section --- */}
        <section className="py-32 relative overflow-hidden" id="how-it-works">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-white/[0.02] -z-10 rotate-12 scale-150"></div>
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
            <div>
               <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-10 uppercase italic leading-[0.9]">
                Molecular<br />
                <span className="text-brand-orange">Destruction.</span>
               </h2>
               <div className="w-24 h-2 bg-brand-orange mb-12"></div>
               <p className="text-zinc-300 text-lg mb-12 font-medium">
                We don't trap smoke; we destroy it. AirWave uses a high-performance ceramic catalyst that accelerates oxidation, breaking down complex VOCs into simple elements.
               </p>
               
               <div className="flex flex-col gap-6">
                {[
                  "99.9% Molecular Oxidation",
                  "Zero Filter Replacement Costs",
                  "Permanent NovaCat Catalyst Core",
                  "SCA Approved Precision Output"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest group">
                    <CheckCircle size={18} className="text-brand-orange group-hover:scale-125 transition-transform" /> {item}
                  </div>
                ))}
               </div>
            </div>

            <div className="relative">
              <div className="frosted rounded-[3rem] p-6 shadow-2xl overflow-hidden group">
                <img 
                  src="/tech_internal_core.PNG" 
                  alt="Internal Core Catalyst" 
                  className="w-full h-auto rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-700" 
                  onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x600/121212/333?text=Principle+Diagram+2:+Core')}
                />
                <div className="absolute top-12 right-12 bg-brand-orange text-white w-24 h-24 rounded-full flex flex-col items-center justify-center font-display font-black text-2xl italic leading-none shadow-2xl border-4 border-white/20">
                  99.9%<br /><span className="text-[10px] not-italic opacity-100 uppercase tracking-widest mt-1">CLEAN</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Use Cases --- */}
        <section className="py-24" id="use-cases">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-20">
              <h2 className="text-5xl font-display font-black uppercase italic tracking-tighter">Native Environments</h2>
              <span className="label-caps mb-4">Vertical Flexibility</span>
            </div>
            <div className="grid md:grid-cols-3 gap-6 h-[600px]">
               {[
                 { title: "Home Lab", img: "/case_home.JPEG", span: "col-span-1" },
                 { title: "Sample Roastery", img: "/case_sample.JPEG", span: "col-span-1" },
                 { title: "Urban Studio", img: "/case_urban.JPEG", span: "col-span-1" }
               ].map((caseItem, idx) => (
                 <div key={idx} className={`relative group rounded-[3rem] overflow-hidden ${caseItem.span} h-full`}>
                    <img 
                      src={caseItem.img} 
                      alt={caseItem.title} 
                      className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                      onError={(e) => (e.currentTarget.src = 'https://placehold.co/400x800/121212/333?text=' + caseItem.title)}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
                      <h3 className="text-4xl font-display font-black text-white mb-2 uppercase italic leading-none">{caseItem.title}</h3>
                      <div className="w-12 h-1 bg-brand-orange group-hover:w-full transition-all duration-700"></div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* --- Activo Authorization --- */}
        <section className="py-24 bg-zinc-950">
          <div className="max-w-5xl mx-auto px-6">
            <div className="frosted rounded-[3.5rem] p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                 <img src="/activo_logo.png" className="h-24 object-contain" alt="" />
              </div>
              
              <span className="label-caps mb-8 font-black">Supply Chain Integrity</span>
              <h2 className="text-4xl md:text-6xl font-display font-black mb-12 uppercase italic leading-tight">Official DiFluid Authorization</h2>
              
              <div className="w-full bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-[1.02] transition-transform duration-500 mb-16">
                <img 
                  src="/授权证书.png" 
                  alt="Authorization Certificate" 
                  className="w-full h-auto rounded-lg" 
                  onError={(e) => (e.currentTarget.src = 'https://placehold.co/800x600/fff/f27d26?text=DiFluid+Activo+Authorization+2025-2027')}
                />
              </div>
              
              <p className="text-zinc-300 font-bold uppercase tracking-[.2em] text-[10px] mb-8">Valid Through 2027 • Global Service Rights</p>
              
              <div className="grid sm:grid-cols-3 gap-12 w-full pt-12 border-t border-white/5">
                 {[
                   { icon: Award, text: "Direct Shipping" },
                   { icon: ShieldCheck, text: "2yr Full Warranty" },
                   { icon: Zap, text: "Technical Support" }
                 ].map((perk, i) => (
                   <div key={i} className="flex flex-col items-center gap-4">
                      <perk.icon className="text-brand-orange" size={28} />
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">{perk.text}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Technical Specs --- */}
        <section className="py-32" id="specs">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
             <div className="order-2 md:order-1">
                <span className="label-caps mb-6">Internal Systems</span>
                <h2 className="text-5xl font-display font-black mb-12 uppercase italic tracking-tighter">Performance Matrix</h2>
                <div className="space-y-3">
                  {[
                    { l: "Voltage", v: "220-240V / 100-120V" },
                    { l: "Max Capacity", v: "≤1 kg (Pro Class)" },
                    { l: "Airflow Rate", v: "130 m³/h (Peak)" },
                    { l: "Operating Modes", v: "Standard / Power / Fan" },
                    { l: "Operating Noise", v: "<76 dB" },
                    { l: "Power Input", v: "2400W / 1800W" },
                    { l: "Net Weight", v: "6.9 kg (Ultra Portable)" }
                  ].map((s, i) => (
                    <div key={i} className="flex justify-between items-center p-6 bg-white/[0.04] rounded-2xl hover:bg-white/[0.08] transition-colors border border-white/10">
                      <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">{s.l}</span>
                      <span className="text-sm font-black uppercase italic text-white tracking-widest">{s.v}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className="relative group order-1 md:order-2">
                <div className="absolute inset-0 bg-brand-orange/10 blur-[100px] rounded-full group-hover:bg-brand-orange/20 transition-all"></div>
                <img 
                  src="/AirWave_Technical.png" 
                  className="w-full opacity-90 group-hover:opacity-100 transition-all duration-1000" 
                  alt="AirWave Technical Matrix" 
                  onError={(e) => (e.currentTarget.src = 'https://placehold.co/800x450/121212/f27d26?text=AirWave+Technical+Matrix')}
                />
             </div>
          </div>
        </section>

        {/* --- Global Compatibility Section --- */}
        <section className="py-24 bg-zinc-900 overflow-hidden" id="specs-global">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 text-center md:text-left">
              <span className="label-caps mb-4">Regional Variants</span>
              <h2 className="text-4xl font-display font-black text-white uppercase italic">Global Power Standards</h2>
              <p className="text-zinc-400 mt-4 max-w-2xl font-medium uppercase tracking-widest text-[10px]">Select the correct specification for your region to ensure peak performance and safety compliance.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "US Standard",
                  volt: "120V / 60Hz",
                  pow: "1800W",
                  cap: "800g",
                  type: "Type B (US/JP)",
                  regions: "North America, Taiwan, Japan, Philippines, Thailand, Vietnam",
                  img: "/plug_us_120.webp"
                },
                {
                  title: "US High Power",
                  volt: "220-240V / 50-60Hz",
                  pow: "2400W",
                  cap: "1kg",
                  type: "NEMA 6-15",
                  regions: "US High Voltage Lab Circuits",
                  img: "/plug_us_220.webp"
                },
                {
                  title: "Europe (Type E/F)",
                  volt: "220-250V / 50-60Hz",
                  pow: "2400W",
                  cap: "1kg",
                  type: "Type E/F Grounded",
                  regions: "Europe, Central Asia, Middle East, Korea, Vietnam",
                  img: "/plug_eu.webp"
                },
                {
                  title: "China Standard",
                  volt: "220-240V / 50Hz",
                  pow: "2400W",
                  cap: "1kg",
                  type: "China 3-Prong",
                  regions: "Mainland China Only",
                  img: "/plug_cn.webp"
                }
              ].map((spec, i) => (
                <div key={i} className="frosted rounded-[2.5rem] p-8 group hover:border-brand-orange/40 transition-all duration-500 bg-black/40 border border-white/5">
                  <div className="aspect-square rounded-3xl bg-zinc-800 mb-8 overflow-hidden relative border border-white/10">
                    <img 
                      src={spec.img} 
                      alt={spec.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/400x400/121212/f27d26?text=${spec.title.replace(/ /g, '+')}`;
                        e.currentTarget.className = "w-full h-full object-contain opacity-30 p-12";
                      }}
                    />
                    <div className="absolute top-4 right-4 bg-brand-orange text-white text-[9px] font-black px-3 py-1 rounded-full shadow-lg">{spec.cap}</div>
                  </div>
                  
                  <h3 className="text-white font-display font-black text-xl italic uppercase mb-6 leading-none border-l-4 border-brand-orange pl-4">{spec.title}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-[9px] font-black text-brand-orange uppercase tracking-widest">Voltage</span>
                      <span className="text-[10px] font-black text-white uppercase">{spec.volt}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-[9px] font-black text-brand-orange uppercase tracking-widest">Power</span>
                      <span className="text-[10px] font-black text-white uppercase">{spec.pow}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-[9px] font-black text-brand-orange uppercase tracking-widest">Plug</span>
                      <span className="text-[10px] font-black text-zinc-300 uppercase">{spec.type}</span>
                    </div>
                    <div className="pt-4">
                      <span className="block text-[8px] font-black text-zinc-500 uppercase tracking-widest mb-2">Primary Regions</span>
                      <p className="text-[9px] font-medium text-zinc-400 uppercase leading-relaxed tracking-wider">{spec.regions}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FAQ --- */}
        <section className="py-24 bg-zinc-950" id="faq">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="label-caps mb-4">Support Intelligence</span>
              <h2 className="text-4xl font-display font-black uppercase italic tracking-tight underline decoration-brand-orange decoration-4 underline-offset-8">Intelligence Ledger</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { q: "RECURRING COSTS?", a: "ZERO. AirWave is filterless. The catalyst is permanent and handles maintenance via adaptive self-cleaning heating cycles." },
                { q: "VENTING REQUIREMENT?", a: "PLUG-AND-PLAY. No specialized ductwork required. Perfect for high-density metropolitan spaces where structural modification is restricted." },
                { q: "NOISE SPECTRUM?", a: "76DB AT PEAK. Comparable to a professional hair dryer; meticulously tuned to avoid the high-pitched whine of standard industrial blowers." },
                { q: "WARRANTY PROTECTION?", a: "OFFICIAL 2-YEAR GLOBAL WARRANTY AS ACTIVO AUTHENTIC SHIPMENT." }
              ].map((item, idx) => (
                <div key={idx} className="frosted p-10 rounded-3xl hover:bg-white/[0.1] transition-all cursor-help border-white/20">
                  <h4 className="font-black text-xs text-brand-orange mb-6 uppercase tracking-[0.2em]">{item.q}</h4>
                  <p className="text-zinc-100 text-[11px] font-bold uppercase leading-relaxed tracking-wider">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Final CTA --- */}
        <section className="py-32 px-6">
           <div className="max-w-5xl mx-auto frosted rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden border-2 border-white/20 group">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-orange/30 blur-[120px] rounded-full group-hover:bg-brand-orange/50 transition-all duration-1000"></div>
              
              <label className="label-caps mb-8 font-black">Direct Deployment</label>
              <h2 className="text-5xl md:text-8xl font-display font-black text-white mb-10 uppercase italic leading-[0.8] tracking-tighter">
                Evolve Your <br />
                <span className="text-brand-orange">Workspace.</span>
              </h2>
              <div className="w-16 h-1 bg-white/40 mx-auto mb-12"></div>
              
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="https://activo-tech.com/?add-to-cart=2257" 
                  className="btn-primary flex items-center gap-4 px-12 py-6 rounded-3xl text-xl font-display italic tracking-widest"
                >
                  Buy AirWave Now <MousePointer2 size={24} />
                </a>
                <a 
                  href="https://activo-tech.com/?page_id=1760" 
                  className="bg-white/10 border border-white/20 text-white px-12 py-6 rounded-3xl text-xl font-display font-black uppercase italic tracking-widest hover:bg-white/20 transition-all block"
                >
                  Get Your Custom Quote
                </a>
              </div>

              <div className="mt-16 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-8 opacity-60">
                <span className="text-[10px] font-black uppercase tracking-widest">VISA / MASTERCARD</span>
                <span className="text-[10px] font-black uppercase tracking-widest">SECURE CHECKOUT</span>
                <span className="text-[10px] font-black uppercase tracking-widest">PRIORITY LOGISTICS</span>
              </div>
           </div>
        </section>
      </main>

      <footer className="py-24 bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="col-span-full lg:col-span-1">
             <a href="https://activo-tech.com/">
                <img 
                  src="/activo_logo.png" 
                  alt="Activo" 
                  className="h-10 object-contain mb-10" 
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/160x60/f27d26/white?text=ACTIVO+TECH';
                    e.currentTarget.className = "h-10 w-auto rounded opacity-80 mb-10";
                  }}
                />
             </a>
             <p className="text-zinc-200 text-xs font-black leading-loose tracking-widest uppercase mb-10">
               ACTIVO TECHNOLOGY LTD IS THE EXCLUSIVE AUTHORIZED DISTRIBUTOR FOR DIFLUID PRECISION SYSTEMS. AUTHENTICITY GUARANTEED.
             </p>
             <div className="flex gap-4">
                <a href="https://wa.me/8613409160140" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-orange transition-colors group">
                  <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.instagram.com/larry570430/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-orange transition-colors group">
                  <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/in/nicole-zhang-43120a112/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-orange transition-colors group">
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                </a>
             </div>
          </div>
          <div>
            <h5 className="label-caps mb-10">Solutions</h5>
            <div className="flex flex-col gap-6 text-zinc-300 text-[11px] font-black uppercase tracking-[0.2em]">
              <a href="https://activo-tech.com/shop/" className="hover:text-brand-orange transition-colors">Official Shop</a>
              <a href="https://activo-tech.com/contact/" className="hover:text-brand-orange transition-colors">Contact Us</a>
              <a href="https://activo-tech.com/contact-us-for-an-exclusive-offer/" className="hover:text-brand-orange transition-colors">Exclusive Offer</a>
            </div>
          </div>
          <div>
            <h5 className="label-caps mb-10">Compliance</h5>
            <div className="flex flex-col gap-6 text-zinc-300 text-[11px] font-black uppercase tracking-[0.2em]">
              <a href="https://activo-tech.com/wp-content/uploads/2025/11/Privacy-Policy.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
              <a href="https://activo-tech.com/wp-content/uploads/2025/11/Shipping-Policy.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Shipping Policy</a>
              <a href="https://activo-tech.com/wp-content/uploads/2025/11/Warranty-Policy.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Warranty Policy</a>
            </div>
          </div>
          <div>
            <h5 className="label-caps mb-10">Identity</h5>
            <div className="flex flex-col gap-6 text-zinc-300">
              <a href="https://activo-tech.com" className="flex items-center gap-3 group text-[11px] font-black uppercase tracking-[0.2em] italic">
                ACTIVO-TECH.COM <ArrowRight size={14} className="text-brand-orange group-hover:translate-x-2 transition-transform" />
              </a>
              <span className="text-zinc-300 text-[10px] font-bold uppercase mt-6 border-l-2 border-brand-orange pl-4">Digital Twin v.2.14<br />Signal Secured.</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-24 pt-12 border-t border-white/10 text-center">
           <p className="text-zinc-300 text-[9px] font-black uppercase tracking-[0.5em] italic">© 2026 Activo Technology Limited. All Signals Encrypted for Your Privacy.</p>
        </div>
      </footer>
    </div>
  );
}
