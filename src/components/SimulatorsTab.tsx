import React, { useState } from 'react';
import { FractionVisualizer } from './Simulators/FractionVisualizer';
import { PercentageCalculator } from './Simulators/PercentageCalculator';
import { EquationBalancer } from './Simulators/EquationBalancer';
import { GeometrySandbox } from './Simulators/GeometrySandbox';
import { PieChart, Percent, Scale, Shapes } from 'lucide-react';

export const SimulatorsTab: React.FC = () => {
  const [activeSim, setActiveSim] = useState<'fractions' | 'percentage' | 'equations' | 'geometry'>('fractions');

  const simulators = [
    {
      id: 'fractions',
      title: 'Kasrlar Konstruktori',
      desc: 'Umumiy maxraj va bo\'laklar',
      icon: <PieChart className="w-4 h-4" />
    },
    {
      id: 'percentage',
      title: 'Foiz & Narx O\'zgarishi',
      desc: 'Chegirmalar va o\'sishlar',
      icon: <Percent className="w-4 h-4" />
    },
    {
      id: 'equations',
      title: 'Tenglama Tarozisi',
      desc: 'x ni tarozi bilan topish',
      icon: <Scale className="w-4 h-4" />
    },
    {
      id: 'geometry',
      title: 'Geometriya & Pifagor',
      desc: 'Yuza, perimetr, gipotenuza',
      icon: <Shapes className="w-4 h-4" />
    }
  ];

  return (
    <div className="space-y-6">
      {/* Simulator Switcher Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {simulators.map((s) => {
          const isActive = activeSim === s.id;

          return (
            <button
              key={s.id}
              onClick={() => setActiveSim(s.id as any)}
              className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                isActive
                  ? 'bg-white dark:bg-slate-900 border-sky-500 shadow-sm ring-1 ring-sky-500 text-sky-950 dark:text-sky-200'
                  : 'bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                    isActive ? 'bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}
                >
                  {s.icon}
                </div>
                <span className="text-xs font-bold">{s.title}</span>
              </div>
              <span className="text-[11px] text-slate-400">{s.desc}</span>
            </button>
          );
        })}
      </div>

      {/* Active Simulator Container */}
      <div>
        {activeSim === 'fractions' && <FractionVisualizer />}
        {activeSim === 'percentage' && <PercentageCalculator />}
        {activeSim === 'equations' && <EquationBalancer />}
        {activeSim === 'geometry' && <GeometrySandbox />}
      </div>
    </div>
  );
};
