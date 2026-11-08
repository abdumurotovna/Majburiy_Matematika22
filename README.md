# Majburiy Matematika 0 dan (DTM / OTM Kirish Imtihonlari)

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38b2ac.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Apache_2.0-green.svg)](LICENSE)

O'zbekistondagi OTMlarga kirish imtihonlari (DTM / Bilimni baholash agentligi) uchun **Majburiy Matematika** fanini noldan, hech qanday qiyin formulalarsiz, vizual va interaktiv tarzda o'rgatuvchi zamonaviy veb-platforma.

---

## 📌 Loyiha haqida

Har yili minglab abituriyentlar (ayniqsa tilshunoslik, huquqshunoslik, tibbiyot, san'at kabi gumanitar soha vakillari) majburiy fanlar blokidagi 10 ta matematika savolida qiyinchilikka duch kelishadi. 

Ushbu dastur matematikani eng tubdan — **manfiy sonlar, qavslar, kasrlar va foizlardan** boshlab, DTM imtihonidagi 10 ta savoldan 10 tasiga to'liq (11.0 ball) to'g'ri javob berish darajasigacha qadamma-qadam o'rgatadi.

---

## ✨ Asosiy Imkoniyatlar

1. **0-Darajadan 7 ta To'liq O'quv Moduli**:
   - 01. Arifmetika va Butun sonlar (Manfiy sonlar qoidalari, amallar ketma-ketligi, qoldiqli bo'lish va bo'linish alomatlari).
   - 02. Oddiy va O'nli Kasrlar (Umumiy maxraj, kapalak usuli, qisqartirish, aralash kasrlar).
   - 03. Foizlar va Proporsiya (DTM ning sevimli mavzusi: narxlarning ketma-ket oshishi/tushishi, chegirmalar, to'g'ri va teskari proporsiya).
   - 04. Tenglamalar va Algebra (Chiziqli tenglamalar, x ni yolg'iz qoldirish siri, qisqa ko'paytirish formulalari).
   - 05. Darajalar va Arifmetik Kvadrat Ildiz (Daraja qoidalari, ildiz ostidan son chiqarish).
   - 06. Sodda Geometriya (To'g'ri to'rtburchak va kvadratning yuzi/perimetri, Pifagor teoremasi va 3-4-5 "Misr uchburchagi").
   - 07. Matnli Masalalar va Statistika (Tezlik formulalari $S = v \cdot t$, o'rtacha arifmetik qiymat, diagrammalar tahlili).

2. **4 ta Interaktiv Vizual Simulyator (Sandbox)**:
   - 🍕 **Kasrlar Konstruktori**: Doiraviy va chiziqli bo'laklar orqali umumiy maxraj paydo bo'lishini ko'z bilan ko'rish.
   - 🏷️ **Foiz va Narx Laboratoriyasi**: Tovar narxi ketma-ket o'zgarganda nima sodir bo'lishini slaydlar orqali modellashtirish.
   - ⚖️ **Tenglama Tarozi Simulyatori**: Tenglik belgisidan narigi tomonga o'tganda ishora nega o'zgarishini ko'rsatuvchi interaktiv tarozi.
   - 📐 **Geometriya va Pifagor**: Katetlarni o'zgartirganda gipotenuza va yuza qanday hisoblanishini ko'rsatuvchi SVG chizmasi.

3. **DTM Real Test Simulyatori**:
   - Davlat Test Markazi talabi bo'yicha 10 ta savollik real test variantlari.
   - 20 daqiqalik hisoblagich (taymer).
   - 1.1 ballik haqiqiy baholash tizimi (maksimal 11.0 ball).
   - Test yakunida har bir savol bo'yicha qadam-baqadam to'liq yechim va xatolar tahlili.

4. **AI Matematika Repetitori (Gemini API)**:
   - Istalgan savol yoki misolni kiritish imkoniyati.
   - AI o'quvchiga misolni 0 dan boshlab, sodda o'zbek tilida qadam-baqadam yechib beradi.

5. **Interaktiv Qoralama Daftari (Scratchpad)**:
   - Dars yoki test vaqtida ekranning o'zida qalam, o'chirg'ich va ranglar yordamida katakli doskada hisob-kitob qilish.

6. **Formulalar & DTM Layfxaklari Lug'ati**:
   - Imtihonda soniyalarda javob topishga yordam beruvchi qisqa formulalar va hisoblash sirlari.

---

## 🚀 O'rnatish va Ishga Tushirish (Quick Start)

### 1. Repozitoriyani klonlash:
```bash
git clone https://github.com/your-username/majburiy-matematika.git
cd majburiy-matematika
```

### 2. Bog'liqliklarni o'rnatish:
```bash
npm install
```

### 3. Muhit o'zgaruvchilari (.env):
`.env.example` faylidan nusxa oling va `.env` faylini yarating:
```bash
cp .env.example .env
```
Agar AI Repetitordan to'liq foydalanmoqchi bo'lsangiz, `GEMINI_API_KEY` ni kiriting:
```env
GEMINI_API_KEY="your-gemini-api-key"
PORT=3000
```

### 4. Dasturni ishga tushirish (Dev Server):
```bash
npm run dev
```
Brauzerda `http://localhost:3000` manzilini oching.

### 5. Ishlab chiqarish uchun yig'ish (Build):
```bash
npm run build
npm start
```

---

## 📁 Loyiha Tuzilishi

```
├── src/
│   ├── assets/             # Rasm va grafik aktivlar
│   ├── components/         # React komponentlari
│   │   ├── Simulators/     # 4 ta interaktiv simulyator
│   │   ├── AITutor.tsx     # Gemini AI yordamchisi
│   │   ├── CurriculumView.tsx # 7 ta modul va darslar ko'rinishi
│   │   ├── DTMExamSimulator.tsx # Real DTM test simulyatori
│   │   ├── FormulaDirectory.tsx # Spravochnik va formulalar
│   │   ├── Navbar.tsx      # Strict 3-zone boshqaruv paneli
│   │   ├── Hero.tsx        # Kirish qismi
│   │   ├── ScratchpadModal.tsx # Qoralama chizish doskasi
│   │   └── Footer.tsx      # Pastki qism
│   ├── data/               # To'liq o'quv dasturi, testlar va formulalar
│   │   ├── curriculum.ts   # 7 modul, darslar, tushuntirishlar va mashqlar
│   │   ├── dtmTests.ts     # 10 talik DTM test variantlari va yechimlari
│   │   └── cheatSheet.ts   # 25+ formula va layfxaklar
│   ├── types/
│   │   └── math.ts         # TypeScript interfeyslari
│   ├── App.tsx             # Asosiy ilova
│   ├── index.css           # Tailwind CSS v4 uslublari
│   └── main.tsx            # React ilova nuqtasi
├── server.ts               # Express backend va Gemini API integratsiyasi
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠️ Ishlatilgan Texnologiyalar

- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Motion
- **Belgilar (Icons)**: Lucide React
- **Backend / API**: Node.js, Express, Vite Middlewares
- **Sun'iy Intellekt**: Google Gemini API (`@google/genai`)
- **Effektlar**: Canvas Confetti

---

## 📄 Litsenziya

Apache License 2.0. Ushbu loyiha barcha o'quvchilar va abituriyentlar uchun ochiq manbali hisoblanadi.
