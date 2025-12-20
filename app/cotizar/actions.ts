"use server";

import OpenAI from "openai";

// 👇 TU CLAVE DE DEEPSEEK (Ya configurada)
const DEEPSEEK_API_KEY = "sk-df049a05d0874f2ebf5465d996948c8f"; 

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com', // 👈 Esto hace la magia (apunta a DeepSeek)
  apiKey: DEEPSEEK_API_KEY
});

export async function cotizarConGemini(descripcion: string) {
  console.log("🚀 Consultando a DeepSeek V3...");

  const prompt = `
    Eres un experto cotizador de software de la agencia webservice.lat.
    Analiza esta solicitud: "${descripcion}".
    
    Reglas de Negocio:
    1. Simple (Landing, Linktree, 1 pag) -> "Landing Page" ($299)
    2. Empresa (Servicios, Blog, Portafolio) -> "Web Corporativa" ($499)
    3. Complejo (Usuarios, Login, Dashboard, App) -> "WebApp a Medida" ($1,000)

    Responde SOLO con este formato JSON válido (sin markdown, sin explicaciones):
    {
      "plan_recomendado": "Nombre del Plan",
      "precio": 0,
      "explicacion": "Breve explicación persuasiva",
      "caracteristicas_clave": ["Item 1", "Item 2", "Item 3"]
    }
  `;

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "deepseek-chat", // Usamos el modelo chat (V3)
      temperature: 0.7,
    });

    let text = completion.choices[0].message.content || "{}";
    
    // Limpieza de seguridad por si la IA responde con ```json
    text = text.replace(/```json/g, "").replace(/```/g, "").trim();
    
    console.log("✅ Respuesta DeepSeek:", text);
    return JSON.parse(text);

  } catch (error: any) {
    console.error("🔥 Error DeepSeek:", error);
    throw new Error("Error técnico conectando con la IA. Intenta de nuevo.");
  }
}