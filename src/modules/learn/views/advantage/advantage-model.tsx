import { useLearnStore } from "@/store";
import { Href, useRouter } from "expo-router";
import { useState } from "react";

export const useAdvantageModel = () => {
  const nav = useRouter();
  const { advantage, setLearn } = useLearnStore();

  const [visible, setVisible] = useState(false);

  const handleGoBack = () => nav.back();

  const handleToNavigate = (value: Href) => nav.push(value);

  const handleDialog = () => setVisible(!visible);

  const handleCompleted = () => {
    setLearn("advantage", true);
    nav.back();
  };

  return {
    visible,
    advantage,
    setVisible,
    handleGoBack,
    handleToNavigate,
    handleCompleted,
    handleDialog,
  };
};
