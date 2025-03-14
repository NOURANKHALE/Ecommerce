import { ClerkProvider } from "@clerk/nextjs";
export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <main className="sign-up">{children}</main>
        </ClerkProvider>
      </body>
    </html>
  );
}
