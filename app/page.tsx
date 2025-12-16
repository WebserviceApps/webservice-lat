import { Rocket, Monitor, Database, CheckCircle, ArrowRight, MessageCircle, Download, Play } from "lucide-react";

export default function HomePage() {
  
  // --- 🔧 CONFIGURACIÓN ---
  const whatsappNumber = "56978029612";
  const whatsappMessage = "Hola, estoy interesado en comenzar un proyecto.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // --- 💰 LINKS DE PAGO (MERCADO PAGO) ---
  const LINK_PAGO_LANDING = "https://mpago.la/1PkGvpw";      // Plan $299
  const LINK_PAGO_CORPORATIVA = "https://mpago.la/1jTd1WK";  // Plan $499
  const LINK_PAGO_WEBAPP = "https://mpago.la/1q3A3Lf";       // Plan $1,000

  return (
    <main className="min-h-screen bg-white text-slate-900 relative">
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              webservice.lat
            </span>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
              <a href="#" className="hover:text-blue-600 transition-colors">Inicio</a>
              <a href="#precios" className="hover:text-blue-600 transition-colors">Planes</a>
              <a href={whatsappLink} target="_blank" className="hover:text-blue-600 transition-colors">Contacto</a>
            </div>
            <a 
              href={whatsappLink}
              target="_blank"
              className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all"
            >
              Consultar
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-16 px-4 text-center bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide">
            SOLUCIONES DIGITALES SIMPLES
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
            Llevamos tu Negocio <br/>
            <span className="text-blue-600">al Siguiente Nivel</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Sin complicaciones técnicas. Creamos desde páginas para vender un solo producto hasta sistemas completos para administrar tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#precios" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:-translate-y-1 transition-all">
              Ver Precios
            </a>
            <a 
              href={whatsappLink}
              target="_blank"
              className="px-8 py-4 bg-white text-slate-700 border border-slate-200 font-medium rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-green-600"/>
              Hablemos
            </a>
          </div>
        </div>
      </section>

      {/* --- VIDEO CINEMÁTICO (Veo 3.1) --- */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden flex items-center justify-center bg-slate-900">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/city-network.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50"></div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
             <Play className="w-6 h-6 text-white fill-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            El Mundo Digital No Duerme. <br/> Tu Negocio Tampoco Debería.
          </h2>
          <p className="text-lg text-slate-200 max-w-xl mx-auto">
            Infraestructura que trabaja 24/7. Automatización, ventas y presencia global mientras tú descansas.
          </p>
        </div>
      </section>

      {/* --- PRECIOS CON LINKS DE PAGO --- */}
      <section id="precios" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Elige tu Plan Ideal</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Precios transparentes. Pago único. Sin letras chicas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* PLAN 1: LANDING PAGE */}
            <div className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Landing Page</h3>
              <p className="text-slate-500 mt-2 text-sm h-10">Ideal para vender un producto específico o captar datos.</p>
              <div className="my-6">
                <span className="text-4xl font-extrabold text-slate-900">$299</span>
                <span className="text-slate-500 text-sm font-medium"> USD</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-3"/> Diseño en 1 sola página</li>
                <li className="flex items-center text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-3"/> Botones de WhatsApp</li>
                <li className="flex items-center text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-3"/> Carga ultra rápida</li>
              </ul>
              {/* BOTÓN DE PAGO */}
              <a href={LINK_PAGO_LANDING} target="_blank" className="block w-full text-center py-3 bg-slate-50 text-blue-700 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-colors border border-blue-100">
                Seleccionar
              </a>
            </div>

            {/* PLAN 2: WEB CORPORATIVA */}
            <div className="relative p-8 rounded-3xl bg-slate-900 text-white shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col ring-4 ring-blue-500/20">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">POPULAR</div>
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6"><Monitor className="w-7 h-7 text-white" /></div>
              <h3 className="text-2xl font-bold">Web Corporativa</h3>
              <p className="text-slate-400 mt-2 text-sm h-10">Tu empresa en internet. Muestra quién eres al mundo.</p>
              <div className="my-6">
                <span className="text-4xl font-extrabold text-white">$599</span>
                <span className="text-slate-400 text-sm font-medium"> USD</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center text-slate-300 text-sm"><CheckCircle className="w-4 h-4 text-blue-400 mr-3"/> Hasta 5 secciones</li>
                <li className="flex items-center text-slate-300 text-sm"><CheckCircle className="w-4 h-4 text-blue-400 mr-3"/> Formulario de contacto</li>
                <li className="flex items-center text-slate-300 text-sm"><CheckCircle className="w-4 h-4 text-blue-400 mr-3"/> Optimizado para Google (SEO)</li>
              </ul>
              {/* BOTÓN DE PAGO */}
              <a href={LINK_PAGO_CORPORATIVA} target="_blank" className="block w-full text-center py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/50">
                Seleccionar
              </a>
            </div>

            {/* PLAN 3: WEB APP */}
            <div className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6"><Database className="w-7 h-7 text-purple-600" /></div>
              <h3 className="text-2xl font-bold text-slate-900">WebApp a Medida</h3>
              <p className="text-slate-500 mt-2 text-sm h-10">Sistemas avanzados. Gestión de usuarios y datos.</p>
              <div className="my-6"><span className="text-4xl font-extrabold text-slate-900">$1,199</span><span className="text-slate-500 text-sm font-medium"> USD+</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-purple-500 mr-3"/> Registro y Login</li>
                <li className="flex items-center text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-purple-500 mr-3"/> Base de Datos</li>
                <li className="flex items-center text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-purple-500 mr-3"/> Pagos integrados</li>
              </ul>
              {/* BOTÓN DE PAGO */}
              <a href={LINK_PAGO_WEBAPP} target="_blank" className="block w-full text-center py-3 bg-slate-50 text-purple-700 font-bold rounded-xl hover:bg-purple-600 hover:text-white transition-colors border border-purple-100">
                Cotizar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- LEAD MAGNET (PDF) --- */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">¿No estás listo para comprar?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Descarga gratis nuestra guía exclusiva: <br/>
            <strong>"Checklist 2025: Las 7 cosas que tu web necesita para vender sola"</strong>.
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 inline-block w-full max-w-md">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 text-red-600">
              <Download className="w-8 h-8"/>
            </div>
            <h3 className="font-bold text-xl mb-2">Guía PDF Gratuita</h3>
            <p className="text-sm text-slate-500 mb-6">Lectura de 5 minutos. Ahorra miles de dólares en errores comunes.</p>
            <a 
              href="/checklist-2025.pdf" 
              download 
              className="block w-full py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4"/>
              Descargar Ahora
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-white text-center">
        <p className="text-slate-500 text-sm">© 2025 webservice.lat. Infraestructura de Confianza.</p>
        <div className="mt-4 flex justify-center space-x-4 opacity-50">
           <span className="text-xs border px-2 py-1 rounded">PayPal</span>
           <span className="text-xs border px-2 py-1 rounded">MercadoPago</span>
        </div>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 flex items-center gap-2 group border-4 border-white/30 backdrop-blur-sm">
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">¿Ayuda?</span>
      </a>
    </main>
  );
}