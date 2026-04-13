import { Button, Text } from "@/components";
import { ActionButton, AppBar } from "@/components/AppBar";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, ScrollView, StatusBar, View } from "react-native";
import { CompletedDialog, CompletedFlag } from "../../components";
import { useDisadvantageModel } from "./disadvantage-model";

export const DisadvantageView = (
  methods: ReturnType<typeof useDisadvantageModel>,
) => {
  const { disadvantage, visible, handleGoBack, handleDialog, handleCompleted } =
    methods;

  return (
    <View className="flex-1 bg-zinc-50">
      <StatusBar backgroundColor="#22c55e" />

      <AppBar
        title="Desvantagens do Biogás"
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
            completed={disadvantage}
          />

          <Image
            source={require("@/assets/images/biogas-disadvantages.jpg")}
            className="h-60 w-full"
            resizeMode="cover"
          />
        </View>

        <View className="gap-4 px-5 py-5">
          <Text.Title>Desvantagens do Biogás</Text.Title>

          {/* 1 */}
          <View className="flex-1">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="warning" size={24} color="#ef4444" />
              <Text.Body className="font-semibold">
                Alto custo inicial de implantação:
              </Text.Body>
            </View>

            <Text.Body className="text-justify">
              A instalação de biodigestores e sistemas de purificação de biogás
              requer investimentos elevados, especialmente em pequena escala.
              Segundo o Ministério de Minas e Energia (MME, 2023), o custo
              inicial pode superar o retorno em até cinco anos, dependendo da
              tecnologia e do volume de resíduos disponíveis.
            </Text.Body>
          </View>

          {/* 2 */}
          <View className="flex-1">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="warning" size={24} color="#ef4444" />
              <Text.Body className="font-semibold">
                Necessidade de manejo adequado dos resíduos:
              </Text.Body>
            </View>

            <Text.Body className="text-justify">
              O processo exige controle rigoroso da temperatura, umidade e tipo
              de resíduo utilizado. A Embrapa (2022) alerta que o uso incorreto
              pode gerar odores desagradáveis e até contaminação do solo e da
              água por efluentes mal tratados.
            </Text.Body>
          </View>

          {/* 3 */}
          <View className="flex-1">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="warning" size={24} color="#ef4444" />
              <Text.Body className="font-semibold">
                Produção variável de energia:
              </Text.Body>
            </View>

            <Text.Body className="text-justify">
              A geração de biogás depende diretamente da quantidade e da
              qualidade dos resíduos orgânicos. Em épocas de baixa oferta, a
              produção de energia pode cair significativamente, o que torna o
              sistema menos previsível em comparação com fontes tradicionais
              (IEA Bioenergy, 2022).
            </Text.Body>
          </View>

          {/* 4 */}
          <View className="flex-1">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="warning" size={24} color="#ef4444" />
              <Text.Body className="font-semibold">
                Manutenção e operação especializadas:
              </Text.Body>
            </View>

            <Text.Body className="text-justify">
              O funcionamento eficiente do biodigestor requer acompanhamento
              técnico constante e manutenção periódica. Falhas operacionais
              podem comprometer a produção e causar emissões indesejadas de
              metano, um gás 28 vezes mais potente que o CO₂ em efeito estufa
              (IPCC, 2021).
            </Text.Body>
          </View>

          {/* 5 */}
          <View className="flex-1">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="warning" size={24} color="#ef4444" />
              <Text.Body className="font-semibold">
                Limitações logísticas:
              </Text.Body>
            </View>

            <Text.Body className="text-justify">
              O transporte de resíduos orgânicos e do biogás gerado pode ser
              economicamente inviável em regiões rurais ou distantes de centros
              consumidores, reduzindo a competitividade do biogás em relação a
              outras fontes energéticas (EPE, 2023).
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
