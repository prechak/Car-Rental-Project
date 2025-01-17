import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import NavBar from "@/components/NavBar";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Electric Car Rental Services",
  description: "Drive a Low-Carbon Society",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <SignedIn>
            <NavBar />
            {children}
          </SignedIn>
          <div className="flex h-screen items-center justify-center">
            <SignedOut>
              <SignIn />
            </SignedOut>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
