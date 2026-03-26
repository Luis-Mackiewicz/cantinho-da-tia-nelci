import { MessageCircle } from "lucide-react";
import React from "react";

type WhatsappLinkProps = {
  variant?: "gradient" | "solid";
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const variants = {
  gradient: "bg-linear-to-r from-[#71071d] to-[#D70D37]",
  solid: "bg-primary text-white",
};

export default function WhatsappLink({
  variant = "gradient",
  className,
  ...props
}: WhatsappLinkProps) {
  const contact = `https://wa.me/5544997455986?text=Olá%20Nelcimara!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20trabalhos%20de%20costura%20criativa.%20Poderia%20me%20ajudar%3F`;

  return (
    <a
      href={contact}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className={`
        text-primary font-black p-2 w-full flex items-center justify-center gap-4
        cursor-pointer shadow-lg rounded-2xl transition duration-300 hover:scale-105
        ${variants[variant]}
        ${className ?? ""}
      `}
    >
      Whatsapp
      <MessageCircle />
    </a>
  );
}
