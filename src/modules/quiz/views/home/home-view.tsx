import { Button, Text } from "@/components";
import { ActionButton, AppBar } from "@/components/AppBar";
import { questions, useQuizStore } from "@/store";
import { MaterialIcons } from "@expo/vector-icons";
import { Alert, ScrollView, StatusBar, View } from "react-native";
import { QuizQuestion } from "./components";
import { useHomeModel } from "./home-model";

export const HomeView = (methods: ReturnType<typeof useHomeModel>) => {
  const { handleGoBack } = methods;
  const answers = useQuizStore((state) => state.answers);
  const setAnswer = useQuizStore((state) => state.setAnswer);
  const resetQuiz = useQuizStore((state) => state.resetQuiz);
  const setPercentage = useQuizStore((s) => s.setPercentage);
  const setCorrectAnswers = useQuizStore((s) => s.setCorrectAnswers);

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correctIndex) score++;
    });

    setPercentage((score / questions.length) * 100);
    setCorrectAnswers(score);

    Alert.alert(
      "Resultado",
      `Você acertou ${score} de ${questions.length} perguntas!`,
    );
  };

  return (
    <View className="flex-1">
      <StatusBar backgroundColor="#22c55e" />

      <AppBar
        title="Quiz"
        leftButton={
          <ActionButton onPress={handleGoBack}>
            <MaterialIcons name="arrow-back" size={24} color="#FFF" />
          </ActionButton>
        }
      />

      <ScrollView className="flex-1 bg-zinc-100 px-5">
        <MaterialIcons
          className="mb-5 mt-8 text-center"
          name="comment"
          size={36}
          color="#22c55e"
        />

        <Text.Title className="mb-8 text-center text-2xl font-bold">
          Quiz – Biodigestor e Biogás
        </Text.Title>

        {questions.map((q, index) => (
          <QuizQuestion
            key={index}
            question={q.question}
            options={q.options}
            selectedIndex={answers[index] ?? null}
            onSelect={(optionIndex) => setAnswer(index, optionIndex)}
          />
        ))}

        <View className="mb-8 gap-3">
          <Button label="Enviar respostas" onPress={handleSubmit} />

          <Button
            className="bg-red-500"
            label="Resetar quiz"
            onPress={resetQuiz}
          />
        </View>
      </ScrollView>
    </View>
  );
};
