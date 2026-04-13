import { useBiogasModel } from "./biogas-model";
import { BiogasView } from "./biogas-view";

export const BiogasViewModel = () => {
  const methods = useBiogasModel();

  return <BiogasView {...methods} />;
};
