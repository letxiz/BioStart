import { Text, View } from "react-native";

export const Title = () => {
  return (
    <View className="mb-8">
      <Text className="text-center text-2xl font-semibold tracking-tight text-neutral-900">
        Iniciar Sessão
      </Text>
      <Text className="mt-1 text-center text-base leading-snug text-zinc-500">
        Acesse os recursos em modo de demonstração
      </Text>
    </View>
  );
};
