import { Text } from "@/components";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Modal, TouchableOpacity, View } from "react-native";

interface ResultDialogProps {
  visible: boolean;
  result: {
    volume: string | number;
    economy: string | number;
  };
  onClose: () => void;
}

export const ResultDialog = ({
  visible,
  result,
  onClose,
}: ResultDialogProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent // 👈 cobre a área da StatusBar
      onRequestClose={onClose}
    >
      {/* Fundo escurecido cobrindo toda a tela */}
      <View className="absolute inset-0 bg-black/40" />

      {/* Container central */}
      <View className="flex-1 items-center justify-center px-6">
        <View className="w-full rounded-2xl bg-white p-6 shadow-lg">
          {/* Cabeçalho */}
          <View className="mb-5 flex-row items-center justify-between">
            <Text.Title>Resultado</Text.Title>

            <TouchableOpacity onPress={onClose} hitSlop={10}>
              <MaterialIcons name="close" size={26} color="#404040" />
            </TouchableOpacity>
          </View>

          {/* Conteúdo */}
          <View className="gap-3">
            <View className="flex-row justify-between border-b border-gray-200 pb-3">
              <Text.Body variant="gray">Volume</Text.Body>
              <Text.Body variant="dark" className="font-semibold">
                {result.volume}
              </Text.Body>
            </View>

            <View className="flex-row justify-between border-b border-gray-200 pb-3">
              <Text.Body variant="gray">Economia</Text.Body>
              <Text.Body
                variant="dark"
                className="font-semibold text-green-600"
              >
                {result.economy}
              </Text.Body>
            </View>
          </View>

          {/* Botão */}
          <TouchableOpacity
            onPress={onClose}
            activeOpacity={0.8}
            className="mt-6 h-12 w-full items-center justify-center rounded-xl bg-green-500 shadow"
          >
            <Text.Body variant="white" className="font-semibold">
              Fechar
            </Text.Body>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
