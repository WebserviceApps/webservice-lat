import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "webservice.lat | Desarrollo Web & IA con DeepSeek",
  description: "Cotiza tu proyecto de software en segundos con Inteligencia Artificial. Desde Landing Pages hasta WebApps complejas.",
  keywords: ["Desarrollo Web", "Inteligencia Artificial", "Cotizador Online", "WebApp", "Chile", "Latam"],
  openGraph: {
    title: "webservice.lat | Cotiza tu WebApp con IA",
    description: "¿Tienes una idea? Nuestra IA analiza tus requerimientos y te da un presupuesto al instante.",
    url: "https://webservice.lat",
    siteName: "webservice.lat",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Logo webservice.lat",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* 1. CÓDIGO HEAD (Automático): 
        Este componente inyecta el script de GTM automáticamente. 
        Equivale al primer bloque que te dio Google.
      */}
      <GoogleTagManager gtmId="GTM-W6QRX7SP" />

      <body className={inter.className}>
        
        {/* 2. CÓDIGO BODY (Manual - Noscript):
          Este es el segundo bloque que te dio Google. Lo pegamos aquí manualmente
          para que funcione si el usuario no tiene JavaScript.
        */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-W6QRX7SP"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        
        {children}

        {/* CLARITY (Mapas de calor) */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "uoj81bjdmu");
          `}
        </Script>
      </body>
    </html>
  );
}