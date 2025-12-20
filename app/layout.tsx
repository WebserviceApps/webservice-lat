import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // <--- IMPORTANTE

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "webservice.lat | Desarrollo Web & IA",
  description: "Agencia de desarrollo web potenciada por Inteligencia Artificial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />  {/* <--- AQUÍ VA LA BARRA */}
        {children}
      </body>
    </html>
  );
}