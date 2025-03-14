"use client";
import Link from "next/link";
import { ShoppingCart, Heart, User } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";
import { ModeToggle } from "./Modetoggle";
import { useSelector } from "react-redux";
import { UserButton, ClerkProvider } from "@clerk/nextjs";
import { RootState } from "@/store/store";

export default function Header() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  return (
    <ClerkProvider>
      <header className="Header sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center">
            <SidebarTrigger />
            <Link href="/">
              <h1 className="text-2xl p-3 font-semibold text-foreground hover:text-primary transition-colors duration-200">
                SHOP.NO
              </h1>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/"
              className="text-muted-foreground font-medium hover:text-foreground transition-colors duration-200"
              aria-label="home"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-muted-foreground font-medium hover:text-foreground transition-colors duration-200"
              aria-label="shop products"
            >
              Shop
            </Link>
            <Link
              href="#about"
              className="text-muted-foreground font-medium hover:text-foreground transition-colors duration-200"
              aria-label="about"
            >
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-6">
            <Link
              href="/cart"
              className="relative p-2 rounded-full transition-colors duration-200"
              aria-label="cart"
            >
              <ShoppingCart className="w-5 h-5 text-muted-foreground" />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-black text-xs rounded-full px-1.5 py-0.5">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <Link
              href="/wishlist"
              className="relative p-2 rounded-full transition-colors duration-200"
              aria-label="wishlist"
            >
              <Heart className="w-5 h-5 text-muted-foreground" />
              {wishlistItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-black text-xs rounded-full px-1.5 py-0.5">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            <div className="flex items-center space-x-1 p-3 rounded-full">
              
                  <Link href={'/sign-in'} className="font-medium" aria-label="log-in">Log in</Link>
               
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "h-7 w-7",
                      userButtonPopoverCard: "bg-green-500 border border-border",
                      userButtonPopoverActionButtonText: "text-foreground",
                      userButtonPopoverFooter: "hidden",

                    },
                  }}
                />
              
              <User className="w-5 h-5" />
            </div>
            <ModeToggle />
          </div>
        </div>
      </header>
    </ClerkProvider>
  );
}