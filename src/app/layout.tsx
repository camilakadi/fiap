import type { Metadata } from "next";
import { Montserrat, Montserrat_Alternates, Roboto } from "next/font/google";
import "./globals.scss";

const montserrat = Montserrat({
  variable: "--montserrat",
  subsets: ["latin"],
});

const montserratAlternates = Montserrat_Alternates({
  variable: "--montserrat-alternates",
  weight: ["400", "900"],
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--roboto",
  weight: ["300", "400", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FIAP - A Melhor Faculdade de Tecnologia",
  description: "FIAP - A melhor faculdade de tecnologia do Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${montserratAlternates.variable} ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
