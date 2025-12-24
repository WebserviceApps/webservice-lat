import Image from "next/image";
import { CheckCircle, Database, Server, ShieldCheck, Cpu, Code2, ArrowLeft, MessageCircle, CreditCard } from "lucide-react";

export default function WebAppPage() {
  
  // --- CONFIGURACIÓN DE CONTACTO Y PAGOS ---
  const whatsappNumber = "56978029612";
  const whatsappMessage = "Hola, me interesa el servicio de WebApp Pro."; 
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const MP_WEBAPP = "https://mpago.la/1q3A3Lf";
  const PP_WEBAPP = "https://www.paypal.com/ncp/payment/V8YLVMYSMA3UA";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* --- NAVBAR SIMPLE --- */}
      <nav className="bg-white border-b border-slate-200 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" /> Volver al Inicio
          </a>
          <div className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            WebApp Pro
          </div>
        </div>
      </nav>

      {/* --- HEADER --- */}
      <header className="bg-slate-900 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block mb-6 px-4 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold border border-purple-500/30">
            ALTO RENDIMIENTO
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Aplicaciones Web que <br/> <span className="text-purple-400">Escalan tu Negocio</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            No es solo una página web. Es un sistema operativo para tu empresa. Gestión de usuarios, bases de datos en tiempo real y automatización con IA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pagar" className="px-8 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-500 transition-all shadow-lg shadow-purple-600/30">
              Comenzar Proyecto ($1,000)
            </a>
          </div>
        </div>
      </header>

      {/* --- EL STACK TECNOLÓGICO --- */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Tecnología de Clase Mundial</h2>
            <p className="text-slate-600 mt-2">Usamos el mismo stack que empresas como Netflix, Uber y Notion.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-purple-200 transition-all">
              <Code2 className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Next.js 14 (App Router)</h3>
              <p className="text-sm text-slate-600">El framework de React más rápido del mercado. SEO nativo y carga instantánea.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-purple-200 transition-all">
              <Database className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Base de Datos PostgreSQL</h3>
              <p className="text-sm text-slate-600">Almacenamiento seguro y escalable. Tus datos están respaldados diariamente.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-purple-200 transition-all">
              <ShieldCheck className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Autenticación Segura</h3>
              <p className="text-sm text-slate-600">Login con Google, Email o Magic Links. Protección total de usuarios.</p>
            </div>
            {/* Feature 4 */}
            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-purple-200 transition-all">
              <Cpu className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Integración IA (Gemini)</h3>
              <p className="text-sm text-slate-600">Conectamos tu app con Google Gemini para analizar datos o crear contenido.</p>
            </div>
             {/* Feature 5 */}
             <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-purple-200 transition-all">
              <Server className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Hosting Serverless</h3>
              <p className="text-sm text-slate-600">Sin servidores que mantener. Escalado automático según tu tráfico.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- DETALLES Y PROCESO --- */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">¿Qué incluye tu inversión?</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
              <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg">Panel de Administración (Dashboard)</h4>
                <p className="text-slate-600">Una zona privada donde tú (el administrador) puedes ver métricas, gestionar usuarios y editar contenido sin saber programar.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
              <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg">Pasarela de Pagos Integrada</h4>
                <p className="text-slate-600">Conectamos Stripe, Mercado Pago o PayPal para que cobres suscripciones o ventas únicas automáticamente.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
              <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg">Diseño UI/UX Personalizado</h4>
                <p className="text-slate-600">Nada de plantillas genéricas. Diseñamos una interfaz pensada en la experiencia de tus usuarios.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ZONA DE PAGO --- */}
      <section id="pagar" className="py-20 px-4 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Comienza tu Desarrollo Hoy</h2>
          <p className="text-lg text-slate-600 mb-8">
            El pago es único. Sin mensualidades ocultas. <br/>
            Incluye 1 mes de soporte técnico gratuito post-lanzamiento.
          </p>
          
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 max-w-md mx-auto">
            <div className="flex justify-between items-end mb-6 border-b border-slate-200 pb-6">
              <span className="text-slate-600 font-medium">Inversión Total</span>
              <span className="text-4xl font-extrabold text-slate-900">$1,000 USD</span>
            </div>
            
            <div className="space-y-4">
              <a href={MP_WEBAPP} target="_blank" className="flex items-center justify-center gap-3 w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
                <CreditCard className="w-5 h-5"/> Pagar con Mercado Pago
              </a>
              <a href={PP_WEBAPP} target="_blank" className="flex items-center justify-center gap-3 w-full py-4 bg-[#003087] text-white font-bold rounded-xl hover:bg-[#001c64] transition-colors">
                <CreditCard className="w-5 h-5"/> Pagar con PayPal
              </a>
              <div className="text-xs text-slate-400 mt-4">
                Pagos 100% seguros y encriptados.
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-slate-500 mb-4">¿Tienes dudas técnicas antes de pagar?</p>
            <a href={whatsappLink} target="_blank" className="inline-flex items-center gap-2 text-green-600 font-bold hover:underline">
              <MessageCircle className="w-5 h-5"/> Chatear con un Ingeniero
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}