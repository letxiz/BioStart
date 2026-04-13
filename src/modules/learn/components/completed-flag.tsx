import { Text } from "@/components";
import { clsx } from "clsx";
import { View, ViewProps } from "react-native";

interface CompletedFlagProps extends ViewProps {
  completed?: boolean;
}

export const CompletedFlag = ({
  completed = false,
  className,
}: CompletedFlagProps) => {
  if (!completed) return null;

  return (
    <View className={clsx(className, "rounded-3xl bg-green-500 px-3 py-2")}>
      <Text.Caption className="font-black" variant="white">
        Concluído
      </Text.Caption>
    </View>
  );
};
