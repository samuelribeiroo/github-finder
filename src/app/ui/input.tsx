import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...attributes }: InputProps) {
  return (
    <>
      <input
        type="text"
        placeholder="Digite um usuário do Github"
        className={`input-style placeholder-black text-xl ${className}`}
        {...attributes}
      />
    </>
  );
}
