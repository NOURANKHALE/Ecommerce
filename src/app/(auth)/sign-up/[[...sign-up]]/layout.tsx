import { ClerkProvider } from "@clerk/nextjs";
import { clerkPublishableKey, isClerkConfigured } from "@/lib/clerk-config";

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {isClerkConfigured ? (
          <ClerkProvider publishableKey={clerkPublishableKey}>
            <main className="sign-up">{children}</main>
          </ClerkProvider>
        ) : (
          <main className="sign-up">{children}</main>
        )}
      </body>
    </html>
  );
}
