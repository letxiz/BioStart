import { useDisadvantageModel } from "./disadvantage-model";
import { DisadvantageView } from "./disadvantage-view";

export const DisadvantageViewModel = () => {
  const methods = useDisadvantageModel();

  return <DisadvantageView {...methods} />;
};
