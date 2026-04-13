import { useRouter } from "expo-router";

export const useHomeModel = () => {
  const nav = useRouter();

  const handleGoBack = () => nav.back();

  return {
    handleGoBack,
  };
};
