import type { Metadata } from "next";
import { Merriweather, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  weight: ['400', '700', '900'],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const sourceSerif = Source_Serif_4({
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  title: "Jurmola Telegraphs - Your Jurmala, Your Capital",
  description: "Many people ask us, so we write in the subtitle: our resource has nothing to do with Laima Vaikule. At all. And it has nothing to do with limes either.",
  metadataBase: new URL('https://jurmola.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Jurmola Telegraphs - Your Jurmala, Your Capital",
    description: "Many people ask us, so we write in the subtitle: our resource has nothing to do with Laima Vaikule. At all. And it has nothing to do with limes either.",
    url: "https://jurmola.com",
    siteName: "Jurmola Telegraphs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jurmola Telegraphs - Your Jurmala, Your Capital",
    description: "Many people ask us, so we write in the subtitle: our resource has nothing to do with Laima Vaikule. At all. And it has nothing to do with limes either.",
  },
  other: {
    'cache-control': 'no-cache, no-store, must-revalidate',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${sourceSerif.variable} antialiased`}
        style={{ fontFamily: 'var(--font-source-serif), Georgia, serif' }}
      >
        {children}
      </body>
    </html>
  );
}
