import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CurriculumView } from './components/CurriculumView';
import { SimulatorsTab } from './components/SimulatorsTab';
import { DTMExamSimulator } from './components/DTMExamSimulator';
import { FormulaDirectory } from './components/FormulaDirectory';
import { AITutor } from './components/AITutor';
import { ScratchpadModal } from './components/ScratchpadModal';
import { Footer } from './components/Footer';
import { CURRICULUM_MODULES } from './data/curriculum';

export default function App() {
  const [activeTab, setActiveTab] = useState<'curriculum' | 'simulators' | 'dtm-exam' | 'formulas' | 'ai-tutor'>('curriculum');
  const [isScratchpadOpen, setIsScratchpadOpen] = useState<boolean>(false);

  // Dark mode state
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mm_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // User progress state (completed lesson IDs)
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mm_completed_lessons');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // Favorite formulas state
  const [favoriteFormulas, setFavoriteFormulas] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mm_favorite_formulas');
      return saved ? JSON.parse(saved) : ['f1', 'f3', 'f5', 'f6', 'f10', 'f13'];
    }
    return ['f1', 'f3', 'f5', 'f6', 'f10', 'f13'];
  });

  // Sync dark class on <html>
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('mm_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('mm_theme', 'light');
    }
  }, [isDark]);

  // Persist progress
  const toggleCompleteLesson = (lessonId: string) => {
    setCompletedLessons((prev) => {
      const next = prev.includes(lessonId) ? prev.filter((id) => id !== lessonId) : [...prev, lessonId];
      localStorage.setItem('mm_completed_lessons', JSON.stringify(next));
      return next;
    });
  };

  const toggleFavoriteFormula = (formulaId: string) => {
    setFavoriteFormulas((prev) => {
      const next = prev.includes(formulaId) ? prev.filter((id) => id !== formulaId) : [...prev, formulaId];
      localStorage.setItem('mm_favorite_formulas', JSON.stringify(next));
      return next;
    });
  };

  // Count total lessons
  const totalLessonsCount = CURRICULUM_MODULES.reduce((sum, m) => sum + m.lessons.length, 0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Strict 3-zone Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDark={isDark}
        setIsDark={setIsDark}
        onOpenScratchpad={() => setIsScratchpadOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onStartLearning={() => setActiveTab('curriculum')}
          onStartExam={() => setActiveTab('dtm-exam')}
          completedLessonsCount={completedLessons.length}
          totalLessonsCount={totalLessonsCount}
        />

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          {activeTab === 'curriculum' && (
            <CurriculumView
              completedLessons={completedLessons}
              onToggleCompleteLesson={toggleCompleteLesson}
              onOpenScratchpad={() => setIsScratchpadOpen(true)}
            />
          )}

          {activeTab === 'simulators' && <SimulatorsTab />}

          {activeTab === 'dtm-exam' && (
            <DTMExamSimulator onOpenScratchpad={() => setIsScratchpadOpen(true)} />
          )}

          {activeTab === 'formulas' && (
            <FormulaDirectory
              favoriteIds={favoriteFormulas}
              onToggleFavorite={toggleFavoriteFormula}
            />
          )}

          {activeTab === 'ai-tutor' && <AITutor />}
        </div>
      </main>

      {/* Floating Scratchpad Modal */}
      <ScratchpadModal
        isOpen={isScratchpadOpen}
        onClose={() => setIsScratchpadOpen(false)}
      />

      {/* Clean Footer */}
      <Footer onNavigate={setActiveTab} />
    </div>
  );
}
