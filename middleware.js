import { NextResponse } from 'next/server';

export function middleware(request) {
  const acceptHeader = request.headers.get('accept') || '';
  const pathname = request.nextUrl ? request.nextUrl.pathname : new URL(request.url).pathname;

  // Skip non-page requests
  if (
    pathname.endsWith('.md') ||
    pathname.endsWith('.xml') ||
    pathname.endsWith('.txt') ||
    pathname.endsWith('.json') ||
    pathname.endsWith('.css') ||
    pathname.endsWith('.js') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg') ||
    pathname.endsWith('.webp') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.includes('robots.txt') ||
    pathname.includes('sitemap') ||
    pathname.includes('llms') ||
    pathname.includes('favicon')
  ) {
    return NextResponse.next();
  }

  // If client wants Markdown, rewrite to .md version
  if (acceptHeader.includes('text/markdown')) {
    let cleanPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    if (!cleanPath) cleanPath = '/index';
    const mdUrl = new URL(cleanPath + '.md', request.url);
    return NextResponse.rewrite(mdUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next|robots|sitemap|llms|favicon|css|images).*)',
  ],
};
