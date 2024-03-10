import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "Kinoarea",
  description: "Kinoarea - Афиша",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="bg-[#1E2538] max-w-[1400px] m-auto flex flex-col items-center">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
} 
