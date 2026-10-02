import React, { useState } from 'react';
import { Sparkles, Heart, RefreshCw, MessageCircleHeart } from 'lucide-react';
import { MEMORY_CARDS } from '../data/memoriesData';

export default function MemoryCards() {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="memory-cards-section" className="py-24 relative z-10 overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-500/10 text-rose-300 text-xs font-medium border border-rose-500/20 mb-3">
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> Interactive Notes
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            “Memory Cards”
          </h2>
          <p className="mt-3 text-slate-300 text-base font-light italic">
            Click any card to flip it over and read the message hidden behind.
          </p>
        </div>

        {/* 6 Interactive Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MEMORY_CARDS.map((card) => {
            const isFlipped = flipped[card.id];
            return (
              <div
                key={card.id}
                onClick={() => toggleFlip(card.id)}
                className="h-[280px] perspective-1000 cursor-pointer group"
              >
                <div
                  className={`w-full h-full duration-700 transition-transform transform-style-3d relative rounded-3xl ${
                    isFlipped ? '[transform:rotateY(180deg)]' : ''
                  }`}
                >
                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 w-full h-full rounded-3xl glass-card p-7 flex flex-col justify-between border border-amber-500/25 backface-hidden shadow-xl group-hover:border-amber-400/50">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] uppercase font-mono font-bold px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/30">
                          {card.tag}
                        </span>
                        <RefreshCw className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-500" />
                      </div>

                      <h3 className="text-2xl font-serif font-bold text-white mb-2 leading-tight">
                        {card.title}
                      </h3>
                    </div>

                    <div>
                      <p className="text-xs text-amber-200/80 font-light flex items-center gap-1.5 mb-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>{card.frontText}</span>
                      </p>
                      <div className="w-full py-2 rounded-xl bg-amber-500/10 text-amber-300 text-center text-xs font-semibold border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                        Tap to Flip Card 🔄
                      </div>
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div className="absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-br from-slate-900 via-amber-950/40 to-slate-950 p-7 flex flex-col justify-between border border-amber-400/40 [transform:rotateY(180deg)] backface-hidden shadow-2xl">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-serif text-amber-400 font-bold flex items-center gap-1.5">
                          <MessageCircleHeart className="w-4 h-4 text-amber-300" />
                          {card.tag}
                        </span>
                        <span className="text-[10px] text-slate-400">Click to flip back</span>
                      </div>

                      <p className="text-slate-200 text-sm sm:text-base font-serif italic leading-relaxed pt-2">
                        “{card.backText}”
                      </p>
                    </div>

                    <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between text-[11px] text-amber-300/80">
                      <span>✨ Best Friends Forever</span>
                      <span>Our Story</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
