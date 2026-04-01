import { Montserrat, Playfair_Display } from "next/font/google";
import "@/app/[locale]/globals.css";

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

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${montserrat.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
