import { DM_Sans, Barlow } from "next/font/google";
import "./globals.css";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "P Quatro Construtora",
  description: "Referência em Construções de Alto Padrão",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${barlow.variable} antialiased`}>
        {children}
        <WhatsAppIcon />
      </body>
    </html>
  );
}
