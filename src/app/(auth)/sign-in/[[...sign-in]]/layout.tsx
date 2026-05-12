import { ClerkProvider } from "@clerk/nextjs";
import { clerkPublishableKey, isClerkConfigured } from "@/lib/clerk-config";

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {isClerkConfigured ? (
          <ClerkProvider publishableKey={clerkPublishableKey}>
            <main className="sign-in">{children}</main>
          </ClerkProvider>
        ) : (
          <main className="sign-in">{children}</main>
        )}
      </body>
    </html>
  );
}
