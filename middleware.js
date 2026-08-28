export default function middleware(request) {
  const url = new URL(request.url);
  const acceptHeader = request.headers.get('accept') || '';
  const pathname = url.pathname;

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
    return;
  }

  // If client wants Markdown, rewrite to companion .md version
  if (acceptHeader.includes('text/markdown')) {
    let cleanPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    if (!cleanPath) cleanPath = '/index';
    const mdUrl = new URL(cleanPath + '.md', url.origin);
    return new Response(null, {
      headers: {
        'x-middleware-rewrite': mdUrl.toString(),
      },
    });
  }
}

export const config = {
  matcher: '/((?!api|_next|robots|sitemap|llms|favicon|css|images).*)',
};
