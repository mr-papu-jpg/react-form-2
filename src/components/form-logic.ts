import * as z from 'zod';

// ----------------------------------------------------
// 1. DEFINICIÓN DEL ESQUEMA ZOD
// ----------------------------------------------------
export const LoginSchema = z.object({
  username: z.string()
    .min(3, 'El nombre de usuario debe tener al menos 3 caracteres.'),
    
  email: z.string()
    .email('Formato de correo electrónico inválido.'),

  password: z.string().min(8, "La contrasenia debe tener al menos 8 caracteres"),
  confirmPassword: z.string(),
  rememberMe: z.boolean().default(false),
})
.refine((data)=> data.password === data.confirmPassword, {
	message: "Las contrasenias no coinciden.",
	path: ["confirmPassword"],
});

// ----------------------------------------------------
// 2. INFERENCIA DE TIPOS (EXPORTACIÓN EXPLÍCITA DE TIPO)
// ----------------------------------------------------
// Usamos 'export type' para asegurar que el compilador sepa que solo es un TIPO
export type LoginFormFields = z.infer<typeof LoginSchema>;
