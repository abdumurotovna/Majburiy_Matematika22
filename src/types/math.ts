export interface PracticeStep {
  stepNumber: number;
  explanation: string;
  expression: string;
}

export interface PracticeExercise {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  hint: string;
  explanation: string;
  steps: PracticeStep[];
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  order: number;
  durationMinutes: number;
  summary: string;
  theory: {
    intro: string;
    rules: {
      name: string;
      rule: string;
      note?: string;
    }[];
    breakdowns: {
      title: string;
      problem: string;
      steps: string[];
      answer: string;
      lifehack?: string;
    }[];
    lifehack?: string;
    commonMistake?: string;
  };
  practice: PracticeExercise[];
}

export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: string;
  badge: string;
  lessons: Lesson[];
}

export interface DTMQuestion {
  id: string;
  questionText: string;
  formula?: string;
  options: string[];
  correctIndex: number;
  topic: string;
  explanation: string;
  stepByStepSolution: string[];
  difficulty: 'Oson' | 'O\'rtacha' | 'Qiyin';
}

export interface DTMExamVariant {
  id: string;
  title: string;
  description: string;
  totalQuestions: number;
  timeMinutes: number;
  pointsPerQuestion: number; // 1.1 ball
  questions: DTMQuestion[];
}

export interface FormulaItem {
  id: string;
  title: string;
  category: 'Arifmetika' | 'Kasrlar' | 'Foizlar' | 'Algebra' | 'Geometriya' | 'Layfxaklar';
  formula: string;
  description: string;
  example: string;
  examTip?: string;
}

export interface UserProgress {
  completedLessonIds: string[];
  completedPracticeIds: string[];
  examScores: {
    examId: string;
    score: number;
    total: number;
    percentage: number;
    date: string;
  }[];
  favoriteFormulaIds: string[];
}
