import { FormulaItem } from '../types/math';

export const FORMULA_CHEAT_SHEET: FormulaItem[] = [
  {
    id: 'f1',
    category: 'Arifmetika',
    title: 'Qoldiqli bo\'lish formulasi',
    formula: 'a = b · q + r (bunda 0 ≤ r < b)',
    description: 'Har qanday butun sonni bo\'luvchi, to\'liqsiz bo\'linma va qoldiq orqali ifodalash.',
    example: '29 ni 6 ga bo\'lganda: 29 = 6 · 4 + 5 (qoldiq 5).',
    examTip: 'Qoldiq har doim bo\'luvchidan kichik bo\'lishi shart! DTM da qoldiqning eng katta qiymatini so\'rashadi (b - 1).'
  },
  {
    id: 'f2',
    category: 'Arifmetika',
    title: 'EKUB va EKUK bog\'liqligi',
    formula: 'EKUB(a, b) · EKUK(a, b) = a · b',
    description: 'Ikki sonning eng katta umumiy bo\'luvchisi va eng kichik umumiy karralisi ko\'paytmasi ularning o\'zaro ko\'paytmasiga teng.',
    example: 'a = 12, b = 18 => EKUB = 6, EKUK = 36. 6 · 36 = 216 = 12 · 18.',
    examTip: 'Agar bitta son va EKUB, EKUK berilgan bo\'lsa, ikkinchi sonni shu formuladan bir zumda topasiz.'
  },
  {
    id: 'f3',
    category: 'Kasrlar',
    title: 'Kasrlarni qo\'shish (Kapalak qoidasi)',
    formula: 'a/b + c/d = (a·d + b·c) / (b·d)',
    description: 'Umumiy maxrajni o\'ylab o\'tirmasdan chiziqli ko\'paytirish bilan qo\'shish.',
    example: '3/5 + 2/7 = (3·7 + 5·2) / (5·7) = (21 + 10) / 35 = 31/35.',
    examTip: 'Oddiy hisob-kitoblarda eng tez va xatosiz usul.'
  },
  {
    id: 'f4',
    category: 'Kasrlar',
    title: 'Kasrni kasrga bo\'lish',
    formula: '(a/b) : (c/d) = (a/b) · (d/c) = (a·d) / (b·c)',
    description: 'Ikkinchi kasrning surati va maxraji o\'rni almashtirilib, ko\'paytiriladi.',
    example: '(4/9) : (2/3) = (4/9) · (3/2) = (4·3) / (9·2) = 12/18 = 2/3.',
    examTip: 'Aralash kasr bo\'lsa, avval noto\'g\'ri kasrga aylantiring, so\'ng teskarisiga ko\'paytiring.'
  },
  {
    id: 'f5',
    category: 'Foizlar',
    title: 'Sonning foizini topish',
    formula: 'A = (S · p) / 100',
    description: 'S sonining p foizini hisoblash.',
    example: '400 ning 15% i = 400 · 15 / 100 = 4 · 15 = 60.',
    examTip: 'Oxiridagi 2 ta nolni qisqartirib, qolgan sonlarni ko\'paytiring!'
  },
  {
    id: 'f6',
    category: 'Foizlar',
    title: 'Ketma-ket narx o\'zgarishi',
    formula: 'Oxirgi narx = S · (1 ± p₁/100) · (1 ± p₂/100)',
    description: 'Narx p₁ foizga, keyin p₂ foizga oshishi yoki tushishi.',
    example: 'Narx 20% oshsa (·1.2), keyin 20% tushsa (·0.8) => 1.2 · 0.8 = 0.96 (narx 4% ga tushadi!).',
    examTip: 'Har doim esda tuting: Narx x% ga oshib, keyin x% ga tushsa, natijada narx (x/10)% emas, x²/100 % ga ARZONLASHADI.'
  },
  {
    id: 'f7',
    category: 'Algebra',
    title: 'Kvadratlar ayirmasi formulasi',
    formula: 'a² - b² = (a - b)(a + b)',
    description: 'Katta sonlar kvadratlarini ayirishda yordam beruvchi eng tezkor qoida.',
    example: '78² - 22² = (78 - 22)(78 + 22) = 56 · 100 = 5600.',
    examTip: 'DTM majburiy testida doim yig\'indisi 10, 100 yoki 1000 chiqadigan sonlar beriladi.'
  },
  {
    id: 'f8',
    category: 'Algebra',
    title: 'Yig\'indi va Ayirmaning kvadrati',
    formula: '(a ± b)² = a² ± 2ab + b²',
    description: 'Qavs ichidagi ikkita had yig\'indisi yoki ayirmasining kvadrati.',
    example: '(2x + 3)² = 4x² + 12x + 9.',
    examTip: 'O\'rtadagi 2ab hadni yozishni unutmang!'
  },
  {
    id: 'f9',
    category: 'Algebra',
    title: 'Daraja xossalari',
    formula: 'aⁿ · aᵐ = aⁿ⁺ᵐ | aⁿ : aᵐ = aⁿ⁻ᵐ | (aⁿ)ᵐ = aⁿᵐ',
    description: 'Bir xil asosli darajalar ustida amallar.',
    example: '2³ · 2⁴ = 2⁷ = 128 | (3²)³ = 3⁶ = 729.',
    examTip: 'Nol daraja: a⁰ = 1 (har qanday noldan farqli son uchun).'
  },
  {
    id: 'f10',
    category: 'Geometriya',
    title: 'Pifagor teoremasi',
    formula: 'c² = a² + b² (yoki c = √(a² + b²))',
    description: 'To\'g\'ri burchakli uchburchakda gipotenuza va katetlar bog\'liqligi.',
    example: 'Katetlar 3 va 4 bo\'lsa, c = √(9 + 16) = √25 = 5 sm.',
    examTip: 'Pifagor sonlarini yodlab oling: (3, 4, 5), (6, 8, 10), (5, 12, 13), (8, 15, 17).'
  },
  {
    id: 'f11',
    category: 'Geometriya',
    title: 'To\'g\'ri to\'rtburchak va Kvadrat yuzalari',
    formula: 'S_to\'rtburchak = a · b | S_kvadrat = a²',
    description: 'Perimetrlar: P_to\'rtburchak = 2(a+b) | P_kvadrat = 4a.',
    example: 'Bo\'yi 8, eni 5 bo\'lsa, S = 40, P = 2(8+5) = 26.',
    examTip: 'Kvadratning diagonali d = a√2 ga teng.'
  },
  {
    id: 'f12',
    category: 'Geometriya',
    title: 'Aylana va Doira',
    formula: 'Uzunligi: C = 2πr | Yuzi: S = πr²',
    description: 'Doira yuzi va aylana uzunligi (r — radius, d = 2r — diametr).',
    example: 'r = 7 sm bo\'lsa, C = 2 · (22/7) · 7 = 44 sm; S = (22/7) · 49 = 154 sm².',
    examTip: 'DTM da ko\'pincha π = 3 yoki π = 22/7 deb olish ko\'rsatiladi.'
  },
  {
    id: 'f13',
    category: 'Layfxaklar',
    title: 'Oxiri 5 bilan tugaydigan sonlar kvadrati',
    formula: '(n5)² = [n · (n+1)] ketidan 25 yoziladi',
    description: 'Oxiri 5 bo\'lgan sonlarni sekund ichida kvadratga ko\'tarish.',
    example: '35² = 3 · 4 = 12 va oxiriga 25 => 1225! 75² = 7 · 8 = 56 va 25 => 5625!',
    examTip: 'Bu usul bilan 25², 35², 45², 65², 85², 95² larni kalkulyatorsiz topasiz.'
  },
  {
    id: 'f14',
    category: 'Layfxaklar',
    title: 'Yig\'indi va Ayirmasi berilgan ikki sonni topish',
    formula: 'Katta son = (Yig\'indi + Ayirma) / 2 | Kichik son = (Yig\'indi - Ayirma) / 2',
    description: 'Tenglamalar sistemasini tuzmasdan to\'g\'ridan-to\'g\'ri javobni topish.',
    example: 'Yig\'indisi 50, ayirmasi 14 bo\'lsa: Katta = (50+14)/2 = 32, Kichik = (50-14)/2 = 18.',
    examTip: 'DTM da "Ikki son yig\'indisi... ayirmasi..." degan savolda soniyalarda yechiladi.'
  }
];
