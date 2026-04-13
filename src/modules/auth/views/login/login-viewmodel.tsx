import { loginService } from "../../services";
import { useLoginModel } from "./login-model";
import { LoginView } from "./login-view";

export const LoginViewModel = () => {
  const methods = useLoginModel({ login: loginService });

  return <LoginView {...methods} />;
};
