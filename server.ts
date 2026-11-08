import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Initialize Gemini SDK with telemetry header
const ai = process.env.GEMINI_API_KEY
  ? new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

// Endpoint for AI Math Tutor
app.post('/api/ai-tutor', async (req, res) => {
  try {
    const { question, topic, history } = req.body;

    if (!question || typeof question !== 'string') {
      res.status(400).json({ error: 'Savol kiritilmadi' });
      return;
    }

    if (!ai) {
      // Provide a high-quality educational fallback response if API key is pending
      res.json({
        answer: `Salom! Savolingiz: "${question}".\n\nMajburiy matematika bo'yicha bu mavzuni 0 dan o'rganish uchun asosiy qoidalar:\n1. Barcha amallar ketma-ketligini tekshiring (qavslar, ko'paytirish/bo'lish, qo'shish/ayirish).\n2. Kasr yoki foiz bo'lsa, ularni eng sodda ko'rinishga keltirib oling.\n3. Agar bu DTM testi bo'lsa, variantlarni tekshirish orqali ham tezroq yechimga erishish mumkin.\n\nAI API kalitingiz faollashtirilgach, to'liq shaxsiy repetitor yechimlari taqdim etiladi.`,
        suggestedTips: [
          'Amallar tartibini doimo yodda tuting',
          'Tenglamalarda noma\'lumni chapga, sonlarni o\'ngga o\'tkazing',
          'DTM testlarida har bir savolga 2 daqiqadan ko\'p vaqt sarflamang'
        ]
      });
      return;
    }

    const systemPrompt = `Siz O'zbekistondagi DTM (Bilimni baholash agentligi) OTM kirish imtihonlari uchun "Majburiy Matematika" bo'yicha professional repetitor va muallimsiz.
O'quvchi matematikani 0 dan (boshlang'ich darajadan) o'rganmoqda.
Sizning vazifangiz:
1. Har qanday savol yoki misolni sodda, samimiy va ravon O'zbek tilida tushuntirish.
2. Murakkab qoidalar o'rniga oddiy hayotiy misollar va "Layfxak" (oson hisoblash) usullarini ko'rsatish.
3. Yechimni qadam-baqadam (1-qadam, 2-qadam, 3-qadam, Natija) formatida taqdim etish.
4. Javob oxirida o'quvchi uchun 1 ta foydali DTM maslahati berish.
Mavzu konteksti: ${topic || 'Umumiy Majburiy Matematika'}`;

    const contents = [
      {
        role: 'user',
        parts: [{ text: `${systemPrompt}\n\nO'quvchi savoli: ${question}` }]
      }
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: contents,
      config: {
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
      }
    });

    const replyText = response.text || 'Kechirasiz, javob shakllantirilmadi. Iltimos, qayta urinib ko\'ring.';

    res.json({
      answer: replyText,
    });
  } catch (error: any) {
    console.error('AI Tutor API error:', error);
    res.status(500).json({
      error: 'AI repetitor bilan bog\'lanishda xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.',
      details: error?.message || 'Noma\'lum xatolik'
    });
  }
});

async function startServer() {
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
