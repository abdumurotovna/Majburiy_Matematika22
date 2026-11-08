import React, { useState } from 'react';
import { Square, Triangle, Ruler, Sparkles } from 'lucide-react';

export const GeometrySandbox: React.FC = () => {
  const [tab, setTab] = useState<'rectangle' | 'pythagoras'>('rectangle');

  // Rectangle state
  const [rectWidth, setRectWidth] = useState<number>(8);
  const [rectHeight, setRectHeight] = useState<number>(5);

  const rectArea = rectWidth * rectHeight;
  const rectPerimeter = 2 * (rectWidth + rectHeight);

  // Pythagoras state
  const [legA, setLegA] = useState<number>(6);
  const [legB, setLegB] = useState<number>(8);

  const hypotenuse = Math.sqrt(legA * legA + legB * legB);
  const triangleArea = (legA * legB) / 2;
  const isEgyptian = (legA === 3 && legB === 4) || (legA === 4 && legB === 3) || (legA === 6 && legB === 8) || (legA === 8 && legB === 6);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
        <div>
          <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Interaktiv Simulyator</span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">Geometriya va Pifagor Laboratoriyasi</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Perimetr va Yuza farqini, hamda to'g'ri burchakli uchburchakda gipotenuzani vizual ko'ring.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <button
            onClick={() => setTab('rectangle')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
              tab === 'rectangle'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            <Square className="w-3.5 h-3.5" />
            To'rtburchak
          </button>
          <button
            onClick={() => setTab('pythagoras')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
              tab === 'pythagoras'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            <Triangle className="w-3.5 h-3.5" />
            Pifagor Uchburchagi
          </button>
        </div>
      </div>

      {tab === 'rectangle' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-6 items-center">
          {/* Controls */}
          <div className="space-y-5">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Eni (a):</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white tabular-nums">{rectWidth} sm</span>
              </div>
              <input
                type="range"
                min={2}
                max={14}
                value={rectWidth}
                onChange={(e) => setRectWidth(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Bo'yi (b):</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white tabular-nums">{rectHeight} sm</span>
              </div>
              <input
                type="range"
                min={2}
                max={10}
                value={rectHeight}
                onChange={(e) => setRectHeight(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
            </div>

            {/* Calculations Card */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-xl">
                <span className="text-xs font-medium text-amber-700 dark:text-amber-300 block">Yuza (S):</span>
                <div className="text-2xl font-extrabold text-amber-900 dark:text-amber-100 mt-1 tabular-nums">
                  {rectArea} sm²
                </div>
                <span className="text-[11px] text-amber-600 dark:text-amber-400 font-mono mt-0.5 block">
                  S = a · b = {rectWidth} · {rectHeight}
                </span>
              </div>

              <div className="p-4 bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/60 rounded-xl">
                <span className="text-xs font-medium text-sky-700 dark:text-sky-300 block">Perimetr (P):</span>
                <div className="text-2xl font-extrabold text-sky-900 dark:text-sky-100 mt-1 tabular-nums">
                  {rectPerimeter} sm
                </div>
                <span className="text-[11px] text-sky-600 dark:text-sky-400 font-mono mt-0.5 block">
                  P = 2·(a+b) = 2·({rectWidth}+{rectHeight})
                </span>
              </div>
            </div>
          </div>

          {/* SVG Visual Canvas */}
          <div className="flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700 min-h-[260px]">
            <svg
              width="260"
              height="200"
              viewBox="0 0 260 200"
              className="overflow-visible"
            >
              {/* Outer grid */}
              <defs>
                <pattern id="grid" width="16" height="16" patternUnits="userSpaceOnUse">
                  <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(148, 163, 184, 0.2)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect x="10" y="10" width="240" height="180" fill="url(#grid)" />

              {/* Dynamic Rectangle */}
              <rect
                x={130 - (rectWidth * 14) / 2}
                y={100 - (rectHeight * 14) / 2}
                width={rectWidth * 14}
                height={rectHeight * 14}
                fill="rgba(245, 158, 11, 0.2)"
                stroke="#d97706"
                strokeWidth="2.5"
                rx="3"
                className="transition-all duration-200"
              />

              {/* Width label */}
              <text
                x="130"
                y={88 - (rectHeight * 14) / 2}
                textAnchor="middle"
                fill="#d97706"
                fontSize="12"
                fontWeight="bold"
              >
                a = {rectWidth} sm
              </text>

              {/* Height label */}
              <text
                x={120 - (rectWidth * 14) / 2}
                y="105"
                textAnchor="end"
                fill="#d97706"
                fontSize="12"
                fontWeight="bold"
              >
                b = {rectHeight} sm
              </text>

              {/* Area label inside */}
              <text
                x="130"
                y="104"
                textAnchor="middle"
                fill="#b45309"
                fontSize="13"
                fontWeight="bold"
                className="dark:fill-amber-300"
              >
                {rectArea} sm²
              </text>
            </svg>
            <span className="text-[11px] text-slate-400 mt-2">
              Yuza — ichidagi barcha 1 sm² lik kataklar soni. Perimetr — uning atrofiga chizilgan qizil chiziq uzunligi!
            </span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-6 items-center">
          {/* Pythagoras Controls */}
          <div className="space-y-5">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Katet 1 (a):</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white tabular-nums">{legA} sm</span>
              </div>
              <input
                type="range"
                min={3}
                max={15}
                value={legA}
                onChange={(e) => setLegA(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Katet 2 (b):</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white tabular-nums">{legB} sm</span>
              </div>
              <input
                type="range"
                min={3}
                max={15}
                value={legB}
                onChange={(e) => setLegB(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
            </div>

            {/* Live Pythagoras result */}
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">
                  Gipotenuza (c = √(a² + b²)):
                </span>
                {isEgyptian && (
                  <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200 rounded text-[10px] font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Misr Uchburchagi (3:4:5)
                  </span>
                )}
              </div>
              <div className="text-2xl font-extrabold text-emerald-900 dark:text-emerald-100 mt-1 tabular-nums">
                c = {hypotenuse.toFixed(2).replace(/\.00$/, '')} sm
              </div>
              <div className="text-xs text-emerald-700 dark:text-emerald-300 font-mono mt-1">
                c² = {legA}² + {legB}² = {legA * legA} + {legB * legB} = {legA * legA + legB * legB}
              </div>
            </div>
          </div>

          {/* SVG Triangle Canvas */}
          <div className="flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700 min-h-[260px]">
            <svg width="260" height="220" viewBox="0 0 260 220" className="overflow-visible">
              {/* Scaled coordinates */}
              {(() => {
                const ox = 50;
                const oy = 180;
                const scale = 8;
                const ax = ox + legA * scale;
                const by = oy - legB * scale;

                return (
                  <>
                    {/* Right angle symbol */}
                    <rect x={ox} y={oy - 12} width="12" height="12" fill="none" stroke="#94a3b8" strokeWidth="1.5" />

                    {/* Triangle Polygon */}
                    <polygon
                      points={`${ox},${oy} ${ax},${oy} ${ox},${by}`}
                      fill="rgba(16, 185, 129, 0.15)"
                      stroke="#059669"
                      strokeWidth="2.5"
                    />

                    {/* Side A label (horizontal) */}
                    <text x={(ox + ax) / 2} y={oy + 18} textAnchor="middle" fill="#059669" fontSize="12" fontWeight="bold">
                      a = {legA} sm
                    </text>

                    {/* Side B label (vertical) */}
                    <text x={ox - 10} y={(oy + by) / 2} textAnchor="end" fill="#059669" fontSize="12" fontWeight="bold">
                      b = {legB} sm
                    </text>

                    {/* Hypotenuse label (diagonal) */}
                    <text
                      x={(ax + ox) / 2 + 10}
                      y={(oy + by) / 2 - 5}
                      textAnchor="start"
                      fill="#0284c7"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      c = {hypotenuse.toFixed(1)} sm
                    </text>
                  </>
                );
              })()}
            </svg>
            <span className="text-[11px] text-slate-400 mt-2">
              Uchburchak yuzi: S = ({legA} · {legB}) / 2 = {triangleArea} sm²
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
