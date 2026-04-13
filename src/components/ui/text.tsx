import { clsx } from "clsx";
import { TextProps, Text as TextRN } from "react-native";

type Props = TextProps & {
  variant?: "dark" | "gray" | "white" | "green" | "red";
};

const Title = ({ className, variant = "dark", ...props }: Props) => {
  return (
    <TextRN
      className={clsx(className, styles.title, colors[variant])}
      {...props}
    />
  );
};

const Subtitle = ({ className, variant = "dark", ...props }: Props) => {
  return (
    <TextRN
      className={clsx(className, styles.subtitle, colors[variant])}
      {...props}
    />
  );
};

const Body = ({ className, variant = "dark", ...props }: Props) => {
  return (
    <TextRN
      className={clsx(className, styles.body, colors[variant])}
      {...props}
    />
  );
};

const Label = ({ className, variant = "dark", ...props }: Props) => {
  return (
    <TextRN
      className={clsx(className, styles.label, colors[variant])}
      {...props}
    />
  );
};

const Caption = ({ className, variant = "dark", ...props }: Props) => {
  return (
    <TextRN
      className={clsx(className, styles.caption, colors[variant])}
      {...props}
    />
  );
};

const styles: Record<string, string> = {
  title: "text-2xl font-bold",
  subtitle: "text-lg font-medium",
  body: "text-base font-normal",
  label: "text-sm font-medium",
  caption: "text-xs font-normal",
};

const colors: Record<string, string> = {
  dark: "text-zinc-900",
  gray: "text-zinc-500",
  white: "text-zinc-50",
  green: "text-green-500",
  red: "text-red-500",
};

export const Text = {
  Title,
  Subtitle,
  Body,
  Label,
  Caption,
};
