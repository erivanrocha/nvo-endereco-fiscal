import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NVO Coworking | Endereço Fiscal",
    template: "%s | NVO Coworking",
  },
  description: "Página do serviço de Endereço Fiscal do NVO Coworking.",
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
      <body>{children}</body>
    </html>
  );
}
