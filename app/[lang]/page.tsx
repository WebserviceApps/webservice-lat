import Image from "next/image";
import Link from "next/link"; 
import { Rocket, Monitor, Database, CheckCircle, MessageCircle, CreditCard, Plus, Calculator, Sparkles } from "lucide-react";
import { getDictionary } from "../get-dictionary";

// Definimos el tipo
type ValidLocale = "es" | "en" | "pt";

export default async function HomePage({ 
  params 
}: { 
  // ⚠️ CAMBIO: Usamos string
  params: Promise<{ lang: string }> 
}) {
  const { lang } = await params;
  // ⚠️ CAMBIO: Forzamos el tipo
  const validLang = lang as ValidLocale;
  const dict = await getDictionary(validLang);

  const whatsappLink = "https://wa.me/56978029612";
  
  // Links de pago
  const MP_LANDING = "https://mpago.la/1PkGvpw";
  const MP_CORPORATIVA = "https://mpago.la/1jTd1WK";
  const MP_WEBAPP = "https://mpago.la/1q3A3Lf";
  const PP_LANDING = "https://www.paypal.com/ncp/payment/UY5HS6URTZRTC";
  const PP_CORPORATIVA = "https://www.paypal.com/ncp/payment/4N9KASGZWA7K6";
  const PP_WEBAPP = "https://www.paypal.com/ncp/payment/V8YLVMYSMA3UA";

  return (
    <main className="min-h-screen bg-white text-slate-900 relative">
      
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-16 px-4 text-center bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide">
            {dict.hero.badge}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
            {dict.hero.title_start} <br/>
            <span className="text-blue-600">{dict.hero.title_end}</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {dict.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${validLang}/cotizar`} className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-400"/>
              {dict.hero.cta_primary}
            </Link>
            <a href="#precios" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 font-medium rounded-xl hover:bg-slate-50 transition-all">
              {dict.hero.cta_secondary}
            </a>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN VIDEO --- */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden flex items-center justify-center bg-slate-900">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
          <source src="/city-network.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50"></div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {dict.video_section.title}
          </h2>
          <p className="text-lg text-slate-200 max-w-xl mx-auto">
            {dict.video_section.subtitle}
          </p>
        </div>
      </section>

      {/* --- SECCIÓN DEEPSEEK --- */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-left md:w-1/2">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-6 text-white border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-300" /> {dict.deepseek_section.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              {dict.deepseek_section.title}
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {dict.deepseek_section.description}
            </p>
            <Link 
              href={`/${validLang}/cotizar`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-xl shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-300"
            >
              <Calculator className="w-6 h-6" />
              {dict.deepseek_section.cta}
            </Link>
          </div>
          
          <div className="md:w-1/2 w-full">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
              <div className="space-y-4 font-mono text-sm">
                <div className="bg-white/10 p-3 rounded-lg rounded-tl-none self-start w-3/4">
                  "{dict.deepseek_section.chat_user}"
                </div>
                <div className="bg-blue-500 text-white p-3 rounded-lg rounded-tr-none self-end w-3/4 ml-auto shadow-lg">
                  ✅ {dict.deepseek_section.chat_ai}:<br/>
                  {dict.deepseek_section.chat_plan}: <strong>WebApp</strong><br/>
                  {dict.deepseek_section.chat_price}: <strong>$1,000 USD</strong>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{dict.pricing.title}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{dict.pricing.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* PLAN 1 */}
            <div className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6"><Rocket className="w-7 h-7 text-blue-600" /></div>
              <h3 className="text-2xl font-bold text-slate-900">{dict.pricing.landing.title}</h3>
              <p className="text-slate-500 mt-2 text-sm h-10">{dict.pricing.landing.desc}</p>
              <div className="my-6"><span className="text-4xl font-extrabold text-slate-900">$299</span><span className="text-slate-500 text-sm font-medium"> USD</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                {dict.pricing.landing.features.map((item: string, i: number) => (
                  <li key={i} className="flex items-center text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-green-500 mr-3"/> {item}</li>
                ))}
              </ul>
              <div className="space-y-3">
                <a href={MP_LANDING} target="_blank" className="block w-full text-center py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">{dict.pricing.pay_mp}</a>
                <a href={PP_LANDING} target="_blank" className="block w-full text-center py-3 bg-[#003087] text-white font-bold rounded-xl hover:bg-[#001c64] transition-colors text-sm">{dict.pricing.pay_pp}</a>
              </div>
            </div>

            {/* PLAN 2 */}
            <div className="relative p-8 rounded-3xl bg-slate-900 text-white shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col ring-4 ring-blue-500/20">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">{dict.pricing.corporate.badge}</div>
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6"><Monitor className="w-7 h-7 text-white" /></div>
              <h3 className="text-2xl font-bold">{dict.pricing.corporate.title}</h3>
              <p className="text-slate-400 mt-2 text-sm h-10">{dict.pricing.corporate.desc}</p>
              <div className="my-6"><span className="text-4xl font-extrabold text-white">$499</span><span className="text-slate-400 text-sm font-medium"> USD</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                 {dict.pricing.corporate.features.map((item: string, i: number) => (
                  <li key={i} className="flex items-center text-slate-300 text-sm"><CheckCircle className="w-4 h-4 text-blue-400 mr-3"/> {item}</li>
                ))}
              </ul>
              <div className="space-y-3">
                <a href={MP_CORPORATIVA} target="_blank" className="block w-full text-center py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/50">{dict.pricing.pay_mp}</a>
                <a href={PP_CORPORATIVA} target="_blank" className="block w-full text-center py-3 bg-slate-800 text-slate-200 font-bold rounded-xl hover:bg-slate-700 transition-colors text-sm border border-slate-700">{dict.pricing.pay_pp}</a>
              </div>
            </div>

            {/* PLAN 3 */}
            <div className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6"><Database className="w-7 h-7 text-purple-600" /></div>
              <h3 className="text-2xl font-bold text-slate-900">{dict.pricing.webapp.title}</h3>
              <p className="text-slate-500 mt-2 text-sm h-10">{dict.pricing.webapp.desc}</p>
              <div className="my-6"><span className="text-4xl font-extrabold text-slate-900">$1,000</span><span className="text-slate-500 text-sm font-medium"> USD+</span></div>
              
              <ul className="space-y-4 mb-8 flex-1">
                 {dict.pricing.webapp.features.map((item: string, i: number) => (
                  <li key={i} className="flex items-center text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-purple-500 mr-3"/> {item}</li>
                ))}
              </ul>
              
              <div className="mb-6 text-center">
                  <Link href={`/${validLang}/servicios/webapp`} className="text-sm font-bold text-purple-600 hover:text-purple-700 hover:underline flex items-center justify-center gap-1">
                    <Plus className="w-4 h-4"/> {dict.pricing.webapp.more_info}
                  </Link>
              </div>

              <div className="space-y-3">
                <a href={MP_WEBAPP} target="_blank" className="block w-full text-center py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-colors">{dict.pricing.pay_mp}</a>
                <a href={PP_WEBAPP} target="_blank" className="block w-full text-center py-3 bg-[#003087] text-white font-bold rounded-xl hover:bg-[#001c64] transition-colors text-sm border border-slate-200">{dict.pricing.pay_pp}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-white text-center">
        <p className="text-slate-500 text-sm">{dict.footer.rights}</p>
        <div className="mt-4 flex justify-center space-x-4 opacity-50 items-center">
           <span className="text-xs border px-2 py-1 rounded flex items-center gap-1"><CreditCard className="w-3 h-3"/> MercadoPago</span>
           <span className="text-xs border px-2 py-1 rounded flex items-center gap-1"><CreditCard className="w-3 h-3"/> PayPal</span>
        </div>
      </footer>

      {/* WHATSAPP */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 flex items-center gap-2 group border-4 border-white/30 backdrop-blur-sm">
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </main>
  );
}