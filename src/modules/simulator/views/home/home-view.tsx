import { Button, Text, TextField } from "@/components";
import { ActionButton, AppBar } from "@/components/AppBar";
import { Select, SelectContainer } from "@/components/ui/select";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar, View } from "react-native";
import { ResultDialog } from "./components";
import { InfoBox } from "./components/infobox";
import { useHomeModel } from "./home-model";

export const HomeView = (methods: ReturnType<typeof useHomeModel>) => {
  const {
    result,
    options,
    current,
    visible,
    setVisible,
    setCurrent,
    setQuantity,
    handleCalcule,
    handleGoBack,
  } = methods;

  return (
    <View className="flex-1">
      <StatusBar backgroundColor="#22c55e" />

      <AppBar
        title="Simulador"
        leftButton={
          <ActionButton onPress={handleGoBack}>
            <MaterialIcons name="arrow-back" size={24} color="#FFF" />
          </ActionButton>
        }
      />

      <View className="flex-1 px-5">
        <View className="my-8 items-center">
          <MaterialIcons
            className="mb-5"
            name={"calculate"}
            size={36}
            color="#22c55e"
          />

          <Text.Title className="text-center text-zinc-50">
            Simulador de Biogás
          </Text.Title>

          <Text.Body className="text-center text-zinc-50">
            Calcule o potêncial de produção de biogás dos seus resíduos.
          </Text.Body>
        </View>

        <View className="gap-6">
          <SelectContainer>
            <Text.Body>Tipo de resíduo</Text.Body>
            <Select
              value={current.label}
              placeholder="Selecione o tipo de resíduo"
              onChange={(val) => setCurrent(val)}
              list={options}
            />
          </SelectContainer>

          <TextField
            label="Quantidade (kg/dia ou m³/dia)"
            placeholder="Informe a quantidade"
            onChangeText={(value) => setQuantity(value)}
            required
          />

          <Button label="Calcular" onPress={handleCalcule} />
        </View>

        <InfoBox />
      </View>

      <ResultDialog
        visible={visible}
        result={result}
        onClose={() => setVisible(!visible)}
      />
    </View>
  );
};
