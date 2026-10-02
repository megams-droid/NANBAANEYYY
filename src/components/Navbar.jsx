import React, { useState, useEffect } from 'react';
import { Lock, Music, Heart, Sparkles, Image, Compass, Menu, X } from 'lucide-react';

export default function Navbar({ onLock, onOpenSoundtrack }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-amber-500/15 py-3 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 text-left group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500/30 via-rose-500/20 to-amber-300/30 flex items-center justify-center border border-amber-500/40 shadow-lg group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 text-amber-300" />
          </div>
          <div>
            <span className="font-serif text-lg font-bold text-white tracking-wide block leading-none">
              Our Little Universe
            </span>
            <span className="text-[10px] text-amber-300/80 tracking-widest uppercase font-light">
              Best Friends Forever
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-amber-500/20 backdrop-blur-md">
          <button
            onClick={() => scrollToSection('story-section')}
            className="px-4 py-1.5 text-xs text-slate-300 hover:text-amber-300 hover:bg-slate-800/60 rounded-full transition-all"
          >
            The Story
          </button>
          <button
            onClick={() => scrollToSection('timeline-section')}
            className="px-4 py-1.5 text-xs text-slate-300 hover:text-amber-300 hover:bg-slate-800/60 rounded-full transition-all"
          >
            Timeline
          </button>
          <button
            onClick={() => scrollToSection('spotify-section')}
            className="px-4 py-1.5 text-xs text-amber-300 font-medium bg-amber-500/10 hover:bg-amber-500/20 rounded-full border border-amber-500/30 transition-all flex items-center gap-1.5"
          >
            <Music className="w-3.5 h-3.5 text-amber-400" />
            Soundtrack
          </button>
          <button
            onClick={() => scrollToSection('memory-cards-section')}
            className="px-4 py-1.5 text-xs text-slate-300 hover:text-amber-300 hover:bg-slate-800/60 rounded-full transition-all"
          >
            Memory Cards
          </button>
          <button
            onClick={() => scrollToSection('corner-section')}
            className="px-4 py-1.5 text-xs text-slate-300 hover:text-amber-300 hover:bg-slate-800/60 rounded-full transition-all"
          >
            Our Corner
          </button>
          <button
            onClick={() => scrollToSection('photowall-section')}
            className="px-4 py-1.5 text-xs text-slate-300 hover:text-amber-300 hover:bg-slate-800/60 rounded-full transition-all flex items-center gap-1"
          >
            <Image className="w-3.5 h-3.5" />
            Photo Wall
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onLock}
            className="px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-rose-950/50 text-slate-300 hover:text-rose-300 border border-slate-700/60 hover:border-rose-500/40 text-xs font-medium transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
            title="Lock memories & return to password screen"
          >
            <Lock className="w-3.5 h-3.5 text-amber-400 group-hover:text-rose-400" />
            <span className="hidden sm:inline">Lock Story</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-amber-500/20 px-6 py-5 mt-2 space-y-3 animate-fade-in shadow-2xl">
          <button
            onClick={() => scrollToSection('story-section')}
            className="w-full text-left py-2 text-sm text-slate-200 border-b border-slate-800/60"
          >
            🌱 The Story Begins
          </button>
          <button
            onClick={() => scrollToSection('timeline-section')}
            className="w-full text-left py-2 text-sm text-slate-200 border-b border-slate-800/60"
          >
            ⏳ Watch Us Grow (Timeline)
          </button>
          <button
            onClick={() => scrollToSection('spotify-section')}
            className="w-full text-left py-2 text-sm text-amber-300 font-medium border-b border-slate-800/60 flex items-center gap-2"
          >
            <Music className="w-4 h-4 text-amber-400" /> The Soundtrack of Us
          </button>
          <button
            onClick={() => scrollToSection('memory-cards-section')}
            className="w-full text-left py-2 text-sm text-slate-200 border-b border-slate-800/60"
          >
            💭 Memory Cards
          </button>
          <button
            onClick={() => scrollToSection('corner-section')}
            className="w-full text-left py-2 text-sm text-slate-200 border-b border-slate-800/60"
          >
            ❤️ Our Little Corner
          </button>
          <button
            onClick={() => scrollToSection('photowall-section')}
            className="w-full text-left py-2 text-sm text-slate-200 flex items-center gap-2"
          >
            🖼️ Photo Wall Gallery
          </button>
        </div>
      )}
    </nav>
  );
}
