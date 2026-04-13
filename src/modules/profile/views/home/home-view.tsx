import { Text } from "@/components";
import { ActionButton, AppBar } from "@/components/AppBar";
import {
  questions,
  useChecklistStore,
  useLearnStore,
  useQuizStore,
} from "@/store";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, StatusBar, View } from "react-native";
import { ProgressBar } from "../components";
import { useHomeModel } from "./home-model";

export const HomeView = (methods: ReturnType<typeof useHomeModel>) => {
  const { handleGoBack } = methods;
  const percentage = useQuizStore((s) => s.percentage);
  const progress = useChecklistStore((s) => s.getProgress());
  const correctAnswers = useQuizStore((s) => s.correctAnswers);
  const percentageLearn = useLearnStore((s) => s.percentage);

  return (
    <View className="flex-1">
      <StatusBar backgroundColor="#22c55e" />

      <AppBar
        title="Perfil"
        leftButton={
          <ActionButton onPress={handleGoBack}>
            <MaterialIcons name="arrow-back" size={24} color="#FFF" />
          </ActionButton>
        }
      />

      <ScrollView className="flex-1 bg-gray-50 p-6">
        <View className="rounded-2xl bg-white p-6 shadow-sm">
          <View className="mb-4 items-center">
            <View className="mb-2 h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <MaterialIcons name="person" size={40} color="#22c55e" />
            </View>
            <Text.Body className="text-xl font-bold text-gray-900">
              Perfil de Maria
              {/* {name} */}
            </Text.Body>
          </View>

          <View className="rounded-xl border border-green-100 bg-green-50 p-4">
            <Text.Body className="mb-3 font-semibold text-gray-800">
              O seu Progresso:
            </Text.Body>

            <ProgressBar
              label="Conhecimento Adquirido:"
              value={percentageLearn}
              color="#22c55e"
            />
            <ProgressBar
              label="Checklist Concluído:"
              value={progress}
              color="#22c55e"
            />
            <ProgressBar
              label="Pontuação no Quiz:"
              value={percentage}
              color="#22c55e"
              extraLabel={`${correctAnswers} / ${questions.length}`}
            />
          </View>
        </View>

        <View className="mt-6">
          <Text.Body className="mb-3 text-center text-lg font-semibold text-gray-800">
            Os seus Selos:
          </Text.Body>

          <View className="flex-row justify-center">
            <View className="w-32 items-center rounded-xl bg-white p-4 shadow-sm">
              <MaterialIcons name="school" size={40} color="#facc15" />
              <Text.Body className="mt-2 text-center text-gray-700">
                Selo de Aprendiz
              </Text.Body>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
