import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: siteConfig.seo.titulo,
  description: siteConfig.seo.descricao,
  keywords: siteConfig.seo.keywords,
  openGraph: {
    title: siteConfig.seo.titulo,
    description: siteConfig.seo.descricao,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630 }],
    locale: "pt_BR",
    type: "website",
  },
  other: {
    // Schema.org LocalBusiness — SEO local
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: siteConfig.nome,
      description: siteConfig.descricao,
      url: "",
      telephone: siteConfig.telefone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.endereco.rua,
        addressLocality: siteConfig.endereco.cidade,
        addressRegion: siteConfig.endereco.estado,
        postalCode: siteConfig.endereco.cep,
        addressCountry: "BR",
      },
    }),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
