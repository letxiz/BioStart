import { useLoginModel } from "./login-model";
import { LoginView } from "./login-view";

export const LoginViewModel = () => {
  const methods = useLoginModel();

  return <LoginView {...methods} />;
};
