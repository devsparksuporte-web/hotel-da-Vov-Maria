import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Hostel da Vovó Maria | Acolhimento e Tradição",
  description: "Sinta-se em casa no Hostel da Vovó Maria. Oferecemos o melhor acolhimento, conforto e um café da manhã inesquecível. Reserve sua estadia!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
