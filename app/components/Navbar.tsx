"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Calculator, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappLink = "https://wa.me/56978029612";

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-8 h-8 overflow-hidden rounded-lg">
              <Image src="/logo.png" alt="Logo" fill className="object-cover" />
            </div>
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              webservice.lat
            </span>
          </Link>

          {/* MENÚ ESCRITORIO (Hidden en móvil) */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-blue-600">Inicio</Link>
            <Link href="/#precios" className="hover:text-blue-600">Planes</Link>
            <Link href="/blog/ia-webapps-2026" className="hover:text-blue-600">Blog</Link>
            <Link href="/cotizar" className="flex items-center gap-1 text-purple-600 font-bold hover:text-purple-700">
              <Calculator className="w-4 h-4" /> Cotizar IA
            </Link>
            <a href={whatsappLink} target="_blank" className="bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800">
              Contacto
            </a>
          </div>

          {/* BOTÓN HAMBURGUESA (Visible solo en móvil) */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link href="/" onClick={() => setIsOpen(false)} className="block py-3 px-4 rounded-lg hover:bg-slate-50 font-medium">
              Inicio
            </Link>
            <Link href="/#precios" onClick={() => setIsOpen(false)} className="block py-3 px-4 rounded-lg hover:bg-slate-50 font-medium">
              Planes
            </Link>
            <Link href="/blog/ia-webapps-2026" onClick={() => setIsOpen(false)} className="block py-3 px-4 rounded-lg hover:bg-slate-50 font-medium">
              Blog
            </Link>
            <Link href="/cotizar" onClick={() => setIsOpen(false)} className="block py-3 px-4 rounded-lg bg-purple-50 text-purple-700 font-bold">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5" /> Cotizar con IA
              </div>
            </Link>
            <a href={whatsappLink} target="_blank" className="block py-3 px-4 rounded-lg bg-slate-900 text-white text-center font-medium mt-4">
              <div className="flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5"/> Contactar
              </div>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}