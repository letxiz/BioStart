import { useRegisterModel } from "./register-model";
import { RegisterView } from "./register-view";

export const RegisterViewModel = () => {
  const methods = useRegisterModel();

  return <RegisterView {...methods} />;
};
