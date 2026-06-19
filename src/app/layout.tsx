import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito"
});

export const metadata: Metadata = {
  title: 'Dibanko Farms | High Quality Agribusiness',
  description: 'Direct from Ejura, providing premium livestock feed and fresh produce.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} h-full antialiased`} >
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="wemaflex" />
        <meta name="description" content="Dibanko Salifu Farms" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <Providers>
        <body className={`${nunito.variable} antialiased text-[#5C6672] bg-white flex flex-col min-h-screen`}>
          <main className="grow overflow-x-hidden" >
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
