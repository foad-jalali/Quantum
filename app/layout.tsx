import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AosInit from "@/components/aos-client-init";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className="overflow-x-hidden">
      <head>
        <link rel="icon" href="/Favicon.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <AosInit />
        <Footer />
      </body>
    </html>
  );
}
