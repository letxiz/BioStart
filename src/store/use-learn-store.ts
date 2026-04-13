import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface State {
  biogas: boolean;
  advantage: boolean;
  curiosity: boolean;
  disadvantage: boolean;
  completedCount: number;
  percentage: number;
}

interface Action {
  setLearn: (
    key: keyof Omit<State, "completedCount" | "percentage">,
    value: boolean,
  ) => void;
  reset: () => void;
}

const initialValues: Omit<State, "completedCount" | "percentage"> = {
  biogas: false,
  advantage: false,
  curiosity: false,
  disadvantage: false,
};

export const useLearnStore = create<State & Action>()(
  persist(
    (set) => ({
      ...initialValues,
      completedCount: 0,
      percentage: 0,

      setLearn: (key, value) => {
        set((state) => {
          // Atualiza o item escolhido
          const updated = { ...state, [key]: value };

          // Somente chaves booleanas são consideradas no cálculo
          const keys: (keyof typeof initialValues)[] = [
            "biogas",
            "advantage",
            "curiosity",
            "disadvantage",
          ];

          // Conta quantos estão true
          const completed = keys.filter((k) => updated[k]).length;

          // Calcula a porcentagem
          const percentage = Math.round((completed / keys.length) * 100);

          return {
            ...updated,
            completedCount: completed,
            percentage,
          };
        });
      },

      reset: () =>
        set({
          ...initialValues,
          completedCount: 0,
          percentage: 0,
        }),
    }),
    {
      name: "learn-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
