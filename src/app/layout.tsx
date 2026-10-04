import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "nothing.",
  description:
    "Собираем ПК под задачи: игры, работа, монтаж, ИИ. Подбор комплектующих, стресс-тесты, гарантия 12 месяцев. Доставка по Беларуси.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="bg-[#0A0A0A] text-white antialiased">{children}</body>
    </html>
  );
}