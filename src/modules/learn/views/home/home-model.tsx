import { Href, useRouter } from "expo-router";
import { useState } from "react";

export const useHomeModel = () => {
  const nav = useRouter();

  const [visible, setVisible] = useState(false);

  const handleGoBack = () => nav.back();

  const handleToNavigate = (value: Href) => nav.push(value);

  return {
    visible,
    setVisible,
    handleGoBack,
    handleToNavigate,
  };
};
