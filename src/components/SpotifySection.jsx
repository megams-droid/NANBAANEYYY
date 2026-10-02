import React from 'react';
import { Music, Sparkles, Disc, Radio, Heart } from 'lucide-react';
import { SPOTIFY_TRACKS } from '../data/memoriesData';

export default function SpotifySection() {
  return (
    <section id="spotify-section" className="py-24 relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium mb-3">
            <Radio className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Curated Playlist</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            “THE SOUNDTRACK OF US”
          </h2>

          <p className="mt-3 text-slate-300 text-base font-light italic">
            “Some memories have a song attached to them.”
          </p>

          <p className="mt-2 text-xs text-slate-400 font-sans max-w-lg mx-auto">
            Each track below represents a specific chapter, late-night call, or road trip laugh. Press play on any card to listen.
          </p>
        </div>

        {/* Grid of 7 Spotify Embedded Track Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPOTIFY_TRACKS.map((track) => (
            <div
              key={track.id}
              className="glass-card rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between border border-amber-500/20 group hover:border-amber-400/40"
            >
              {/* Card Header & Tag */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] uppercase font-mono font-semibold px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/25">
                    {track.tag}
                  </span>

                  {/* Audio Wave Animated Equalizer */}
                  <div className="flex items-end h-5 px-2">
                    <span className="wave-bar"></span>
                    <span className="wave-bar"></span>
                    <span className="wave-bar"></span>
                    <span className="wave-bar"></span>
                    <span className="wave-bar"></span>
                  </div>
                </div>

                <h3 className="text-lg font-serif font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {track.title}
                </h3>
                <p className="text-xs text-slate-300 font-light mb-4">
                  {track.subtitle}
                </p>
              </div>

              {/* Official Spotify Iframe Player */}
              <div className="my-3 rounded-2xl overflow-hidden shadow-lg border border-slate-800/80 bg-slate-950/80">
                <iframe
                  style={{ borderRadius: '12px' }}
                  src={`https://open.spotify.com/embed/track/${track.spotifyId}?utm_source=generator&theme=0`}
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={track.title}
                  className="w-full"
                ></iframe>
              </div>

              {/* Editable Memory Caption */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-amber-200/80 italic font-serif">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>“{track.caption}”</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>Official Spotify embeds — no downloads or external audio hosts needed.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
