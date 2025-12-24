"use client";
import Link from "next/link";
import Image from "next/image";
import { Calculator } from "lucide-react";
import { useState } from "react";

// Definimos qué esperamos recibir (Textos y el idioma actual)
interface NavbarProps {
  dict: {
    home: string;
    plans: string;
    blog: string;
    quote: string;
    contact: string;
    consult: string;
  };
  lang: string;
}

export default function Navbar({ dict, lang }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Función para cambiar de idioma manteniendo la ruta limpia
  // (Por simplicidad, estos botones irán a la home del idioma respectivo)
  const LanguageSwitcher = () => (
    <div className="flex gap-2 text-xs font-bold border-l pl-4 ml-4 border-slate-200">
      <a href="/es" className={`hover:text-blue-600 ${lang === 'es' ? 'text-blue-600' : 'text-slate-400'}`}>ES</a>
      <a href="/en" className={`hover:text-blue-600 ${lang === 'en' ? 'text-blue-600' : 'text-slate-400'}`}>EN</a>
      <a href="/pt" className={`hover:text-blue-600 ${lang === 'pt' ? 'text-blue-600' : 'text-slate-400'}`}>PT</a>
    </div>
  );

  return (
    <nav className="fixed top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO */}
          <Link href={`/${lang}`} className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg shadow-sm">
              <Image src="/logo.png" alt="Logo" fill className="object-cover" priority />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              webservice.lat
            </span>
          </Link>

          {/* MENÚ DE ESCRITORIO */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <Link href={`/${lang}`} className="hover:text-blue-600 transition-colors">{dict.home}</Link>
            <Link href={`/${lang}#precios`} className="hover:text-blue-600 transition-colors">{dict.plans}</Link>
            <Link href={`/${lang}/blog/ia-webapps-2026`} className="hover:text-blue-600 transition-colors">{dict.blog}</Link>
            
            <Link href={`/${lang}/cotizar`} className="flex items-center gap-1 text-purple-600 hover:text-purple-700 font-bold transition-colors">
              <Calculator className="w-4 h-4" /> {dict.quote}
            </Link>
            
            <LanguageSwitcher />

            <a 
              href="https://wa.me/56978029612"
              target="_blank"
              className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all ml-4"
            >
              {dict.consult}
            </a>
          </div>

          {/* BOTÓN MENÚ MÓVIL */}
          <div className="md:hidden flex items-center gap-4">
             <LanguageSwitcher />
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
               {isMenuOpen ? "✖" : "☰"}
             </button>
          </div>
        </div>
      </div>
      
      {/* MENÚ MÓVIL (Simple) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4 shadow-xl">
            <Link href={`/${lang}`} className="block text-slate-600">{dict.home}</Link>
            <Link href={`/${lang}/cotizar`} className="block text-purple-600 font-bold">{dict.quote}</Link>
        </div>
      )}
    </nav>
  );
}