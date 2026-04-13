import { ReactNode } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
