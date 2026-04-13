import { MaterialIcons } from "@expo/vector-icons";
import clsx from "clsx";
import React, { useState } from "react";
import { TouchableOpacity, View, ViewProps } from "react-native";
import { Text } from "./text";

export interface SelectOption {
  label: string;
  value: string;
}

type Props = {
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

        <MaterialIcons
          className={isOpen ? "rotate-90" : "-rotate-90"}
          name="chevron-left"
          size={24}
          color="#6b7280"
        />
      </TouchableOpacity>

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
    </View>
  );
};

interface MenuItemProps {
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
