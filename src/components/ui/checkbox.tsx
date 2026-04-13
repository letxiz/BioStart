import { MaterialIcons } from "@expo/vector-icons";
import { clsx } from "clsx";
import { useState } from "react";
import {
  GestureResponderEvent,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

export const Checkbox = ({
  className,
  onPress,
  ...props
}: TouchableOpacityProps) => {
  const [check, setCheck] = useState(false);

  const handleClick = (event: GestureResponderEvent) => {
    setCheck(!check);
    onPress?.(event);
  };

  return (
    <TouchableOpacity
      className={clsx(
        styles.default,
        check ? styles.checked : styles.unchecked,
      )}
      activeOpacity={0.8}
      onPress={handleClick}
    >
      {check && <MaterialIcons name="check" size={18} color="#FFF" />}
    </TouchableOpacity>
  );
};

const styles = {
  default: "h-6 w-6 rounded-md items-center",
  checked: "border border-green-500 bg-green-500",
  unchecked: "border border-zinc-400",
};
