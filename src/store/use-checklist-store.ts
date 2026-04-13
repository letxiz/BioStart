import { create } from "zustand";
import { persist } from "zustand/middleware";

export type SectionKey =
  | "planejamento"
  | "materiais"
  | "construcao"
  | "operacao"
  | "manutencao";

interface ChecklistItem {
  id: string;
  title: string;
  completed: boolean;
}

interface ChecklistStore {
  sections: Record<SectionKey, ChecklistItem[]>;
  toggleItem: (section: SectionKey, id: string) => void;
  getProgress: () => number;
  resetAll: () => void;
}

export const useChecklistStore = create<ChecklistStore>()(
  persist(
    (set, get) => ({
      sections: {
        planejamento: [
          {
            id: "p1",
            title: "Escolher local adequado (próximo à fonte de resíduos)",
            completed: false,
          },
          { id: "p2", title: "Verificar legislação local", completed: false },
          {
            id: "p3",
            title: "Calcular dimensões necessárias",
            completed: false,
          },
          { id: "p4", title: "Definir orçamento do projeto", completed: false },
        ],
        materiais: [
          {
            id: "m1",
            title: "Adquirir tambor ou container principal",
            completed: false,
          },
          { id: "m2", title: "Comprar tubulações PVC", completed: false },
          {
            id: "m3",
            title: "Conseguir válvulas e conexões",
            completed: false,
          },
          {
            id: "m4",
            title: "Preparar ferramentas de instalação",
            completed: false,
          },
        ],
        construcao: [
          { id: "c1", title: "Montar estrutura principal", completed: false },
          {
            id: "c2",
            title: "Instalar sistema de entrada de resíduos",
            completed: false,
          },
          {
            id: "c3",
            title: "Conectar tubulação de saída de gás",
            completed: false,
          },
          { id: "c4", title: "Testar vedação do sistema", completed: false },
        ],
        operacao: [
          {
            id: "o1",
            title: "Fazer primeira carga de material orgânico",
            completed: false,
          },
          {
            id: "o2",
            title: "Ajustar pH da mistura (6,8 - 7,2)",
            completed: false,
          },
          {
            id: "o3",
            title: "Monitorar temperatura (30-40°C)",
            completed: false,
          },
          {
            id: "o4",
            title: "Registrar produção diária de gás",
            completed: false,
          },
        ],
        manutencao: [
          {
            id: "ma1",
            title: "Verificar vazamentos semanalmente",
            completed: false,
          },
          { id: "ma2", title: "Limpar filtros mensalmente", completed: false },
          {
            id: "ma3",
            title: "Renovar material orgânico regularmente",
            completed: false,
          },
          {
            id: "ma4",
            title: "Retirar biofertilizante produzido",
            completed: false,
          },
        ],
      },

      toggleItem: (section, id) =>
        set((state) => ({
          sections: {
            ...state.sections,
            [section]: state.sections[section].map((item) =>
              item.id === id ? { ...item, completed: !item.completed } : item,
            ),
          },
        })),

      getProgress: () => {
        const allItems = Object.values(get().sections).flat();
        const completed = allItems.filter((item) => item.completed).length;
        return Math.round((completed / allItems.length) * 100);
      },

      resetAll: () =>
        set((state) => ({
          sections: Object.fromEntries(
            Object.entries(state.sections).map(([key, items]) => [
              key,
              items.map((i) => ({ ...i, completed: false })),
            ]),
          ) as Record<SectionKey, ChecklistItem[]>,
        })),
    }),
    { name: "checklist-storage" },
  ),
);
