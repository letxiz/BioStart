import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type Props = TouchableOpacityProps & {
  label: string;
  isLoading?: boolean;
  variant?: "faded" | "bordered" | "disabled";
};

export const Button = ({
  label,
  className,
  isLoading = false,
  variant = "faded",
  ...props
}: Props) => {
  return (
    <TouchableOpacity
      className={`${buttonStyles.defaultProps} ${buttonStyles.variant[variant]} ${className}`}
      disabled={variant === "disabled"}
      activeOpacity={0.9}
      {...props}
    >
      {isLoading && (
        <ActivityIndicator className={activeIndicatorStyles[variant]} />
      )}
      {!isLoading && (
        <Text
          className={`${textStyles.defaultProps} ${textStyles.variant[variant]}`}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const buttonStyles = {
  defaultProps: "h-12 items-center justify-center rounded-md",
  variant: {
    faded: "bg-green-500",
    bordered: "border border-green-500",
    disabled: "bg-zinc-300",
  },
};

const textStyles = {
  defaultProps: "text-base font-medium",
  variant: {
    faded: "color-white",
    bordered: "color-green-500",
    disabled: "color-white",
  },
};

const activeIndicatorStyles = {
  faded: "color-white",
  bordered: "color-green-500",
  disabled: "color-white",
};
