import type { Metadata } from "next";
import "./globals.css";

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
      <body className="max-w-[1400px] m-auto flex flex-col items-center">
        {children}
      </body>
    </html>
  );
} 
