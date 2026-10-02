import React, { useState, useEffect } from 'react';
import { Sparkles, Music, Heart, ArrowDown, Camera, Calendar, MapPin } from 'lucide-react';

export default function HeroStory({ firstPhoto, onOpenLightbox, onScrollToSoundtrack }) {
  const [activeStep, setActiveStep] = useState(0);

  // Animated text sequence timer: "One photo..." -> "One friendship..." -> "Countless memories."
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    { text: 'One photo...', color: 'text-amber-300' },
    { text: 'One friendship...', color: 'text-rose-300' },
    { text: 'Countless memories.', color: 'text-amber-400 font-semibold' },
  ];

  return (
    <section id="story-section" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Tagline */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium shadow-xl backdrop-blur-md mb-4">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="tracking-wider uppercase text-[11px] sm:text-xs">Private Friendship Sanctuary</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
            FROM ONE PHOTO TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              A THOUSAND MEMORIES
            </span>
          </h1>

          <p className="mt-4 text-slate-300 font-light text-base sm:text-lg max-w-2xl mx-auto">
            A little corner of the internet that belongs solely to our friendship.
          </p>
        </div>

        {/* Feature Hero Card: The First Photo */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Story Animation & Text */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-amber-500/20 relative overflow-hidden">
              <span className="text-xs uppercase font-semibold text-amber-400/90 tracking-widest block mb-2">
                🌱 The Story Begins — “Our Friendship Grows”
              </span>

              <h2 className="text-2xl sm:text-3xl font-serif text-white font-semibold">
                “Every friendship has a beginning.”
              </h2>

              {/* Sequential Animated Subtitle */}
              <div className="py-4 my-2 border-y border-amber-500/10 min-h-[70px] flex items-center">
                <div className="text-2xl sm:text-3xl font-serif transition-all duration-700 ease-in-out">
                  <span className={`inline-block ${steps[activeStep].color}`}>
                    {steps[activeStep].text}
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                It started with a single candid selfie—wearing orange lanyards, white shirts, and smiles that knew we’d become lifelong friends. From that very first moment, every conversation added another layer to our shared universe.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onScrollToSoundtrack}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all flex items-center gap-2 cursor-pointer group"
                >
                  <Music className="w-4 h-4 text-slate-950 group-hover:scale-110 transition-transform" />
                  <span>🎧 PLAY OUR SOUNDTRACK</span>
                </button>

                <a
                  href="#timeline-section"
                  className="px-5 py-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-amber-200 border border-amber-500/25 text-sm font-medium transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Timeline</span>
                  <ArrowDown className="w-4 h-4 text-amber-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Polaroid Image Showcase */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative group cursor-pointer max-w-sm sm:max-w-md w-full" onClick={() => onOpenLightbox(firstPhoto)}>
              {/* Polaroid Frame */}
              <div className="polaroid-card rounded-sm -rotate-2 group-hover:rotate-0 transition-all duration-500">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-slate-950">
                  <img
                    src={firstPhoto.image}
                    alt={firstPhoto.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-medium flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-md">
                      <Camera className="w-3.5 h-3.5 text-amber-300" /> Click to view full image
                    </span>
                  </div>
                </div>

                {/* Polaroid Caption */}
                <div className="mt-4 px-2 text-center">
                  <p className="font-handwriting text-2xl sm:text-3xl text-slate-900 font-bold leading-none">
                    “The First Photograph”
                  </p>
                  <div className="flex items-center justify-center gap-3 text-xs text-slate-600 mt-2 font-sans font-medium">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-amber-700" /> {firstPhoto.location}</span>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Sparkle */}
              <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-amber-500/20 border border-amber-400/40 backdrop-blur-md flex items-center justify-center text-amber-300 shadow-xl animate-float">
                <Heart className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
