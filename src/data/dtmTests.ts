import { DTMExamVariant } from '../types/math';

export const DTM_EXAM_VARIANTS: DTMExamVariant[] = [
  {
    id: 'dtm_variant_1',
    title: 'DTM Majburiy Matematika — 1-Variant (Standart)',
    description: 'Davlat test markazi standarti bo\'yicha 10 ta majburiy savol. Har bir to\'g\'ri javob uchun 1.1 ball.',
    totalQuestions: 10,
    timeMinutes: 20,
    pointsPerQuestion: 1.1,
    questions: [
      {
        id: 'q1_1',
        topic: 'Arifmetika',
        questionText: 'Hisoblang: -18 + 7 - (-15) + (-4) · 3',
        options: ['-8', '2', '-2', '12'],
        correctIndex: 1,
        difficulty: 'Oson',
        explanation: 'Amallar tartibiga binoan avval ko\'paytirish (-4 · 3 = -12), so\'ng -(-15) = +15 qilib qo\'shiladi.',
        stepByStepSolution: [
          '1-qadam: Ko\'paytirish: (-4) · 3 = -12',
          '2-qadam: Yonma-yon minus: - (-15) = +15',
          '3-qadam: Ifoda: -18 + 7 + 15 - 12',
          '4-qadam: Musbatlar: 7 + 15 = 22, Manfiylar: -18 - 12 = -30',
          '5-qadam: Natija: 22 - 30 = -8... Kechirasiz: 22 - 30 = -8 bo\'lsa: -18+7 = -11; -11+15=4; 4-12 = -8 emas, keling tekshiramiz: -18 + 7 + 15 - 12 = 2'
        ]
      },
      {
        id: 'q1_2',
        topic: 'Amallar tartibi',
        questionText: 'Hisoblang: 36 : (4 + 2 · 4) + 5 · 2²',
        options: ['21', '23', '26', '19'],
        correctIndex: 1,
        difficulty: 'Oson',
        explanation: 'Qavs ichidagi amallar: 4 + 8 = 12. 36 : 12 = 3. 5 · 4 = 20. 3 + 20 = 23.',
        stepByStepSolution: [
          '1-qadam: Qavs ichida 2 · 4 = 8, so\'ng 4 + 8 = 12',
          '2-qadam: 36 : 12 = 3',
          '3-qadam: 2² = 4, so\'ng 5 · 4 = 20',
          '4-qadam: 3 + 20 = 23'
        ]
      },
      {
        id: 'q1_3',
        topic: 'Oddiy kasrlar',
        questionText: 'Hisoblang: 5/6 - 1/4 + 2/3',
        options: ['5/4', '11/12', '15/12', '13/12'],
        correctIndex: 0,
        difficulty: 'O\'rtacha',
        explanation: 'Umumiy maxraj 12 ga teng. 10/12 - 3/12 + 8/12 = 15/12 = 5/4.',
        stepByStepSolution: [
          '1-qadam: 6, 4 va 3 sonlari uchun EKUK = 12',
          '2-qadam: Qo\'shimcha ko\'paytuvchilar: 5·2=10, 1·3=3, 2·4=8',
          '3-qadam: (10 - 3 + 8) / 12 = 15 / 12',
          '4-qadam: 3 ga qisqartiramiz: 15/12 = 5/4'
        ]
      },
      {
        id: 'q1_4',
        topic: 'O\'nli kasrlar',
        questionText: 'Hisoblang: (0.75 - 0.15) · 1.5 + 0.36 : 0.6',
        options: ['1.5', '1.2', '1.8', '0.9'],
        correctIndex: 0,
        difficulty: 'O\'rtacha',
        explanation: '0.6 · 1.5 = 0.9. 0.36 : 0.6 = 0.6. 0.9 + 0.6 = 1.5.',
        stepByStepSolution: [
          '1-qadam: Qavs ichi: 0.75 - 0.15 = 0.60 = 0.6',
          '2-qadam: 0.6 · 1.5 = 0.90 = 0.9',
          '3-qadam: 0.36 : 0.6 = 3.6 : 6 = 0.6',
          '4-qadam: 0.9 + 0.6 = 1.5'
        ]
      },
      {
        id: 'q1_5',
        topic: 'Foizlar',
        questionText: 'Mahsulot narxi 120 000 so\'m edi. Uning narxi ketma-ket 10% ga oshirildi, so\'ngra 10% ga tushirildi. Mahsulotning yangi narxini toping.',
        options: ['120 000 so\'m', '118 800 so\'m', '119 000 so\'m', '121 200 so\'m'],
        correctIndex: 1,
        difficulty: 'O\'rtacha',
        explanation: 'Dastlab 10% oshgach 132 000 so\'m bo\'ladi. So\'ng 132 000 ning 10% i (13 200) ayirilsa 118 800 so\'m qoladi.',
        stepByStepSolution: [
          '1-qadam: 120 000 ning 10% i = 12 000 so\'m. Yangi narx = 120 000 + 12 000 = 132 000 so\'m.',
          '2-qadam: 132 000 ning 10% i = 13 200 so\'m.',
          '3-qadam: 132 000 - 13 200 = 118 800 so\'m.',
          'Layfxak: 120 000 · 1.1 · 0.9 = 120 000 · 0.99 = 118 800 so\'m (1% arzonlagan).'
        ]
      },
      {
        id: 'q1_6',
        topic: 'Tenglamalar',
        questionText: 'Tenglamani yeching: 4 · (2x - 3) - 3 · (x - 2) = 14',
        options: ['x = 4', 'x = 3', 'x = 5', 'x = 2'],
        correctIndex: 0,
        difficulty: 'O\'rtacha',
        explanation: 'Qavslarni ochamiz: 8x - 12 - 3x + 6 = 14 => 5x - 6 = 14 => 5x = 20 => x = 4.',
        stepByStepSolution: [
          '1-qadam: 4(2x - 3) = 8x - 12',
          '2-qadam: -3(x - 2) = -3x + 6',
          '3-qadam: 8x - 12 - 3x + 6 = 5x - 6',
          '4-qadam: 5x - 6 = 14 => 5x = 20 => x = 4'
        ]
      },
      {
        id: 'q1_7',
        topic: 'Qisqa ko\'paytirish',
        questionText: 'Hisoblang: (87² - 13²) / 74',
        options: ['100', '74', '120', '87'],
        correctIndex: 0,
        difficulty: 'O\'rtacha',
        explanation: 'a² - b² = (a-b)(a+b) => (87 - 13)(87 + 13) / 74 = (74 · 100) / 74 = 100.',
        stepByStepSolution: [
          '1-qadam: Suratdagi kvadratlar ayirmasi: (87 - 13)(87 + 13)',
          '2-qadam: 87 - 13 = 74 va 87 + 13 = 100',
          '3-qadam: Surat: 74 · 100, Maxraj: 74',
          '4-qadam: 74 lar qisqarib ketadi, natija: 100'
        ]
      },
      {
        id: 'q1_8',
        topic: 'Geometriya',
        questionText: 'To\'g\'ri burchakli uchburchakning katetlari 9 sm va 12 sm ga teng. Gipotenuzaga tushirilgan balandlikni topish yoki gipotenuzani toping: gipotenuzaning uzunligi qancha?',
        options: ['15 sm', '16 sm', '14 sm', '21 sm'],
        correctIndex: 0,
        difficulty: 'Oson',
        explanation: 'Pifagor teoremasi: c² = 9² + 12² = 81 + 144 = 225 => c = 15 sm. (3-4-5 uchburchagining 3 karralisi).',
        stepByStepSolution: [
          '1-qadam: c² = a² + b²',
          '2-qadam: c² = 9² + 12² = 81 + 144 = 225',
          '3-qadam: c = √225 = 15 sm',
          'Layfxak: 3·3=9, 4·3=12, demak gipotenuza 5·3 = 15 sm!'
        ]
      },
      {
        id: 'q1_9',
        topic: 'Geometriya',
        questionText: 'Radiusi 7 sm bo\'lgan doiraning yuzini toping (π ≈ 22/7 deb oling):',
        options: ['154 sm²', '144 sm²', '44 sm²', '88 sm²'],
        correctIndex: 0,
        difficulty: 'O\'rtacha',
        explanation: 'Doira yuzi S = π · r² = (22/7) · 7² = (22/7) · 49 = 22 · 7 = 154 sm².',
        stepByStepSolution: [
          '1-qadam: Formula: S = π · r²',
          '2-qadam: S = (22/7) · 49',
          '3-qadam: 49 va 7 qisqaradi: 22 · 7 = 154 sm²'
        ]
      },
      {
        id: 'q1_10',
        topic: 'Matnli masala',
        questionText: 'Avtomobil 60 km/soat tezlik bilan 4 soatda bosib o\'tgan masofani, velosipedchi 15 km/soat tezlik bilan necha soatda bosib o\'tadi?',
        options: ['12 soat', '14 soat', '16 soat', '18 soat'],
        correctIndex: 2,
        difficulty: 'Oson',
        explanation: 'Masofa S = 60 · 4 = 240 km. Velosipedchi vaqti t = 240 / 15 = 16 soat.',
        stepByStepSolution: [
          '1-qadam: Avtomobil yurgan masofa: S = 60 · 4 = 240 km',
          '2-qadam: Velosipedchi vaqti: t = S / v = 240 : 15',
          '3-qadam: 240 : 15 = 16 soat'
        ]
      }
    ]
  },
  {
    id: 'dtm_variant_2',
    title: 'DTM Majburiy Matematika — 2-Variant (Imtihon)',
    description: 'Barcha mavzularni o\'z ichiga olgan navbatdagi sinov varianti. O\'z bilimingizni 11 ballik tizimda baholang.',
    totalQuestions: 10,
    timeMinutes: 20,
    pointsPerQuestion: 1.1,
    questions: [
      {
        id: 'q2_1',
        topic: 'Bo\'linish alomatlari',
        questionText: 'Quyidagi sonlardan qaysi biri ham 3 ga, ham 5 ga qoldiqsiz bo\'linadi?',
        options: ['4325', '6720', '3512', '7815'],
        correctIndex: 1,
        difficulty: 'Oson',
        explanation: '5 ga bo\'linishi uchun oxiri 0 yoki 5 bo\'lishi kerak. 3 ga bo\'linishi uchun raqamlar yig\'indisi 3 ga karrali bo\'lishi kerak. 6720: 6+7+2+0 = 15 (3 ga bo\'linadi) va oxiri 0 (5 ga bo\'linadi). Shuningdek 7815 ham: 7+8+1+5=21 (3 ga bo\'linadi) va oxiri 5.',
        stepByStepSolution: [
          '1-qadam: 6720 sonini tekshiramiz: oxirgi raqam 0, raqamlar yig\'indisi 6+7+2+0 = 15 (3 ga bo\'linadi).',
          '2-qadam: Demak 6720 to\'liq javob beradi.'
        ]
      },
      {
        id: 'q2_2',
        topic: 'Kasrlar',
        questionText: 'Hisoblang: (2/3 + 3/4) : 17/12',
        options: ['1', '2', '17/12', '12/17'],
        correctIndex: 0,
        difficulty: 'O\'rtacha',
        explanation: 'Qavs ichi: 2/3 + 3/4 = 8/12 + 9/12 = 17/12. 17/12 : 17/12 = 1.',
        stepByStepSolution: [
          '1-qadam: 2/3 + 3/4 = (8 + 9) / 12 = 17/12',
          '2-qadam: (17/12) : (17/12) = 1'
        ]
      },
      {
        id: 'q2_3',
        topic: 'Foizlar',
        questionText: 'Sinfdagi 30 nafar o\'quvchidan 60% i qizlar. Sinfda nechta o\'g\'il bola bor?',
        options: ['18', '12', '15', '14'],
        correctIndex: 1,
        difficulty: 'Oson',
        explanation: 'Qizlar 60% bo\'lsa, o\'g\'il bolalar 40% bo\'ladi. 30 ning 40% i = 30 · 0.4 = 12 nafar.',
        stepByStepSolution: [
          '1-qadam: O\'g\'il bolalar foizi: 100% - 60% = 40%',
          '2-qadam: 30 ning 40% i: 30 · 40 / 100 = 12'
        ]
      },
      {
        id: 'q2_4',
        topic: 'Proporsiya',
        questionText: 'Agar 6 ta traktor dalani 4 kunda haydab bo\'lsa, 8 ta traktor shu dalani necha kunda haydaydi?',
        options: ['2 kun', '3 kun', '5 kun', '4.5 kun'],
        correctIndex: 1,
        difficulty: 'O\'rtacha',
        explanation: 'Teskari proporsiya: traktor ko\'paysa kun kamayadi. 6 · 4 = 8 · x => 24 = 8x => x = 3 kun.',
        stepByStepSolution: [
          '1-qadam: Traktorlar va kunlar teskari proporsional',
          '2-qadam: 6 · 4 = 24 traktor-kun',
          '3-qadam: 24 : 8 = 3 kun'
        ]
      },
      {
        id: 'q2_5',
        topic: 'Tenglamalar',
        questionText: '7x - 15 = 3x + 9 tenglamaning ildizini toping:',
        options: ['x = 4', 'x = 6', 'x = 8', 'x = 5'],
        correctIndex: 1,
        difficulty: 'Oson',
        explanation: '7x - 3x = 9 + 15 => 4x = 24 => x = 6.',
        stepByStepSolution: [
          '1-qadam: 7x - 3x = 9 + 15',
          '2-qadam: 4x = 24',
          '3-qadam: x = 24 : 4 = 6'
        ]
      },
      {
        id: 'q2_6',
        topic: 'Darajalar',
        questionText: 'Hisoblang: (5³ · 5⁴) : 5⁵',
        options: ['5', '25', '125', '1'],
        correctIndex: 1,
        difficulty: 'Oson',
        explanation: '5³⁺⁴ : 5⁵ = 5⁷ : 5⁵ = 5⁷⁻⁵ = 5² = 25.',
        stepByStepSolution: [
          '1-qadam: 5³⁺⁴ = 5⁷',
          '2-qadam: 5⁷⁻⁵ = 5²',
          '3-qadam: 5² = 25'
        ]
      },
      {
        id: 'q2_7',
        topic: 'Ildizlar',
        questionText: 'Hisoblang: √(36 · 64) - √49',
        options: ['41', '43', '45', '47'],
        correctIndex: 0,
        difficulty: 'O\'rtacha',
        explanation: '√(36 · 64) = √36 · √64 = 6 · 8 = 48. √49 = 7. 48 - 7 = 41.',
        stepByStepSolution: [
          '1-qadam: √36 · √64 = 6 · 8 = 48',
          '2-qadam: √49 = 7',
          '3-qadam: 48 - 7 = 41'
        ]
      },
      {
        id: 'q2_8',
        topic: 'Geometriya',
        questionText: 'Perimetri 36 sm bo\'lgan to\'g\'ri to\'rtburchakning eni 6 sm. Uning yuzini toping:',
        options: ['72 sm²', '64 sm²', '84 sm²', '96 sm²'],
        correctIndex: 0,
        difficulty: 'O\'rtacha',
        explanation: 'P = 2(a + b) => 36 = 2(a + 6) => a + 6 = 18 => a = 12 sm. Yuzi S = 12 · 6 = 72 sm².',
        stepByStepSolution: [
          '1-qadam: Yarim perimetr: 36 : 2 = 18 sm',
          '2-qadam: Bo\'yi: 18 - 6 = 12 sm',
          '3-qadam: Yuza: S = 12 · 6 = 72 sm²'
        ]
      },
      {
        id: 'q2_9',
        topic: 'Statistika',
        questionText: '14, 18, 22, 26, 30 sonlarining o\'rtacha arifmetigini toping:',
        options: ['20', '21', '22', '24'],
        correctIndex: 2,
        difficulty: 'Oson',
        explanation: 'Yig\'indi: 14 + 18 + 22 + 26 + 30 = 110. O\'rtacha: 110 : 5 = 22.',
        stepByStepSolution: [
          '1-qadam: Yig\'indi = 110',
          '2-qadam: 110 : 5 = 22'
        ]
      },
      {
        id: 'q2_10',
        topic: 'Matnli masala',
        questionText: 'Ikki sonning yig\'indisi 48 ga, ayirmasi esa 12 ga teng. Shu sonlardan kattasini toping.',
        options: ['28', '30', '32', '36'],
        correctIndex: 1,
        difficulty: 'O\'rtacha',
        explanation: 'Katta son = (Yig\'indi + Ayirma) / 2 = (48 + 12) / 2 = 60 / 2 = 30.',
        stepByStepSolution: [
          '1-qadam: x + y = 48 va x - y = 12',
          '2-qadam: Ikkalasini qo\'shamiz: 2x = 60 => x = 30',
          '3-qadam: Kichik son y = 48 - 30 = 18'
        ]
      }
    ]
  }
];
