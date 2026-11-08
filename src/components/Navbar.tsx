import React from 'react';
import { Moon, Sun, PenTool, Award, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: 'curriculum' | 'simulators' | 'dtm-exam' | 'formulas' | 'ai-tutor';
  setActiveTab: (tab: 'curriculum' | 'simulators' | 'dtm-exam' | 'formulas' | 'ai-tutor') => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  onOpenScratchpad: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  isDark,
  setIsDark,
  onOpenScratchpad,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => setActiveTab('curriculum')}
          className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 text-left flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-mono font-bold text-base shadow-xs">
            ∑
          </span>
          <span>Majburiy Matematika</span>
        </button>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 ${
              activeTab === 'curriculum'
                ? 'text-sky-600 dark:text-sky-400 font-semibold border-b-2 border-sky-600 dark:border-sky-400'
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            0 dan Darslar
          </button>
          <button
            onClick={() => setActiveTab('simulators')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 ${
              activeTab === 'simulators'
                ? 'text-sky-600 dark:text-sky-400 font-semibold border-b-2 border-sky-600 dark:border-sky-400'
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Interaktiv Simulyatorlar
          </button>
          <button
            onClick={() => setActiveTab('dtm-exam')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 flex items-center gap-1 ${
              activeTab === 'dtm-exam'
                ? 'text-sky-600 dark:text-sky-400 font-semibold border-b-2 border-sky-600 dark:border-sky-400'
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            DTM Test (11 ball)
          </button>
          <button
            onClick={() => setActiveTab('formulas')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 ${
              activeTab === 'formulas'
                ? 'text-sky-600 dark:text-sky-400 font-semibold border-b-2 border-sky-600 dark:border-sky-400'
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Formulalar & Layfxaklar
          </button>
          <button
            onClick={() => setActiveTab('ai-tutor')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 flex items-center gap-1 ${
              activeTab === 'ai-tutor'
                ? 'text-sky-600 dark:text-sky-400 font-semibold border-b-2 border-sky-600 dark:border-sky-400'
                : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            AI Repetitor
          </button>
        </nav>

        {/* Zone 3: 1 primary action & controls */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenScratchpad}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-medium"
            title="Qoralama daftarni ochish"
          >
            <PenTool className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span className="hidden sm:inline">Qoralama</span>
          </button>

          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-lg transition-colors"
            title="Mavzuni o'zgartirish"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setActiveTab('dtm-exam')}
            className="hidden sm:inline-flex px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-sky-600 dark:hover:bg-sky-700 rounded-lg transition-colors whitespace-nowrap shadow-xs"
          >
            Sinov Testi
          </button>
        </div>
      </div>

      {/* Mobile subnavigation bar */}
      <div className="flex md:hidden items-center justify-around px-2 py-2 border-t border-slate-100 dark:border-slate-800 text-xs overflow-x-auto">
        <button
          onClick={() => setActiveTab('curriculum')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap ${
            activeTab === 'curriculum' ? 'bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 font-bold' : 'text-slate-600'
          }`}
        >
          Darslar
        </button>
        <button
          onClick={() => setActiveTab('simulators')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap ${
            activeTab === 'simulators' ? 'bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 font-bold' : 'text-slate-600'
          }`}
        >
          Simulyatorlar
        </button>
        <button
          onClick={() => setActiveTab('dtm-exam')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap ${
            activeTab === 'dtm-exam' ? 'bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 font-bold' : 'text-slate-600'
          }`}
        >
          DTM Test
        </button>
        <button
          onClick={() => setActiveTab('formulas')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap ${
            activeTab === 'formulas' ? 'bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 font-bold' : 'text-slate-600'
          }`}
        >
          Formulalar
        </button>
        <button
          onClick={() => setActiveTab('ai-tutor')}
          className={`px-2.5 py-1 rounded-md whitespace-nowrap ${
            activeTab === 'ai-tutor' ? 'bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 font-bold' : 'text-slate-600'
          }`}
        >
          AI Repetitor
        </button>
      </div>
    </header>
  );
};
