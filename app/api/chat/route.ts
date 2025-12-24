import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com', 
  apiKey: process.env.DEEPSEEK_API_KEY, 
});

export async function POST(req: Request) {
  try {
    // 1. Ahora recibimos el HISTORIAL completo de mensajes (messages)
    const { messages, lang } = await req.json();

    const SYSTEM_PROMPT = `
      Eres un experto consultor de ventas de "webservice.lat".
      Tu objetivo es analizar la idea del cliente y recomendar el plan de desarrollo web más adecuado.

      IDIOMA DE RESPUESTA: ${lang} (Responde ÚNICAMENTE en este idioma).

      TUS REGLAS DE PRECIOS:
      - "Landing Page" ($299 USD): Sitio de una sola página, ideal para productos o perfiles.
      - "Web Corporativa" ($499 USD): Sitio empresa, hasta 5 secciones, contacto.
      - "WebApp a Medida" (Desde $1,000 USD): Sistemas, Uber, Login, Base de Datos.

      INSTRUCCIONES:
      - Sé amable, profesional y conciso.
      - Si preguntan detalles (ej: "¿qué incluye?"), responde basándote en el contexto anterior.
      - Intenta cerrar la venta invitando a agendar.
    `;

    // 2. Construimos la conversación completa para DeepSeek
    // Ponemos el System Prompt al principio, y luego todo lo que han hablado usuario e IA.
    const fullConversation = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages // Aquí va el historial que nos envía el frontend
    ];

    const completion = await openai.chat.completions.create({
      messages: fullConversation,
      model: "deepseek-chat", 
      temperature: 0.7,
    });

    const aiResponse = completion.choices[0].message.content;

    return NextResponse.json({ response: aiResponse });

  } catch (error) {
    console.error('Error en API DeepSeek:', error);
    return NextResponse.json(
      { error: 'Error procesando la solicitud con IA' }, 
      { status: 500 }
    );
  }
}