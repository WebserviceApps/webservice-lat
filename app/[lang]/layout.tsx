import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar";
import WhatsAppFloat from "../components/WhatsAppFloat"; // 👈 Importamos el nuevo componente
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google';
import { getDictionary } from "../get-dictionary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "webservice.lat | Desarrollo Web & IA",
  description: "Cotiza tu proyecto de software en segundos con Inteligencia Artificial.",
};

// Definimos los idiomas válidos
type ValidLocale = "es" | "en" | "pt";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  // Corrección crítica para Netlify: Usamos 'string'
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  // Convertimos el string al tipo ValidLocale de forma segura
  const validLang = (lang as ValidLocale) || "es";
  
  const dict = await getDictionary(validLang);

  return (
    <html lang={validLang} suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-W6QRX7SP" />
      <body className={inter.className}>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-W6QRX7SP"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar dict={dict.navbar} lang={validLang} />
        
        {children}

        {/* 👇 AQUÍ ESTÁ EL WHATSAPP INTEGRADO */}
        <WhatsAppFloat lang={validLang} />

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