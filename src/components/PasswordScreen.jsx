import React, { useState } from 'react';
import { Lock, Eye, EyeOff, Sparkles, Key, Heart } from 'lucide-react';
import { DEFAULT_PASSWORD } from '../data/memoriesData';

export default function PasswordScreen({ onUnlock }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isUnlocking, setIsUnlocking] = useState(false);

  const handleUnlock = (e) => {
    e?.preventDefault();
    if (!password.trim()) {
      setError(true);
      setErrorMessage('Please enter the secret password to enter.');
      setTimeout(() => setError(false), 600);
      return;
    }

    if (password.trim().toUpperCase() === DEFAULT_PASSWORD.toUpperCase()) {
      setIsUnlocking(true);
      setTimeout(() => {
        onUnlock();
      }, 700);
    } else {
      setError(true);
      setErrorMessage('Incorrect key to our story. (Hint: ROSEMILK 🌹🥛)');
      setTimeout(() => setError(false), 600);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#070913] transition-all duration-700 ${
        isUnlocking ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background glowing aura */}
      <div className="absolute w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md mx-4 p-8 sm:p-10 rounded-3xl glass-panel text-center shadow-2xl border border-amber-500/20">
        {/* Lock Header Icon */}
        <div className="relative mx-auto w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-tr from-amber-500/20 via-amber-400/10 to-rose-500/20 border border-amber-500/30 text-amber-400 shadow-inner">
          <Lock className="w-9 h-9 animate-pulse" />
          <Sparkles className="w-5 h-5 absolute -top-1 -right-1 text-amber-300 animate-spin" style={{ animationDuration: '8s' }} />
        </div>

        {/* Title & Subtitle */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-medium border border-amber-500/20 mb-3">
          <Heart className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> Private Memory Vault
        </span>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white mb-3">
          Our Little Universe
        </h1>

        <p className="text-amber-200/80 text-sm sm:text-base font-light mb-1">
          “Some memories are not meant for everyone.”
        </p>
        <p className="text-slate-400 text-xs sm:text-sm font-light mb-8">
          Enter the secret to unlock our story.
        </p>

        {/* Form Input */}
        <form onSubmit={handleUnlock} className={`space-y-4 ${error ? 'animate-shake' : ''}`}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Key className="w-4 h-4 text-amber-400/70" />
            </div>

            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError(false);
              }}
              placeholder="Enter secret password..."
              className="w-full pl-10 pr-12 py-3.5 bg-slate-950/70 border border-amber-500/25 rounded-2xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all shadow-inner"
              autoFocus
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-amber-300 transition-colors"
              title={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          {errorMessage && (
            <p className="text-xs text-rose-400 font-medium tracking-wide animate-fade-in text-left px-1">
              ⚠️ {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isUnlocking}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-sm tracking-wide shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            {isUnlocking ? (
              <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Unlock Our Universe</span>
                <Sparkles className="w-4 h-4 text-slate-900 group-hover:rotate-12 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-800/80 flex justify-between items-center text-[11px] text-slate-500">
          <span>🔒 End-to-End Private</span>
          <span>Password: ROSEMILK</span>
        </div>
      </div>
    </div>
  );
}
