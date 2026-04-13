import { Button, Text } from "@/components";
import { ActionButton, AppBar } from "@/components/AppBar";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, StatusBar, TextInput, View } from "react-native";
import { useHomeModel } from "./home-model";

interface Question {
  id: string;
  title: string;
  author: string;
}

const initialQuestions: Question[] = [
  { id: "1", title: "Como dimensionar meu biodigestor?", author: "Usuário A" },
  {
    id: "2",
    title: "Qual a melhor matéria-prima para biogás?",
    author: "Usuário B",
  },
  { id: "3", title: "Onde encontrar apoio técnico?", author: "Usuário C" },
];

export const HomeView = (methods: ReturnType<typeof useHomeModel>) => {
  const { handleGoBack } = methods;

  const [questions, setQuestions] = useState(initialQuestions);
  const [newQuestion, setNewQuestion] = useState("");

  const handleAddQuestion = () => {
    if (newQuestion.trim().length === 0) return;
    const newItem = {
      id: String(Date.now()),
      title: newQuestion,
      author: "Você",
    };
    setQuestions([...questions, newItem]);
    setNewQuestion("");
  };

  return (
    <View className="flex-1">
      <StatusBar backgroundColor="#22c55e" />

      <AppBar
        title="Fórum"
        leftButton={
          <ActionButton onPress={handleGoBack}>
            <MaterialIcons name="arrow-back" size={24} color="#FFF" />
          </ActionButton>
        }
      />

      <ScrollView className="flex-1 bg-gray-50 px-5 py-8">
        <View className="flex-1 rounded-2xl bg-white py-6 shadow-sm">
          <MaterialIcons
            className="mb-5 text-center"
            name="forum"
            size={36}
            color="#22c55e"
          />

          <Text.Title className="mb-2 text-center text-2xl font-bold text-gray-900">
            Fórum BioStart
          </Text.Title>
          <Text.Subtitle className="mb-5 text-center text-gray-500">
            Leia algumas dúvidas frequentes ou envie a sua!
          </Text.Subtitle>

          <Text.Body className="mb-3 text-lg font-semibold text-gray-800">
            Dúvidas Frequentes:
          </Text.Body>

          {questions.map((q) => (
            <View
              key={q.id}
              className="mb-3 rounded-xl border border-gray-200 bg-gray-100 p-4"
            >
              <Text.Body className="mb-1 font-semibold text-gray-900">
                {q.title}
              </Text.Body>
              <Text.Body className="text-sm text-gray-500">
                Por: {q.author}
              </Text.Body>
            </View>
          ))}

          <View className="mt-6 border-t border-gray-200 pt-6">
            <Text.Body className="mb-3 text-lg font-semibold text-gray-800">
              Envie a Sua Dúvida:
            </Text.Body>

            <View className="mb-4 rounded-lg border border-gray-300 bg-white">
              <TextInput
                placeholder="Digite a sua pergunta aqui..."
                placeholderTextColor="#A1A1AA"
                value={newQuestion}
                onChangeText={setNewQuestion}
                multiline
                textAlignVertical="top"
                className="rounded-lg p-3 text-gray-800"
                style={{
                  minHeight: 90,
                  fontSize: 15,
                  textAlignVertical: "top",
                }}
              />
            </View>

            <Button
              className="mt-4"
              label="Enviar Pergunta"
              onPress={handleAddQuestion}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
