import React, { useState } from 'react';
import { Search, Star, Copy, Check, Lightbulb, BookMarked } from 'lucide-react';
import { FORMULA_CHEAT_SHEET } from '../data/cheatSheet';
import { FormulaItem } from '../types/math';

interface FormulaDirectoryProps {
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
}

export const FormulaDirectory: React.FC<FormulaDirectoryProps> = ({ favoriteIds, onToggleFavorite }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Barchasi');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['Barchasi', 'Arifmetika', 'Kasrlar', 'Foizlar', 'Algebra', 'Geometriya', 'Layfxaklar', 'Sevimlilar'];

  const filteredFormulas = FORMULA_CHEAT_SHEET.filter((item) => {
    const matchesCategory =
      selectedCategory === 'Barchasi'
        ? true
        : selectedCategory === 'Sevimlilar'
        ? favoriteIds.includes(item.id)
        : item.category === selectedCategory;

    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.example.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleCopy = (id: string, formula: string) => {
    navigator.clipboard.writeText(formula);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
        <div>
          <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
            DTM Spravochnik
          </span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
            Formulalar va Oltin Layfxaklar Lug'ati
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Majburiy matematika imtihonida kerak bo'ladigan barcha formulalar va hisoblash sirlari.
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Formula yoki mavzuni qidirish..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto py-3 border-b border-slate-100 dark:border-slate-800">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
              selectedCategory === cat
                ? 'bg-slate-900 text-white dark:bg-amber-600 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {cat} {cat === 'Sevimlilar' && `(${favoriteIds.length})`}
          </button>
        ))}
      </div>

      {/* Formulas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {filteredFormulas.map((item) => {
          const isFav = favoriteIds.includes(item.id);

          return (
            <div
              key={item.id}
              className="p-5 bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[11px] font-semibold text-slate-400">{item.category}</span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleCopy(item.id, item.formula)}
                      className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded"
                      title="Formulani nusxalash"
                    >
                      {copiedId === item.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <button
                      onClick={() => onToggleFavorite(item.id)}
                      className={`p-1 rounded ${
                        isFav
                          ? 'text-amber-500 fill-amber-500'
                          : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                      }`}
                      title={isFav ? "Sevimli formulalardan o'chirish" : "Sevimli formulalarga qo'shish"}
                    >
                      <Star className={`w-3.5 h-3.5 ${isFav ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>

                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h4>

                {/* Formula Highlight Box */}
                <div className="my-2.5 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 font-mono text-sm font-bold text-sky-700 dark:text-sky-300">
                  {item.formula}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>

                <div className="text-[11px] text-slate-500 mt-2 font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded border border-slate-200 dark:border-slate-700/60">
                  Misol: {item.example}
                </div>
              </div>

              {item.examTip && (
                <div className="p-2.5 bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40 rounded-lg text-[11px] text-amber-800 dark:text-amber-300 flex items-start gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>DTM Maslahati:</strong> {item.examTip}
                  </span>
                </div>
              )}
            </div>
          );
        })}

        {filteredFormulas.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-400 text-xs">
            Hech qanday formula topilmadi. Qidiruv so'zini o'zgartirib ko'ring.
          </div>
        )}
      </div>
    </div>
  );
};
