import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

// Body text — Inter (matches unikliniksemabokperdana.com)
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Headings — DM Sans
const dmSans = DM_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Uniklinik Perpaduan — Klinik Keluarga di Bercham, Ipoh",
  description:
    "Klinik keluarga di Taman Bercham Raya, Ipoh, Perak. Rawatan am, pemeriksaan kesihatan, vaksinasi, rawatan luka & ujian makmal. Buka setiap hari 7:00 pagi – 12:00 tengah malam. ☎ 012-350 8892.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" className={`${inter.variable} ${dmSans.variable} h-full antialiased`}>
      <GoogleTagManager gtmId="GTM-W5G4P6DH" />
      <body className="flex min-h-full flex-col overflow-x-hidden bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
