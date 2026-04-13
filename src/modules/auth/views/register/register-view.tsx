import { Button, Checkbox, Text, TextField } from "@/components";
import { ActionButton, AppBar } from "@/components/AppBar";
import { MaterialIcons } from "@expo/vector-icons";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import { useRegisterModel } from "./register-model";

export const RegisterView = (methods: ReturnType<typeof useRegisterModel>) => {
  const { control, handleGoBack } = methods;

  return (
    <View className="flex-1">
      <StatusBar className="bg-green-500" />

      <AppBar
        title="Cadastro"
        leftButton={
          <ActionButton onPress={handleGoBack}>
            <MaterialIcons name="arrow-back" size={24} color="#FFF" />
          </ActionButton>
        }
      />

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="gap-5 px-6 py-8">
            <View className="w-full items-center">
              <Text.Title className="text-center">
                Junte-se ao BioStart
              </Text.Title>

              <Text.Body className="max-w-80 text-center" variant="gray">
                Preencha os seus dados para começar a sua jornada.
              </Text.Body>
            </View>

            <TextField
              control={control}
              inputName="fullName"
              label="Nome completo"
              placeholder="Informe seu nome completo"
              required
            />

            <TextField
              control={control}
              inputName="fullName"
              label="E-mail"
              placeholder="Informe seu e-mail"
              required
            />

            <TextField
              control={control}
              inputName="fullName"
              label="Senha"
              placeholder="Crie uma senha"
              required
            />

            <TextField
              control={control}
              inputName="fullName"
              label="Confirmar senha"
              placeholder="Confirme sua senha"
              required
            />

            <TextField
              control={control}
              inputName="fullName"
              label="Idade"
              placeholder="Informe sua idade"
              required
            />

            <TextField
              control={control}
              inputName="fullName"
              label="Região/Cidade"
              placeholder="Informe sua região ou cidade"
              required
            />

            <TextField
              control={control}
              inputName="fullName"
              label="Profissão/Ocupação"
              placeholder="Informe sua profissão ou ocupação"
              required
            />

            <TextField
              label="Experiência com energia renovável"
              placeholder="Descreva aqui"
            />
            <View className="flex-row items-center gap-3">
              <Checkbox />
              <Text.Body className="flex-1">
                Aceito os termos de uso e política de privacidade do BioStart.
              </Text.Body>
            </View>

            <Button className="mt-2" label="Criar conta" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
