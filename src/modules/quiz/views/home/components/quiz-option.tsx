import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface QuizOptionProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}

export const QuizOption = ({ label, selected, onPress }: QuizOptionProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`rounded-md border px-4 py-3 ${
        selected ? "border-green-500 bg-green-100" : "border-gray-300 bg-white"
      }`}
    >
      <Text className="text-gray-800">{label}</Text>
    </TouchableOpacity>
  );
};
