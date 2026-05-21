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

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jm-copy.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "JM Copy | Gráfica Rápida e Personalizados em Recife",
  description:
    "Gráfica na Boa Vista, Recife, pertinho da UNICAP. Plotagem, banner, adesivo em vinil, impressão colorida e personalizados. Você pensa e a gente realiza!",
  alternates: {
    canonical: "/",
  },
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "JM Copy",
    title: "JM Copy | Gráfica Rápida e Personalizados em Recife",
    description:
      "Plotagem, banner, adesivo, impressão e personalizados na Boa Vista, Recife. Você pensa e a gente realiza!",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "JM Copy — Você pensa, a gente realiza.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JM Copy | Gráfica Rápida e Personalizados em Recife",
    description:
      "Plotagem, banner, adesivo, impressão e personalizados na Boa Vista, Recife. Você pensa e a gente realiza!",
    images: ["/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/PrintShop",
  "@id": `${SITE_URL}/#business`,
  name: "JM Copy",
  description:
    "Gráfica rápida e personalizados na Boa Vista, Recife — plotagem, banner, adesivo em vinil, impressão e brindes sob medida.",
  image: `${SITE_URL}/og.png`,
  logo: `${SITE_URL}/icons/logo-without-text.png`,
  url: SITE_URL,
  telephone: "+5581983091209",
  email: "julianacopiadora332@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Afonso Pena, 43",
    addressLocality: "Recife",
    addressRegion: "PE",
    postalCode: "50050-130",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -8.0608,
    longitude: -34.8842,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    "https://instagram.com/jmcopy.grafica",
    "https://www.google.com/maps/search/?api=1&query=Jm+COPY+R.+Afonso+Pena+43+Boa+Vista+Recife+PE",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "9",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
