import { useLearnStore } from "@/store";
import { Href, useRouter } from "expo-router";
import { useState } from "react";

export const useDisadvantageModel = () => {
  const nav = useRouter();
  const { disadvantage, setLearn } = useLearnStore();

  const [visible, setVisible] = useState(false);

  const handleGoBack = () => nav.back();

  const handleToNavigate = (value: Href) => nav.push(value);

  const handleDialog = () => setVisible(!visible);

  const handleCompleted = () => {
    setLearn("disadvantage", true);
    nav.back();
  };

  return {
    disadvantage,
    visible,
    setVisible,
    handleGoBack,
    handleToNavigate,
    handleCompleted,
    handleDialog,
  };
};
