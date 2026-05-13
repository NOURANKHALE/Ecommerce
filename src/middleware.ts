import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest, NextMiddleware } from "next/server";

/**
 * Clerk middleware needs both keys at runtime. Missing keys used to crash Edge
 * (`MIDDLEWARE_INVOCATION_FAILED`). Wrong or mismatched keys can still throw
 * on each request — we fall back to passthrough so the site stays up.
 */
const isClerkMiddlewareReady =
  Boolean(process.env.CLERK_SECRET_KEY?.trim()) &&
  Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.trim());

const passThrough = () => NextResponse.next();

let clerkHandler: NextMiddleware | null = null;
if (isClerkMiddlewareReady) {
  try {
    clerkHandler = clerkMiddleware();
  } catch {
    clerkHandler = null;
  }
}

export default async function middleware(
  request: NextRequest,
  event: NextFetchEvent,
) {
  if (!clerkHandler) {
    return passThrough();
  }
  try {
    return await Promise.resolve(clerkHandler(request, event));
  } catch {
    return passThrough();
  }
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
