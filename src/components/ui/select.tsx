import { MaterialIcons } from "@expo/vector-icons";
<<<<<<< HEAD
import clsx from "clsx";
import React, { useState } from "react";
import { TouchableOpacity, View, ViewProps } from "react-native";
import { Text } from "./text";

export interface SelectOption {
=======
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Option {
>>>>>>> 195ceabf4f6235ed66b70bc503105a0dfd031ee3
  label: string;
  value: string;
}

type Props = {
<<<<<<< HEAD
  list: SelectOption[];
  value: string | null;
  placeholder?: string;
  onChange: (value: SelectOption) => void;
};

export const Select = ({ value, placeholder, list = [], onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focus, setFocus] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
    setFocus(!focus);
  };

  const onSelect = (item: SelectOption) => {
    onChange(item);
    onToggle();
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onToggle}
        className={`h-12 w-full flex-row items-center justify-between rounded-lg bg-white px-3 ${focus ? "border-2 border-green-500" : "border border-gray-300"}`}
      >
        <Text.Body variant={value ? "dark" : "gray"}>
          {value || placeholder}
        </Text.Body>
=======
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
>>>>>>> 195ceabf4f6235ed66b70bc503105a0dfd031ee3

        <MaterialIcons
          className={isOpen ? "rotate-90" : "-rotate-90"}
          name="chevron-left"
          size={24}
          color="#6b7280"
        />
      </TouchableOpacity>

<<<<<<< HEAD
      {isOpen && (
        <View className="absolute left-0 right-0 top-12 z-10 h-auto rounded-b-lg border border-t-0 border-gray-300 bg-white">
          {list.map((item) => (
            <MenuItem
              key={item.label}
              label={item.label}
              value={item.value}
              onSelect={(value) => onSelect(value)}
            />
          ))}
        </View>
      )}
=======
      {/* Dropdown */}
      {isOpen && <MenuItem options={options} onSelect={onSelect} />}
>>>>>>> 195ceabf4f6235ed66b70bc503105a0dfd031ee3
    </View>
  );
};

interface MenuItemProps {
<<<<<<< HEAD
  label: string;
  value: string;
  onSelect: (value: SelectOption) => void;
}

export const MenuItem = ({ label, value, onSelect }: MenuItemProps) => {
  return (
    <TouchableOpacity
      onPress={() => onSelect({ label, value })}
      className={`border-b border-gray-200 p-3`}
    >
      <Text.Body variant="dark">{label}</Text.Body>
    </TouchableOpacity>
  );
};

export const SelectContainer = ({ className, ...props }: ViewProps) => {
  return <View className={clsx(className, "gap-1")} {...props} />;
};
=======
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
>>>>>>> 195ceabf4f6235ed66b70bc503105a0dfd031ee3
