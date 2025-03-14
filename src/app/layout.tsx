"use client";
import "./globals.css";
import { ThemeProvider } from "@/components/Themeprovider";
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar"; 
import { AppSidebar } from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from "@/store/store";
import { ClerkProvider } from "@clerk/nextjs";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
              <SidebarProvider>
                <AppSidebar />
                <div>
                  <Header />
                  {children}
                  <Footer />
                </div>
              </SidebarProvider>
            
          </ThemeProvider>
        
        </PersistGate>
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
