import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

/**
 * `clerkMiddleware()` needs valid Clerk env at runtime (especially
 * `CLERK_SECRET_KEY`). If either key is missing, Edge throws and Vercel shows
 * `MIDDLEWARE_INVOCATION_FAILED`. Skip Clerk until env is configured in Vercel.
 */
const isClerkMiddlewareReady =
  Boolean(process.env.CLERK_SECRET_KEY?.trim()) &&
  Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.trim());

export default isClerkMiddlewareReady
  ? clerkMiddleware()
  : () => NextResponse.next();

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};


