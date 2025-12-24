import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

let locales = ['es', 'en', 'pt'];
let defaultLocale = 'es';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Si es un archivo de sistema (imágenes, robots.txt, etc), no hacemos nada
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('.') ||
    pathname.startsWith('/api')
  ) {
    return;
  }

  // Verificamos si la URL ya tiene el idioma (ej: /en/cotizar)
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Si falta el idioma, redirigimos al default (es)
  if (pathnameIsMissingLocale) {
    const locale = defaultLocale;
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Aplicar a todas las rutas excepto las internas
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};