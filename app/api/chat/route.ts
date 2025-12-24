import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com', 
  apiKey: process.env.DEEPSEEK_API_KEY, 
});

export async function POST(req: Request) {
  try {
    const { messages, lang } = await req.json();

    // 👇 1. EXTRAMOS EL ÚLTIMO MENSAJE DEL CLIENTE
    const lastMessage = messages[messages.length - 1];
    const userText = lastMessage ? lastMessage.content : "Sin mensaje";

    // 👇 2. GUARDAMOS EL REGISTRO (Esto aparecerá en Netlify)
    console.log("------------------------------------------------");
    console.log(`🔔 NUEVA CONSULTA RECIBIDA (${new Date().toISOString()})`);
    console.log(`🌍 Idioma: ${lang}`);
    console.log(`👤 Cliente dice: "${userText}"`);

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
      - Si preguntan detalles, responde basándote en el contexto anterior.
      - Intenta cerrar la venta invitando a agendar.
    `;

    const fullConversation = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages
    ];

    const completion = await openai.chat.completions.create({
      messages: fullConversation,
      model: "deepseek-chat", 
      temperature: 0.7,
    });

   // Agregamos '|| ""' para que si viene nulo, use comillas vacías y no rompa todo.
    const aiResponse = completion.choices[0].message.content || "";

    // 👇 3. REGISTRAMOS LO QUE RESPONDIÓ LA IA
    console.log(`🤖 IA responde: "${aiResponse.substring(0, 50)}..."`); // Guardamos solo el inicio para no llenar el log
    console.log("------------------------------------------------");

    return NextResponse.json({ response: aiResponse });

  } catch (error) {
    console.error('❌ Error CRÍTICO en API DeepSeek:', error);
    return NextResponse.json(
      { error: 'Error procesando la solicitud con IA' }, 
      { status: 500 }
    );
  }
}