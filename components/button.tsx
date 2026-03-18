import { MessageCircle } from "lucide-react";

export default function WhatsappLink() {
  const contact = `https://wa.me/5544997455986?text=Olá%20Nelcimara!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20trabalhos%20de%20costura%20criativa.%20Poderia%20me%20ajudar%3F`;

  return (
    <a
      href={contact}
      target="_blank"
      rel="noopener noreferrer"
      className="
      text-primary
      font-black
       p-2 
       w-full 
       flex 
       items-center 
       justify-center 
       gap-4
       bg-linear-to-r 
       from-[#71071d] 
       to-[#D70D37] 
       cursor-pointer 
       shadow-2xl 
       rounded-2xl 
       transition
       duration-300
      hover:scale-105"
    >
      Whatsapp
      <MessageCircle />
    </a>
  );
}
