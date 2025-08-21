import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import { createClient } from "./utils/supabase/server";

export async function middleware(request: NextRequest) {
  const {nextUrl} = request;
  const supabase = await createClient()
  await updateSession(request);

  const { data: { user } } = await supabase.auth.getUser();

  // Paths that should redirect to dashboard if logged in
  const protectedPaths = ['/', '/premium', '/features'];
  const isProtectedPath = protectedPaths.includes(nextUrl.pathname);

  // Paths that require authentication
  const authPaths = ['/dashboard', '/dashboard/*'];
  const isAuthPath = authPaths.some(path => {
    if (path.endsWith('/*')) {
      return nextUrl.pathname.startsWith(path.replace('/*', ''));
    }
    return nextUrl.pathname === path;
  });

  // If user is logged in and trying to access a protected path, redirect to dashboard
  if (user && isProtectedPath) {
    return NextResponse.redirect(new URL('/dashboard', nextUrl.origin));
  }

  // If user is not logged in and trying to access an auth path, redirect to home
  if (!user && isAuthPath) {
    return NextResponse.redirect(new URL('/', nextUrl.origin));
  }
  
  const url = new URL(request.url);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', url.pathname);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

