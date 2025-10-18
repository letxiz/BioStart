import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useRouter } from "expo-router";
import { LoginParams } from "../../interfaces";
import { loginSchema, LoginValidator } from "../../validations";

type Props = {
  login: (params: LoginParams) => Promise<any>;
};

const defaultValues: LoginValidator = {
  email: "",
  password: "",
};

export const useLoginModel = ({ login }: Props) => {
  const nav = useRouter();

  const { control, handleSubmit } = useForm<LoginValidator>({
    mode: "all",
    defaultValues: defaultValues,
    resolver: zodResolver(loginSchema),
  });

  // const onSubmit = handleSubmit((data) => login(data));

  const onSubmit = handleSubmit((data) => {
    nav.replace("/menu");
    console.log(data);
  });

  const handleSignUp = () => nav.push("/register");

  return {
    nav,
    control,
    onSubmit,
    handleSignUp,
  };
};
