import React, { useState } from 'react';
import { ArrowRight, BookOpen, CheckCircle, Sparkles, Award } from 'lucide-react';

interface HeroProps {
  onStartLearning: () => void;
  onStartExam: () => void;
  completedLessonsCount: number;
  totalLessonsCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  onStartLearning,
  onStartExam,
  completedLessonsCount,
  totalLessonsCount,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative overflow-hidden pt-4 pb-8 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span>DTM 2026/2027 Standarti</span>
              <span aria-hidden="true">·</span>
              <span>Barcha Yo'nalishlar Uchun</span>
              <span aria-hidden="true">·</span>
              <span className="text-sky-600 dark:text-sky-400 font-bold">10 ta Majburiy Savol</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] text-balance">
              Majburiy Matematikani <span className="text-sky-600 dark:text-sky-400">0 dan</span> o'rganing
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Matematikani yillar davomida tushunmagan bo'lsangiz ham xavotir olmang! Manfiy sonlar, kasrlar, foizlar va
              tenglamalarni eng sodda hayotiy qoidalar, interaktiv tarozi simulyatorlari va DTM layfxaklari bilan o'rganing.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onStartLearning}
                className="px-5 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-all flex items-center gap-2 shadow-sm"
              >
                <span>0 dan Boshlash</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onStartExam}
                className="px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl transition-colors flex items-center gap-2"
              >
                <Award className="w-4 h-4 text-amber-500" />
                <span>DTM Testini Topshirish</span>
              </button>
            </div>

            {/* Progress bar info */}
            <div className="pt-3 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>O'rganilgan: <strong className="text-slate-800 dark:text-slate-200">{completedLessonsCount} / {totalLessonsCount} ta dars</strong></span>
              </div>
              <span>·</span>
              <span>100% Bepul & Ochiq Kodli</span>
            </div>
          </div>

          {/* Right Visual Image Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 shadow-md aspect-16/10">
              {!imageError ? (
                <img
                  src="/src/assets/images/hero_math_learning_1794068030545.jpg"
                  alt="Majburiy matematika ta'lim kompozitsiyasi"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center font-bold text-xl mb-3 shadow-sm">
                    ∑
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Majburiy Matematika</h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs">
                    0 dan boshlab DTM 11 ballik maksimal natijagacha
                  </p>
                </div>
              )}

              {/* Minimalist floating overlay tag */}
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-xl border border-white/20 dark:border-slate-800/80 shadow-sm flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">DTM Standart Test Formati</span>
                  <span className="text-[11px] text-slate-500">10 ta savol · Har biri 1.1 balldan</span>
                </div>
                <div className="text-sky-600 dark:text-sky-400 font-extrabold text-sm tabular-nums">
                  11.0 ball
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item KPI Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80">
          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Bosqichlar</span>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">7 ta Modul</div>
            <p className="text-xs text-slate-500 mt-0.5">0-arifmetikadan geometriyagacha</p>
          </div>

          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">DTM Layfxaklari</span>
            <div className="text-2xl font-extrabold text-sky-600 dark:text-sky-400 mt-0.5">25+ Formula</div>
            <p className="text-xs text-slate-500 mt-0.5">Tezkor hisoblash usullari</p>
          </div>

          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Interaktiv Asboblar</span>
            <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">4 ta Simulyator</div>
            <p className="text-xs text-slate-500 mt-0.5">Tarozi, kasr, foiz va Pifagor</p>
          </div>

          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Shaxsiy Yordamchi</span>
            <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 mt-0.5">AI Repetitor</div>
            <p className="text-xs text-slate-500 mt-0.5">Misollarni 0 dan tushuntiradi</p>
          </div>
        </div>
      </div>
    </section>
  );
};
