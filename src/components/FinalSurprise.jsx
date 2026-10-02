import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Gift, Stars, Compass } from 'lucide-react';
import { CHAPTERS } from '../data/memoriesData';

export default function FinalSurprise({ onOpenLightbox }) {
  const [revealed, setRevealed] = useState(false);

  const bestPhoto = CHAPTERS[4] || CHAPTERS[0]; // Memory 5: Unforgettable Days

  const handleReveal = () => {
    setRevealed(true);

    // Launch celebratory confetti burst
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#F59E0B', '#FCD34D', '#FB7185', '#E0E7FF'],
    });

    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });
    }, 400);
  };

  return (
    <section id="final-surprise-section" className="py-28 relative z-10 overflow-hidden bg-gradient-to-b from-slate-950 via-amber-950/20 to-[#070913]">
      {/* Background glowing particles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium mb-4">
          <Gift className="w-4 h-4 text-amber-400 animate-bounce" />
          <span>The Final Chapter</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight mb-4">
          “AND THIS ISN'T THE END…”
        </h2>

        <p className="text-slate-300 text-base sm:text-lg font-light max-w-xl mx-auto mb-10">
          The story of our friendship is written day by day, photo by photo, laugh by laugh.
        </p>

        {!revealed ? (
          <div className="py-8">
            <button
              onClick={handleReveal}
              className="px-8 py-4 rounded-3xl bg-gradient-to-r from-amber-500 via-amber-400 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-slate-950 font-bold text-base sm:text-lg tracking-wide shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 mx-auto cursor-pointer group"
            >
              <Sparkles className="w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform" />
              <span>OPEN ONE MORE MEMORY</span>
              <Heart className="w-5 h-5 text-slate-950 fill-slate-950 group-hover:scale-125 transition-transform" />
            </button>
          </div>
        ) : (
          <div className="animate-fade-in space-y-8 py-4">
            {/* Unveiled Quote */}
            <div className="p-8 rounded-3xl glass-panel border border-amber-400/40 max-w-2xl mx-auto shadow-2xl relative overflow-hidden bg-gradient-to-r from-slate-900/90 via-amber-950/40 to-slate-900/90">
              <Stars className="w-8 h-8 text-amber-300 mx-auto mb-3 animate-pulse" />
              <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-200 leading-tight italic">
                “Some people become memories. <br />
                <span className="text-white">Some become part of your story.”</span>
              </p>
            </div>

            {/* Featured Best Uploaded Photo */}
            <div
              onClick={() => onOpenLightbox(bestPhoto)}
              className="polaroid-card max-w-md mx-auto cursor-pointer hover:scale-105 transition-transform duration-500 shadow-2xl border-4 border-amber-400/30 rounded-md"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-sm bg-black">
                <img
                  src={bestPhoto.image}
                  alt="Our Best Memory"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="font-handwriting text-3xl text-slate-900 font-bold">
                  “Standing Tall Together”
                </p>
                <p className="text-xs text-slate-600 font-sans mt-1">
                  To a thousand memories and millions more still to come.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-6 py-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-amber-300 border border-amber-500/30 text-xs font-medium transition-all"
              >
                ↑ Back to Top of Universe
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
