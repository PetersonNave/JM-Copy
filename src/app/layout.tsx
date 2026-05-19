import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JM Copy | Gráfica Rápida e Personalizados em Recife",
  description:
    "Gráfica na Boa Vista, Recife, pertinho da UNICAP. Plotagem, banner, adesivo em vinil, impressão colorida e personalizados. Você pensa e a gente realiza!",
  keywords: [
    "gráfica recife",
    "gráfica boa vista recife",
    "plotagem recife",
    "banner recife",
    "adesivo vinil recife",
    "impressão colorida recife",
  ],
  openGraph: {
    title: "JM Copy | Gráfica Rápida e Personalizados em Recife",
    description:
      "Plotagem, banner, adesivo, impressão e personalizados na Boa Vista, Recife. Você pensa e a gente realiza!",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
