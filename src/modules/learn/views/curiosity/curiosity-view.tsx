import { Button, Text } from "@/components";
import { ActionButton, AppBar } from "@/components/AppBar";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, ScrollView, StatusBar, View } from "react-native";
import { CompletedDialog, CompletedFlag } from "../../components";
import { useCuriosityModel } from "./curiosity-model";

export const CuriosityView = (
  methods: ReturnType<typeof useCuriosityModel>,
) => {
  const { curiosity, visible, handleGoBack, handleCompleted, handleDialog } =
    methods;

  return (
    <View className="flex-1 bg-zinc-50">
      <StatusBar backgroundColor="#22c55e" />

      <AppBar
        title="Curiosidades sobre o Biogás"
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
            completed={curiosity}
          />

          <Image
            source={require("@/assets/images/biogas-curiosities.jpg")}
            className="h-60 w-full"
            resizeMode="cover"
          />
        </View>

        <View className="gap-4 px-5 py-5">
          <Text.Title>Curiosidades sobre o Biogás</Text.Title>

          {/* 1 */}
          <View className="flex-1">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="lightbulb" size={24} color="#22c55e" />
              <Text.Body className="font-semibold">
                O biogás foi descoberto há mais de 200 anos:
              </Text.Body>
            </View>

            <Text.Body className="text-justify">
              A primeira observação científica do biogás ocorreu em 1776, feita
              por Alessandro Volta — o mesmo cientista que deu nome à unidade de
              medida “volt”. Ele percebeu que gases liberados por matéria em
              decomposição podiam ser inflamáveis. Essa descoberta foi o marco
              inicial para o estudo da digestão anaeróbia como fonte de energia
              (IEA Bioenergy, 2021).
            </Text.Body>
          </View>

          {/* 2 */}
          <View className="flex-1">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="lightbulb" size={24} color="#22c55e" />
              <Text.Body className="font-semibold">
                O biogás já foi usado em guerras:
              </Text.Body>
            </View>

            <Text.Body className="text-justify">
              Durante a Segunda Guerra Mundial, o biogás foi amplamente
              utilizado em países europeus como França e Alemanha para mover
              veículos, devido à escassez de combustíveis fósseis. Era gerado a
              partir de esterco e restos de alimentos em pequenas plantas locais
              (UNEP, 2019).
            </Text.Body>
          </View>

          {/* 3 */}
          <View className="flex-1">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="lightbulb" size={24} color="#22c55e" />
              <Text.Body className="font-semibold">
                A China possui mais de 40 milhões de biodigestores:
              </Text.Body>
            </View>

            <Text.Body className="text-justify">
              O país é líder mundial no uso do biogás em áreas rurais. Segundo a
              IEA Bioenergy (2023), mais de 40 milhões de biodigestores
              domésticos estão em operação, fornecendo energia para cozinhar e
              aquecer casas de famílias no campo.
            </Text.Body>
          </View>

          {/* 4 */}
          <View className="flex-1">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="lightbulb" size={24} color="#22c55e" />
              <Text.Body className="font-semibold">
                O Brasil tem grande potencial para o biogás:
              </Text.Body>
            </View>

            <Text.Body className="text-justify">
              De acordo com a Empresa de Pesquisa Energética (EPE, 2023), o
              potencial técnico do biogás brasileiro ultrapassa 80 milhões de m³
              por dia, suficiente para abastecer mais de 10 milhões de casas com
              energia elétrica. Os estados do Sul e Sudeste concentram as
              maiores oportunidades devido à forte produção agropecuária.
            </Text.Body>
          </View>

          {/* 5 */}
          <View className="flex-1">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="lightbulb" size={24} color="#22c55e" />
              <Text.Body className="font-semibold">
                O biogás pode substituir o gás natural:
              </Text.Body>
            </View>

            <Text.Body className="text-justify">
              Após purificação, o biogás se transforma em biometano — um gás com
              poder calorífico semelhante ao gás natural. No Brasil, ele já é
              injetado em redes de distribuição, como no Paraná e em São Paulo,
              sendo usado por veículos e indústrias (MME, 2023).
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
