import { Text } from "@/components";
import { CompletedFlag } from "@/modules/learn/components";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

interface InfoCardProps {
  image: any; // require() ou { uri: string }
  icon?: string;
  title: string;
  completed: boolean;
  description: string;
  onPress?: () => void;
}

export const InfoCard = ({
  image,
  icon = "language",
  title,
  completed,
  description,
  onPress,
}: InfoCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      className="flex-1 overflow-hidden rounded-2xl bg-white shadow-md"
    >
      {/* Imagem de capa */}
      <View className="relative">
        <CompletedFlag
          className="absolute right-3 top-3 z-10"
          completed={completed}
        />

        <Image source={image} className="h-40 w-full" resizeMode="cover" />

        {/* Ícone sobreposto */}
        <View className="absolute left-3 top-3 rounded-full bg-green-600 p-2">
          <MaterialIcons name={icon as any} size={20} color="#fff" />
        </View>
      </View>

      {/* Conteúdo */}
      <View className="p-4">
        <Text.Body className="mb-1">{title}</Text.Body>
        <Text.Caption variant="gray">{description}</Text.Caption>
      </View>
    </TouchableOpacity>
  );
};
