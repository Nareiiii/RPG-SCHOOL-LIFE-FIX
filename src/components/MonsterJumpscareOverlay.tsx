import React from 'react';
import { AlertTriangle, Skull } from 'lucide-react';

interface MonsterJumpscareOverlayProps {
  isOpen: boolean;
  bossName: string;
  bossSpriteUrl: string;
  reason?: string;
}

export const MonsterJumpscareOverlay: React.FC<MonsterJumpscareOverlayProps> = ({
  isOpen,
  bossName,
  bossSpriteUrl,
  reason,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden flex items-center justify-center select-none pointer-events-auto">
      {/* Dark Crimson Flashing Strobe Backdrop */}
      <div className="absolute inset-0 animate-crimson-strobe backdrop-blur-sm" />

      {/* Radial Vignette Darkness */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.92)_85%)] pointer-events-none" />

      {/* Screen-Shaking Stage */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4 animate-screen-shake">
        {/* Top Emergency Warning Header */}
        <div className="mb-4 px-5 py-2 rounded-2xl bg-red-950/95 border-2 border-red-400 shadow-[0_0_40px_rgba(239,68,68,0.95)] flex items-center gap-2.5 animate-pulse">
          <AlertTriangle className="w-6 h-6 text-amber-300 shrink-0" />
          <span className="font-rpg font-black text-sm sm:text-xl text-white tracking-wider uppercase drop-shadow">
            ⚠️ PELANGGARAN FOKUS TERDETEKSI!
          </span>
          <AlertTriangle className="w-6 h-6 text-amber-300 shrink-0" />
        </div>

        {/* Zooming Monster Boss Sprite */}
        <div className="relative flex items-center justify-center my-4">
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-red-600/45 blur-3xl animate-ping pointer-events-none" />
          <img
            src={bossSpriteUrl || '/sprites/boss-demon.svg'}
            alt={bossName}
            className="w-48 h-48 sm:w-64 sm:h-64 object-contain animate-jumpscare-zoom filter drop-shadow-[0_0_55px_rgba(239,68,68,0.95)] contrast-125 brightness-110 pointer-events-none"
          />
        </div>

        {/* Scary Bottom Caption */}
        <div className="mt-8 text-center space-y-1.5 relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-black/90 border border-red-500 text-red-400 font-pixel text-xs sm:text-sm font-bold shadow-xl">
            <Skull className="w-4 h-4 text-red-500 animate-bounce" />
            <span>{bossName.toUpperCase()} MENYERANG!</span>
          </div>
          {reason && (
            <p className="text-xs sm:text-sm font-bold text-rose-200 bg-black/80 px-4 py-1.5 rounded-xl border border-red-500/40 max-w-md mx-auto">
              Pemicu: {reason}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
