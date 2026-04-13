import { isNotEmpty, isNotNull } from "@/utils";
import { ReactNode } from "react";
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
} from "react-hook-form";
import { TextInput, TextInputProps, View } from "react-native";
import { Text } from "./text";

type Props = TextInputProps & {
  control?: any;
  label?: string;
  inputName?: string;
  helperText?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  required?: boolean;
};

export const TextField = ({
  control,
  inputName,
  label = "",
  helperText = "",
  className,
  startIcon,
  endIcon,
  required = false,
  ...props
}: Props) => {
  const comp = (
    field?: ControllerRenderProps<FieldValues, string>,
    fieldState?: ControllerFieldState,
  ) => {
    const { value, ref, onBlur, onChange } = field || {};
    const { error } = fieldState || {};

    if (!field && !fieldState) {
      return (
        <View className="gap-2">
          {isNotEmpty(label) && <Text.Body>{label}</Text.Body>}

          <View className="flex-row items-center">
            {isNotNull(startIcon) && (
              <View className="absolute left-3 rounded-full  p-0.5">
                {startIcon}
              </View>
            )}

            <TextInput
              className={`${className} ${!!startIcon ? "pl-11" : "pl-3"} ${!!endIcon ? "pr-11" : "pr-3"} h-12 flex-1 rounded-md border border-zinc-300 placeholder:text-zinc-500 focus:border-2 focus:border-green-500`}
              {...props}
            />

            {isNotNull(endIcon) && (
              <View className="absolute right-3 rounded-full  p-0.5">
                {endIcon}
              </View>
            )}
          </View>

          {isNotEmpty(helperText) && (
            <Text.Caption className="text-sm font-medium text-red-500">
              {helperText}
            </Text.Caption>
          )}
        </View>
      );
    }

    return (
      <View className="gap-2">
        {isNotEmpty(label) && (
          <Text.Body>
            {label}{" "}
            {required && (
              <Text.Caption className="font-semibold text-red-500">
                *
              </Text.Caption>
            )}
          </Text.Body>
        )}

        <View className="flex-row items-center">
          {isNotNull(startIcon) && (
            <View className="absolute left-3 rounded-full  p-0.5">
              {startIcon}
            </View>
          )}

          <TextInput
            className={`
              ${className} 
              ${!!startIcon ? "pl-11" : "pl-3"} 
              ${!!endIcon ? "pr-11" : "pr-3"}
              ${!!error?.message ? "border-red-500 focus:border-red-500" : "border-zinc-300 focus:border-green-500"}
              h-12 flex-1 rounded-md border focus:border-2
            `}
            ref={ref}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            {...props}
          />

          {isNotNull(endIcon) && (
            <View className="absolute right-3 rounded-full  p-0.5">
              {endIcon}
            </View>
          )}
        </View>

        {isNotEmpty(error?.message) && (
          <Text.Caption className="text-sm font-medium text-red-500">
            {error?.message}
          </Text.Caption>
        )}
      </View>
    );
  };

  if (!control && !inputName) return comp();

  return (
    <Controller
      control={control}
      name={inputName!}
      render={({ field, fieldState }) => comp(field, fieldState)}
    />
  );
};
