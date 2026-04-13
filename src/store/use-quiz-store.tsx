import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Question {
  question: string;
  options: string[];
  correctIndex: number;
}

interface QuizStore {
  answers: Record<number, number | null>;
  percentage: number;
  correctAnswers: number;
  setAnswer: (questionIndex: number, optionIndex: number) => void;
  setPercentage: (value: number) => void;
  setCorrectAnswers: (value: number) => void;
  resetQuiz: () => void;
}

export const questions: Question[] = [
  {
    question: "O que acontece com o lixo orgânico dentro de um biodigestor?",
    options: [
      "Ele é queimado",
      "Ele vira plástico",
      "Ele é comido por microrganismos e vira gás",
      "Ele desaparece",
    ],
    correctIndex: 2,
  },
  {
    question: "A chama do biogás é geralmente de que cor?",
    options: ["Verde", "Azul", "Vermelha", "Branca"],
    correctIndex: 1,
  },
  {
    question: "Qual destes NÃO deve ser colocado em um biodigestor caseiro?",
    options: [
      "Cascas de frutas",
      "Restos de vegetais",
      "Esterco de galinha",
      "Produtos de limpeza",
    ],
    correctIndex: 3,
  },
  {
    question: "Para que o biodigestor funcione bem, ele precisa estar...",
    options: [
      "Completamente aberto",
      "Bem fechado, sem entrada de ar",
      "Cheio de água",
      "Exposto ao sol direto",
    ],
    correctIndex: 1,
  },
  {
    question: "O biogás é mais pesado ou mais leve que o ar?",
    options: [
      "É um pouco mais leve que o ar",
      "É muito mais pesado que o ar",
      "Tem o mesmo peso do ar",
      "É um líquido, não um gás",
    ],
    correctIndex: 0,
  },
];

export const useQuizStore = create<QuizStore>()(
  persist(
    (set) => ({
      answers: {},
      percentage: 0,
      correctAnswers: 0,

      setAnswer: (questionIndex, optionIndex) =>
        set((state) => ({
          answers: { ...state.answers, [questionIndex]: optionIndex },
        })),

      setCorrectAnswers: (value) => set({ correctAnswers: value }),

      setPercentage: (value) => set({ percentage: value }),

      resetQuiz: () => set({ answers: {}, percentage: 0 }),
    }),
    { name: "quiz-storage" },
  ),
);
