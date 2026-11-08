import React, { useState } from 'react';
import { Scale, RotateCcw, ArrowRight, Check, HelpCircle } from 'lucide-react';

export const EquationBalancer: React.FC = () => {
  // Target equation: a*x + b = c
  const [a, setA] = useState<number>(2);
  const [b, setB] = useState<number>(6);
  const [c, setC] = useState<number>(16);

  // Solving state
  const [step, setStep] = useState<number>(0); // 0: initial, 1: subtracted b, 2: divided by a (solved)

  // Solution
  const trueX = (c - b) / a;

  const reset = (newA = 2, newB = 6, newC = 16) => {
    setA(newA);
    setB(newB);
    setC(newC);
    setStep(0);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
        <div>
          <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Interaktiv Simulyator</span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">Tenglama Tarozi Simulyatori</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            "Tenglik belgisidan o'tganda ishora nega o'zgaradi?" — Tarozi palangasi orqali x ni yolg'iz qoldirish siri.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => reset(3, 9, 24)}
            className="px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded hover:bg-slate-200"
          >
            3x + 9 = 24
          </button>
          <button
            onClick={() => reset(2, 6, 16)}
            className="px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded hover:bg-slate-200"
          >
            2x + 6 = 16
          </button>
          <button
            onClick={() => reset(4, 8, 20)}
            className="px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded hover:bg-slate-200"
          >
            4x + 8 = 20
          </button>
        </div>
      </div>

      {/* Visual Balance SVG */}
      <div className="my-8 flex flex-col items-center">
        <div className="w-full max-w-xl h-56 relative flex items-center justify-center">
          <svg viewBox="0 0 500 220" className="w-full h-full drop-shadow-xs">
            {/* Base Stand */}
            <polygon points="230,210 270,210 255,100 245,100" fill="#64748b" />
            <circle cx="250" cy="100" r="10" fill="#334155" />

            {/* Horizontal Balance Beam */}
            <rect x="70" y="96" width="360" height="8" rx="4" fill="#475569" />

            {/* Left Hanger */}
            <line x1="120" y1="104" x2="120" y2="150" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3,3" />
            <path d="M 70 150 L 170 150 L 155 170 L 85 170 Z" fill="#cbd5e1" className="dark:fill-slate-700" />

            {/* Right Hanger */}
            <line x1="380" y1="104" x2="380" y2="150" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3,3" />
            <path d="M 330 150 L 430 150 L 415 170 L 345 170 Z" fill="#cbd5e1" className="dark:fill-slate-700" />
          </svg>

          {/* Left Plate Content */}
          <div className="absolute left-[12%] sm:left-[16%] bottom-[42%] flex flex-col items-center">
            {step === 0 && (
              <div className="flex items-center gap-1.5 p-2 bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 rounded-lg shadow-xs text-xs font-bold text-indigo-700 dark:text-indigo-300">
                <span>{a} ta [x] quti</span>
                <span>+</span>
                <span>{b} kg tosh</span>
              </div>
            )}
            {step === 1 && (
              <div className="flex items-center gap-1.5 p-2 bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 rounded-lg shadow-xs text-xs font-bold text-indigo-700 dark:text-indigo-300">
                <span>{a} ta [x] quti</span>
              </div>
            )}
            {step === 2 && (
              <div className="p-2 bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 rounded-lg shadow-xs text-sm font-extrabold text-emerald-700 dark:text-emerald-300">
                1 ta [x] quti
              </div>
            )}
          </div>

          {/* Right Plate Content */}
          <div className="absolute right-[12%] sm:right-[16%] bottom-[42%] flex flex-col items-center">
            {step === 0 && (
              <div className="p-2 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg shadow-xs text-xs font-bold text-slate-800 dark:text-slate-200">
                {c} kg tosh
              </div>
            )}
            {step === 1 && (
              <div className="p-2 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg shadow-xs text-xs font-bold text-slate-800 dark:text-slate-200">
                {c - b} kg tosh ({c} - {b})
              </div>
            )}
            {step === 2 && (
              <div className="p-2 bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 rounded-lg shadow-xs text-sm font-extrabold text-emerald-700 dark:text-emerald-300">
                {trueX} kg tosh
              </div>
            )}
          </div>
        </div>

        {/* Current Formula Display */}
        <div className="text-xl sm:text-2xl font-mono font-bold text-slate-900 dark:text-white px-6 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl">
          {step === 0 && `${a}x + ${b} = ${c}`}
          {step === 1 && `${a}x = ${c - b}`}
          {step === 2 && `x = ${trueX}`}
        </div>
      </div>

      {/* Interactive Action Controls */}
      <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-3">
          Tarozi muvozanatini saqlab qolgan holda x ni topamiz:
        </span>

        <div className="flex flex-wrap items-center gap-3">
          {step === 0 && (
            <button
              onClick={() => setStep(1)}
              className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg flex items-center gap-1.5 transition-colors shadow-xs"
            >
              1-qadam: Ikkala tomondan ham {b} kg toshni olib tashlash ({b} ni ayirish)
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {step === 1 && (
            <button
              onClick={() => setStep(2)}
              className="px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg flex items-center gap-1.5 transition-colors shadow-xs"
            >
              2-qadam: Ikkala tomonni {a} ga bo'lish (1 ta quti og'irligini topish)
              <Check className="w-4 h-4" />
            </button>
          )}

          {step === 2 && (
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                Tabriklaymiz! x = {trueX} topildi.
              </span>
              <button
                onClick={() => reset(a, b, c)}
                className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Qayta yechish
              </button>
            </div>
          )}
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
          <strong>Nega ishora o'zgaradi?</strong> Tenglamada sonni narigi tomonga o'tkazish degani — aslida ikkala tomondan ham o'sha sonni ayirib tashlash demakdir. Tarozi muvozanatda qolishi uchun qilingan har bir amal tenglikning ikkala tomoniga ham birdek tatbiq etiladi!
        </p>
      </div>
    </div>
  );
};
