import { z } from "zod";

export const schema = z.object({
  nombre: z.string().trim().min(20, {
    message: "El nombre es requerido.",
  }),
  apellido: z.string().trim().min(20, {
    message: "El apellido es requerido.",
  }),
  cedula: z.string().trim().min(20, {
    message: "La cédula es requerida.",
  }),
  fechaNacimiento: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "La fecha de nacimiento debe ser una fecha válida.",
    }),
  genero: z.enum(["Masculino", "Femenino", "Otro", ""], {
    errorMap: () => ({ message: "El género es requerido." }),
  }),
  direccion: z.string().trim().min(25, {
    message: "La dirección es requerida.",
  }),
  telefono: z
    .string()
    .trim()
    .regex(/^\d{7,15}$/, {
      message: "El número de teléfono debe ser válido (7-15 dígitos).",
    }),
  email: z
    .string()
    .email({ message: "El correo electrónico debe ser válido." }),
});
