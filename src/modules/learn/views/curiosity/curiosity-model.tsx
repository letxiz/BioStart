import { useLearnStore } from "@/store";
import { Href, useRouter } from "expo-router";
import { useState } from "react";

export const useCuriosityModel = () => {
  const nav = useRouter();
  const { curiosity, setLearn } = useLearnStore();

  const [visible, setVisible] = useState(false);

  const handleGoBack = () => nav.back();

  const handleToNavigate = (value: Href) => nav.push(value);

  const handleDialog = () => setVisible(!visible);

  const handleCompleted = () => {
    setLearn("curiosity", true);
    nav.back();
  };

  return {
    curiosity,
    visible,
    setVisible,
    handleGoBack,
    handleToNavigate,
    handleCompleted,
    handleDialog,
  };
};
