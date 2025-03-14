import { ClerkProvider } from "@clerk/nextjs";
export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <main className="sign-in">{children}</main>
        </ClerkProvider>
      </body>
    </html>
  );
}
