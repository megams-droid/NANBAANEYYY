import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Sparkles, Heart } from 'lucide-react';
import { PHOTO_WALL_ITEMS } from '../data/memoriesData';

export default function PhotoLightbox({ photo, onClose, onNavigate }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(-1);
      if (e.key === 'ArrowRight') onNavigate(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-2xl animate-fade-in">
      {/* Backdrop Close Click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Lightbox Box */}
      <div className="relative z-10 w-full max-w-4xl bg-slate-900/90 border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-amber-500/30 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left/Prev & Right/Next Navigation Floating Buttons */}
        <button
          onClick={() => onNavigate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-950/80 hover:bg-amber-500 text-white hover:text-slate-950 border border-amber-500/30 flex items-center justify-center transition-colors shadow-lg cursor-pointer"
          title="Previous Memory"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => onNavigate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-950/80 hover:bg-amber-500 text-white hover:text-slate-950 border border-amber-500/30 flex items-center justify-center transition-colors shadow-lg cursor-pointer"
          title="Next Memory"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Photo Display Area */}
        <div className="md:w-7/12 bg-black flex items-center justify-center p-4 sm:p-6 min-h-[350px]">
          <img
            src={photo.image}
            alt={photo.title}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
          />
        </div>

        {/* Photo Details Sidebar */}
        <div className="md:w-5/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-medium border border-amber-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Memory Viewer
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
              {photo.title}
            </h3>

            {photo.location && (
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-6 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {photo.location}
                </span>
              </div>
            )}

            <p className="text-slate-200 text-sm sm:text-base font-light leading-relaxed">
              {photo.caption || 'A beautiful moment captured forever in our private friendship universe.'}
            </p>
          </div>

          <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1 text-amber-300 font-serif italic">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> Best Friends Forever
            </span>
            <span className="font-mono text-[11px]">Use ← → keys to navigate</span>
          </div>
        </div>
      </div>
    </div>
  );
}
