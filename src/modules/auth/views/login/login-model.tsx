import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useRouter } from "expo-router";
import { loginSchema, LoginValidator } from "../../validations";

const defaultValues: LoginValidator = {
  email: "",
  password: "",
};

export const useLoginModel = () => {
  const nav = useRouter();

  const { control, handleSubmit } = useForm<LoginValidator>({
    mode: "all",
    defaultValues: defaultValues,
    resolver: zodResolver(loginSchema),
  });

  const enterDemo = () => nav.replace("/menu");
  const onSubmit = handleSubmit(enterDemo);

  const handleSignUp = () => nav.push("/register");

  return {
    nav,
    control,
    onSubmit,
    enterDemo,
    handleSignUp,
  };
};
