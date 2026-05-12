import { SignIn } from '@clerk/nextjs';
import { isClerkConfigured } from '@/lib/clerk-config';

export default function SignInPage() {
  if (!isClerkConfigured) {
    return (
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
        <p className="text-lg font-medium">Sign-in is not configured.</p>
        <p className="text-muted-foreground text-sm max-w-md">
          Add{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
          </code>{' '}
          and{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            CLERK_SECRET_KEY
          </code>{' '}
          in Vercel (or <code className="rounded bg-muted px-1 py-0.5 text-xs">.env.local</code> locally), then redeploy.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center ">
      <div className="[&_.cl-internal-1dauvpw]:hidden ">
        <SignIn
          
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
          fallbackRedirectUrl="/" 
          appearance={{
            elements: {
              formButtonPrimary: 'bg-primary hover:bg-green-500',
              footerActionLink: 'text-green-600 hover:text-green-600',
            },
          }}
        />
      </div>
    </div>
  );
}