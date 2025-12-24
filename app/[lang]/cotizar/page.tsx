import { getDictionary } from "../../get-dictionary";
import { Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ChatInterface from "../../components/ChatInterface"; // 👈 Importamos el chat

export default async function CotizarPage({
  params,
}: {
  params: Promise<{ lang: "es" | "en" | "pt" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Botón Volver */}
        <Link 
          href={`/${lang}`} 
          className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> {dict.navbar.home}
        </Link>

        {/* Encabezado */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm mb-4">
            <Sparkles className="w-8 h-8 text-blue-600 fill-blue-100" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            {dict.deepseek_section.title}
          </h1>
          <p className="text-lg text-slate-600">
            {dict.deepseek_section.description}
          </p>
        </div>

        {/* Invocamos al Chat Interactivo pasándole los textos */}
        <ChatInterface dict={dict.deepseek_section} />

      </div>
    </main>
  );
}