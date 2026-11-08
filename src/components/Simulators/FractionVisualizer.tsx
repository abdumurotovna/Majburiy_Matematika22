import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RotateCcw, Plus, Minus, CheckCircle, ArrowRight } from 'lucide-react';

export const FractionVisualizer: React.FC = () => {
  const [num1, setNum1] = useState<number>(1);
  const [den1, setDen1] = useState<number>(2);
  const [operator, setOperator] = useState<'+' | '-'>('+');
  const [num2, setNum2] = useState<number>(1);
  const [den2, setDen2] = useState<number>(4);

  // Greatest common divisor
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  // Least common multiple
  const lcm = (a: number, b: number): number => Math.abs(a * b) / gcd(a, b);

  const commonDen = lcm(den1, den2);
  const mult1 = commonDen / den1;
  const mult2 = commonDen / den2;

  const adjustedNum1 = num1 * mult1;
  const adjustedNum2 = num2 * mult2;

  const rawResultNum = operator === '+' ? adjustedNum1 + adjustedNum2 : adjustedNum1 - adjustedNum2;
  const commonDivisor = Math.abs(gcd(rawResultNum, commonDen));
  const simplifiedNum = rawResultNum / (commonDivisor || 1);
  const simplifiedDen = commonDen / (commonDivisor || 1);

  // Helper for SVG circle slices
  const renderCircleSlices = (num: number, den: number, color: string, isResult = false) => {
    const radius = 48;
    const center = 56;
    const slices = [];
    const angleStep = 360 / den;

    for (let i = 0; i < den; i++) {
      const startAngle = (i * angleStep - 90) * (Math.PI / 180);
      const endAngle = ((i + 1) * angleStep - 90) * (Math.PI / 180);

      const x1 = center + radius * Math.cos(startAngle);
      const y1 = center + radius * Math.sin(startAngle);
      const x2 = center + radius * Math.cos(endAngle);
      const y2 = center + radius * Math.sin(endAngle);

      const largeArc = angleStep > 180 ? 1 : 0;
      const isFilled = i < num;

      const pathData = `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;

      slices.push(
        <path
          key={i}
          d={pathData}
          fill={isFilled ? color : 'transparent'}
          stroke="currentColor"
          strokeWidth="1.5"
          className={`transition-all duration-300 ${isFilled ? 'opacity-90' : 'opacity-20 text-slate-400 dark:text-slate-600'}`}
        />
      );
    }

    return (
      <svg width="112" height="112" viewBox="0 0 112 112" className="drop-shadow-xs">
        <circle cx={center} cy={center} r={radius} fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-300 dark:text-slate-700" />
        {slices}
      </svg>
    );
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
        <div>
          <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Interaktiv Simulyator</span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">Vizual Kasrlar Konstruktori</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Kasrlarni o'zgartiring, umumiy maxraj qanday paydo bo'lishini ko'z bilan ko'ring.</p>
        </div>
        <button
          onClick={() => {
            setNum1(1);
            setDen1(2);
            setNum2(1);
            setDen2(4);
            setOperator('+');
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Qaytarish
        </button>
      </div>

      {/* Main Interactive Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 items-center">
        {/* Fraction 1 */}
        <div className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="mb-3 text-sky-600 dark:text-sky-400 font-medium text-xs">1-Kasr</div>
          <div className="mb-4">{renderCircleSlices(num1, den1, '#0284c7')}</div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <span className="text-xs text-slate-400">Surat:</span>
              <div className="flex items-center gap-1 mt-1">
                <button
                  onClick={() => setNum1(Math.max(1, num1 - 1))}
                  className="w-7 h-7 flex items-center justify-center bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-100"
                >
                  -
                </button>
                <span className="w-6 text-center font-bold text-slate-800 dark:text-white">{num1}</span>
                <button
                  onClick={() => setNum1(Math.min(den1, num1 + 1))}
                  className="w-7 h-7 flex items-center justify-center bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-100"
                >
                  +
                </button>
              </div>
            </div>

            <div className="h-8 w-px bg-slate-300 dark:bg-slate-700" />

            <div className="flex flex-col items-center">
              <span className="text-xs text-slate-400">Maxraj:</span>
              <div className="flex items-center gap-1 mt-1">
                <button
                  onClick={() => setDen1(Math.max(Math.max(2, num1), den1 - 1))}
                  className="w-7 h-7 flex items-center justify-center bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-100"
                >
                  -
                </button>
                <span className="w-6 text-center font-bold text-slate-800 dark:text-white">{den1}</span>
                <button
                  onClick={() => setDen1(Math.min(12, den1 + 1))}
                  className="w-7 h-7 flex items-center justify-center bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-100"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="mt-3 text-lg font-bold text-sky-600 dark:text-sky-400">
            {num1} / {den1}
          </div>
        </div>

        {/* Operator selector */}
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <button
              onClick={() => setOperator('+')}
              className={`p-2 rounded-md font-bold transition-all ${operator === '+' ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-xs' : 'text-slate-500'}`}
              title="Qo'shish"
            >
              <Plus className="w-5 h-5" />
            </button>
            <button
              onClick={() => setOperator('-')}
              className={`p-2 rounded-md font-bold transition-all ${operator === '-' ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-xs' : 'text-slate-500'}`}
              title="Ayirish"
            >
              <Minus className="w-5 h-5" />
            </button>
          </div>
          <span className="text-xs text-slate-500 text-center">
            Umumiy maxraj: <strong className="text-slate-900 dark:text-white">{commonDen}</strong>
          </span>
        </div>

        {/* Fraction 2 */}
        <div className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="mb-3 text-emerald-600 dark:text-emerald-400 font-medium text-xs">2-Kasr</div>
          <div className="mb-4">{renderCircleSlices(num2, den2, '#059669')}</div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <span className="text-xs text-slate-400">Surat:</span>
              <div className="flex items-center gap-1 mt-1">
                <button
                  onClick={() => setNum2(Math.max(1, num2 - 1))}
                  className="w-7 h-7 flex items-center justify-center bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-100"
                >
                  -
                </button>
                <span className="w-6 text-center font-bold text-slate-800 dark:text-white">{num2}</span>
                <button
                  onClick={() => setNum2(Math.min(den2, num2 + 1))}
                  className="w-7 h-7 flex items-center justify-center bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-100"
                >
                  +
                </button>
              </div>
            </div>

            <div className="h-8 w-px bg-slate-300 dark:bg-slate-700" />

            <div className="flex flex-col items-center">
              <span className="text-xs text-slate-400">Maxraj:</span>
              <div className="flex items-center gap-1 mt-1">
                <button
                  onClick={() => setDen2(Math.max(Math.max(2, num2), den2 - 1))}
                  className="w-7 h-7 flex items-center justify-center bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-100"
                >
                  -
                </button>
                <span className="w-6 text-center font-bold text-slate-800 dark:text-white">{den2}</span>
                <button
                  onClick={() => setDen2(Math.min(12, den2 + 1))}
                  className="w-7 h-7 flex items-center justify-center bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-100"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="mt-3 text-lg font-bold text-emerald-600 dark:text-emerald-400">
            {num2} / {den2}
          </div>
        </div>
      </div>

      {/* Step by Step Resolution Box */}
      <div className="p-4 bg-slate-100/70 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700/80">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle className="w-4 h-4 text-sky-600 dark:text-sky-400" />
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Qadamma-qadam tushuntirish:</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600 dark:text-slate-300 font-mono">
          <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
            <span className="text-slate-400 block mb-1">1-Qadam: Maxrajlarni tenglashtirish</span>
            <span>
              {den1} va {den2} uchun EKUK = <strong>{commonDen}</strong>
              <br />
              {num1}/{den1} = {adjustedNum1}/{commonDen} (·{mult1})
              <br />
              {num2}/{den2} = {adjustedNum2}/{commonDen} (·{mult2})
            </span>
          </div>

          <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
            <span className="text-slate-400 block mb-1">2-Qadam: Amallarni bajarish</span>
            <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
              ({adjustedNum1} {operator} {adjustedNum2}) / {commonDen} = {rawResultNum} / {commonDen}
            </div>
          </div>

          <div className="p-3 bg-sky-50 dark:bg-sky-950/40 rounded-lg border border-sky-200 dark:border-sky-800">
            <span className="text-sky-600 dark:text-sky-400 font-semibold block mb-1">Natija (Qisqartirilgan):</span>
            <div className="text-base font-bold text-sky-700 dark:text-sky-300 mt-1">
              {simplifiedNum} / {simplifiedDen}
              {simplifiedDen === 1 && ` = ${simplifiedNum}`}
              {simplifiedNum > simplifiedDen && simplifiedDen !== 1 && (
                <span className="text-xs text-slate-500 font-normal ml-2">
                  (aralash: {Math.floor(simplifiedNum / simplifiedDen)} butun {simplifiedNum % simplifiedDen}/{simplifiedDen})
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
