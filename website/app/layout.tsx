import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "make-backend | Scaffold Production-Ready Backends",
  description: "Interactive CLI to instantly scaffold professional Express and Hono backend projects with integrated database support and security best practices.",
  keywords: ["CLI", "scaffolding", "backend", "express", "hono", "typescript", "mongodb", "postgresql"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased selection:bg-blue-500/30`}>
        {children}
      </body>
    </html>
  );
}
