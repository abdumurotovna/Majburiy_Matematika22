import React from 'react';
import { BookOpen, Github, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: 'curriculum' | 'simulators' | 'dtm-exam' | 'formulas' | 'ai-tutor') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-mono font-bold text-base">
              ∑
            </span>
            <div>
              <span className="text-sm font-bold text-slate-900 dark:text-white block">
                Majburiy Matematika 0 dan
              </span>
              <span className="text-xs text-slate-500">
                O'zbekiston OTM kirish imtihonlari uchun ochiq ta'lim platformasi
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-400 font-medium">
            <button onClick={() => onNavigate('curriculum')} className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Darslar
            </button>
            <button onClick={() => onNavigate('simulators')} className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Simulyatorlar
            </button>
            <button onClick={() => onNavigate('dtm-exam')} className="hover:text-slate-900 dark:hover:text-white transition-colors">
              DTM Test
            </button>
            <button onClick={() => onNavigate('formulas')} className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Formulalar
            </button>
            <button onClick={() => onNavigate('ai-tutor')} className="hover:text-slate-900 dark:hover:text-white transition-colors">
              AI Repetitor
            </button>
          </div>

          {/* Quiet copyright */}
          <div className="text-xs text-slate-400">
            © {new Date().getFullYear()} Majburiy Matematika. GitHub uchun ochiq kodli loyiha.
          </div>
        </div>
      </div>
    </footer>
  );
};
