import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "SkyBridge",
  description: "SkyBridge - сайт авиабилетов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="bg-[#000000] max-w-[1400px] m-auto flex flex-col items-center">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
} 
