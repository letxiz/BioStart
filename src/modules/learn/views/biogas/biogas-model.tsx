import { useLearnStore } from "@/store";
import { Href, useRouter } from "expo-router";
import { useState } from "react";

export const useBiogasModel = () => {
  const nav = useRouter();
  const { biogas, setLearn } = useLearnStore();

  const [visible, setVisible] = useState(false);

  const handleGoBack = () => nav.back();

  const handleToNavigate = (value: Href) => nav.push(value);

  const handleDialog = () => setVisible(!visible);

  const handleCompleted = () => {
    setLearn("biogas", true);
    nav.back();
  };

  return {
    biogas,
    visible,
    setVisible,
    handleGoBack,
    handleToNavigate,
    handleCompleted,
    handleDialog,
  };
};
