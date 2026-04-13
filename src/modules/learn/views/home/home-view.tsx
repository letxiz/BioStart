import { Button, Text } from "@/components";
import { ActionButton, AppBar } from "@/components/AppBar";
import { useLearnStore } from "@/store";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, StatusBar, View } from "react-native";
import {
  advantageItem,
  biogasItem,
  curiosityItem,
  disadvantageItem,
} from "../../mocks";
import { InfoCard } from "./components";
import { useHomeModel } from "./home-model";

export const HomeView = (methods: ReturnType<typeof useHomeModel>) => {
  const { handleGoBack, handleToNavigate } = methods;
  const biogas = useLearnStore((s) => s.biogas);
  const advantage = useLearnStore((s) => s.advantage);
  const curiosity = useLearnStore((s) => s.curiosity);
  const disadvantage = useLearnStore((s) => s.disadvantage);
  const reset = useLearnStore((s) => s.reset);

  return (
    <View className="flex-1 bg-zinc-50">
      <StatusBar backgroundColor="#22c55e" />

      <AppBar
        title="Biogás"
        leftButton={
          <ActionButton onPress={handleGoBack}>
            <MaterialIcons name="arrow-back" size={24} color="#FFF" />
          </ActionButton>
        }
      />

      <ScrollView className="px-5">
        <View className="my-8 items-center">
          <MaterialIcons
            className="mb-5"
            name="book-online"
            size={36}
            color="#22c55e"
          />

          <Text.Title className="text-center text-zinc-50">
            Aprenda sobre Biogás
          </Text.Title>

          <Text.Body className="text-center text-zinc-50">
            Explore os nossos conteúdos educativos
          </Text.Body>
        </View>

        <View className="mb-8 gap-6">
          <InfoCard
            key={biogasItem.title}
            image={biogasItem.image}
            icon={biogasItem.icon}
            title={biogasItem.title}
            completed={biogas}
            description={biogasItem.description}
            onPress={() => handleToNavigate(biogasItem.route)}
          />
          <InfoCard
            key={advantageItem.title}
            image={advantageItem.image}
            icon={advantageItem.icon}
            title={advantageItem.title}
            completed={advantage}
            description={advantageItem.description}
            onPress={() => handleToNavigate(advantageItem.route)}
          />
          <InfoCard
            key={curiosityItem.title}
            image={curiosityItem.image}
            icon={curiosityItem.icon}
            title={curiosityItem.title}
            completed={curiosity}
            description={curiosityItem.description}
            onPress={() => handleToNavigate(curiosityItem.route)}
          />
          <InfoCard
            key={disadvantageItem.title}
            image={disadvantageItem.image}
            icon={disadvantageItem.icon}
            title={disadvantageItem.title}
            completed={disadvantage}
            description={disadvantageItem.description}
            onPress={() => handleToNavigate(disadvantageItem.route)}
          />

          <Button className="my-8" label="Resetar" onPress={reset} />
        </View>
      </ScrollView>
    </View>
  );
};
