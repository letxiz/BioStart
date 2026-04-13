import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { registerSchema, RegisterValidator } from "../../validations";

const defaultValues: RegisterValidator = {};

export const useRegisterModel = () => {
  const nav = useRouter();

  const { control, handleSubmit } = useForm<RegisterValidator>({
    mode: "all",
    defaultValues: defaultValues,
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  const handleGoBack = () => nav.back();

  const handleRegister = () => nav.navigate("/");

  return {
    nav,
    control,
    onSubmit,
    handleGoBack,
    handleRegister,
  };
};
