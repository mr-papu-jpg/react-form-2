import React from 'react';
// ⚠️ CORRECCIÓN CLAVE: Usamos 'import type' para todos los tipos de librerías externas
import type { UseFormRegister } from 'react-hook-form';
import type { LoginFormFields } from './form-logic'; // Importamos el tipo desde './form-logic'

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: keyof LoginFormFields;
  register: UseFormRegister<LoginFormFields>;
  error?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  register,
  error,
  type = 'text',
  ...rest
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}:</label>
      <input
        id={name}
        type={type}
        // Conexión con React Hook Form
        {...register(name)}
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        {...rest}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};


