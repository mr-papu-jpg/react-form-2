import { useForm } from 'react-hook-form';
// ⚠️ CORRECCIÓN CLAVE: Usamos 'import type' para los tipos de RHF
import type { SubmitHandler } from 'react-hook-form'; 
import { zodResolver } from '@hookform/resolvers/zod';

import { InputField } from './InputField';
// ⚠️ CORRECCIÓN CLAVE: Usamos 'type' en la importación inline para el tipo
import { LoginSchema, type LoginFormFields } from './form-logic'; 

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormFields>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      rememberMe: false,
    },
  });

  const onSubmit: SubmitHandler<LoginFormFields> = (data) => {
    console.log('✅ Login exitoso:', data);
    alert('Login exitoso! Revisa la consola para ver los datos.');
    reset(); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 bg-white shadow-lg rounded-lg max-w-sm w-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Iniciar Sesión</h2>
      
      <InputField
        label="Nombre de Usuario"
        name="username"
        register={register}
        error={errors.username?.message}
      />
      
      <InputField
        label="Correo Electrónico"
        name="email"
        type="email"
        register={register}
        error={errors.email?.message}
      />

      <InputField
	label="Contrasenia"
	name="password"
	type="password"
	register={register}
	error={errors.passwrod?.message}
      />

      <InputField
	label="Confirmar contrasenia"
	name="confirmPassword"
	type="confirmPassword"
	register={register}
	error={errors.confirmPassword?.message}
      />

      <div className="flex items-center mb-6">
        <input
          id="rememberMe"
          type="checkbox"
          {...register('rememberMe')}
          className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
        <label htmlFor="rememberMe" className="text-sm text-gray-700">Recordarme</label>
      </div>

      <button 
        type="submit" 
        className="w-full bg-blue-600 text-white p-2 rounded-md font-semibold hover:bg-blue-700 transition duration-150"
      >
        Entrar
      </button>
    </form>
  );
};


