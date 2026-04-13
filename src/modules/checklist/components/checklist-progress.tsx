import { Text, View } from "react-native";

interface ChecklistProgressProps {
  percentage: number;
}

export const ChecklistProgress = ({ percentage }: ChecklistProgressProps) => {
  return (
    <View className="mb-8 mt-5 w-full rounded-2xl bg-gray-100">
      <Text className="mb-1 text-center text-lg font-semibold">
        Checklist do Biodigestor
      </Text>

      <Text className="mb-2 text-center text-gray-600">
        {percentage}% Completo
      </Text>

      <View className="h-3 w-full overflow-hidden rounded-full bg-gray-300">
        <View
          className="h-3 rounded-full bg-green-500"
          style={{ width: `${percentage}%` }}
        />
      </View>
    </View>
  );
};
