import { SignIn } from '@clerk/nextjs';
export default function SignInPage() {
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