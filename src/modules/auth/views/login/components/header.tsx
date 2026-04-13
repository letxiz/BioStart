import { Image, Text, View } from "react-native";

export const Header = () => {
  return (
    <View className="flex-1 items-center justify-center px-5">
      <Image
        source={require("@/assets/images/logo.png")}
        style={{ width: 90, height: 90 }}
        resizeMode="contain"
      />

      <Text className="mt-3 text-[44px] font-extrabold tracking-tight text-white">
        BioStart
      </Text>

      <Text className="mt-1 text-lg font-medium tracking-wide text-white/80">
        Sistema de Acesso
      </Text>
    </View>
  );
};
