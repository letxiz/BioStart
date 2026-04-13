import { useCuriosityModel } from "./curiosity-model";
import { CuriosityView } from "./curiosity-view";

export const CuriosityViewModel = () => {
  const methods = useCuriosityModel();

  return <CuriosityView {...methods} />;
};
