import React, { useState } from 'react';
import { Image as ImageIcon, Sparkles, Filter, Eye, Calendar, Heart } from 'lucide-react';
import { PHOTO_WALL_ITEMS } from '../data/memoriesData';

export default function PhotoGallery({ onOpenLightbox }) {
  const [filterStyle, setFilterStyle] = useState('all');

  const filteredItems = filterStyle === 'all'
    ? PHOTO_WALL_ITEMS
    : PHOTO_WALL_ITEMS.filter((item) => item.style === filterStyle);

  return (
    <section id="photowall-section" className="py-24 relative z-10 overflow-hidden bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-medium border border-amber-500/20 mb-3">
            <ImageIcon className="w-3.5 h-3.5 text-amber-400" /> Complete Album Archive
          </span>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            “THE MEMORY WALL”
          </h2>

          <p className="mt-3 text-slate-300 text-base font-light italic">
            20+ Polaroid, Film Strip & Collage Cards showcasing our authentic moments.
          </p>
        </div>

        {/* Style Filter Buttons */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          <button
            onClick={() => setFilterStyle('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              filterStyle === 'all'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            All Layouts ({PHOTO_WALL_ITEMS.length})
          </button>
          <button
            onClick={() => setFilterStyle('polaroid')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              filterStyle === 'polaroid'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            📸 Polaroids
          </button>
          <button
            onClick={() => setFilterStyle('film-strip')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              filterStyle === 'film-strip'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            🎞️ Film Strips
          </button>
          <button
            onClick={() => setFilterStyle('scrapbook')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              filterStyle === 'scrapbook'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            📖 Scrapbook
          </button>
          <button
            onClick={() => setFilterStyle('circle')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              filterStyle === 'circle'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            ⭕ Circular Portraits
          </button>
        </div>

        {/* Masonry Collage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="cursor-pointer group relative transition-all duration-300"
              style={{ transform: `rotate(${item.rotate})` }}
            >
              {item.style === 'film-strip' ? (
                /* Film Strip Layout */
                <div className="film-strip-card rounded-md group-hover:scale-105 transition-transform duration-500">
                  <div className="aspect-[4/3] overflow-hidden rounded bg-black">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <p className="text-white text-sm font-serif font-bold tracking-wide">
                      {item.title}
                    </p>
                  </div>
                </div>
              ) : item.style === 'circle' ? (
                /* Circular Photo Layout */
                <div className="p-5 rounded-3xl glass-card text-center group-hover:scale-105 transition-transform duration-500">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-amber-400/40 shadow-xl mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <p className="text-white text-sm font-serif font-bold">{item.title}</p>
                  <p className="text-xs text-slate-400 font-light mt-1 italic">“{item.caption}”</p>
                </div>
              ) : item.style === 'scrapbook' ? (
                /* Scrapbook Layout */
                <div className="p-4 bg-[#1E1B4B]/80 rounded-2xl border-2 border-dashed border-amber-400/30 shadow-xl group-hover:scale-105 transition-transform duration-500">
                  <div className="aspect-[3/4] overflow-hidden rounded-xl bg-black">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="mt-3">
                    <span className="text-[10px] uppercase tracking-wider text-amber-400 font-mono block">
                      Scrapbook Entry
                    </span>
                    <p className="text-white text-sm font-serif font-bold mt-0.5">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-300 font-light mt-1">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ) : (
                /* Classic Polaroid Layout */
                <div className="polaroid-card rounded-sm group-hover:scale-105 transition-transform duration-500">
                  <div className="aspect-[3/4] overflow-hidden rounded-sm bg-slate-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <p className="font-handwriting text-2xl text-slate-900 font-bold leading-tight">
                      {item.title}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
