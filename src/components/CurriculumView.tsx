import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Hash,
  PieChart,
  Percent,
  Variable,
  Zap,
  Shapes,
  TrendingUp,
  RotateCcw,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { CURRICULUM_MODULES } from '../data/curriculum';
import { Lesson, Module } from '../types/math';

interface CurriculumViewProps {
  completedLessons: string[];
  onToggleCompleteLesson: (lessonId: string) => void;
  onOpenScratchpad: () => void;
}

export const CurriculumView: React.FC<CurriculumViewProps> = ({
  completedLessons,
  onToggleCompleteLesson,
  onOpenScratchpad
}) => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>(CURRICULUM_MODULES[0].id);
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(CURRICULUM_MODULES[0].lessons[0]);
  const [activeStepIndices, setActiveStepIndices] = useState<Record<string, number>>({});
  const [practiceAnswers, setPracticeAnswers] = useState<Record<string, number>>({});
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});

  const activeModule = CURRICULUM_MODULES.find((m) => m.id === selectedModuleId) || CURRICULUM_MODULES[0];

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hash':
        return <Hash className="w-5 h-5" />;
      case 'PieChart':
        return <PieChart className="w-5 h-5" />;
      case 'Percent':
        return <Percent className="w-5 h-5" />;
      case 'Variable':
        return <Variable className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Shapes':
        return <Shapes className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const handleSelectLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setActiveStepIndices({});
    setPracticeAnswers({});
    setShowHints({});
  };

  const isLessonDone = completedLessons.includes(selectedLesson.id);

  return (
    <div className="space-y-8">
      {/* Module Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {CURRICULUM_MODULES.map((mod) => {
          const isSelected = mod.id === selectedModuleId;
          const completedInMod = mod.lessons.filter((l) => completedLessons.includes(l.id)).length;

          return (
            <button
              key={mod.id}
              onClick={() => {
                setSelectedModuleId(mod.id);
                setSelectedLesson(mod.lessons[0]);
              }}
              className={`p-3.5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-white dark:bg-slate-900 border-sky-500 shadow-sm ring-1 ring-sky-500'
                  : 'bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span className={`text-[11px] font-bold ${isSelected ? 'text-sky-600 dark:text-sky-400' : 'text-slate-400'}`}>
                  0{mod.number}
                </span>
                <span className="text-[10px] text-slate-400">
                  {completedInMod}/{mod.lessons.length}
                </span>
              </div>

              <div className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                {mod.title}
              </div>

              <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full mt-2.5 overflow-hidden">
                <div
                  className="h-full bg-emerald-500 transition-all duration-300"
                  style={{ width: `${(completedInMod / mod.lessons.length) * 100}%` }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Two-Zone Sandbox Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Lessons Sidebar for Active Module (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                {getModuleIcon(activeModule.icon)}
              </div>
              <div>
                <span className="text-[11px] font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                  Modul 0{activeModule.number}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{activeModule.title}</h3>
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 my-3 leading-relaxed">
              {activeModule.description}
            </p>

            {/* Lesson items */}
            <div className="space-y-2 mt-4">
              {activeModule.lessons.map((lesson, idx) => {
                const isActive = lesson.id === selectedLesson.id;
                const isDone = completedLessons.includes(lesson.id);

                return (
                  <button
                    key={lesson.id}
                    onClick={() => handleSelectLesson(lesson)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                      isActive
                        ? 'bg-sky-50/80 dark:bg-sky-950/40 border-sky-300 dark:border-sky-800 text-sky-950 dark:text-sky-200 shadow-xs'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold ${
                        isDone
                          ? 'bg-emerald-500 text-white'
                          : isActive
                          ? 'bg-sky-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {isDone ? '✓' : idx + 1}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold leading-snug line-clamp-2">{lesson.title}</div>
                      <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {lesson.durationMinutes} daq
                        </span>
                        <span>·</span>
                        <span>{lesson.practice.length} ta mashq</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Selected Lesson Body (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            {/* Lesson Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                  <span>Modul {activeModule.number}</span>
                  <span>·</span>
                  <span>Dars {selectedLesson.order}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {selectedLesson.durationMinutes} daqiqa
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {selectedLesson.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                  {selectedLesson.summary}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={onOpenScratchpad}
                  className="px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
                >
                  Qoralama ochish
                </button>
                <button
                  onClick={() => onToggleCompleteLesson(selectedLesson.id)}
                  className={`px-4 py-2 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors shadow-xs ${
                    isLessonDone
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300'
                      : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-sky-600 dark:hover:bg-sky-700'
                  }`}
                >
                  <CheckCircle className="w-4 h-4" />
                  {isLessonDone ? 'Tugatildi' : 'Tugatildi deb belgilash'}
                </button>
              </div>
            </div>

            {/* Theory Intro */}
            <div className="my-6">
              <div className="p-4 bg-sky-50/70 dark:bg-sky-950/30 border border-sky-100 dark:border-sky-900/40 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                <strong className="text-sky-700 dark:text-sky-300 block mb-1">Boshlang'ich tushuncha (0 dan):</strong>
                {selectedLesson.theory.intro}
              </div>
            </div>

            {/* Rules Cards */}
            <div className="space-y-3 my-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Asosiy Qoidalar:</h4>
              <div className="grid grid-cols-1 gap-3">
                {selectedLesson.theory.rules.map((rule, rIdx) => (
                  <div
                    key={rIdx}
                    className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-xl"
                  >
                    <span className="text-xs font-bold text-slate-900 dark:text-white block mb-1">
                      {rule.name}
                    </span>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{rule.rule}</p>
                    {rule.note && (
                      <div className="mt-2 text-xs text-sky-700 dark:text-sky-400 font-mono bg-white dark:bg-slate-800 p-2 rounded-lg border border-slate-200 dark:border-slate-700">
                        {rule.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Problem Breakdowns */}
            {selectedLesson.theory.breakdowns.length > 0 && (
              <div className="my-6 space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Qadam-baqadam yechilgan misollar:
                </h4>

                {selectedLesson.theory.breakdowns.map((b, bIdx) => (
                  <div
                    key={bIdx}
                    className="p-5 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{b.title}</span>
                      <span className="text-xs px-2 py-0.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded font-medium">
                        Namunaviy misol
                      </span>
                    </div>

                    <div className="text-sm font-bold text-slate-900 dark:text-white font-mono bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                      {b.problem}
                    </div>

                    <div className="space-y-1.5 pt-1">
                      {b.steps.map((st, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                          <span>{st}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700/60">
                      <span className="text-xs text-slate-500">Javob: <strong className="text-emerald-600 dark:text-emerald-400 text-sm">{b.answer}</strong></span>
                      {b.lifehack && (
                        <span className="text-[11px] text-amber-700 dark:text-amber-300 font-medium bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 rounded-md border border-amber-200 dark:border-amber-800">
                          💡 Layfxak: {b.lifehack}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Common Mistake & Lifehack banners */}
            {selectedLesson.theory.commonMistake && (
              <div className="p-4 bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 rounded-xl text-xs text-rose-800 dark:text-rose-200 my-4">
                <strong>⚠️ Ko'p uchraydigan tuzoq:</strong> {selectedLesson.theory.commonMistake}
              </div>
            )}

            {/* Interactive Practice Questions */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-500" />
                  Mavzuni mustahkamlash uchun mini-testlar ({selectedLesson.practice.length} ta)
                </h4>
                <span className="text-xs text-slate-400">Variantni tanlang</span>
              </div>

              <div className="space-y-4">
                {selectedLesson.practice.map((pr, pIdx) => {
                  const userAns = practiceAnswers[pr.id];
                  const hasAnswered = userAns !== undefined;
                  const isCorrect = userAns === pr.correctIndex;

                  return (
                    <div
                      key={pr.id}
                      className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                          {pIdx + 1}-Savol: {pr.question}
                        </span>
                        <button
                          onClick={() =>
                            setShowHints((prev) => ({ ...prev, [pr.id]: !prev[pr.id] }))
                          }
                          className="text-[11px] text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-0.5 shrink-0"
                        >
                          <HelpCircle className="w-3.5 h-3.5" />
                          Maslahat
                        </button>
                      </div>

                      {showHints[pr.id] && (
                        <div className="text-[11px] p-2 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 rounded-md border border-amber-200 dark:border-amber-800">
                          💡 Maslahat: {pr.hint}
                        </div>
                      )}

                      {/* Options */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {pr.options.map((opt, optIdx) => {
                          const isOptionSelected = userAns === optIdx;
                          const isOptionCorrect = optIdx === pr.correctIndex;

                          let btnStyle =
                            'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100';

                          if (hasAnswered) {
                            if (isOptionCorrect) {
                              btnStyle =
                                'bg-emerald-100 dark:bg-emerald-950 border-emerald-400 text-emerald-800 dark:text-emerald-200 font-bold';
                            } else if (isOptionSelected) {
                              btnStyle =
                                'bg-rose-100 dark:bg-rose-950 border-rose-400 text-rose-800 dark:text-rose-200 line-through';
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => {
                                if (!hasAnswered) {
                                  setPracticeAnswers((prev) => ({ ...prev, [pr.id]: optIdx }));
                                }
                              }}
                              className={`p-2 rounded-lg border text-xs text-center font-mono transition-colors ${btnStyle}`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {/* Feedback after answering */}
                      {hasAnswered && (
                        <div
                          className={`p-2.5 rounded-lg text-xs ${
                            isCorrect
                              ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-200 border border-emerald-200'
                              : 'bg-rose-50 dark:bg-rose-950/50 text-rose-800 dark:text-rose-200 border border-rose-200'
                          }`}
                        >
                          <div className="font-bold mb-0.5">
                            {isCorrect ? 'Barakalla! To\'g\'ri javob.' : 'Xato qildingiz, tushuntirish:'}
                          </div>
                          <p>{pr.explanation}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
