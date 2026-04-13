import React from "react";
import { Text, View } from "react-native";

interface ProgressBarProps {
  label: string;
  value: number;
  color: string;
  extraLabel?: string;
}

export const ProgressBar = ({
  label,
  value,
  color,
  extraLabel,
}: ProgressBarProps) => {
  return (
    <View className="mb-3">
      <View className="mb-1 flex-row justify-between">
        <Text className="text-gray-700">{label}</Text>
        <Text className="font-semibold text-gray-700">
          {extraLabel ?? `${value}%`}
        </Text>
      </View>
      <View className="h-2 overflow-hidden rounded-full bg-gray-200">
        <View
          className="h-2 rounded-full"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </View>
    </View>
  );
};
