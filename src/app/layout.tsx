import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unsplash URL Converter",
  description:
    "A simple tool for converting normal unsplash links to liks you can directly use as src in your next project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} dark`}>
        {children}
        <Toaster position="top-center" richColors duration={4000} />
      </body>
    </html>
  );
}
