import { useAdvantageModel } from "./advantage-model";
import { AdvantageView } from "./advantage-view";

export const AdvantageViewModel = () => {
  const methods = useAdvantageModel();

  return <AdvantageView {...methods} />;
};
