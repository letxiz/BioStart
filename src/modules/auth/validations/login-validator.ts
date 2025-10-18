import { z } from "zod";

const nonempty = "Este campo é obrigatório";
const emailInvalid = "E-mail inválido";

export const loginSchema = z.object({
  email: z.string().nonempty(nonempty).email(emailInvalid),
  password: z.string().nonempty(nonempty),
});

export type LoginValidator = z.infer<typeof loginSchema>;
