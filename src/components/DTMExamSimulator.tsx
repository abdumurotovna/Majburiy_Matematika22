import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Timer, CheckCircle, XCircle, RotateCcw, Award, ChevronRight, ChevronLeft, HelpCircle } from 'lucide-react';
import { DTM_EXAM_VARIANTS } from '../data/dtmTests';
import { DTMExamVariant } from '../types/math';

interface DTMExamSimulatorProps {
  onOpenScratchpad: () => void;
}

export const DTMExamSimulator: React.FC<DTMExamSimulatorProps> = ({ onOpenScratchpad }) => {
  const [selectedVariant, setSelectedVariant] = useState<DTMExamVariant>(DTM_EXAM_VARIANTS[0]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(20 * 60); // 20 minutes in seconds
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  // Timer effect
  useEffect(() => {
    if (!isTimerRunning || isSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimerRunning, isSubmitted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex,
    }));
  };

  const handleSubmitExam = () => {
    setIsSubmitted(true);
    setIsTimerRunning(false);

    // Calculate score
    let correctCount = 0;
    selectedVariant.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });

    if (correctCount >= 7) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Safe fallback
      }
    }
  };

  const handleRestart = (variant = selectedVariant) => {
    setSelectedVariant(variant);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setIsSubmitted(false);
    setTimeLeft(variant.timeMinutes * 60);
    setIsTimerRunning(true);
  };

  const questions = selectedVariant.questions;
  const currentQ = questions[currentIndex];

  // Calculate results if submitted
  const correctCount = questions.filter((q, idx) => selectedAnswers[idx] === q.correctIndex).length;
  const totalScore = (correctCount * selectedVariant.pointsPerQuestion).toFixed(1);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
        <div>
          <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
            Davlat Test Markazi Simulyatori
          </span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">{selectedVariant.title}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Jami 10 ta savol · Har bir savol 1.1 ball · Maksimal ball: 11.0 ball
          </p>
        </div>

        {/* Variant selector & Timer */}
        <div className="flex items-center gap-3">
          <select
            value={selectedVariant.id}
            onChange={(e) => {
              const v = DTM_EXAM_VARIANTS.find((item) => item.id === e.target.value);
              if (v) handleRestart(v);
            }}
            disabled={!isSubmitted && Object.keys(selectedAnswers).length > 0}
            className="text-xs bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5 font-medium text-slate-700 dark:text-slate-200"
          >
            {DTM_EXAM_VARIANTS.map((v) => (
              <option key={v.id} value={v.id}>
                {v.title}
              </option>
            ))}
          </select>

          <div
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold font-mono ${
              timeLeft < 300
                ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 animate-pulse'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
            }`}
          >
            <Timer className="w-4 h-4" />
            <span>{formatTime(timeLeft)}</span>
          </div>

          <button
            onClick={onOpenScratchpad}
            className="px-3 py-1.5 text-xs font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 rounded-lg hover:bg-indigo-100 transition-colors"
          >
            Qoralama
          </button>
        </div>
      </div>

      {/* Results View when Submitted */}
      {isSubmitted ? (
        <div className="my-6 space-y-6">
          <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl ${
                  Number(totalScore) >= 8.8
                    ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400'
                    : 'bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400'
                }`}
              >
                <Award className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs text-slate-500 uppercase tracking-wider">Imtihon Natijangiz</span>
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                  {totalScore} <span className="text-lg font-normal text-slate-400">/ 11.0 ball</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  To'g'ri javoblar: <strong className="text-emerald-600">{correctCount} ta</strong> | Noto'g'ri:{' '}
                  <strong className="text-rose-600">{questions.length - correctCount} ta</strong>
                </p>
              </div>
            </div>

            <button
              onClick={() => handleRestart()}
              className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
              Testni Qaytadan Boshlash
            </button>
          </div>

          {/* Solutions breakdown for all questions */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4">
              Savollarning to'liq yechimlari va xatolar tahlili:
            </h4>

            <div className="space-y-4">
              {questions.map((q, idx) => {
                const userAns = selectedAnswers[idx];
                const isCorrect = userAns === q.correctIndex;
                const wasAnswered = userAns !== undefined;

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-xl border transition-colors ${
                      isCorrect
                        ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800'
                        : 'bg-rose-50/40 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                          }`}
                        >
                          {idx + 1}
                        </span>
                        <span className="text-xs font-medium text-slate-500">{q.topic}</span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-bold">
                        {isCorrect ? (
                          <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                            <CheckCircle className="w-4 h-4" /> +1.1 ball
                          </span>
                        ) : (
                          <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1">
                            <XCircle className="w-4 h-4" /> 0 ball
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-slate-900 dark:text-white mb-3">{q.questionText}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                      {q.options.map((opt, optIdx) => {
                        const isRightOpt = optIdx === q.correctIndex;
                        const isUserOpt = optIdx === userAns;

                        return (
                          <div
                            key={optIdx}
                            className={`p-2.5 rounded-lg text-xs font-medium border flex items-center justify-between ${
                              isRightOpt
                                ? 'bg-emerald-100/70 dark:bg-emerald-900/40 border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200 font-bold'
                                : isUserOpt
                                ? 'bg-rose-100/70 dark:bg-rose-900/40 border-rose-300 dark:border-rose-700 text-rose-900 dark:text-rose-200 line-through'
                                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                            }`}
                          >
                            <span>
                              {String.fromCharCode(65 + optIdx)}) {opt}
                            </span>
                            {isRightOpt && <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />}
                            {!isRightOpt && isUserOpt && <XCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                          </div>
                        );
                      })}
                    </div>

                    {/* Step by step solution */}
                    <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                      <span className="font-bold text-slate-900 dark:text-white block mb-1">
                        Yechim: {q.explanation}
                      </span>
                      {q.stepByStepSolution.map((step, sIdx) => (
                        <div key={sIdx} className="text-slate-500 font-mono text-[11px]">
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* Active Test View */
        <div className="my-6">
          {/* Question Navigation Bar (1 - 10) */}
          <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
            {questions.map((_, idx) => {
              const isAnswered = selectedAnswers[idx] !== undefined;
              const isCurrent = currentIndex === idx;

              return (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-9 h-9 rounded-xl font-bold text-xs shrink-0 transition-all ${
                    isCurrent
                      ? 'bg-sky-600 text-white ring-2 ring-sky-300 dark:ring-sky-800 scale-105'
                      : isAnswered
                      ? 'bg-slate-800 text-white dark:bg-slate-700'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Current Question Body */}
          <div className="p-6 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-slate-500">
                Savol {currentIndex + 1} / {questions.length} · {currentQ.topic}
              </span>
              <span className="text-xs px-2 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-slate-700 dark:text-slate-200">
                1.1 ball
              </span>
            </div>

            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-6">
              {currentQ.questionText}
            </h4>

            {/* Answer Options */}
            <div className="space-y-3">
              {currentQ.options.map((option, optIdx) => {
                const isSelected = selectedAnswers[currentIndex] === optIdx;

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-sky-50 dark:bg-sky-950/50 border-sky-500 text-sky-900 dark:text-sky-200 ring-1 ring-sky-500 font-semibold'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          isSelected ? 'bg-sky-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600'
                        }`}
                      >
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="text-sm">{option}</span>
                    </div>

                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected ? 'border-sky-600 bg-sky-600' : 'border-slate-300'
                      }`}
                    >
                      {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between gap-4 mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                disabled={currentIndex === 0}
                className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-slate-50 disabled:opacity-40 flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" /> Oldingi
              </button>

              <button
                onClick={handleSubmitExam}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-indigo-600 dark:hover:bg-indigo-700 rounded-lg transition-colors"
              >
                Testni Yakunlash ({Object.keys(selectedAnswers).length}/{questions.length})
              </button>

              <button
                onClick={() => setCurrentIndex(Math.min(questions.length - 1, currentIndex + 1))}
                disabled={currentIndex === questions.length - 1}
                className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-slate-50 disabled:opacity-40 flex items-center gap-1"
              >
                Keyingi <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
