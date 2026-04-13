import { TextField } from "@/components";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { useState } from "react";
import { Text, View } from "react-native";
import { Container, Header, Title } from "./components";
import { useLoginModel } from "./login-model";

export const LoginView = (methods: ReturnType<typeof useLoginModel>) => {
  const { control, onSubmit, handleSignUp } = methods;
  const [visible, setVisible] = useState(true);

  return (
    <Container>
      <View className="flex-1 justify-end bg-green-500">
        <Header />

        <View className="min-h-[350px] flex-[0.65]  rounded-t-3xl bg-white px-7 py-8">
          <Title />

          <View className="gap-6">
            <TextField
              control={control}
              inputName="email"
              label="Usuário"
              placeholder="Informe seu usuário"
            />

            <TextField
              label="Senha"
              control={control}
              inputName="password"
              secureTextEntry={visible}
              placeholder="Informe sua senha"
              endIcon={
                <IconButton
                  icon="visibility"
                  onPress={() => setVisible(!visible)}
                />
              }
            />

            <Button label="Entrar" onPress={onSubmit} />

            <Text className="text-center">
              Não possui uma conta?{" "}
              <Text
                className="font-semibold text-green-500 underline"
                onPress={handleSignUp}
              >
                Cadastre-se
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </Container>
  );
};
