import { Href } from "expo-router";

type Props = {
  image: string;
  icon: string;
  title: string;
  description: string;
  route: Href;
  path: string;
};

export const biogasItem: Props = {
  image: require("@/assets/images/biogas-info.jpg"),
  icon: "info",
  title: "O que é Biogás?",
  description:
    "Entenda o processo de produção e a ciência por trás desta fonte de energia...",
  route: "/learn/biogas",
  path: "biogas",
};
export const advantageItem: Props = {
  image: require("@/assets/images/biogas-advantages.jpg"),
  icon: "language",
  title: "Vantagens do Biogás",
  description:
    "Descubra os benefícios ambientais e econômicos da produção de biogás com...",
  route: "/learn/advantage",
  path: "advantage",
};
export const curiosityItem: Props = {
  image: require("@/assets/images/biogas-curiosities.jpg"),
  icon: "star",
  title: "Curiosidades sobre o Biogás",
  description:
    "Fatos interessantes e surpreendentes sobre a produção e uso do biogás no mundo",
  route: "/learn/curiosity",
  path: "curiosity",
};
export const disadvantageItem: Props = {
  image: require("@/assets/images/biogas-disadvantages.jpg"),
  icon: "warning",
  title: "Desvantagens do Biogás",
  description:
    "Conheça os desafios e limitações na implementação de sistemas de biogás",
  route: "/learn/disadvantage",
  path: "disadvantage",
};
