import React, { useState } from 'react';
import { Send, Bot, User, Sparkles, Loader2, Lightbulb, BookOpen, AlertCircle } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export const AITutor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init_1',
      sender: 'assistant',
      text: "Assalomu alaykum! Men sizning DTM Majburiy Matematika bo'yicha shaxsiy repetitoringizman. Matematikani 0 dan, eng sodda usullarda tushuntirib beraman. Qaysi mavzu yoki misolda qiynalyapsiz?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const suggestedQuestions = [
    "Oddiy kasrlarni umumiy maxrajga qanday tez keltiraman?",
    "Mahsulot 20% arzonlashib, so'ng 10% qimmatlashsa, narx qanday o'zgaradi?",
    "3x + 12 = 33 tenglamani 0 dan tushuntirib bering",
    "Pifagor teoremasi va 3-4-5 'Misr uchburchagi' nima?",
    "Qaysi sonlar 9 ga qoldiqsiz bo'linishini qanday bilaman?"
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const questionText = (textToSend || input).trim();
    if (!questionText || isLoading) return;

    setError(null);
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: questionText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: questionText })
      });

      if (!response.ok) {
        throw new Error('Serverdan javob olishda xatolik');
      }

      const data = await response.json();
      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: data.answer || "Kechirasiz, javob shakllantirilmadi.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error(err);
      setError("AI repetitor bilan ulanishda vaqtinchalik muammo. Iltimos qayta urinib ko'ring.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-sm">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">AI Matematika Repetitori</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Har qanday misolni yozing — 0 dan, qadamma-qadam tushuntirib beradi.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500">Gemini 3.8 Flash bilan quvvatlangan</span>
        </div>
      </div>

      {/* Suggested prompts carousel */}
      <div className="py-3 border-b border-slate-100 dark:border-slate-800">
        <div className="text-xs font-semibold text-slate-500 mb-2 flex items-center gap-1.5">
          <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
          Tezkor savollar (bosing):
        </div>
        <div className="flex flex-wrap gap-2">
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q)}
              disabled={isLoading}
              className="text-left px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-200 dark:border-slate-700/60"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Messages list */}
      <div className="my-4 space-y-4 max-h-[460px] overflow-y-auto pr-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.sender === 'user'
                  ? 'bg-slate-800 text-white'
                  : 'bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400'
              }`}
            >
              {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div
              className={`max-w-[82%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-slate-900 text-white dark:bg-indigo-600'
                  : 'bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700'
              }`}
            >
              <div className="whitespace-pre-line font-sans">{msg.text}</div>
              <span className={`text-[10px] block mt-2 text-right ${msg.sender === 'user' ? 'text-slate-400' : 'text-slate-400'}`}>
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center">
              <Loader2 className="w-4 h-4 animate-spin" />
            </div>
            <div className="p-3.5 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs text-slate-500 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-sky-500 animate-pulse" />
              Misol tahlil qilinmoqda va qadam-baqadam yechim yozilmoqda...
            </div>
          </div>
        )}

        {error && (
          <div className="p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-xl text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {error}
          </div>
        )}
      </div>

      {/* Input bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Misol yoki savolingizni yozing (masalan: 48 ning 25% i qancha yoki -15 + (-7)...)"
          disabled={isLoading}
          className="flex-1 px-4 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-500 text-slate-900 dark:text-white placeholder:text-slate-400"
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="px-4 py-2.5 bg-sky-600 hover:bg-sky-700 disabled:opacity-50 text-white rounded-xl font-medium text-sm flex items-center gap-1.5 transition-colors shadow-xs"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline">Yuborish</span>
        </button>
      </form>
    </div>
  );
};
