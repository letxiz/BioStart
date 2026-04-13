import z from "zod";

export const registerSchema = z.object({});

export type RegisterValidator = z.infer<typeof registerSchema>;
