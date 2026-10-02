import React, { useState } from 'react';
import { Calendar, MapPin, Sparkles, Quote, ChevronRight, Eye } from 'lucide-react';
import { CHAPTERS } from '../data/memoriesData';

export default function MemoryTimeline({ onOpenLightbox }) {
  const [activeChapter, setActiveChapter] = useState(0);

  return (
    <section id="timeline-section" className="py-24 relative z-10 overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-medium border border-amber-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Chronological Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            “Watch Us Grow”
          </h2>
          <p className="mt-3 text-slate-300 text-base font-light italic">
            “We didn't plan every memory. We simply lived them.”
          </p>
        </div>

        {/* Timeline Chapter Selector Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-6 mb-12 scrollbar-none">
          {CHAPTERS.map((chap, idx) => (
            <button
              key={chap.id}
              onClick={() => setActiveChapter(idx)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
                activeChapter === idx
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 border-amber-400 font-semibold shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border-slate-800 hover:border-amber-500/30'
              }`}
            >
              <span>{chap.tag}</span>
              <span className="opacity-75 font-normal">| {chap.title}</span>
            </button>
          ))}
        </div>

        {/* Main Active Chapter Display Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/50 p-6 sm:p-10 rounded-3xl border border-amber-500/20 backdrop-blur-xl shadow-2xl relative">
          {/* Left Column: Memory Details & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-amber-400 font-mono text-xs tracking-widest uppercase px-3 py-1 bg-amber-500/10 rounded-lg border border-amber-500/20">
                {CHAPTERS[activeChapter].tag}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
              {CHAPTERS[activeChapter].title}
            </h3>

            <p className="text-amber-300/90 text-sm sm:text-base font-medium">
              {CHAPTERS[activeChapter].subtitle}
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {CHAPTERS[activeChapter].caption}
            </p>

            {/* Emotional Quote Block */}
            <div className="p-4 rounded-2xl bg-amber-500/5 border-l-2 border-amber-400 flex items-start gap-3">
              <Quote className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-amber-200/90 text-xs sm:text-sm italic">
                “{CHAPTERS[activeChapter].quote}”
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Location: {CHAPTERS[activeChapter].location}
              </span>

              <button
                onClick={() => setActiveChapter((prev) => (prev + 1) % CHAPTERS.length)}
                className="text-amber-300 hover:text-amber-200 font-medium flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Next Chapter</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Photo Render with Lightbox trigger */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              onClick={() => onOpenLightbox(CHAPTERS[activeChapter])}
              className="relative group cursor-pointer w-full max-w-md"
            >
              <div
                className="polaroid-card rounded-sm transition-all duration-500 group-hover:scale-[1.02]"
                style={{ transform: `rotate(${CHAPTERS[activeChapter].rotate})` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-slate-950">
                  <img
                    src={CHAPTERS[activeChapter].image}
                    alt={CHAPTERS[activeChapter].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-slate-900/90 text-amber-300 text-xs font-medium flex items-center gap-1.5 border border-amber-500/40 shadow-xl">
                      <Eye className="w-4 h-4" /> View Fullscreen Memory
                    </span>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <p className="font-handwriting text-2xl text-slate-900 font-bold">
                    {CHAPTERS[activeChapter].title}
                  </p>
                  <p className="text-[11px] text-slate-500 font-sans">
                    {CHAPTERS[activeChapter].location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
