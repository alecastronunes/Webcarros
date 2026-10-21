import { type RegisterOptions, type UseFormRegister } from "react-hook-form";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  error?: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
}

export function Input({
  type,
  placeholder,
  name,
  error,
  register,
  rules,
}: InputProps) {
  return (
    <div>
      <input
        className="w-full border rounded-md h-11 px-2 border-gray-400"
        placeholder={placeholder}
        type={type}
        {...register(name, rules)}
        id={name}
      />
      {error && <p className="my-1 mx-1 text-red-600">{error}</p>}
    </div>
  );
}
