import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Option {
  label: string;
  value: string;
}

type Props = {
  value: string | null;
  isOpen: boolean;
  options: Option[];
  onToggle: () => void;
  onSelect: (value: string) => void;
};

export const Select = ({
  value,
  isOpen,
  options,
  onToggle,
  onSelect,
}: Props) => {
  return (
    <View>
      {/* Botão do picker */}
      <TouchableOpacity
        onPress={onToggle}
        className="h-12 w-full flex-row items-center justify-between rounded-lg border border-gray-300 bg-white p-3"
      >
        <Text className="text-lg text-gray-800">
          {options.find((option) => option.value === value)?.label ||
            "Selecione o tipo de resíduo"}
        </Text>

        <MaterialIcons
          className={isOpen ? "rotate-90" : "-rotate-90"}
          name="chevron-left"
          size={24}
          color="#6b7280"
        />
      </TouchableOpacity>

      {/* Dropdown */}
      {isOpen && <MenuItem options={options} onSelect={onSelect} />}
    </View>
  );
};

interface MenuItemProps {
  options: Option[];
  onSelect: (value: string) => void;
}

export const MenuItem = ({ options, onSelect }: MenuItemProps) => {
  return (
    <View className="absolute left-0 right-0 top-12 z-10 rounded-b-lg border border-t-0 border-gray-300 bg-white">
      {options.map((option, index) => (
        <TouchableOpacity
          key={option.value}
          onPress={() => onSelect(option.value)}
          className={`border-b border-gray-200 p-3 ${
            index === options.length - 1 ? "border-b-0" : ""
          }`}
        >
          <Text className="text-lg text-gray-800">{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
