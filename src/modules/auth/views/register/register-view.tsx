import { Button, Text } from "@/components";
import { ActionButton, AppBar } from "@/components/AppBar";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar, View } from "react-native";

export const RegisterView = () => {
  const nav = useRouter();

  return (
    <View className="flex-1">
      <StatusBar backgroundColor="#22c55e" />
      <AppBar
        title="Acesso de demonstração"
        leftButton={
          <ActionButton onPress={() => nav.back()}>
            <MaterialIcons name="arrow-back" size={24} color="#FFF" />
          </ActionButton>
        }
      />
      <View className="flex-1 justify-center gap-5 px-6">
        <Text.Title className="text-center">Explore o BioStart</Text.Title>
        <Text.Body className="text-center" variant="gray">
          O cadastro está indisponível porque este projeto não tem mais acesso
          ao servidor. Você pode usar os recursos do aplicativo sem criar conta
          ou informar dados pessoais.
        </Text.Body>
        <Button
          label="Entrar sem cadastro"
          onPress={() => nav.replace("/menu")}
        />
      </View>
    </View>
  );
};
