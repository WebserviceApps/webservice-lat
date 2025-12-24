"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface WhatsAppFloatProps {
  lang: "es" | "en" | "pt";
}

export default function WhatsAppFloat({ lang }: WhatsAppFloatProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const messages = {
    es: {
      text: "Hola, estoy visitando webservice.lat y me gustaría recibir asesoría sobre un proyecto web.",
      tooltip: "¿Necesitas ayuda?",
      status: "En línea"
    },
    en: {
      text: "Hello, I am visiting webservice.lat and I would like advice on a web project.",
      tooltip: "Need help?",
      status: "Online"
    },
    pt: {
      text: "Olá, estou visitando webservice.lat e gostaria de assessoria sobre um projeto web.",
      tooltip: "Precisa de ajuda?",
      status: "Online"
    }
  };

  const content = messages[lang] || messages.es;
  const phoneNumber = "56978029612"; 
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(content.text)}`;

  if (!isVisible) return null;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      <div className="hidden md:flex flex-col items-end mr-2 transition-all duration-300 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
        <div className="bg-white px-4 py-2 rounded-xl shadow-xl border border-slate-100 mb-1">
          <p className="text-sm font-bold text-slate-700">{content.tooltip}</p>
        </div>
        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          {content.status}
        </span>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 duration-1000"></div>
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 border-4 border-white/20 backdrop-blur-sm">
          <MessageCircle className="w-8 h-8 fill-current" />
        </div>
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
          1
        </div>
      </div>
    </a>
  );
}