import React from "react";
import { Text, View } from "react-native";
import { QuizOption } from "./quiz-option";

interface QuizQuestionProps {
  question: string;
  options: string[];
  selectedIndex: number | null;
  onSelect: (index: number) => void;
}

export const QuizQuestion = ({
  question,
  options,
  selectedIndex,
  onSelect,
}: QuizQuestionProps) => {
  return (
    <View className="mb-6">
      <Text className="mb-2 text-lg font-semibold">{question}</Text>
      <View className="space-y-2">
        {options.map((option, index) => (
          <QuizOption
            key={index}
            label={option}
            selected={selectedIndex === index}
            onPress={() => onSelect(index)}
          />
        ))}
      </View>
    </View>
  );
};
