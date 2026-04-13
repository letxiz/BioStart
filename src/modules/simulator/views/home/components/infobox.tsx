import { Text } from "@/components";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

export const InfoBox = () => {
  return (
    <View className="mt-8 flex-row items-start rounded-lg border border-green-200 bg-green-50 p-3">
      <MaterialIcons
        name="info-outline"
        size={22}
        color="#22c55e"
        className="mt-1"
      />

      <View className="ml-2 flex-1">
        <Text.Caption variant="dark" className="text-[14px] leading-5">
          Cálculo baseado em:{" "}
          <Text.Body variant="dark" className="font-semibold">
            1m³ de biogás = 6,5 kWh
          </Text.Body>{" "}
          e tarifa média de{" "}
          <Text.Body variant="dark" className="font-semibold">
            R$ 0,90/kWh.
          </Text.Body>
        </Text.Caption>

        <Text.Caption variant="gray" className="mt-1 italic">
          Fonte: IEA Bioenergy
        </Text.Caption>
      </View>
    </View>
  );
};
