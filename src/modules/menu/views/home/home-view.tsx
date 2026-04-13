import { IconButton, Text } from "@/components";
import { Image, StatusBar, View } from "react-native";
import { CardButton } from "./components";
import { useHomeModel } from "./home-model";

export const HomeView = (methods: ReturnType<typeof useHomeModel>) => {
  const {
    handleLearn,
    handleSimulator,
    handleChecklist,
    handleQuiz,
    handleForum,
    handleProfile,
  } = methods;

  return (
    <View className="flex-1">
      <StatusBar backgroundColor="#22c55e" />

      <View className="flex-row justify-between rounded-b-3xl bg-green-500 px-6 py-8 shadow-md">
        <View className="flex-row gap-3">
          <Image
            source={{
              uri: "https://ui-avatars.com/api/?name=Maria&background=22c55e&color=fff",
            }}
            className="h-12 w-12 rounded-full border-2 border-white"
          />

          <View>
            <Text.Title variant="white">Olá, Maria</Text.Title>
            <Text.Body variant="white">
              O que gostaria de aprender hoje?
            </Text.Body>
          </View>
        </View>

        <IconButton icon="exit-to-app" size={24} color="#fafafa" />
      </View>

      <View className="flex-1 bg-zinc-100 px-5 pt-8">
        <View className="mb-5 flex-row gap-5">
          <CardButton
            title="Aprenda"
            icon="book-online"
            onPress={handleLearn}
          />
          <CardButton
            title="Simulador"
            icon="calculate"
            onPress={handleSimulator}
          />
        </View>

        <View className="mb-5 flex-row gap-5">
          <CardButton
            title="Checklist"
            icon="checklist"
            onPress={handleChecklist}
          />
          <CardButton title="Quiz" icon="comment" onPress={handleQuiz} />
        </View>

        <View className="flex-row gap-5">
          <CardButton title="Fórum" icon="forum" onPress={handleForum} />
          <CardButton title="Perfil" icon="person" onPress={handleProfile} />
        </View>
      </View>
    </View>
  );
};
