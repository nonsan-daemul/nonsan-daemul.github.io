import type { Metadata } from "next";
import "./globals.css";

const socialDescription =
  "논산시 최대 낚시용품 전문점. 바낙스 전문점. 민물·루어·바다·갈치 낚시 장비 판매.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nonsan-daemul.github.io"),
  applicationName: "논산 대물낚시",
  title: {
    default: "논산 대물낚시 | 낚시용품·바다 출조 상담",
    template: "%s | 논산 대물낚시",
  },
  description:
    "논산 대물낚시는 민물·루어·바다·갈치 용품을 판매하고, 20년 넘는 경험으로 출조 채비·선상 출조 상담과 낚싯대 수리를 도와드립니다.",
  keywords: [
    "논산 낚시",
    "논산낚시",
    "논산 낚시점",
    "논산낚시점",
    "논산 대물낚시",
    "논산 낚시가게",
    "논산 낚시용품",
    "논산 민물낚시",
    "논산 루어낚시",
    "논산 바다낚시",
    "논산 바다낚시 출조",
    "논산 선상낚시",
    "논산 출조",
    "논산 낚시 채비",
    "논산 낚싯대 수리",
    "논산 바낙스",
    "충남 낚시점",
  ],
  authors: [{ name: "논산 대물낚시", url: "https://blog.naver.com/daemul4100" }],
  creator: "논산 대물낚시",
  publisher: "논산 대물낚시",
  category: "낚시용품점",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: "논산 대물낚시",
    title: "논산 대물낚시 | 논산시 최대 규모 낚시점",
    description: socialDescription,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "논산 대물낚시 - 논산시 최대 규모 낚시점" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "논산 대물낚시 | 논산시 최대 규모 낚시점",
    description: socialDescription,
    images: ["/og.png"],
  },
  verification: {
    google: "uUQFmOu3mAUiKqHEMW0aYJ6CW10WoWhVq50izw8zXNA",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
