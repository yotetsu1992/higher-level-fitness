import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Higher Level Fitness — Premium Personal Training Baden-Baden",
  description:
    "Kein Average Training. Higher Level. Premium Personal Training mit Sebastian im OxyGym Baden-Baden.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[#080808] text-[#F0F0F0] antialiased">
        {children}
      </body>
    </html>
  );
}
