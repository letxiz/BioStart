import { useRouter } from "expo-router";
import { useState } from "react";

type SelectOption = {
  label: string;
  value: string;
};

export const useHomeModel = () => {
  const nav = useRouter();

  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");

  const [quantity, setQuantity] = useState("");

  const [current, setCurrent] = useState<SelectOption>({
    label: "",
    value: "",
  });

  const [result, setResult] = useState({
    volume: "",
    economy: "",
  });

  const handleCalcule = () => {
    const amount = Number(quantity.replace(",", "."));
    const factor = Number(current.value);
    if (!quantity.trim() || !Number.isFinite(amount) || amount <= 0 || !factor) {
      setError("Informe uma quantidade maior que zero e selecione o tipo de resíduo.");
      setVisible(false);
      return;
    }
    setError("");
    const kwhm3 = 6.5;
    const taxa = 0.9;

    const volume = amount * factor;
    const economy = volume * kwhm3 * taxa;
    setResult({ volume: volume.toFixed(2), economy: economy.toFixed(2) });
    setVisible(true);
  };

  const options: SelectOption[] = [
    { label: "Estrume animal", value: "0.03" },
    { label: "Restos de comida", value: "0.08" },
    { label: "Esgoto doméstico", value: "0.02" },
  ];

  const handleGoBack = () => nav.back();

  return {
    result,
    options,
    current,
    visible,
    error,
    setVisible,
    setCurrent,
    setQuantity,
    handleGoBack,
    handleCalcule,
  };
};
