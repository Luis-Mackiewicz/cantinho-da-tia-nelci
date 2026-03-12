import type { Metadata } from "next";
import { greatVibes, inter } from "@/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tianelci.com.br"),

  title: "Cantinho da Tia Nelci | Costura Criativa em Mamborê - PR",

  description:
    "Cantinho da Tia Nelci é um ateliê especializado em costura criativa em Mamborê - PR. Peças artesanais feitas sob medida com criatividade, qualidade e acabamento cuidadoso.",

  keywords: [
    "costura criativa",
    "costura criativa mamborê",
    "costura criativa paraná",
    "costura criativa artesanal",
    "cantinho da tia nelci",
    "peças de costura criativa",
    "costura criativa personalizada",
  ],

  authors: [{ name: "Nelcimara Gross" }],

  creator: "Nelcimara Gross",

  openGraph: {
    title: "Cantinho da Tia Nelci | Costura Criativa",

    description:
      "Ateliê de costura criativa em Mamborê - PR. Peças artesanais feitas com criatividade e acabamento cuidadoso.",

    url: "https://tianelci.com.br",

    siteName: "Cantinho da Tia Nelci",

    locale: "pt_BR",

    type: "website",

    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Cantinho da Tia Nelci - Costura Criativa",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${greatVibes.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
