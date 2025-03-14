import Link from "next/link";

export default function Footer() {
  return (
    <footer className="Footer container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold ">SHOP.NO</h3>
            <p className="text-sm text-muted-foreground mt-2">
              We help you find your dream products at the best prices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
            <div className="text-left">
              <h4 className="text-lg font-semibold mb-4">Information</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-accent-foreground transition-colors">About</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-accent-foreground transition-colors">Product</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-accent-foreground transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div className="text-left">
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-accent-foreground transition-colors">Community</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-accent-foreground transition-colors">Career</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-accent-foreground transition-colors">Our story</Link></li>
              </ul>
            </div>

            <div className="text-left">
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-accent-foreground transition-colors">Getting Started</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-accent-foreground transition-colors">Pricing</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-accent-foreground transition-colors">Resources</Link></li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              ©2025 SHOP.NO All Rights Reserved.Terms of use
            </p>
          </div>
        </div>
    </footer>
  );
}