import React, { useState } from 'react';
import { Tag, TrendingUp, TrendingDown, ArrowRight, Sparkles } from 'lucide-react';

export const PercentageCalculator: React.FC = () => {
  const [initialPrice, setInitialPrice] = useState<number>(200000);
  const [step1Type, setStep1Type] = useState<'increase' | 'decrease'>('decrease');
  const [step1Percent, setStep1Percent] = useState<number>(20);
  const [enableStep2, setEnableStep2] = useState<boolean>(true);
  const [step2Type, setStep2Type] = useState<'increase' | 'decrease'>('increase');
  const [step2Percent, setStep2Percent] = useState<number>(10);

  // Calculate 1st change
  const step1Delta = (initialPrice * step1Percent) / 100;
  const priceAfterStep1 = step1Type === 'increase' ? initialPrice + step1Delta : initialPrice - step1Delta;

  // Calculate 2nd change
  const step2Delta = (priceAfterStep1 * step2Percent) / 100;
  const finalPrice = enableStep2
    ? step2Type === 'increase'
      ? priceAfterStep1 + step2Delta
      : priceAfterStep1 - step2Delta
    : priceAfterStep1;

  const totalDelta = finalPrice - initialPrice;
  const totalPercentChange = ((finalPrice - initialPrice) / initialPrice) * 100;

  const formatSum = (val: number) => {
    return Math.round(val).toLocaleString('uz-UZ') + " so'm";
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
        <div>
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Interaktiv Simulyator</span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">Foiz va Narx O'zgarishi Laboratoriyasi</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            DTM da eng ko'p adashtiradigan "Narx oshdi / arzonlashdi" masalalarini real vaqtda modellashtiring.
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-lg text-emerald-700 dark:text-emerald-300 text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          DTM Oltin Mavzusi
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-6">
        {/* Controls */}
        <div className="space-y-5">
          {/* Base Price */}
          <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                1. Dastlabki narx (Mahsulot / Xizmat):
              </label>
              <span className="text-sm font-bold text-slate-900 dark:text-white tabular-nums">
                {formatSum(initialPrice)}
              </span>
            </div>
            <input
              type="range"
              min={10000}
              max={1000000}
              step={10000}
              value={initialPrice}
              onChange={(e) => setInitialPrice(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>10 000 so'm</span>
              <span>500 000 so'm</span>
              <span>1 000 000 so'm</span>
            </div>
          </div>

          {/* 1st Change */}
          <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">2. Birinchi o'zgarish:</span>
              <div className="flex items-center gap-1 bg-white dark:bg-slate-700 p-0.5 rounded-lg border border-slate-200 dark:border-slate-600">
                <button
                  onClick={() => setStep1Type('decrease')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md flex items-center gap-1 transition-colors ${
                    step1Type === 'decrease'
                      ? 'bg-rose-500 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                  }`}
                >
                  <TrendingDown className="w-3 h-3" /> Arzonlashdi
                </button>
                <button
                  onClick={() => setStep1Type('increase')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md flex items-center gap-1 transition-colors ${
                    step1Type === 'increase'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                  }`}
                >
                  <TrendingUp className="w-3 h-3" /> Oshirildi
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-slate-500">Foiz miqdori:</span>
              <span className="text-sm font-bold text-slate-800 dark:text-white tabular-nums">{step1Percent}%</span>
            </div>
            <input
              type="range"
              min={1}
              max={80}
              step={1}
              value={step1Percent}
              onChange={(e) => setStep1Percent(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
          </div>

          {/* 2nd Change Toggle */}
          <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={enableStep2}
                  onChange={(e) => setEnableStep2(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  3. Keyingi (2-bosqich) o'zgarishni qo'shish
                </span>
              </label>

              {enableStep2 && (
                <div className="flex items-center gap-1 bg-white dark:bg-slate-700 p-0.5 rounded-lg border border-slate-200 dark:border-slate-600">
                  <button
                    onClick={() => setStep2Type('increase')}
                    className={`px-2 py-0.5 text-xs font-medium rounded-md ${
                      step2Type === 'increase' ? 'bg-emerald-600 text-white' : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    Oshdi
                  </button>
                  <button
                    onClick={() => setStep2Type('decrease')}
                    className={`px-2 py-0.5 text-xs font-medium rounded-md ${
                      step2Type === 'decrease' ? 'bg-rose-500 text-white' : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    Tushdi
                  </button>
                </div>
              )}
            </div>

            {enableStep2 && (
              <>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-slate-500">2-o'zgarish foizi:</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-white tabular-nums">{step2Percent}%</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={80}
                  step={1}
                  value={step2Percent}
                  onChange={(e) => setStep2Percent(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </>
            )}
          </div>
        </div>

        {/* Visual Results & Live Breakdown */}
        <div className="flex flex-col justify-between p-6 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Hisob-kitob natijasi</div>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                {formatSum(finalPrice)}
              </span>
              <span
                className={`text-sm font-bold flex items-center gap-0.5 ${
                  totalDelta >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
                }`}
              >
                {totalDelta >= 0 ? '+' : ''}
                {totalPercentChange.toFixed(1)}%
              </span>
            </div>

            {/* Visual comparison bar */}
            <div className="my-5">
              <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                <span>Dastlabki: {formatSum(initialPrice)}</span>
                <span>Yakuniy: {formatSum(finalPrice)}</span>
              </div>
              <div className="w-full h-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden flex">
                <div
                  className="h-full bg-slate-400 dark:bg-slate-500 transition-all duration-300"
                  style={{ width: `${Math.min(100, (Math.min(initialPrice, finalPrice) / Math.max(initialPrice, finalPrice)) * 100)}%` }}
                />
                <div
                  className={`h-full transition-all duration-300 ${totalDelta >= 0 ? 'bg-emerald-500' : 'bg-rose-500'}`}
                  style={{
                    width: `${Math.abs(totalPercentChange)}%`,
                  }}
                />
              </div>
            </div>

            {/* Step-by-Step explanation cards */}
            <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-white block">1-Bosqich:</span>
                {formatSum(initialPrice)} ning {step1Percent}% i ={' '}
                <strong className="text-slate-800 dark:text-slate-200">{formatSum(step1Delta)}</strong>.
                <br />
                {step1Type === 'increase' ? "Oshirilgandan so'ng:" : "Arzonlashgandan so'ng:"}{' '}
                <strong className="text-emerald-600 dark:text-emerald-400">{formatSum(priceAfterStep1)}</strong>
              </div>

              {enableStep2 && (
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                  <span className="font-semibold text-slate-900 dark:text-white block">2-Bosqich:</span>
                  Yangi narx ({formatSum(priceAfterStep1)}) ning {step2Percent}% i ={' '}
                  <strong className="text-slate-800 dark:text-slate-200">{formatSum(step2Delta)}</strong>.
                  <br />
                  Yakuniy to'lanadigan summa:{' '}
                  <strong className="text-sky-600 dark:text-sky-400">{formatSum(finalPrice)}</strong>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 rounded-lg text-[11px] text-amber-800 dark:text-amber-300">
            <strong>DTM Layfxaki:</strong> Agar tovar x% ga oshib, keyin x% ga tushsa, natija dastlabki narxga qaytmaydi!
            Chunki 2-marta foiz kattaroq son orqali hisoblangan bo'ladi.
          </div>
        </div>
      </div>
    </div>
  );
};
