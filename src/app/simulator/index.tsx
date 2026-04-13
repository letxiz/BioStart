<<<<<<< HEAD
import { HomeviewModel } from "@/modules/simulator";

export default function Simulator() {
  return <HomeviewModel />;
=======
import { Button, Text, TextField } from "@/components";
import { ActionButton, AppBar } from "@/components/AppBar";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar, View } from "react-native";

export default function Simulator() {
  const wasteOptions = [
    { label: "Estrume animal", value: 0.03 },
    { label: "Restos de comida", value: 0.08 },
    { label: "Esgoto doméstico", value: 0.02 },
  ];

  return (
    <View className="flex-1">
      <StatusBar backgroundColor="#22c55e" />

      <AppBar
        title="Simulador"
        leftButton={
          <ActionButton onPress={() => {}}>
            <MaterialIcons name="arrow-back" size={24} color="#FFF" />
          </ActionButton>
        }
      />

      <View className="flex-1 px-5">
        <View className="my-8">
          <Text.Title className="text-center text-zinc-50">
            Simulador de Biogás
          </Text.Title>
          <Text.Body className="text-center text-zinc-50">
            Calcule o potêncial de produção de biogás dos seus resíduos.
          </Text.Body>
        </View>

        <View className="gap-6">
          {/* <Select>

          </Select> */}

          <TextField
            label="Quantidade (kg/dia ou m³/dia)"
            placeholder="Informe a quantidade"
            required
          />
          <Button label="Calcular" />
        </View>
      </View>
    </View>
  );
>>>>>>> 195ceabf4f6235ed66b70bc503105a0dfd031ee3
}
