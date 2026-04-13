import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface ChecklistSectionProps {
  title: string;
  isDone?: boolean;
  onChange: () => void;
}

export const ChecklistSection = ({
  title,
  isDone = false,
  onChange,
}: ChecklistSectionProps) => {
  return (
    <View className="mb-2">
      <TouchableOpacity
        onPress={onChange}
        className={`flex-row items-center justify-between rounded-xl border px-3 py-3 ${
          isDone ? "border-green-400 bg-green-50" : "border-gray-300 bg-white"
        }`}
      >
        <Text
          className={`text-base ${
            isDone ? "text-gray-400 line-through" : "text-[#404040]"
          }`}
        >
          {title}
        </Text>

        {isDone && <MaterialIcons name="check" size={22} color="#22c55e" />}
      </TouchableOpacity>
    </View>
  );
};
