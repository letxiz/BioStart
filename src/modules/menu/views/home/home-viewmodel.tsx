import { useHomeModel } from "./home-model";
import { HomeView } from "./home-view";

export const HomeviewModel = () => {
  const methods = useHomeModel();

  return <HomeView {...methods} />;
};
