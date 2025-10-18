import { isNotEmpty } from "@/utils";
import { ReactNode } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

type TextAlign = "left" | "center" | "right";

type Props = {
  title: string;
  textAlign?: TextAlign;
  leftButton?: ReactNode;
  rightButton?: ReactNode;
};

export const AppBar = ({
  title = "",
  textAlign = "center",
  leftButton,
  rightButton,
}: Props) => {
  const align: Record<TextAlign, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <View className="relative h-14 flex-row items-center justify-between gap-3 bg-green-500 px-5 py-2.5">
      <View className="h-8 w-8 items-center justify-center">
        {leftButton && leftButton}
      </View>

      <Text
        className={`${align[textAlign]} flex-1 text-xl font-medium text-white`}
      >
        {isNotEmpty(title) && title}
      </Text>

      <View className="h-8 w-8 items-center justify-center">
        {rightButton && rightButton}
      </View>
    </View>
  );
};

export const ActionButton = ({
  className,
  ...props
}: TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      className={`${className}`}
      activeOpacity={0.8}
      {...props}
    />
  );
};
