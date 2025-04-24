import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";


const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito-sans",
})


export const metadata: Metadata = {
  title: "GitHub Perfis",
  description: "Busque por perfis do Github.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${nunitoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
