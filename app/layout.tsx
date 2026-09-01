import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Endereço Fiscal em Natal | NVO Coworking",
    template: "%s | NVO Coworking",
  },
  description:
    "Endereço Fiscal em Natal por R$ 99/mês, com utilização no CNPJ, recebimento de correspondências e gestão de encomendas.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
