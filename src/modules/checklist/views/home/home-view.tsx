import { Button, Text } from "@/components";
import { ActionButton, AppBar } from "@/components/AppBar";
import { useChecklistStore } from "@/store/use-checklist-store";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, StatusBar, View } from "react-native";
import { ChecklistProgress, ChecklistSection } from "../../components";
import { useHomeModel } from "./home-model";

export const HomeView = (methods: ReturnType<typeof useHomeModel>) => {
  const { handleGoBack } = methods;
  const sections = useChecklistStore((s) => s.sections);
  const progress = useChecklistStore((s) => s.getProgress());
  const toggleItem = useChecklistStore((s) => s.toggleItem);
  const resetAll = useChecklistStore((s) => s.resetAll);

  return (
    <View className="flex-1 bg-zinc-100">
      <StatusBar backgroundColor="#22c55e" />

      <AppBar
        title="Checklist"
        leftButton={
          <ActionButton onPress={handleGoBack}>
            <MaterialIcons name="arrow-back" size={24} color="#FFF" />
          </ActionButton>
        }
      />

      <ScrollView className="flex-1 px-5">
        <MaterialIcons
          className="mt-8 text-center"
          name="checklist"
          size={36}
          color="#22c55e"
        />

        <ChecklistProgress percentage={progress} />

        <View className="mb-4 gap-3">
          <Text.Subtitle>Planejamento</Text.Subtitle>
          {sections.planejamento.map((section) => (
            <ChecklistSection
              key={section.id}
              title={section.title}
              isDone={section.completed}
              onChange={() => toggleItem("planejamento", section.id)}
            />
          ))}
        </View>

        <View className="mb-4 gap-3">
          <Text.Subtitle>Materiais</Text.Subtitle>
          {sections.materiais.map((section) => (
            <ChecklistSection
              key={section.id}
              title={section.title}
              isDone={section.completed}
              onChange={() => toggleItem("materiais", section.id)}
            />
          ))}
        </View>

        <View className="mb-4 gap-3">
          <Text.Subtitle>Construção</Text.Subtitle>
          {sections.construcao.map((section) => (
            <ChecklistSection
              key={section.id}
              title={section.title}
              isDone={section.completed}
              onChange={() => toggleItem("construcao", section.id)}
            />
          ))}
        </View>

        <View className="mb-4 gap-3">
          <Text.Subtitle>Operação</Text.Subtitle>
          {sections.operacao.map((section) => (
            <ChecklistSection
              key={section.id}
              title={section.title}
              isDone={section.completed}
              onChange={() => toggleItem("operacao", section.id)}
            />
          ))}
        </View>

        <View className="mb-4 gap-3">
          <Text.Subtitle>Manutenção</Text.Subtitle>
          {sections.manutencao.map((section) => (
            <ChecklistSection
              key={section.id}
              title={section.title}
              isDone={section.completed}
              onChange={() => toggleItem("manutencao", section.id)}
            />
          ))}
        </View>

        <Button
          className="mb-8 bg-red-500"
          label="Resetar checklist"
          onPress={resetAll}
        />
      </ScrollView>
    </View>
  );
};
