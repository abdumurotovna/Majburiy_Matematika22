import { Module } from '../types/math';

export const CURRICULUM_MODULES: Module[] = [
  {
    id: 'm1_arithmetic',
    number: 1,
    title: 'Arifmetika va Butun sonlar',
    description: '0 dan boshlaymiz: manfiy sonlar bilan amallar, qavslar va amallar tartibi, bo\'linish alomatlari.',
    icon: 'Hash',
    badge: '0-daraja Asosi',
    lessons: [
      {
        id: 'l1_1_negative_numbers',
        moduleId: 'm1_arithmetic',
        title: 'Manfiy va Musbat sonlar: Qo\'shish va Ayirish',
        order: 1,
        durationMinutes: 10,
        summary: 'Minus va plyus ishoralari chalkashmasligi uchun eng oson hayotiy usul: Qarz va Boylik qoidasi.',
        theory: {
          intro: 'Matematikada ko\'p o\'quvchilar aynan manfiy (-) sonlar bilan amallarda xato qilishadi. Buni oddiy hamyon qoidasi bilan tushunish mumkin: Musbat (+) son — bu sizning cho\'ntagingizdagi pul, Manfiy (-) son — bu sizning qarzingiz!',
          rules: [
            {
              name: 'Qoida 1: Bir xil ishorali sonlar qo\'shiladi',
              rule: 'Ikkala son ham musbat bo\'lsa yoki ikkala son ham manfiy bo\'lsa, sonlar qo\'shiladi va umumiy ishora saqlanadi.',
              note: 'Masalan: (-4) + (-6) = -10 (4 so\'m qarzga yana 6 so\'m qarz qo\'shilsa, jami 10 so\'m qarz bo\'ladi).'
            },
            {
              name: 'Qoida 2: Har xil ishorali sonlar ayiriladi',
              rule: 'Katta moduldan kichigi ayiriladi va kattasining ishorasi qo\'yiladi.',
              note: 'Masalan: (-12) + 7 = -5 (12 qarz bor edi, 7 berdingiz, yana 5 qarz qoldi).'
            },
            {
              name: 'Qoida 3: Ikkita minus yonma-yon kelsa plyus bo\'ladi',
              rule: '- (-a) = + a. Qarzdan qutulish — bu boyish demakdir!',
              note: 'Masalan: 8 - (-5) = 8 + 5 = 13.'
            }
          ],
          breakdowns: [
            {
              title: 'Misol 1: Chalkash ishoralarni yechish',
              problem: '-15 + 8 - (-12) - 6 ifodani hisoblang.',
              steps: [
                '1-qadam: Yonma-yon turgan minuslarni plyusga aylantiramiz: -15 + 8 + 12 - 6',
                '2-qadam: Musbatlarni alohida, manfiylarni alohida guruhlaymiz: (8 + 12) = 20, (-15 - 6) = -21',
                '3-qadam: Oxirgi ayirish: 20 - 21 = -1'
              ],
              answer: '-1',
              lifehack: 'Har doim oldin musbatlarni birga, manfiylarni birga qo\'shib oling!'
            }
          ],
          lifehack: 'Ko\'paytirish va bo\'lishda: Minusga minus — Plyus beradi! Toq sondagi minuslar esa yakunda MINUS beradi.',
          commonMistake: 'Ko\'p uchraydigan xato: -3² bilan (-3)² ni bir xil deb o\'ylash. Aslida: -3² = -9, lekin (-3)² = 9!'
        },
        practice: [
          {
            id: 'p1_1_1',
            question: 'Hisoblang: -14 + (-9) - (-18) = ?',
            options: ['-5', '-41', '13', '-13'],
            correctIndex: 0,
            hint: 'Avval - (-18) ni + 18 ga aylantiring.',
            explanation: '-14 - 9 + 18 = -23 + 18 = -5.',
            steps: [
              { stepNumber: 1, explanation: 'Minuslarni ochamiz', expression: '-14 - 9 + 18' },
              { stepNumber: 2, explanation: 'Manfiylarni qo\'shamiz', expression: '-23 + 18' },
              { stepNumber: 3, explanation: 'Yakuniy hisob', expression: '-5' }
            ]
          },
          {
            id: 'p1_1_2',
            question: 'Hisoblang: (-4) · (-3) · (-2) = ?',
            options: ['24', '-24', '12', '-12'],
            correctIndex: 1,
            hint: 'Toq sondagi (3 ta) manfiy sonlar ko\'paytmasi doim manfiy bo\'ladi.',
            explanation: '(-4) · (-3) = +12. Keyin 12 · (-2) = -24.',
            steps: [
              { stepNumber: 1, explanation: 'Birinchi juftlik', expression: '(-4) · (-3) = 12' },
              { stepNumber: 2, explanation: 'Keyingi ko\'paytirish', expression: '12 · (-2) = -24' }
            ]
          }
        ]
      },
      {
        id: 'l1_2_order_of_operations',
        moduleId: 'm1_arithmetic',
        title: 'Amallar ketma-ketligi va Qavslar',
        order: 2,
        durationMinutes: 12,
        summary: 'Qavs, daraja, ko\'paytirish/bo\'lish, qo\'shish/ayirish tartibini buzmasdan yechish.',
        theory: {
          intro: 'Matematikada hamma narsa qat\'iy tartibga bo\'ysunadi. Agar tartib buzilsa, butunlay boshqa javob chiqadi. Bu DTM majburiy testining eng klassik tuzog\'i!',
          rules: [
            {
              name: '1-o\'rin: Qavs ichi',
              rule: 'Eng ichki qavslar birinchi bo\'lib hisoblanadi.'
            },
            {
              name: '2-o\'rin: Darajaga ko\'tarish va Ildiz',
              rule: 'Qavslardan keyin darajalar bajariladi.'
            },
            {
              name: '3-o\'rin: Ko\'paytirish va Bo\'lish',
              rule: 'Chapdan o\'ngga qarab teng huquqli tartibda bajariladi.'
            },
            {
              name: '4-o\'rin: Qo\'shish va Ayirish',
              rule: 'Eng oxirida bajariladigan amallardir.'
            }
          ],
          breakdowns: [
            {
              title: 'DTM namunasi',
              problem: '18 - 3 · (4 + 2) + 20 : 4 = ?',
              steps: [
                '1-qadam: Qavs ichi: 4 + 2 = 6',
                '2-qadam: Ko\'paytirish va bo\'lish: 3 · 6 = 18 va 20 : 4 = 5',
                '3-qadam: Ifoda ko\'rinishi: 18 - 18 + 5',
                '4-qadam: Natija: 0 + 5 = 5'
              ],
              answer: '5'
            }
          ],
          lifehack: 'Ko\'paytirish va bo\'lish yonma-yon kelsa, chapdan o\'ngga yuring: 12 : 2 · 3 = 6 · 3 = 18 (12 : 6 = 2 EMAS!).',
          commonMistake: 'O\'quvchilar shoshilib 18 - 3 = 15 deb yozishadi va keyin qavsga ko\'paytirishadi. Ko\'paytirish ayirishdan ustun!'
        },
        practice: [
          {
            id: 'p1_2_1',
            question: 'Hisoblang: 24 : 6 · 2 + (15 - 3 · 4) = ?',
            options: ['11', '5', '8', '15'],
            correctIndex: 0,
            hint: 'Oldin qavs ichidagi 3 · 4 ni hisoblang, so\'ng chapdan 24 : 6 ni.',
            explanation: '24 : 6 · 2 = 4 · 2 = 8. Qavs ichi: 15 - 12 = 3. Yakun: 8 + 3 = 11.',
            steps: [
              { stepNumber: 1, explanation: 'Qavs ichidagi ko\'paytirish', expression: '3 · 4 = 12' },
              { stepNumber: 2, explanation: 'Qavs ichidagi ayirish', expression: '15 - 12 = 3' },
              { stepNumber: 3, explanation: 'Bo\'lish va ko\'paytirish', expression: '24 : 6 · 2 = 4 · 2 = 8' },
              { stepNumber: 4, explanation: 'Qo\'shish', expression: '8 + 3 = 11' }
            ]
          }
        ]
      },
      {
        id: 'l1_3_divisibility_rules',
        moduleId: 'm1_arithmetic',
        title: 'Bo\'linish alomatlari va Qoldiqli bo\'lish',
        order: 3,
        durationMinutes: 10,
        summary: 'Sonni bo\'lmasdan turib qoldiqni yoki bo\'linishini bir necha soniyada aniqlash usullari.',
        theory: {
          intro: 'DTM imtihonida vaqt juda qadrli. Katta sonlarni ustun shaklida uzoq vaqt bo\'lib o\'tirmaslik uchun bo\'linish alomatlarini bilish kifoya.',
          rules: [
            {
              name: '2 ga bo\'linish',
              rule: 'Oxirgi raqami juft (0, 2, 4, 6, 8) bo\'lgan barcha sonlar 2 ga qoldiqsiz bo\'linadi.'
            },
            {
              name: '3 va 9 ga bo\'linish',
              rule: 'Raqamlar yig\'indisi 3 ga (yoki 9 ga) bo\'linsa, butun son ham bo\'linadi.',
              note: 'Masalan: 7254 -> 7+2+5+4 = 18. 18 ham 3 ga, ham 9 ga bo\'linadi!'
            },
            {
              name: '4 ga bo\'linish',
              rule: 'Oxirgi ikki raqamidan tuzilgan son 4 ga bo\'linsa yoki 00 bilan tugasa.'
            },
            {
              name: '5 ga bo\'linish',
              rule: 'Oxirgi raqami 0 yoki 5 bo\'lsa.'
            }
          ],
          breakdowns: [
            {
              title: 'DTM qoldiqli bo\'lish namunasi',
              problem: 'Noma\'lum sonni 14 ga bo\'lganda bo\'linma 5 ga, qoldiq 8 ga teng bo\'ldi. Noma\'lum sonni toping.',
              steps: [
                'Asosiy formula: Bo\'linuvchi = (Bo\'luvchi · To\'liqsiz bo\'linma) + Qoldiq',
                'a = 14 · 5 + 8',
                '14 · 5 = 70',
                '70 + 8 = 78'
              ],
              answer: '78',
              lifehack: 'Doim yodda tuting: Qoldiq har doim bo\'luvchidan kichik bo\'lishi shart! (q < b)'
            }
          ]
        },
        practice: [
          {
            id: 'p1_3_1',
            question: 'Qaysi son 9 ga qoldiqsiz bo\'linadi?',
            options: ['3451', '5283', '6142', '7105'],
            correctIndex: 1,
            hint: 'Raqamlar yig\'indisini hisoblab ko\'ring.',
            explanation: '5283 sonining raqamlar yig\'indisi: 5 + 2 + 8 + 3 = 18. 18 soni 9 ga qoldiqsiz bo\'linadi.',
            steps: [
              { stepNumber: 1, explanation: 'A varianti: 3+4+5+1 = 13 (bo\'linmaydi)', expression: '13 : 9 qoldiqli' },
              { stepNumber: 2, explanation: 'B varianti: 5+2+8+3 = 18 (18 : 9 = 2)', expression: '18 : 9 = 2 qoldiqsiz' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'm2_fractions',
    number: 2,
    title: 'Oddiy va O\'nli Kasrlar',
    description: 'Kasrlardan qo\'rqishni bas qilamiz! Umumiy maxraj topish, qisqartirish, ko\'paytirish va o\'nli kasrlar.',
    icon: 'PieChart',
    badge: 'DTMda 2-3 savol',
    lessons: [
      {
        id: 'l2_1_fraction_basics',
        moduleId: 'm2_fractions',
        title: 'Oddiy kasrlar va Kasrlarni qisqartirish',
        order: 1,
        durationMinutes: 12,
        summary: 'Kasrning surati va maxraji nima? Pizza bo\'laklari misolida tushunish va eng sodda holga keltirish.',
        theory: {
          intro: 'Kasr a/b — bu bitta butun narsani teng bo\'laklarga bo\'lish demakdir. Maxraj (pastki qism) — narsa nechtaga bo\'linganini, Surat (yuqorigi qism) — undan nechta olinganini bildiradi.',
          rules: [
            {
              name: 'Kasrning asosiy xossasi',
              rule: 'Kasrning surati va maxrajini bir xil noldan farqli songa ko\'paytirsak yoki bo\'lsak, kasr qiymati o\'zgarmaydi.',
              note: 'Masalan: 12/16 kasrni ikkalasini 4 ga bo\'lsak: 3/4 hosil bo\'ladi.'
            },
            {
              name: 'Noto\'g\'ri kasrni aralash songa aylantirish',
              rule: 'Suratni maxrajga bo\'lamiz. Butun qismi oldinga yoziladi, qoldiq esa suratga o\'tadi.',
              note: 'Masalan: 17/5 = 3 butun 2/5 (chunki 17 = 3 · 5 + 2).'
            }
          ],
          breakdowns: [
            {
              title: 'Kasrlarni qisqartirish',
              problem: '48/64 kasrni eng qisqarmas holga keltiring.',
              steps: [
                '1-usul: Ikkalasining eng katta umumiy bo\'luvchisi (EKUB) 16 ga teng.',
                '48 : 16 = 3',
                '64 : 16 = 4',
                'Natija: 3/4'
              ],
              answer: '3/4',
              lifehack: 'Katta bo\'luvchini birdan ko\'ra olmasangiz, avval ikkalasini 2 ga, keyin yana 2 ga bo\'lib ketavering!'
            }
          ]
        },
        practice: [
          {
            id: 'p2_1_1',
            question: '36/48 kasrni qisqartiring:',
            options: ['2/3', '3/4', '4/5', '5/6'],
            correctIndex: 1,
            hint: 'Ikkala son ham 12 ga bo\'linadi.',
            explanation: '36 : 12 = 3, 48 : 12 = 4. Demak, 3/4.',
            steps: [
              { stepNumber: 1, explanation: '36 va 48 ni 12 ga bo\'lamiz', expression: '(36:12) / (48:12) = 3/4' }
            ]
          }
        ]
      },
      {
        id: 'l2_2_add_subtract_fractions',
        moduleId: 'm2_fractions',
        title: 'Kasrlarni qo\'shish va ayirish (Umumiy maxraj)',
        order: 2,
        durationMinutes: 15,
        summary: 'Kelepka (kapalak) usuli orqali umumiy maxrajni 5 soniyada topish va hisoblash.',
        theory: {
          intro: 'Kasrlarni maxrajlari teng bo\'lmasdan turib to\'g\'ridan-to\'g\'ri qo\'shib yoki ayirib bo\'lmaydi. Ularni bir xil maxrajga keltirish kerak.',
          rules: [
            {
              name: 'Maxrajlari bir xil bo\'lsa',
              rule: 'Maxraj o\'zgarmaydi, faqat suratlari qo\'shiladi yoki ayiriladi: a/c + b/c = (a+b)/c.'
            },
            {
              name: 'Kapalak usuli (Butterfly method)',
              rule: 'a/b + c/d = (a · d + b · c) / (b · d). Cross-ko\'paytirish orqali darhol yechiladi!',
              note: 'Masalan: 2/3 + 1/4 = (2 · 4 + 3 · 1) / (3 · 4) = (8 + 3) / 12 = 11/12.'
            }
          ],
          breakdowns: [
            {
              title: 'Amaliy hisoblash',
              problem: '5/6 - 3/8 ayirmani toping.',
              steps: [
                '1-qadam: 6 va 8 uchun eng kichik umumiy maxraj = 24.',
                '2-qadam: Qo\'shimcha ko\'paytuvchilar: 24 : 6 = 4, va 24 : 8 = 3.',
                '3-qadam: Suratlarni ko\'paytiramiz: 5 · 4 = 20, 3 · 3 = 9.',
                '4-qadam: Ayiramiz: (20 - 9) / 24 = 11/24.'
              ],
              answer: '11/24'
            }
          ]
        },
        practice: [
          {
            id: 'p2_2_1',
            question: 'Hisoblang: 3/4 + 1/6 = ?',
            options: ['4/10', '11/12', '5/12', '7/12'],
            correctIndex: 1,
            hint: '4 va 6 uchun umumiy maxraj 12.',
            explanation: '3/4 = 9/12, 1/6 = 2/12. 9/12 + 2/12 = 11/12.',
            steps: [
              { stepNumber: 1, explanation: 'Umumiy maxraj 12', expression: '3·3 / 12 + 1·2 / 12' },
              { stepNumber: 2, explanation: 'Qo\'shish', expression: '9/12 + 2/12 = 11/12' }
            ]
          }
        ]
      },
      {
        id: 'l2_3_decimal_fractions',
        moduleId: 'm2_fractions',
        title: 'O\'nli kasrlar va vergul bilan ishlash',
        order: 3,
        durationMinutes: 10,
        summary: 'Vergulni to\'g\'ri surish, ko\'paytirish va bo\'lishda adashmaslik qoidalari.',
        theory: {
          intro: 'O\'nli kasrlar hayotda pul, og\'irlik va o\'lchovlarda har qadamda uchraydi (0.5 kg, 2.75 metr).',
          rules: [
            {
              name: 'Qo\'shish va ayirishda',
              rule: 'Vergul tagiga vergul tushishi shart! Yetmagan joylarga 0 qo\'yib olinadi.'
            },
            {
              name: 'Ko\'paytirishda',
              rule: 'Vergulga e\'tibor bermasdan oddiy sondek ko\'paytiriladi, so\'ng ikkala sondagi verguldan keyingi raqamlar soni yig\'indisi qadar o\'ngdan chapga vergul ajratiladi.'
            },
            {
              name: 'Bo\'lishda',
              rule: 'Bo\'luvchidagi vergul butun bo\'lguncha o\'ngga suriladi, xuddi shuncha xona bo\'linuvchida ham suriladi.'
            }
          ],
          breakdowns: [
            {
              title: 'DTM amaliy misoli',
              problem: '0.4 · 0.05 + 0.18 : 0.6 = ?',
              steps: [
                '1-qadam: 0.4 · 0.05. 4 · 5 = 20. Jami 1 + 2 = 3 ta xona ajratamiz: 0.020 = 0.02',
                '2-qadam: 0.18 : 0.6. Vergullarni 1 xona o\'ngga suramiz: 1.8 : 6 = 0.3',
                '3-qadam: Qo\'shamiz: 0.02 + 0.30 = 0.32'
              ],
              answer: '0.32'
            }
          ]
        },
        practice: [
          {
            id: 'p2_3_1',
            question: 'Hisoblang: 1.2 · 0.3 + 0.64 : 0.8 = ?',
            options: ['1.16', '0.44', '1.04', '0.94'],
            correctIndex: 0,
            hint: '1.2 · 0.3 = 0.36 va 0.64 : 0.8 = 6.4 : 8 = 0.8.',
            explanation: '0.36 + 0.80 = 1.16.',
            steps: [
              { stepNumber: 1, explanation: 'Ko\'paytirish', expression: '1.2 · 0.3 = 0.36' },
              { stepNumber: 2, explanation: 'Bo\'lish', expression: '0.64 : 0.8 = 0.8' },
              { stepNumber: 3, explanation: 'Yig\'indi', expression: '0.36 + 0.8 = 1.16' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'm3_percentages',
    number: 3,
    title: 'Foizlar va Proporsiya',
    description: 'Majburiy matematikada har yili kamida 2 ta savol tushadigan oltin mavzu: narxlar, chegirmalar, nisbatlar.',
    icon: 'Percent',
    badge: 'DTM Oltin Mavzusi',
    lessons: [
      {
        id: 'l3_1_percent_concept',
        moduleId: 'm3_percentages',
        title: 'Foiz tushunchasi va Tezkor Layfxaklar',
        order: 1,
        durationMinutes: 12,
        summary: 'Foiz — bu 1/100 qism. Qog\'ozsiz, og\'zaki 10%, 20%, 25%, 50% ni topish usullari.',
        theory: {
          intro: '1% — bu har qanday sonning 100 dan bir bo\'lagi. Agar siz sonning 10% ini topmoqchi bo\'lsangiz, uni shunchaki 10 ga bo\'lasiz (oxirgi nolni o\'chirasiz).',
          rules: [
            {
              name: '50% — bu yarmi',
              rule: 'Sonni 2 ga bo\'lish kifoya (50% of 80 = 40).'
            },
            {
              name: '25% — bu choragi',
              rule: 'Sonni 4 ga bo\'lish kifoya (25% of 80 = 20).'
            },
            {
              name: '10% — bir xona vergul surish',
              rule: 'Sonni 10 ga bo\'lish (10% of 240 = 24).'
            },
            {
              name: 'Asosiy formula: Sonning p foizi',
              rule: 'A = (Son · p) / 100'
            }
          ],
          breakdowns: [
            {
              title: 'Misol: Og\'zaki hisoblash siri',
              problem: '450 sonining 20% ini toping.',
              steps: [
                '1-qadam: 450 ning 10% ini topamiz: 450 : 10 = 45',
                '2-qadam: 20% bu 10% ning 2 barobari: 45 · 2 = 90'
              ],
              answer: '90',
              lifehack: 'Nollarni o\'chirish layfxaki: 450 ning 20% = 45 · 2 = 90 (ikkita nolni o\'chirib ko\'paytiring!)'
            }
          ]
        },
        practice: [
          {
            id: 'p3_1_1',
            question: '600 sonining 35% ini toping:',
            options: ['180', '210', '240', '190'],
            correctIndex: 1,
            hint: 'Ikkala nolni o\'chirib 6 · 35 qiling.',
            explanation: '600 · 35 / 100 = 6 · 35 = 210.',
            steps: [
              { stepNumber: 1, explanation: 'Nollarni qisqartirish', expression: '600 / 100 = 6' },
              { stepNumber: 2, explanation: 'Ko\'paytirish', expression: '6 · 35 = 210' }
            ]
          }
        ]
      },
      {
        id: 'l3_2_price_changes',
        moduleId: 'm3_percentages',
        title: 'Narxning oshishi va kamayishi masalalari',
        order: 2,
        durationMinutes: 14,
        summary: 'Kiyim 20% ga arzonlashib, so\'ng 10% ga qimmatlashsa nima bo\'ladi? DTM dagi eng mashhur tuzoq.',
        theory: {
          intro: 'DTM da har yili shunday savol tushadi: "Tovarning narxi dastlab 20% ga oshirildi, keyin yangi narxi 20% ga tushirildi. Narx qanday o\'zgardi?" Ko\'pchilik "o\'zgarmadi" deb adashadi!',
          rules: [
            {
              name: 'Narx p% ga oshsa',
              rule: 'Yangi narx = Dastlabki narx · (1 + p/100). Masalan, 20% ga oshsa: x · 1.20.'
            },
            {
              name: 'Narx p% ga tushsa',
              rule: 'Yangi narx = Dastlabki narx · (1 - p/100). Masalan, 15% ga arzonlashsa: x · 0.85.'
            }
          ],
          breakdowns: [
            {
              title: 'Klassik DTM masalasi',
              problem: 'Daftar narxi 100 000 so\'m edi. U dastlab 20% ga arzonlashdi, so\'ng yangi narxi 10% ga oshirildi. Daftarning oxirgi narxi necha so\'m?',
              steps: [
                '1-qadam: 20% arzonlashgach: 100 000 ning 20% i = 20 000 so\'m. Yangi narx = 100 000 - 20 000 = 80 000 so\'m.',
                '2-qadam: 80 000 so\'m endi 10% ga oshirildi: 80 000 ning 10% i = 8 000 so\'m.',
                '3-qadam: Yakuniy narx: 80 000 + 8 000 = 88 000 so\'m.'
              ],
              answer: '88 000 so\'m',
              lifehack: 'Tezkor ko\'paytirish: 100 000 · 0.8 · 1.1 = 88 000 so\'m!'
            }
          ]
        },
        practice: [
          {
            id: 'p3_2_1',
            question: 'Ko\'ylak narxi 200 000 so\'m edi. U 15% chegirma bilan sotilsa, xaridor necha so\'m to\'laydi?',
            options: ['170 000', '185 000', '165 000', '175 000'],
            correctIndex: 0,
            hint: '200 000 ning 15% ini toping va ayiring.',
            explanation: 'Chegirma = 200 000 · 15 / 100 = 30 000 so\'m. 200 000 - 30 000 = 170 000 so\'m.',
            steps: [
              { stepNumber: 1, explanation: 'Chegirma summasi', expression: '200 000 · 0.15 = 30 000' },
              { stepNumber: 2, explanation: 'To\'lanadigan summa', expression: '200 000 - 30 000 = 170 000' }
            ]
          }
        ]
      },
      {
        id: 'l3_3_proportions',
        moduleId: 'm3_percentages',
        title: 'Proporsiya: To\'g\'ri va Teskari proporsiya',
        order: 3,
        durationMinutes: 12,
        summary: 'Krest-nakrest (xachsimon) ko\'paytirish va ishchi/kun teskari proporsiyasini oson ajratish.',
        theory: {
          intro: 'a/b = c/d tenglik proporsiya deyiladi. Proporsiyaning asosiy xossasi: chetki hadlar ko\'paytmasi o\'rta hadlar ko\'paytmasiga teng: a · d = b · c.',
          rules: [
            {
              name: 'To\'g\'ri proporsiya',
              rule: 'Bitta kattalik oshsa, ikkinchisi ham xuddi shuncha oshadi (masalan: qancha ko\'p olma olsangiz, shuncha ko\'p pul to\'laysiz). Cross ko\'paytiriladi.'
            },
            {
              name: 'Teskari proporsiya',
              rule: 'Bitta kattalik oshsa, ikkinchisi kamayadi (masalan: ishchilar soni ko\'paysa, ishni bitirish kunlari kamayadi!). To\'g\'ridan-to\'g\'ri yonma-yon ko\'paytiriladi.'
            }
          ],
          breakdowns: [
            {
              title: 'Teskari proporsiya misoli',
              problem: '4 ta ishchi bir ishni 6 kunda tugatadi. Shu ishni 3 kunda tugatish uchun nechta ishchi kerak?',
              steps: [
                '1-qadam: Kun kamayishi uchun ishchi ko\'payishi shart (Teskari proporsiya!)',
                '2-qadam: Yonma-yon ko\'paytiramiz: 4 · 6 = x · 3',
                '3-qadam: 24 = 3x => x = 8 ta ishchi.'
              ],
              answer: '8 ta ishchi'
            }
          ]
        },
        practice: [
          {
            id: 'p3_3_1',
            question: '5 kg shakar 45 000 so\'m tursa, 8 kg shakar necha so\'m turadi?',
            options: ['68 000', '72 000', '75 000', '80 000'],
            correctIndex: 1,
            hint: 'Avval 1 kg shakar narxini toping (45 000 : 5).',
            explanation: '1 kg shakar = 45 000 : 5 = 9 000 so\'m. 8 kg = 8 · 9 000 = 72 000 so\'m.',
            steps: [
              { stepNumber: 1, explanation: '1 kg narxi', expression: '45 000 : 5 = 9 000' },
              { stepNumber: 2, explanation: '8 kg narxi', expression: '8 · 9 000 = 72 000' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'm4_equations',
    number: 4,
    title: 'Tenglamalar va Harfli ifodalar',
    description: 'Chiziqli tenglamalar, x ni yolg\'iz qoldirish siri, qisqa ko\'paytirish formulalari.',
    icon: 'Variable',
    badge: 'Algebra Asosi',
    lessons: [
      {
        id: 'l4_1_linear_equations',
        moduleId: 'm4_equations',
        title: 'Chiziqli tenglamalar: x ni yolg\'iz qoldirish',
        order: 1,
        durationMinutes: 12,
        summary: 'Tenglamaning oltin qoidasi: Tenglik belgisidan narigi tomonga o\'tganda ishora teskarisiga o\'zgaradi (+ minus bo\'ladi, · bo\'lish bo\'ladi).',
        theory: {
          intro: 'Tenglama — bu tarozi palangasiga o\'xshaydi. Bir tomondan sonni olib narigi tomonga o\'tkazsangiz, uning ishorasi qarama-qarshisiga aylanadi.',
          rules: [
            {
              name: 'Qoida 1: Noma\'lumlar bir tomonga, sonlar ikkinchi tomonga',
              rule: 'Barcha x qatnashgan hadlarni chap tomonga, sof sonlarni o\'ng tomonga to\'playmiz.'
            },
            {
              name: 'Qoida 2: Ko\'paytuvchini o\'tkazish',
              rule: 'Agar ax = b bo\'lsa, x = b / a bo\'ladi.'
            }
          ],
          breakdowns: [
            {
              title: 'Tenglamani yechish',
              problem: '5x - 7 = 2x + 11 tenglamani yeching.',
              steps: [
                '1-qadam: 2x ni chapga (-2x qilib), -7 ni o\'ngga (+7 qilib) o\'tkazamiz: 5x - 2x = 11 + 7',
                '2-qadam: O\'xshash hadlarni ixchamlaymiz: 3x = 18',
                '3-qadam: x ni topamiz: x = 18 : 3 = 6'
              ],
              answer: 'x = 6'
            }
          ]
        },
        practice: [
          {
            id: 'p4_1_1',
            question: '3x + 8 = 29 tenglamaning ildizini toping:',
            options: ['5', '6', '7', '8'],
            correctIndex: 2,
            hint: '8 ni o\'ng tomonga ayirish qilib o\'tkazing.',
            explanation: '3x = 29 - 8 => 3x = 21 => x = 7.',
            steps: [
              { stepNumber: 1, explanation: '8 ni o\'tkazish', expression: '3x = 29 - 8 = 21' },
              { stepNumber: 2, explanation: '3 ga bo\'lish', expression: 'x = 21 : 3 = 7' }
            ]
          }
        ]
      },
      {
        id: 'l4_2_multiplication_formulas',
        moduleId: 'm4_equations',
        title: 'Qisqa ko\'paytirish formulalari',
        order: 2,
        durationMinutes: 15,
        summary: 'Eng mashhur 3 ta formula: (a+b)², (a-b)², va a² - b² ni hisoblash va ko\'paytuvchilarga ajratish.',
        theory: {
          intro: 'Qisqa ko\'paytirish formulalari hisob-kitoblarni 10 barobargacha tezlashtiradi va qisqartirish imkonini beradi.',
          rules: [
            {
              name: 'Kvadratlar ayirmasi (Eng ko\'p tushadigani!)',
              rule: 'a² - b² = (a - b)(a + b)',
              note: 'Masalan: 53² - 47² = (53 - 47)(53 + 47) = 6 · 100 = 600!'
            },
            {
              name: 'Yig\'indining kvadrati',
              rule: '(a + b)² = a² + 2ab + b²'
            },
            {
              name: 'Ayirmaning kvadrati',
              rule: '(a - b)² = a² - 2ab + b²'
            }
          ],
          breakdowns: [
            {
              title: 'DTM qisqartirish namunasi',
              problem: '(x² - 9) / (x + 3) ifodani soddalashtiring.',
              steps: [
                '1-qadam: Suratdagi 9 ni 3² deb olamiz: x² - 3²',
                '2-qadam: Formulani qo\'llaymiz: (x - 3)(x + 3)',
                '3-qadam: Maxrajdagi (x + 3) bilan qisqartiramiz: x - 3 qoladi.'
              ],
              answer: 'x - 3'
            }
          ]
        },
        practice: [
          {
            id: 'p4_2_1',
            question: 'Hisoblang: 65² - 35² = ?',
            options: ['3000', '2500', '3500', '2800'],
            correctIndex: 0,
            hint: 'a² - b² = (a - b)(a + b) formulasidan foydalaning.',
            explanation: '(65 - 35)(65 + 35) = 30 · 100 = 3000.',
            steps: [
              { stepNumber: 1, explanation: 'Ayirma va yig\'indi', expression: '(65 - 35) · (65 + 35)' },
              { stepNumber: 2, explanation: 'Ko\'paytirish', expression: '30 · 100 = 3000' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'm5_powers_roots',
    number: 5,
    title: 'Darajalar va Kvadrat ildizlar',
    description: 'Daraja xossalari, ko\'paytirish va bo\'lishda darajalar bilan nima sodir bo\'ladi, arifmetik kvadrat ildiz.',
    icon: 'Zap',
    badge: 'Formula Blok',
    lessons: [
      {
        id: 'l5_1_powers',
        moduleId: 'm5_powers_roots',
        title: 'Daraja xossalari va hisoblash',
        order: 1,
        durationMinutes: 10,
        summary: 'Asoslari bir xil bo\'lsa darajalar qo\'shiladi, bo\'linganda ayiriladi, darajaning darajasi ko\'paytiriladi.',
        theory: {
          intro: 'aⁿ ifoda "a sonini o\'ziga o\'zini n marta ko\'paytirish" demakdir. Masalan, 2³ = 2 · 2 · 2 = 8.',
          rules: [
            {
              name: 'Ko\'paytirish xossasi',
              rule: 'aⁿ · aᵐ = aⁿ⁺ᵐ (asos bir xil bo\'lsa daraja ko\'rsatkichlari qo\'shiladi).'
            },
            {
              name: 'Bo\'lish xossasi',
              rule: 'aⁿ : aᵐ = aⁿ⁻ᵐ (darajalar ayiriladi).'
            },
            {
              name: 'Nolinchi daraja',
              rule: 'Har qanday noldan farqli sonning 0-darajasi 1 ga teng: a⁰ = 1.'
            }
          ],
          breakdowns: [
            {
              title: 'Misol',
              problem: '(2⁴ · 2⁵) : 2⁶ = ?',
              steps: [
                '1-qadam: Ko\'paytirishda darajalarni qo\'shamiz: 2⁴⁺⁵ = 2⁹',
                '2-qadam: Bo\'lishda darajani ayiramiz: 2⁹⁻⁶ = 2³',
                '3-qadam: 2³ = 2 · 2 · 2 = 8'
              ],
              answer: '8'
            }
          ]
        },
        practice: [
          {
            id: 'p5_1_1',
            question: 'Hisoblang: 3⁵ : 3² = ?',
            options: ['9', '27', '81', '18'],
            correctIndex: 1,
            hint: 'Darajalarni ayiring: 5 - 2 = 3. So\'ng 3³ ni hisoblang.',
            explanation: '3⁵⁻² = 3³ = 3 · 3 · 3 = 27.',
            steps: [
              { stepNumber: 1, explanation: 'Darajalarni ayirish', expression: '3⁵⁻² = 3³' },
              { stepNumber: 2, explanation: 'Darajani hisoblash', expression: '3 · 3 · 3 = 27' }
            ]
          }
        ]
      },
      {
        id: 'l5_2_square_roots',
        moduleId: 'm5_powers_roots',
        title: 'Arifmetik kvadrat ildiz',
        order: 2,
        durationMinutes: 12,
        summary: 'Ildiz — darajaning teskarisi. Qaysi sonning kvadrati ildiz ostidagi songa teng?',
        theory: {
          intro: '√a — bu kvadrati a ga teng bo\'lgan nomanfiy son. Masalan, √49 = 7, chunki 7² = 49.',
          rules: [
            {
              name: 'Ildizlar ko\'paytmasi',
              rule: '√a · √b = √(a · b)'
            },
            {
              name: 'Ildiz ostidan son chiqarish',
              rule: 'Sonni bittasi aniq kvadrat bo\'lgan ko\'paytuvchilarga ajratamiz: √50 = √(25 · 2) = 5√2.'
            }
          ],
          breakdowns: [
            {
              title: 'Misol',
              problem: '√48 - √12 ifodani soddalashtiring.',
              steps: [
                '1-qadam: 48 = 16 · 3, demak √48 = 4√3',
                '2-qadam: 12 = 4 · 3, demak √12 = 2√3',
                '3-qadam: Ayiramiz: 4√3 - 2√3 = 2√3'
              ],
              answer: '2√3'
            }
          ]
        },
        practice: [
          {
            id: 'p5_2_1',
            question: '√144 + √81 - √25 ni hisoblang:',
            options: ['14', '16', '18', '20'],
            correctIndex: 1,
            hint: '144 = 12², 81 = 9², 25 = 5².',
            explanation: '12 + 9 - 5 = 21 - 5 = 16.',
            steps: [
              { stepNumber: 1, explanation: 'Ildizlarni chiqaramiz', expression: '12 + 9 - 5' },
              { stepNumber: 2, explanation: 'Yig\'indi va ayirma', expression: '21 - 5 = 16' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'm6_geometry',
    number: 6,
    title: 'Sodda Geometriya va O\'lchovlar',
    description: 'To\'g\'ri to\'rtburchak, uchburchak, Pifagor teoremasi, aylana yuzi va perimetri.',
    icon: 'Shapes',
    badge: 'DTM 2 savol',
    lessons: [
      {
        id: 'l6_1_rectangles',
        moduleId: 'm6_geometry',
        title: 'To\'g\'ri to\'rtburchak va Kvadrat: Yuza va Perimetr',
        order: 1,
        durationMinutes: 12,
        summary: 'Perimetr — barcha tomonlar yig\'indisi (chegarasi). Yuza — ichki sathi (katakchalar soni).',
        theory: {
          intro: 'Geometriyada perimetr bilan yuzani chalkashtirmaslik juda muhim. Hovli atrofiga devor qurish — bu perimetr, xonaga gilam solish — bu yuza!',
          rules: [
            {
              name: 'To\'g\'ri to\'rtburchak',
              rule: 'Perimetri: P = 2 · (a + b). Yuzi: S = a · b.'
            },
            {
              name: 'Kvadrat (barcha tomonlari a)',
              rule: 'Perimetri: P = 4a. Yuzi: S = a².'
            }
          ],
          breakdowns: [
            {
              title: 'Misol',
              problem: 'To\'g\'ri to\'rtburchakning bo\'yi 12 sm, eni esa undan 4 sm qisqa. Uning yuzi va perimetrini toping.',
              steps: [
                '1-qadam: Eni = 12 - 4 = 8 sm.',
                '2-qadam: Perimetri P = 2 · (12 + 8) = 2 · 20 = 40 sm.',
                '3-qadam: Yuzi S = 12 · 8 = 96 sm².'
              ],
              answer: 'P = 40 sm, S = 96 sm²'
            }
          ]
        },
        practice: [
          {
            id: 'p6_1_1',
            question: 'Yuzi 64 sm² bo\'lgan kvadratning perimetrini toping:',
            options: ['16 sm', '32 sm', '24 sm', '28 sm'],
            correctIndex: 1,
            hint: 'Kvadrat yuzi S = a². Demak, a = √64 = 8 sm. Perimetr esa 4a.',
            explanation: 'Tomoni a = 8 sm. P = 4 · 8 = 32 sm.',
            steps: [
              { stepNumber: 1, explanation: 'Tomonni topish', expression: 'a = √64 = 8 sm' },
              { stepNumber: 2, explanation: 'Perimetrni hisoblash', expression: 'P = 4 · 8 = 32 sm' }
            ]
          }
        ]
      },
      {
        id: 'l6_2_triangles_pythagoras',
        moduleId: 'm6_geometry',
        title: 'Uchburchak yuzi va Pifagor teoremasi',
        order: 2,
        durationMinutes: 14,
        summary: 'a² + b² = c² qoidasi va 3-4-5 "Misr uchburchagi" orqali hisoblashni lahzada bajarish.',
        theory: {
          intro: 'To\'g\'ri burchakli uchburchakda gipotenuzaning kvadrati katetlar kvadratlari yig\'indisiga teng.',
          rules: [
            {
              name: 'Pifagor teoremasi',
              rule: 'c² = a² + b² (c — to\'g\'ri burchak qarshisidagi eng uzun tomon, gipotenuza).'
            },
            {
              name: 'Uchburchak yuzi',
              rule: 'S = (asos · balandlik) / 2 = (a · h) / 2.'
            },
            {
              name: 'To\'g\'ri burchakli uchburchak yuzi',
              rule: 'Katetlar ko\'paytmasining yarmi: S = (a · b) / 2.'
            }
          ],
          breakdowns: [
            {
              title: 'Misr uchburchagi layfxaki',
              problem: 'To\'g\'ri burchakli uchburchak katetlari 6 sm va 8 sm bo\'lsa, gipotenuzani toping.',
              steps: [
                '1-qadam: Pifagor formulasi: c² = 6² + 8² = 36 + 64 = 100',
                '2-qadam: c = √100 = 10 sm.',
                'Layfxak: 3-4-5 uchburchagining 2 barobari (3·2=6, 4·2=8, 5·2=10)!'
              ],
              answer: '10 sm'
            }
          ]
        },
        practice: [
          {
            id: 'p6_2_1',
            question: 'Katetlari 5 sm va 12 sm bo\'lgan to\'g\'ri burchakli uchburchakning yuzini toping:',
            options: ['60 sm²', '30 sm²', '26 sm²', '17 sm²'],
            correctIndex: 1,
            hint: 'To\'g\'ri burchakli uchburchak yuzi: S = (a · b) / 2.',
            explanation: 'S = (5 · 12) / 2 = 60 / 2 = 30 sm².',
            steps: [
              { stepNumber: 1, explanation: 'Katetlarni ko\'paytirish', expression: '5 · 12 = 60' },
              { stepNumber: 2, explanation: '2 ga bo\'lish', expression: '60 / 2 = 30 sm²' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'm7_word_problems',
    number: 7,
    title: 'Matnli Masalalar va Statistika',
    description: 'Harakat masalalari (S = v · t), o\'rtacha arifmetik qiymat, diagrammalar va jadvallar tahlili.',
    icon: 'TrendingUp',
    badge: 'DTM Hayotiy Savollar',
    lessons: [
      {
        id: 'l7_1_speed_distance_time',
        moduleId: 'm7_word_problems',
        title: 'Harakat masalalari: Tezlik, Masofa, Vaqt',
        order: 1,
        durationMinutes: 12,
        summary: 'S = v · t sehrli uchburchagi: qarama-qarshi harakatda tezliklar qo\'shiladi, quvib yetishda ayiriladi.',
        theory: {
          intro: 'Harakat masalalarida barcha o\'lchov birliklari bir xil bo\'lishi shart (km va soat, yoki metr va sekund).',
          rules: [
            {
              name: 'Asosiy formulalar',
              rule: 'Masofa S = v · t; Tezlik v = S / t; Vaqt t = S / v.'
            },
            {
              name: 'Qarama-qarshi yo\'nalishda',
              rule: 'Yaqinlashish tezligi v = v₁ + v₂.'
            },
            {
              name: 'Bir xil yo\'nalishda (quvishda)',
              rule: 'Yaqinlashish tezligi v = v₁ - v₂.'
            }
          ],
          breakdowns: [
            {
              title: 'Misol',
              problem: 'Ikki shahar orasidagi masofa 360 km. Bir vaqtda bir-biriga qarab ikki avtomobil yo\'lga chiqdi. Birining tezligi 70 km/soat, ikkinchisiniki 50 km/soat. Ular necha soatdan keyin uchrashadi?',
              steps: [
                '1-qadam: Bir-biriga qarab harakatlanayotgani uchun tezliklar qo\'shiladi: 70 + 50 = 120 km/soat',
                '2-qadam: Vaqtni topish uchun masofani tezlikka bo\'lamiz: t = 360 / 120 = 3 soat'
              ],
              answer: '3 soatdan keyin'
            }
          ]
        },
        practice: [
          {
            id: 'p7_1_1',
            question: 'Poyezd 240 km masofani 80 km/soat tezlik bilan bosib o\'tishi uchun necha soat kerak?',
            options: ['2 soat', '3 soat', '4 soat', '2.5 soat'],
            correctIndex: 1,
            hint: 't = S / v formulasi bo\'yicha 240 : 80 qiling.',
            explanation: 't = 240 / 80 = 3 soat.',
            steps: [
              { stepNumber: 1, explanation: 'Vaqtni topish', expression: 't = 240 : 80 = 3 soat' }
            ]
          }
        ]
      },
      {
        id: 'l7_2_average_statistics',
        moduleId: 'm7_word_problems',
        title: 'O\'rtacha arifmetik qiymat va Jadvallar tahlili',
        order: 2,
        durationMinutes: 10,
        summary: 'Barcha sonlarni qo\'shib, ularning soniga bo\'lish qoidasi va DTMdagi diagramma savollari.',
        theory: {
          intro: 'O\'rtacha arifmetik qiymat hayotda o\'quvchining choraklik bahosini, kunlik o\'rtacha haroratni yoki korxona oylik daromadini hisoblashda ishlatiladi.',
          rules: [
            {
              name: 'O\'rtacha arifmetik formula',
              rule: 'O\'rta = (x₁ + x₂ + ... + xₙ) / n (Yig\'indi / Sonlar soni)'
            }
          ],
          breakdowns: [
            {
              title: 'Misol',
              problem: 'O\'quvchi to\'rtta imtihonda 75, 80, 85 va 100 ball to\'pladi. Uning o\'rtacha bali qancha?',
              steps: [
                '1-qadam: Ballar yig\'indisini topamiz: 75 + 80 + 85 + 100 = 340',
                '2-qadam: Imtihonlar soni 4 ta, demak 4 ga bo\'lamiz: 340 : 4 = 85'
              ],
              answer: '85 ball'
            }
          ]
        },
        practice: [
          {
            id: 'p7_2_1',
            question: '12, 18, 24, 30 sonlarining o\'rtacha arifmetigini toping:',
            options: ['20', '21', '22', '24'],
            correctIndex: 1,
            hint: 'Sonlarni qo\'shib, 4 ga bo\'ling.',
            explanation: '(12 + 18 + 24 + 30) / 4 = 84 / 4 = 21.',
            steps: [
              { stepNumber: 1, explanation: 'Yig\'indi', expression: '12 + 18 + 24 + 30 = 84' },
              { stepNumber: 2, explanation: '4 ga bo\'lish', expression: '84 : 4 = 21' }
            ]
          }
        ]
      }
    ]
  }
];
