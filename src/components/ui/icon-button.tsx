import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  size?: number;
  color?: string;
};

export const IconButton = ({
  icon,
  size = 24,
  color = "#a1a1aa",
  ...props
}: Props) => {
  return (
    <TouchableOpacity {...props}>
      <MaterialIcons name={icon} size={size} color={color} />
    </TouchableOpacity>
  );
};
