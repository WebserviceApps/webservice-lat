"use client";

import { ArrowLeft, MessageCircle, Calculator, Sparkles, Check, Loader2, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cotizarConGemini } from "./actions";

export default function CotizadorPage() {
  const [idea, setIdea] = useState("");
  const [resultado, setResultado] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(""); // Nuevo estado para errores

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!idea) return;
    
    setLoading(true);
    setResultado(null);
    setErrorMsg(""); // Limpiamos errores previos

    try {
      const data = await cotizarConGemini(idea);
      if (data.error) {
         throw new Error(data.error); // Si el servidor devuelve error, lo lanzamos
      }
      setResultado(data);
    } catch (error: any) {
      console.error("Error en cliente:", error);
      // Mostramos el mensaje real que viene del servidor
      setErrorMsg(error.message || "Error desconocido al conectar con Gemini.");
    }
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <nav className="bg-white border-b border-slate-200 py-4">
        <div className="max-w-3xl mx-auto px-4 flex items-center gap-2">
          <Link href="/" className="text-slate-500 hover:text-blue-600 font-medium flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Volver
          </Link>
          <span className="font-bold text-slate-900">Cotizador IA</span>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
            <Sparkles className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-3">Describe tu idea</h1>
          <p className="text-slate-600">
            Nuestra Inteligencia Artificial analizará tus requerimientos y te dirá <br/> 
            exactamente qué plan necesitas y cuánto costará.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8">
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Ej: Hola, quiero una app tipo Uber para pasear perros, con GPS y pagos..."
            className="w-full h-32 p-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none text-lg mb-4"
          />
          
          {/* Mensaje de Error en Rojo */}
          {errorMsg && (
            <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-xl flex items-start gap-2 text-sm">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <div>
                <span className="font-bold">Ocurrió un problema:</span> {errorMsg}
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !idea}
            className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <><Loader2 className="w-5 h-5 animate-spin" /> Probando modelos de IA...</>
            ) : (
              <><Calculator className="w-5 h-5" /> Cotizar Ahora Gratis</>
            )}
          </button>
        </form>

        {resultado && (
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-blue-600 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-blue-600 p-6 text-white text-center">
              <p className="text-blue-100 font-medium mb-1">Plan Recomendado</p>
              <h2 className="text-3xl font-extrabold">{resultado.plan_recomendado}</h2>
              <div className="mt-2 text-5xl font-black tracking-tight">${resultado.precio} <span className="text-xl font-normal opacity-80">USD</span></div>
            </div>
            <div className="p-8">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">"{resultado.explicacion}"</p>
              <div className="bg-slate-50 rounded-xl p-5 mb-8">
                <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Incluye:</h3>
                <ul className="space-y-2">
                  {resultado.caracteristicas_clave?.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                      <Check className="w-5 h-5 text-green-500 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a 
                href={`https://wa.me/56978029612?text=Hola,%20coticé%20un%20${resultado.plan_recomendado}.%20Quiero%20empezar.`}
                target="_blank"
                className="block w-full py-4 bg-green-500 text-white font-bold text-center rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Empezar Proyecto
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}