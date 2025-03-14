import { SignUp } from '@clerk/nextjs';
export default function SignUpPage() {
  return (
      <div className="flex min-h-screen items-center justify-center ">
        <div className="[&_.cl-internal-1dauvpw]:hidden"> 
        <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        fallbackRedirectUrl="/"
        appearance={{
          elements: {
            formButtonPrimary: 'bg-primary hover:bg-green-600',
            footerActionLink: 'text-green-500 hover:text-green-600',
          },
        }}
      />
    </div>
    </div>
  );
}