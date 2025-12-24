"use client";

import { useState } from "react";
import { Send, User, Bot } from "lucide-react";

interface ChatInterfaceProps {
  dict: {
    badge: string;
    title: string;
    description: string;
    cta: string;
    chat_user: string;
    chat_ai: string;
    chat_plan: string;
    chat_price: string;
  };
}

export default function ChatInterface({ dict }: ChatInterfaceProps) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([
    { 
      role: "ai", 
      text: `👋 ${dict.description}` 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // --- LÓGICA INTELIGENTE TEMPORAL (Simulación) ---
  // Esto simula lo que hará DeepSeek después.
  const getSmartResponse = (text: string) => {
    const lower = text.toLowerCase();

    // CASO 1: WebApp Compleja (Uber, Sistema, App, Login) -> $1,000+
    if (lower.includes("app") || lower.includes("sistema") || lower.includes("uber") || lower.includes("plataforma") || lower.includes("usuarios")) {
      return `Análisis: Requerimientos avanzados detectados.\n\nRecomendación: WebApp a Medida.\nPrecio estimado: Desde $1,000 USD.\nIncluye: Base de datos, gestión de usuarios y panel administrativo.`;
    }
    
    // CASO 2: Landing Page (Simple, una página, producto) -> $299
    if (lower.includes("landing") || lower.includes("una pagina") || lower.includes("un producto") || lower.includes("simple")) {
      return `Análisis: Proyecto enfocado en conversión rápida.\n\nRecomendación: Landing Page.\nPrecio fijo: $299 USD.\nIncluye: Diseño en 1 sola página, carga ultra rápida y botón de WhatsApp.`;
    }

    // CASO 3: Por defecto (Web Corporativa, Flores, Empresa) -> $499
    return `Análisis: Sitio web profesional para negocio.\n\nRecomendación: Web Corporativa.\nPrecio fijo: $499 USD.\nIncluye: Hasta 5 secciones (Inicio, Nosotros, Servicios), formulario de contacto y diseño premium.`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // 1. Mostrar mensaje usuario
    const userMessage = input;
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInput("");
    setIsLoading(true);

    try {
      // Simulación de "pensamiento" de la IA (1.5 segundos)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 2. Obtener respuesta inteligente basada en tus precios reales
      const aiResponse = getSmartResponse(userMessage);

      setMessages((prev) => [...prev, { role: "ai", text: aiResponse }]);

    } catch (error) {
      setMessages((prev) => [...prev, { role: "ai", text: "Error de conexión." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col h-[600px]">
          
      {/* Header del Chat */}
      <div className="bg-slate-900 p-4 flex items-center gap-3 shrink-0">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="ml-auto text-xs text-slate-400 font-mono">DeepSeek AI V3 (Demo)</div>
      </div>

      {/* Área de Mensajes */}
      <div className="flex-1 p-6 bg-slate-50 overflow-y-auto space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "ai" ? "bg-blue-600 text-white" : "bg-slate-300 text-white"}`}>
              {msg.role === "ai" ? <Bot size={16}/> : <User size={16}/>}
            </div>
            <div className={`p-4 rounded-2xl max-w-[85%] text-sm leading-relaxed shadow-sm whitespace-pre-line ${
              msg.role === "ai" 
                ? "bg-white text-slate-700 rounded-tl-none border border-slate-100" 
                : "bg-blue-600 text-white rounded-tr-none"
            }`}>
              {msg.text}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-3">
             <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white"><Bot size={16}/></div>
             <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 flex gap-1 items-center">
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></span>
             </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-100 shrink-0">
        <div className="relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={dict.chat_user}
            className="w-full pl-4 pr-12 py-4 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none text-slate-800"
            disabled={isLoading}
          />
          <button 
            type="submit" 
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>

    </div>
  );
}