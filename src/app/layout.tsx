import type { Metadata } from "next";
import { Noto_Sans_KR, Geist_Mono } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "유니태크 주식회사 | UNITECH Corporation",
  description: "혁신적인 기술 솔루션을 제공하는 유니태크 주식회사입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKR.variable} ${geistMono.variable} antialiased font-sans`}
        style={{ fontFamily: 'var(--font-noto-sans-kr)' }}
      >
        {children}
      </body>
    </html>
  );
}
