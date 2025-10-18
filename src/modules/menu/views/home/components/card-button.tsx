import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface CardButtonProps {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  onPress?: () => void;
}

export const CardButton = ({ title, icon, onPress }: CardButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="h-36 flex-1 items-center justify-center rounded-xl bg-white px-4 py-8 shadow-lg"
    >
      <View className="mb-2 items-center justify-center">
        <MaterialIcons name={icon} size={36} color="#22c55e" />
      </View>
      <Text className="text-center text-base font-semibold text-[#404040]">
        {title}
      </Text>
    </TouchableOpacity>
  );
};
