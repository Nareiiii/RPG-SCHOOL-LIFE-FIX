import React from 'react';
import { motion } from 'motion/react';
import {
  User,
  Users,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldAlert,
  Swords,
  Shield,
} from 'lucide-react';
import { SelfDirectedSubMode } from '../types/game';
import { sound } from '../utils/audio';

interface SubModeSelectionProps {
  onSelectSubMode: (subMode: SelfDirectedSubMode) => void;
  onBack: () => void;
}

export const SubModeSelection: React.FC<SubModeSelectionProps> = ({
  onSelectSubMode,
  onBack,
}) => {
  return (
    <div className="min-h-[100dvh] w-full bg-[#080D1A] text-slate-100 flex flex-col justify-between p-4 sm:p-6 md:p-8 relative overflow-hidden font-sans">
      
      {/* Background Cyber-Academic Ambient Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-teal-600/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[110px]" />
        <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-cyan-600/15 rounded-full blur-[90px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#080D1A_90%)]" />
      </div>

      {/* Top Header with Back Button */}
      <div className="relative z-10 max-w-4xl mx-auto w-full pt-2">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => {
              sound.playClick();
              onBack();
            }}
            className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-300 hover:text-white transition flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Mode Penggunaan</span>
          </button>

          <span className="px-3 py-1 rounded-full bg-teal-950/80 border border-teal-400/60 text-teal-300 font-pixel text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            MODE B: MANDIRI TANPA GURU
          </span>
        </div>

        <div className="text-center space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-teal-500/40 text-teal-300 text-xs font-bold uppercase tracking-widest shadow-md backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
            <span>Pilih Formasi Belajar Mandiri</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white font-rpg tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            SENDIRIAN ATAU BERKELOMPOK?
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Tentukan apakah kamu ingin menantang Dungeon Fokus seorang diri (Solo Run) atau bersama regu 4 pahlawan (Co-op Party).
          </p>
        </div>
      </div>

      {/* Center: Two Sub-Mode Cards */}
      <div className="relative z-10 max-w-4xl mx-auto w-full my-auto py-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        
        {/* SUB-MODE 1: BELAJAR SENDIRIAN (SOLO RUN) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            sound.playClick();
            onSelectSubMode('solo');
          }}
          className="group relative cursor-pointer rounded-3xl p-5 sm:p-7 bg-gradient-to-b from-[#1E1338]/90 via-[#140D26]/85 to-slate-950/95 border-2 border-amber-500/50 hover:border-amber-400 shadow-[0_10px_35px_rgba(245,158,11,0.2)] hover:shadow-[0_15px_45px_rgba(245,158,11,0.38)] transition-all flex flex-col justify-between overflow-hidden backdrop-blur-md"
        >
          <div className="absolute top-0 right-0 w-44 h-44 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-600 via-orange-600 to-yellow-500 flex items-center justify-center border-2 border-amber-300/60 shadow-lg shadow-amber-950/80 group-hover:rotate-3 transition-transform">
                <User className="w-7 h-7 text-white" />
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-950/90 border border-amber-400/60 text-amber-300 font-pixel text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                SUB-MODE 1
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold font-rpg text-white tracking-wide group-hover:text-amber-300 transition-colors">
              Belajar Sendirian (Solo Run)
            </h2>
            <div className="text-[11px] font-semibold text-amber-300 mt-0.5">
              1 Hero Tunggal • Mode Bertahan Hidup Fokus
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
              Pilih 1 karakter pahlawan andalanmu untuk berduel langsung melawan <strong>Lord Prokrastinasi</strong> tanpa rekan tim!
            </p>

            <div className="mt-4 space-y-2">
              <div className="flex items-start gap-2 text-xs text-slate-200">
                <Swords className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Hanya 1 Hero di Arena:</strong> 3 karakter lain disembunyikan untuk fokus murni individu.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-200">
                <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span><strong>Tanpa Team Shield:</strong> Pertahanan bergantung 100% pada HP Individu hero milikmu.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>High Stakes:</strong> Jika HP hero mencapai 0%, sesi dungeon langsung dinyatakan kalah/gagal!</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <span className="text-xs font-bold text-amber-400 group-hover:text-amber-300 flex items-center gap-1 font-rpg">
              Mulai Solo Run
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </span>
            <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-300 text-sm">
              ⚔️
            </div>
          </div>
        </motion.div>

        {/* SUB-MODE 2: BELAJAR BERKELOMPOK (CO-OP PARTY) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            sound.playClick();
            onSelectSubMode('party');
          }}
          className="group relative cursor-pointer rounded-3xl p-5 sm:p-7 bg-gradient-to-b from-[#0A1F26]/90 via-[#07171D]/85 to-slate-950/95 border-2 border-teal-500/50 hover:border-teal-400 shadow-[0_10px_35px_rgba(20,184,166,0.25)] hover:shadow-[0_15px_45px_rgba(20,184,166,0.4)] transition-all flex flex-col justify-between overflow-hidden backdrop-blur-md"
        >
          <div className="absolute top-0 right-0 w-44 h-44 bg-teal-500/15 rounded-full blur-2xl group-hover:bg-teal-500/25 transition-all pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-teal-600 via-emerald-600 to-cyan-500 flex items-center justify-center border-2 border-teal-300/60 shadow-lg shadow-teal-950/80 group-hover:-rotate-3 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <span className="px-3 py-1 rounded-full bg-teal-950/90 border border-teal-400/60 text-teal-300 font-pixel text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                SUB-MODE 2
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold font-rpg text-white tracking-wide group-hover:text-teal-300 transition-colors">
              Belajar Berkelompok (Co-op Party)
            </h2>
            <div className="text-[11px] font-semibold text-teal-300 mt-0.5">
              Formasi 4 Hero & Team Shield • Tanpa Leaderboard
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
              Belajar bersama regu 4 pahlawan (Knight, Mage, Healer, Ranger) dengan dukungan <strong>Perisai Pertahanan Kelompok</strong> tanpa pengawasan guru.
            </p>

            <div className="mt-4 space-y-2">
              <div className="flex items-start gap-2 text-xs text-slate-200">
                <Users className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span><strong>Formasi Penuh 4 Hero:</strong> 1 Karakter utama + 3 rekan otomatis (Bima, Citra, Dewi, Faris).</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-200">
                <Shield className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Team Shield Aktif:</strong> Perisai pertahanan kelompok melindungi regu dari distraksi.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span><strong>Kontrol Timer Mandiri:</strong> Bebas atur sesi tanpa guru & tanpa peringkat Leaderboard.</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <span className="text-xs font-bold text-teal-400 group-hover:text-teal-300 flex items-center gap-1 font-rpg">
              Mulai Co-op Party
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </span>
            <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-300 text-sm">
              🛡️
            </div>
          </div>
        </motion.div>

      </div>

      {/* Footer Info */}
      <div className="relative z-10 max-w-xl mx-auto w-full text-center pb-2 text-[11px] text-slate-400 flex items-center justify-center gap-4">
        <span>🎮 Mode Mandiri Tanpa Guru</span>
        <span>•</span>
        <span>Bebas Atur Timer</span>
        <span>•</span>
        <span>Leaderboard Disembunyikan</span>
      </div>

    </div>
  );
};
