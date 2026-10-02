import React, { useState, useEffect, useRef } from 'react';
import { Heart, Music, Play, Pause, Sparkles, Volume2, Infinity as InfinityIcon } from 'lucide-react';

export default function FinalMessage() {
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const sectionRef = useRef(null);

  // Intersection observer to trigger animation when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Line-by-line reveal timer sequence
  useEffect(() => {
    if (!isVisible) return;

    // Reveal Block 1
    const t1 = setTimeout(() => setStep(1), 600);
    // Reveal Block 2
    const t2 = setTimeout(() => setStep(2), 4000);
    // Reveal Block 3 (End statement)
    const t3 = setTimeout(() => setStep(3), 7500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="final-message-section"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between text-center overflow-hidden bg-slate-950 select-none"
    >
      {/* 🖼️ Background Friendship Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="/memories/memory6.jpg"
          alt="Meaningful Friendship Memory"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.4] contrast-[1.15] blur-[1px] transition-transform duration-[10000ms] ease-out"
          style={{ transform: isVisible ? 'scale(1.0)' : 'scale(1.08)' }}
        />
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/75 to-slate-950/95" />
      </div>

      {/* ✨ Soft Glowing Ambient Orbs & Particles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Floating Sparkles Array */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <div className="absolute top-1/4 left-1/5 animate-float opacity-30 text-amber-300">
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float opacity-25 text-amber-200" style={{ animationDelay: '1.5s' }}>
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float opacity-30 text-rose-300" style={{ animationDelay: '2.5s' }}>
          <Sparkles className="w-6 h-6" />
        </div>
      </div>

      {/* 🎵 Top Header: Cinematic Music-Player Visuals */}
      <div className="relative z-20 pt-6">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900/70 border border-amber-500/30 backdrop-blur-xl shadow-2xl text-amber-200 text-xs font-medium tracking-wide">
          {/* Animated Equalizer Bars */}
          <div className="flex items-end gap-0.5 h-3.5 w-4">
            <span className={`w-1 bg-amber-400 rounded-full transition-all duration-300 ${isPlaying ? 'h-full animate-bounce' : 'h-1'}`} />
            <span className={`w-1 bg-amber-300 rounded-full transition-all duration-300 ${isPlaying ? 'h-2/3 animate-bounce' : 'h-1'}`} style={{ animationDelay: '0.2s' }} />
            <span className={`w-1 bg-rose-400 rounded-full transition-all duration-300 ${isPlaying ? 'h-5/6 animate-bounce' : 'h-1'}`} style={{ animationDelay: '0.4s' }} />
          </div>

          <span className="font-serif italic text-amber-100">Our Story • Infinite Friendship</span>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="ml-2 w-6 h-6 rounded-full bg-amber-500/20 hover:bg-amber-500/40 text-amber-300 flex items-center justify-center transition-colors cursor-pointer"
            title={isPlaying ? "Pause Visualizer" : "Play Visualizer"}
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
          </button>
        </div>
      </div>

      {/* 📜 Main Text Container (Slow line-by-line reveal) */}
      <div className="relative z-20 max-w-3xl mx-auto my-auto py-12 px-4 space-y-12">
        {/* Block 1: "Through every chapter..." */}
        <div
          className={`transition-all duration-1000 ease-out transform ${
            step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-amber-200/90 text-lg sm:text-2xl font-serif leading-relaxed italic tracking-wide">
            “Through every chapter,<br />
            through every laugh,<br />
            through every distance,<br />
            through every change...”
          </p>

          <p className="mt-6 text-2xl sm:text-4xl font-serif font-semibold text-white tracking-tight leading-snug drop-shadow-[0_0_25px_rgba(251,191,36,0.25)]">
            I want this friendship<br />
            as long as I live in this world.
          </p>
        </div>

        {/* Subtle Decorative Divider */}
        <div
          className={`w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto transition-opacity duration-1000 ${
            step >= 2 ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Block 2: "Whatever the future brings..." */}
        <div
          className={`transition-all duration-1000 ease-out transform ${
            step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-xl sm:text-3xl font-serif text-amber-100/95 font-medium leading-relaxed max-w-2xl mx-auto">
            “Whatever the future brings,<br />
            I hope this friendship remains<br />
            one of the most beautiful parts of our story.”
          </p>
        </div>

        {/* Block 3: "OUR STORY DOESN'T END HERE. ♾️" */}
        <div
          className={`pt-6 transition-all duration-1000 ease-out transform ${
            step >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="inline-block p-6 rounded-3xl bg-slate-900/60 border border-amber-400/30 backdrop-blur-md shadow-2xl">
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-rose-300 tracking-wider">
              OUR STORY DOESN'T END HERE. ♾️
            </h3>
          </div>
        </div>
      </div>

      {/* 🧭 Bottom Section Navigation / Controls */}
      <div className="relative z-20 pb-6 flex flex-col items-center gap-4">
        {step < 3 && (
          <button
            onClick={() => setStep(3)}
            className="text-xs text-amber-400/80 hover:text-amber-300 underline underline-offset-4 transition-colors cursor-pointer"
          >
            Reveal all lines
          </button>
        )}

        <div className="flex items-center gap-3 text-xs text-slate-400 font-light">
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
          <span>Our Little Universe • Forever & Always</span>
        </div>
      </div>
    </section>
  );
}
