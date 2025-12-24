"use client";

import { useState } from "react";
import { Send, User, Bot } from "lucide-react";

interface ChatInterfaceProps {
  dict: any; // Simplificamos el tipo para evitar errores
  lang: "es" | "en" | "pt";
}

export default function ChatInterface({ dict, lang }: ChatInterfaceProps) {
  const [input, setInput] = useState("");
  
  // Guardamos el historial completo aquí
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([
    { 
      role: "ai", 
      text: `👋 ${dict.description}` 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessageText = input;
    setInput("");
    setIsLoading(true);

    // 1. Actualizamos la interfaz visual inmediatamente
    const newHistory = [...messages, { role: "user" as const, text: userMessageText }];
    setMessages(newHistory);

    try {
      // 2. Preparamos los mensajes para enviar a la API
      // Transformamos "text" a "content" que es lo que entiende OpenAI/DeepSeek
      const apiMessages = newHistory.map(msg => ({
        role: msg.role === 'ai' ? 'assistant' : 'user',
        content: msg.text
      }));

      // 3. LLAMADA A TU API REAL (Ya no es simulación)
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: apiMessages, // Enviamos TODO el historial para tener contexto
          lang: lang 
        }),
      });

      if (!response.ok) throw new Error('Error en la red');

      const data = await response.json();
      
      // 4. Agregamos la respuesta real de DeepSeek
      setMessages((prev) => [...prev, { role: "ai", text: data.response }]);

    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: "ai", text: "Error de conexión. Intenta nuevamente." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col h-[600px]">
      {/* Header */}
      <div className="bg-slate-900 p-4 flex items-center gap-3 shrink-0">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="ml-auto text-xs text-slate-400 font-mono">DeepSeek AI V3 (Live)</div>
      </div>

      {/* Chat Area */}
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