import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

interface CompletedDialogProps {
  visible: boolean;
  message: string;
  onClose: () => void;
}

export const CompletedDialog = ({
  visible,
  message,
  onClose,
}: CompletedDialogProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent // importante para cobrir o StatusBar
      onRequestClose={onClose}
    >
      {/* Fundo ocupa toda a tela, incluindo StatusBar */}
      <View className="flex-1 items-center justify-center bg-black/40">
        <View className="w-4/5 rounded-2xl bg-white p-6">
          <Text className="mb-4 text-center text-lg font-bold">Concluído!</Text>
          <Text className="mb-6 text-center">{message}</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onClose}
            className="rounded-lg bg-green-500 px-4 py-2"
          >
            <Text className="text-center font-semibold text-white">OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
