import Image from "next/image";
import Link from "next/link"; 
import { Rocket, Monitor, Database, CheckCircle, ArrowRight, MessageCircle, Download, Play, CreditCard, Plus, Cpu, BookOpen, Calculator, Sparkles } from "lucide-react";

export default function HomePage() {
  
  // --- 🔧 CONFIGURACIÓN ---
  const whatsappNumber = "56978029612";
  const whatsappMessage = "Hola, estoy interesado en comenzar un proyecto.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // --- 💰 LINKS DE PAGO ---
  const MP_LANDING = "https://mpago.la/1PkGvpw";
  const MP_CORPORATIVA = "https://mpago.la/1jTd1WK";
  const MP_WEBAPP = "https://mpago.la/1q3A3Lf";

  const PP_LANDING = "https://www.paypal.com/ncp/payment/UY5HS6URTZRTC";
  const PP_CORPORATIVA = "https://www.paypal.com/ncp/payment/4N9KASGZWA7K6";
  const PP_WEBAPP = "https://www.paypal.com/ncp/payment/V8YLVMYSMA3UA";

  return (
    <main className="min-h-screen bg-white text-slate-900 relative">
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* LOGO + NOMBRE */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg shadow-sm">
                <Image 
                  src="/logo.png" 
                  alt="Logo webservice.lat" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                webservice.lat
              </span>
            </div>

            {/* MENÚ */}
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
              <Link href="#" className="hover:text-blue-600 transition-colors">Inicio</Link>
              <Link href="#precios" className="hover:text-blue-600 transition-colors">Planes</Link>
              <Link href="/blog/ia-webapps-2026" className="hover:text-blue-600 transition-colors">Blog</Link>
              
              {/* Enlace destacado en el menú */}
              <Link href="/cotizar" className="flex items-center gap-1 text-purple-600 hover:text-purple-700 font-bold transition-colors">
                <Calculator className="w-4 h-4" /> Cotizar IA
              </Link>
              
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
            <Link href="/cotizar" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-400"/>
              Cotizar con IA
            </Link>
            <a href="#precios" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 font-medium rounded-xl hover:bg-slate-50 transition-all">
              Ver Planes Fijos
            </a>
          </div>
        </div>
      </section>

      {/* --- VIDEO CINEMÁTICO --- */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden flex items-center justify-center bg-slate-900">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
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

      {/* --- 🔥 NUEVA SECCIÓN DESTACADA: COTIZADOR IA --- */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden relative">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-left md:w-1/2">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-6 text-white border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-300" /> Nueva Tecnología DeepSeek V3
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              ¿No sabes cuánto cuesta tu idea?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Dile adiós a esperar días por un presupuesto. Nuestra Inteligencia Artificial analiza tu proyecto y te da un plan y precio recomendado <strong>al instante</strong>.
            </p>
            <Link 
              href="/cotizar"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-xl shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-300"
            >
              <Calculator className="w-6 h-6" />
              Probar Cotizador IA Ahora
            </Link>
          </div>
          
          {/* Imagen ilustrativa (Simulación de chat) */}
          <div className="md:w-1/2 w-full">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex gap-4 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="bg-white/10 p-3 rounded-lg rounded-tl-none self-start w-3/4">
                  "Quiero una app tipo Uber para pasear perros..."
                </div>
                <div className="bg-blue-500 text-white p-3 rounded-lg rounded-tr-none self-end w-3/4 ml-auto shadow-lg">
                  ✅ Análisis Completado:<br/>
                  Plan Recomendado: <strong>WebApp a Medida</strong><br/>
                  Precio Estimado: <strong>$1,000 USD</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRECIOS --- */}
      <section id="precios" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">O Elige un Plan Fijo</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Precios transparentes. Pago único. Sin sorpresas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* PLAN 1: LANDING PAGE */}
            <div className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6"><Rocket className="w-7 h-7 text-blue-600" /></div>
              <h3 className="text-2xl font-bold text-slate-900">Landing Page</h3>
              <p className="text-slate-500 mt-2 text-sm h-10">Ideal para vender un producto específico.</p>
              <div className="my-6"><span className="text-4xl font-extrabold text-slate-900">$299</span><span className="text-slate-500 text-sm font-medium"> USD</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-3"/> Diseño en 1 sola página</li>
                <li className="flex items-center text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-3"/> Carga ultra rápida</li>
                <li className="flex items-center text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-3"/> Botón WhatsApp</li>
              </ul>
              <div className="space-y-3">
                <a href={MP_LANDING} target="_blank" className="block w-full text-center py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">Pagar con Mercado Pago</a>
                <a href={PP_LANDING} target="_blank" className="block w-full text-center py-3 bg-[#003087] text-white font-bold rounded-xl hover:bg-[#001c64] transition-colors text-sm">Pagar con PayPal</a>
              </div>
            </div>

            {/* PLAN 2: WEB CORPORATIVA */}
            <div className="relative p-8 rounded-3xl bg-slate-900 text-white shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col ring-4 ring-blue-500/20">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">POPULAR</div>
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6"><Monitor className="w-7 h-7 text-white" /></div>
              <h3 className="text-2xl font-bold">Web Corporativa</h3>
              <p className="text-slate-400 mt-2 text-sm h-10">Tu empresa en internet.</p>
              <div className="my-6"><span className="text-4xl font-extrabold text-white">$499</span><span className="text-slate-400 text-sm font-medium"> USD</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center text-slate-300 text-sm"><CheckCircle className="w-4 h-4 text-blue-400 mr-3"/> Hasta 5 secciones</li>
                <li className="flex items-center text-slate-300 text-sm"><CheckCircle className="w-4 h-4 text-blue-400 mr-3"/> Formulario contacto</li>
                <li className="flex items-center text-slate-300 text-sm"><CheckCircle className="w-4 h-4 text-blue-400 mr-3"/> SEO Básico</li>
              </ul>
              <div className="space-y-3">
                <a href={MP_CORPORATIVA} target="_blank" className="block w-full text-center py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/50">Pagar con Mercado Pago</a>
                <a href={PP_CORPORATIVA} target="_blank" className="block w-full text-center py-3 bg-slate-800 text-slate-200 font-bold rounded-xl hover:bg-slate-700 transition-colors text-sm border border-slate-700">Pagar con PayPal</a>
              </div>
            </div>

            {/* PLAN 3: WEB APP */}
            <div className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6"><Database className="w-7 h-7 text-purple-600" /></div>
              <h3 className="text-2xl font-bold text-slate-900">WebApp a Medida</h3>
              <p className="text-slate-500 mt-2 text-sm h-10">Sistemas avanzados y gestión de datos.</p>
              <div className="my-6"><span className="text-4xl font-extrabold text-slate-900">$1,000</span><span className="text-slate-500 text-sm font-medium"> USD+</span></div>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-purple-500 mr-3"/> Registro de Usuarios</li>
                <li className="flex items-center text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-purple-500 mr-3"/> Base de Datos Real</li>
                <li className="flex items-center text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-purple-500 mr-3"/> Panel Administrativo</li>
              </ul>
              
              {/* Link a Detalle de WebApp */}
              <div className="mb-6 text-center">
                  <Link href="/servicios/webapp" className="text-sm font-bold text-purple-600 hover:text-purple-700 hover:underline flex items-center justify-center gap-1">
                    <Plus className="w-4 h-4"/> Ver características y Stack
                  </Link>
              </div>

              <div className="space-y-3">
                <a href={MP_WEBAPP} target="_blank" className="block w-full text-center py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-colors">Pagar con Mercado Pago</a>
                <a href={PP_WEBAPP} target="_blank" className="block w-full text-center py-3 bg-[#003087] text-white font-bold rounded-xl hover:bg-[#001c64] transition-colors text-sm border border-slate-200">Pagar con PayPal</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- NUEVA SECCIÓN: BLOG PREVIEW --- */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
           <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all">
              <div className="flex-1">
                 <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">Nuevo Artículo</span>
                    <span className="text-slate-400 text-xs">Lectura de 3 min</span>
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-3">Cómo la IA está cambiando las WebApps en 2026</h3>
                 <p className="text-slate-600 mb-6">Descubre por qué las aplicaciones del futuro no solo guardan datos, sino que toman decisiones. Un análisis profundo sobre Gemini y la automatización empresarial.</p>
                 <Link href="/blog/ia-webapps-2026" className="text-blue-600 font-bold hover:underline flex items-center gap-2 group">
                    <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform"/>
                    Leer Artículo Completo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                 </Link>
              </div>
              
              {/* Icono decorativo del Blog */}
              <div className="hidden md:flex w-32 h-32 bg-slate-100 rounded-xl items-center justify-center">
                  <Cpu className="w-12 h-12 text-slate-400" />
              </div>
           </div>
        </div>
      </section>

      {/* --- LEAD MAGNET (Checklist) --- */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Recursos Gratuitos</h2>
          <p className="text-lg text-slate-600 mb-8">Empieza a optimizar tu negocio hoy mismo.</p>
          <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 inline-block w-full max-w-md">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 text-red-600"><Download className="w-8 h-8"/></div>
            <h3 className="font-bold text-xl mb-2">Checklist PDF 2025</h3>
            <p className="text-slate-500 text-sm mb-4">Las 7 cosas que tu web necesita para vender sola.</p>
            <a href="/checklist-2025.pdf" download className="block w-full py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
              <Download className="w-4 h-4"/> Descargar Ahora
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-white text-center">
        <p className="text-slate-500 text-sm">© 2025 webservice.lat.</p>
        <div className="mt-4 flex justify-center space-x-4 opacity-50 items-center">
           <span className="text-xs border px-2 py-1 rounded flex items-center gap-1"><CreditCard className="w-3 h-3"/> MercadoPago</span>
           <span className="text-xs border px-2 py-1 rounded flex items-center gap-1"><CreditCard className="w-3 h-3"/> PayPal</span>
        </div>
      </footer>

      {/* WHATSAPP */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 flex items-center gap-2 group border-4 border-white/30 backdrop-blur-sm">
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">¿Ayuda?</span>
      </a>
    </main>
  );
}