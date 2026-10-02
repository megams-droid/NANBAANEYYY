import React, { useState, useEffect } from 'react';
import {
  Heart,
  Smile,
  Zap,
  Sparkles,
  RotateCcw,
  Clock,
  Dices,
  Award,
  CheckCircle2,
  Lock,
  Calendar,
  X
} from 'lucide-react';
import {
  CORNER_HIGHLIGHTS,
  INSIDE_JOKES,
  REASONS_WE_MET,
  FRIENDSHIP_START_DATE,
  PHOTO_WALL_ITEMS
} from '../data/memoriesData';

export default function OurLittleCorner({ onOpenLightbox }) {
  const [activeTab, setActiveTab] = useState('favorite');
  const [randomModalOpen, setRandomModalOpen] = useState(false);
  const [randomMemory, setRandomMemory] = useState(null);
  const [daysCount, setDaysCount] = useState(0);

  // Calculate live days of being friends
  useEffect(() => {
    const startDate = new Date(FRIENDSHIP_START_DATE);
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysCount(diffDays);
  }, []);

  const handleRandomMemory = () => {
    const randomIndex = Math.floor(Math.random() * PHOTO_WALL_ITEMS.length);
    setRandomMemory(PHOTO_WALL_ITEMS[randomIndex]);
    setRandomModalOpen(true);
  };

  const currentHighlight = CORNER_HIGHLIGHTS.find((h) => h.key === activeTab) || CORNER_HIGHLIGHTS[0];

  return (
    <section id="corner-section" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-medium border border-amber-500/20 mb-3">
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> Private Space
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            “OUR LITTLE CORNER”
          </h2>
          <p className="mt-3 text-slate-300 text-base font-light italic">
            All the small details, inside jokes, and reasons why our bond is irreplaceable.
          </p>
        </div>

        {/* Top Interactive Widget: Friendship Counter & Random Memory Generator */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Friendship Counter Box */}
          <div className="md:col-span-7 glass-panel p-8 rounded-3xl border border-amber-500/25 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Clock className="w-32 h-32 text-amber-300" />
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Friendship Counter</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                “Days of Being Best Friends”
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Since {new Date(FRIENDSHIP_START_DATE).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>

            <div className="my-6 flex items-baseline gap-3">
              <span className="text-5xl sm:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                {daysCount.toLocaleString()}
              </span>
              <span className="text-amber-200 text-lg sm:text-xl font-light">Days & Counting ✨</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
              <span className="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-300 text-xs font-medium border border-amber-500/20 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" /> Milestone: 100% Unbreakable
              </span>
              <span className="px-3 py-1 rounded-lg bg-rose-500/10 text-rose-300 text-xs font-medium border border-rose-500/20 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> Lifetime Subscription
              </span>
            </div>
          </div>

          {/* Random Memory Generator Card */}
          <div className="md:col-span-5 glass-panel p-8 rounded-3xl border border-rose-500/25 flex flex-col justify-between text-center relative overflow-hidden bg-gradient-to-b from-slate-900/90 to-amber-950/30">
            <div>
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Dices className="w-7 h-7 animate-bounce" />
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                Random Memory Generator
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                Click below to shuffle through our digital chest and uncover a surprise memory from our collection.
              </p>
            </div>

            <div className="mt-6">
              <button
                onClick={handleRandomMemory}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-sm tracking-wide shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Reveal Random Memory</span>
              </button>
            </div>
          </div>
        </div>

        {/* Five Highlights Tabbed Navigation */}
        <div className="bg-slate-900/60 rounded-3xl p-6 sm:p-10 border border-amber-500/20 backdrop-blur-xl mb-16">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-slate-800">
            {CORNER_HIGHLIGHTS.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === item.key
                    ? 'bg-amber-500 text-slate-950 font-semibold shadow-md shadow-amber-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-mono font-semibold text-amber-400 tracking-wider">
              {currentHighlight.label}
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              “{currentHighlight.title}”
            </h3>
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed pt-2">
              {currentHighlight.text}
            </p>
          </div>
        </div>

        {/* Inside Jokes Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif font-bold text-white mb-6 text-center">
            😂 Inside Jokes & Things Only We Understand
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSIDE_JOKES.map((ij) => (
              <div
                key={ij.id}
                className="p-6 rounded-2xl glass-card border border-amber-500/20 hover:border-amber-400/40"
              >
                <Smile className="w-6 h-6 text-amber-400 mb-3" />
                <h4 className="text-lg font-serif font-bold text-amber-200 mb-2">
                  {ij.joke}
                </h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {ij.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Reasons I'm Glad We Met */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              ✨ Reasons I’m Glad We Met
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Six simple truths about why our friendship means the world to me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REASONS_WE_MET.map((reason) => (
              <div
                key={reason.num}
                className="p-6 rounded-2xl glass-panel border border-amber-500/15 relative group hover:border-amber-400/35 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-serif font-bold text-amber-400/60 group-hover:text-amber-300 transition-colors">
                    {reason.num}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-amber-400" />
                </div>
                <h4 className="text-base font-serif font-bold text-white mb-2">
                  {reason.title}
                </h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Random Memory Modal Popup */}
      {randomModalOpen && randomMemory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-md bg-slate-900 border border-amber-500/30 rounded-3xl p-6 shadow-2xl text-center">
            <button
              onClick={() => setRandomModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 text-xs font-medium border border-amber-500/30 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Random Memory Unlocked!
            </span>

            <div
              onClick={() => {
                setRandomModalOpen(false);
                onOpenLightbox(randomMemory);
              }}
              className="polaroid-card my-4 cursor-pointer hover:scale-105 transition-transform"
            >
              <img
                src={randomMemory.image}
                alt={randomMemory.title}
                className="w-full aspect-[4/3] object-cover rounded-sm"
              />
              <p className="font-handwriting text-2xl text-slate-900 font-bold mt-3">
                {randomMemory.title}
              </p>
            </div>

            <p className="text-xs text-slate-300 font-light italic mb-6">
              “{randomMemory.caption}”
            </p>

            <div className="flex gap-3">
              <button
                onClick={handleRandomMemory}
                className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-semibold border border-amber-500/20"
              >
                Shuffle Again 🎲
              </button>
              <button
                onClick={() => setRandomModalOpen(false)}
                className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold"
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
