import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Share2, MessageCircle } from "lucide-react";

export default function BlogPost() {
  const whatsappLink = "https://wa.me/56978029612?text=Hola,%20leí%20su%20artículo%20sobre%20IA%20y%20WebApps.%20Me%20interesa%20saber%20más.";

  return (
    <main className="min-h-screen bg-white text-slate-900">
      
      {/* NAVBAR */}
      <nav className="border-b border-slate-100 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Volver
          </Link>
          <span className="font-bold text-slate-900">Blog webservice.lat</span>
        </div>
      </nav>

      {/* ARTÍCULO */}
      <article className="max-w-3xl mx-auto px-4 py-16">
        
        {/* Encabezado */}
        <header className="mb-12 text-center">
          <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold tracking-wide mb-4">
            TENDENCIAS 2026
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Cómo la IA está cambiando las WebApps en 2026
          </h1>
          <div className="flex items-center justify-center gap-6 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" /> <span>Experto en Desarrollo Web</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> <span>Diciembre 2025</span>
            </div>
          </div>
        </header>

        {/* Contenido Principal */}
        <div className="prose prose-lg prose-slate mx-auto text-slate-700 leading-relaxed">
          
          <p className="text-xl text-slate-500 font-light mb-8 border-l-4 border-blue-500 pl-4 italic">
            "En 2026, las WebApps han dejado de ser simples interfaces conectadas a bases de datos. Hoy son sistemas inteligentes capaces de ejecutar procesos empresariales completos." [cite: 245, 246]
          </p>

          <p className="mb-6">
            La Inteligencia Artificial —y en particular los modelos avanzados accesibles vía APIs como Gemini— se ha convertido en el nuevo backend cognitivo de las aplicaciones web modernas. [cite: 247]
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">De WebApps tradicionales a WebApps cognitivas</h2>
          <p className="mb-6">
            Hasta hace pocos años, una WebApp típica seguía un patrón rígido: el usuario ingresaba datos, el backend validaba reglas fijas y se ejecutaba una acción. [cite: 253, 254, 255, 256]
          </p>
          <p className="mb-6">
            En 2026, este flujo ha evolucionado. Ahora el sistema recibe información estructurada y no estructurada, la IA entiende la intención y el contexto, y la WebApp decide y actúa de forma autónoma. [cite: 257, 258, 259, 260]
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Structured Outputs: Ordenando el Caos</h2>
          <p className="mb-6">
            Uno de los mayores problemas históricos era la imprevisibilidad de las respuestas de la IA. Los <strong>Structured Outputs</strong> permiten definir esquemas estrictos (JSON) que Gemini debe respetar. [cite: 264, 267]
          </p>
          <div className="bg-slate-900 text-slate-300 p-6 rounded-xl font-mono text-sm mb-6">
            <p className="text-green-400 mb-2">// Ejemplo de respuesta estructurada</p>
            {"{"} <br/>
            &nbsp;&nbsp;"cliente": "Empresa XYZ", <br/>
            &nbsp;&nbsp;"nivel_riesgo": "alto", <br/>
            &nbsp;&nbsp;"accion_recomendada": "escalar_a_legal" <br/>
            {"}"} [cite: 275, 277, 278, 279]
          </div>
          <p className="mb-6">
            Esto transforma a la IA en un componente determinístico, permitiendo orquestar flujos de negocio y reducir errores operativos sin intervención humana. [cite: 268, 282, 283, 284]
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Multimodal Understanding: Entendiendo el Mundo Real</h2>
          <p className="mb-6">
            Las empresas no trabajan solo con texto. Trabajan con PDFs, imágenes, videos y audio. [cite: 287, 288, 289, 290]
          </p>
          <p className="mb-6">
            Una WebApp moderna puede leer una factura escaneada, escuchar una llamada de soporte y analizar un contrato adjunto simultáneamente para tomar una decisión unificada. [cite: 296, 297, 298, 299]
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Casos Reales de Automatización:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Onboarding:</strong> Documentos + Selfies + Formularios. [cite: 302]</li>
            <li><strong>Gestión de Siniestros:</strong> Fotos del daño + Descripción + Póliza. [cite: 302]</li>
            <li><strong>Control de Calidad:</strong> Imágenes de productos + Checklist. [cite: 302]</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Conclusión</h2>
          <p className="mb-8">
            En 2026, la pregunta ya no es si usar IA, sino cómo integrarla. Las WebApps del futuro no solo muestran información: operan negocios. Quienes diseñen sus plataformas con esta mentalidad hoy, liderarán el mercado. [cite: 318, 325, 326]
          </p>

        </div>

        {/* Call to Action Final */}
        <div className="mt-16 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">¿Quieres una WebApp Cognitiva?</h3>
          <p className="text-blue-700 mb-6 max-w-lg mx-auto">
            En webservice.lat implementamos estas tecnologías hoy. No esperes al 2026 para automatizar tu empresa.
          </p>
          <a 
            href={whatsappLink}
            target="_blank"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar Asesoría Técnica
          </a>
        </div>

      </article>
    </main>
  );
}