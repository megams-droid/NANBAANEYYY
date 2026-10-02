import React, { useState, useEffect } from 'react';
import PasswordScreen from './components/PasswordScreen';
import Navbar from './components/Navbar';
import HeroStory from './components/HeroStory';
import MemoryTimeline from './components/MemoryTimeline';
import SpotifySection from './components/SpotifySection';
import MemoryCards from './components/MemoryCards';
import OurLittleCorner from './components/OurLittleCorner';
import PhotoGallery from './components/PhotoGallery';
import PhotoLightbox from './components/PhotoLightbox';
import FinalSurprise from './components/FinalSurprise';
import FinalMessage from './components/FinalMessage';
import StarsBackground from './components/StarsBackground';
import { CHAPTERS, PHOTO_WALL_ITEMS } from './data/memoriesData';

export default function App() {
  const [isLocked, setIsLocked] = useState(() => {
    return localStorage.getItem('our_universe_unlocked') !== 'true';
  });

  const [lightboxPhoto, setLightboxPhoto] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleUnlock = () => {
    localStorage.setItem('our_universe_unlocked', 'true');
    setIsLocked(false);
  };

  const handleLock = () => {
    localStorage.removeItem('our_universe_unlocked');
    setIsLocked(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleOpenLightbox = (photo) => {
    const idx = PHOTO_WALL_ITEMS.findIndex((p) => p.image === photo.image);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setLightboxPhoto(photo);
  };

  const handleNavigateLightbox = (direction) => {
    let nextIdx = lightboxIndex + direction;
    if (nextIdx < 0) nextIdx = PHOTO_WALL_ITEMS.length - 1;
    if (nextIdx >= PHOTO_WALL_ITEMS.length) nextIdx = 0;
    setLightboxIndex(nextIdx);
    setLightboxPhoto(PHOTO_WALL_ITEMS[nextIdx]);
  };

  const handleScrollToSoundtrack = () => {
    const element = document.getElementById('spotify-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const firstPhoto = CHAPTERS[0];

  return (
    <div className="min-h-screen bg-[#070913] text-white selection:bg-amber-500 selection:text-slate-950 relative font-sans">
      {/* Film Grain Texture Overlay */}
      <div className="film-grain" />

      {/* Cosmic Floating Stars Background */}
      <StarsBackground />

      {/* 🔐 Password Lock Screen Modal */}
      {isLocked ? (
        <PasswordScreen onUnlock={handleUnlock} />
      ) : (
        <div className="relative z-10 animate-fade-in">
          {/* Top Sticky Navigation */}
          <Navbar onLock={handleLock} onOpenSoundtrack={handleScrollToSoundtrack} />

          {/* Main Website Sections */}
          <main>
            {/* 🌱 Section 1 & 2: Hero & "Our Story Begins" */}
            <HeroStory
              firstPhoto={firstPhoto}
              onOpenLightbox={handleOpenLightbox}
              onScrollToSoundtrack={handleScrollToSoundtrack}
            />

            {/* ⏳ Section 3: "Watch Us Grow" Memory Timeline */}
            <MemoryTimeline onOpenLightbox={handleOpenLightbox} />

            {/* 🎵 Section 4: "The Soundtrack of Us" Spotify Embedded Music */}
            <SpotifySection />

            {/* 💭 Section 5: Memory Cards (Interactive Flip Cards) */}
            <MemoryCards />

            {/* ❤️ Section 6: Our Little Corner (Inside jokes, Days Counter, Reasons glad we met) */}
            <OurLittleCorner onOpenLightbox={handleOpenLightbox} />

            {/* 🖼️ Section 7: Photo Wall Gallery (20+ Masonry Cards) */}
            <PhotoGallery onOpenLightbox={handleOpenLightbox} />

            {/* 🌌 Section 8: Final Surprise & Confetti Reveal */}
            <FinalSurprise onOpenLightbox={handleOpenLightbox} />

            {/* 💙 Section 9: The Final Message (Full-screen Cinematic Section) */}
            <FinalMessage />
          </main>

          {/* Website Footer */}
          <footer className="py-12 border-t border-amber-500/15 bg-slate-950 text-center relative z-10">
            <div className="max-w-4xl mx-auto px-4 space-y-4">
              <p className="font-serif text-xl font-bold text-amber-200">
                Our Little Universe 💫
              </p>
              <p className="text-xs text-slate-400 font-light max-w-md mx-auto">
                Built specifically for two best friends. Preserving real memories, laughter, and songs behind our secret key.
              </p>

              <div className="pt-4 flex items-center justify-center gap-4 text-xs text-slate-500">
                <span>© {new Date().getFullYear()} Our Little Universe</span>
                <span>•</span>
                <button
                  onClick={handleLock}
                  className="text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer"
                >
                  🔒 Lock Memories Again
                </button>
              </div>
            </div>
          </footer>
        </div>
      )}

      {/* 🖼️ Fullscreen Photo Lightbox Modal */}
      {lightboxPhoto && (
        <PhotoLightbox
          photo={lightboxPhoto}
          onClose={() => setLightboxPhoto(null)}
          onNavigate={handleNavigateLightbox}
        />
      )}
    </div>
  );
}
