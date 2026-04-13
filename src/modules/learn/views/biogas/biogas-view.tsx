import { Button, Text } from "@/components";
import { ActionButton, AppBar } from "@/components/AppBar";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, ScrollView, StatusBar, View } from "react-native";
import { CompletedDialog, CompletedFlag } from "../../components";
import { useBiogasModel } from "./biogas-model";

export const BiogasView = (methods: ReturnType<typeof useBiogasModel>) => {
  const { biogas, visible, handleGoBack, handleCompleted, handleDialog } =
    methods;

  return (
    <View className="flex-1 bg-zinc-50">
      <StatusBar backgroundColor="#22c55e" />

      <AppBar
        title="O que é Biogás?"
        leftButton={
          <ActionButton onPress={handleGoBack}>
            <MaterialIcons name="arrow-back" size={24} color="#FFF" />
          </ActionButton>
        }
      />

      <ScrollView>
        <View>
          <CompletedFlag
            className="absolute right-5 top-5 z-10"
            completed={biogas}
          />

          <Image
            source={require("@/assets/images/biogas-info.jpg")}
            className="h-60 w-full"
            resizeMode="cover"
          />
        </View>

        <View className="gap-4 px-5 py-5">
          <Text.Title>O que é o Biogás</Text.Title>

          {/* 1 */}
          <View className="flex-1">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="eco" size={24} color="#22c55e" />
              <Text.Body className="font-semibold">
                O que é e como se forma:
              </Text.Body>
            </View>

            <Text.Body className="text-justify">
              O biogás é um combustível renovável obtido a partir da
              decomposição de matéria orgânica como esterco, restos de
              alimentos, resíduos agrícolas e esgoto em um ambiente sem
              oxigênio, processo conhecido como digestão anaeróbia. Nesse
              processo, micro-organismos decompõem o material e liberam uma
              mistura de gases, composta principalmente por metano (CH₄) e
              dióxido de carbono (CO₂).
              <Text.Body>(Fonte: IEA Bioenergy, 2022)</Text.Body>
            </Text.Body>
          </View>

          {/* 2 */}
          <View className="flex-1">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="science" size={24} color="#22c55e" />
              <Text.Body className="font-semibold">
                Composição e poder energético:
              </Text.Body>
            </View>

            <Text.Body className="text-justify">
              O biogás contém de 50% a 70% de metano, que é o mesmo
              componente principal do gás natural. Isso significa que ele pode
              ser usado para gerar eletricidade, calor ou ser purificado para se
              transformar em biometano, um substituto direto do gás natural.
              Cada metro cúbico de biogás pode gerar cerca de 6,5 kWh de
              energia elétrica o suficiente para manter uma geladeira ligada
              por mais de um dia.
              <Text.Body>(Fonte: Embrapa, 2022; IRENA, 2023)</Text.Body>
            </Text.Body>
          </View>

          {/* 3 */}
          <View className="flex-1">
            <View className="flex-row items-center gap-2">
              <MaterialIcons
                name="energy-savings-leaf"
                size={24}
                color="#22c55e"
              />
              <Text.Body className="font-semibold">
                Aplicações do biogás:
              </Text.Body>
            </View>

            <Text.Body className="text-justify">
              O biogás pode ser usado em usinas elétricas, veículos,
              aquecimento de ambientes e processos industriais. Em
              muitas fazendas e cooperativas no Brasil, o biogás é utilizado
              para gerar energia elétrica a partir de resíduos da pecuária e da
              produção de alimentos, reduzindo custos e emissões.
              <Text.Body>(Fonte: EPE/MME, 2023)</Text.Body>
            </Text.Body>
          </View>

          {/* 4 */}
          <View className="flex-1">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="public" size={24} color="#22c55e" />
              <Text.Body className="font-semibold">
                Benefício ambiental e social:
              </Text.Body>
            </View>

            <Text.Body className="text-justify">
              Além de gerar energia limpa, o biogás reduz a quantidade de
              resíduos em aterros sanitários e o impacto ambiental do metano
              liberado por decomposição natural. Segundo a Agência
              Internacional de Energia Renovável (IRENA, 2023), o uso do
              biogás poderia evitar a emissão de até 1,5 gigatoneladas de CO₂
              equivalente por ano no mundo. Também promove o desenvolvimento
              sustentável em comunidades rurais, gerando renda e energia local.
            </Text.Body>
          </View>

          {/* 5 */}
          <View className="flex-1">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="lightbulb" size={24} color="#22c55e" />
              <Text.Body className="font-semibold">
                Potencial brasileiro:
              </Text.Body>
            </View>

            <Text.Body className="text-justify">
              O Brasil tem um dos maiores potenciais do mundo para produção de
              biogás, graças à agropecuária e ao setor sucroenergético. De
              acordo com a EPE (2023), o país poderia gerar mais de 80
              milhões de m³ de biogás por dia, volume suficiente para
              substituir 40% do consumo nacional de gás natural.
            </Text.Body>
          </View>

          <Button
            className="mt-4"
            label="Marcar como concluído"
            onPress={handleDialog}
          />
        </View>
      </ScrollView>

      <CompletedDialog
        visible={visible}
        message="Parabéns! Você concluiu este item com sucesso."
        onClose={handleCompleted}
      />
    </View>
  );
};
