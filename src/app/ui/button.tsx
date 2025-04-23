import { Search } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ className, ...attributes }: ButtonProps) {
  return (
    <>
    <button
      className={`button-form-style ${className}`}    
      {...attributes}
    >
      <Search className="size-6"/>
    </button>
    </>
  )
}