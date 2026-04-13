import { Button, Text } from "@/components";
import { ActionButton, AppBar } from "@/components/AppBar";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, ScrollView, StatusBar, View } from "react-native";
import { CompletedDialog, CompletedFlag } from "../../components";
import { useAdvantageModel } from "./advantage-model";

export const AdvantageView = (
  methods: ReturnType<typeof useAdvantageModel>,
) => {
  const { visible, advantage, handleGoBack, handleCompleted, handleDialog } =
    methods;

  return (
    <View className="flex-1 bg-zinc-50">
      <StatusBar backgroundColor="#22c55e" />
      <AppBar
        title="Vantagens do Biogás"
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
            completed={advantage}
          />

          <Image
            source={require("@/assets/images/biogas-advantages.jpg")}
            className="h-60 w-full"
            resizeMode="cover"
          />
        </View>

        <View className="gap-4 px-5 py-5">
          <Text.Title>Vantagens do Biogás</Text.Title>

          {/* 1 */}
          <View className="flex-1">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="check-box" size={24} color="#22c55e" />
              <Text.Body className="font-semibold">
                Fonte de energia limpa e renovável:
              </Text.Body>
            </View>

            <Text.Body className="text-justify">
              O biogás é uma fonte de energia renovável, gerada a partir de
              resíduos orgânicos como esterco, restos de alimentos e esgoto. Sua
              produção reduz a dependência de combustíveis fósseis e não
              contribui para o aumento líquido de dióxido de carbono (CO₂) na
              atmosfera, pois utiliza carbono já presente no ciclo biológico.
              <Text.Body>(Fonte: IEA Bioenergy, 2023)</Text.Body>
            </Text.Body>
          </View>

          {/* 2 */}
          <View className="flex-1">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="check-box" size={24} color="#22c55e" />
              <Text.Body className="font-semibold">
                Redução de gases de efeito estufa:
              </Text.Body>
            </View>

            <Text.Body className="text-justify">
              A decomposição natural de resíduos libera **metano (CH₄) um
              gás 28 vezes mais potente que o CO₂ em termos de aquecimento
              global. Ao capturar e queimar o metano no processo de geração de
              biogás, evita-se sua liberação direta na atmosfera, contribuindo
              para a mitigação das mudanças climáticas.
              <Text.Body>(Fonte: IPCC, 2021; Embrapa, 2022)</Text.Body>
            </Text.Body>
          </View>

          {/* 3 */}
          <View className="flex-1">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="check-box" size={24} color="#22c55e" />
              <Text.Body className="font-semibold">
                Gestão sustentável de resíduos:
              </Text.Body>
            </View>

            <Text.Body className="text-justify">
              O biogás transforma resíduos orgânicos como dejetos animais e
              restos agrícolasem energia útil. Isso reduz o volume de lixo
              destinado a aterros e evita contaminação do solo e da água. Além
              disso, o material resultante do processo, chamado digestato,
              pode ser usado como fertilizante natural rico em nutrientes.
              <Text.Body>(Fonte: Embrapa, 2022)</Text.Body>
            </Text.Body>
          </View>

          {/* 4 */}
          <View className="flex-1">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="check-box" size={24} color="#22c55e" />
              <Text.Body className="font-semibold">
                Independência energética local:
              </Text.Body>
            </View>

            <Text.Body className="text-justify">
              O biogás pode ser produzido e consumido no próprio local de
              geração, como fazendas, cooperativas e pequenas indústrias. Isso
              reduz custos com transporte e aumenta a autossuficiência
              energética de comunidades rurais e municípios.
              <Text.Body>(Fonte: EPE/MME, 2023)</Text.Body>
            </Text.Body>
          </View>

          {/* 5 */}
          <View className="flex-1">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="check-box" size={24} color="#22c55e" />
              <Text.Body className="font-semibold">
                Geração de empregos e desenvolvimento regional:
              </Text.Body>
            </View>

            <Text.Body className="text-justify">
              A cadeia do biogás envolve atividades de engenharia, transporte,
              manutenção e gestão ambiental, gerando empregos diretos e
              indiretos. O setor tem sido um importante motor para o
              desenvolvimento sustentável, especialmente em regiões rurais do
              Brasil.
              <Text.Body>(Fonte: IRENA, 2023)</Text.Body>
            </Text.Body>
          </View>

          {/* 6 */}
          <View className="flex-1">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="check-box" size={24} color="#22c55e" />
              <Text.Body className="font-semibold">
                Produção de biometano:
              </Text.Body>
            </View>

            <Text.Body className="text-justify">
              Após purificação, o biogás se transforma em biometano, que
              possui a mesma qualidade do gás natural e pode ser usado em
              veículos, indústrias e redes de distribuição urbana. Essa
              substituição reduz a pegada de carbono e diversifica a matriz
              energética nacional.
              <Text.Body>(Fonte: MME, 2023)</Text.Body>
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
