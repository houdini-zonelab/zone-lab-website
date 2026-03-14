import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "zone lab - Building software that helps you level up",
  description: "AI-augmented product studio based in Taiwan. We build software that helps you level up.",
  keywords: "AI, product studio, software development, self-improvement, Taiwan",
  authors: [{ name: "zone lab" }],
  openGraph: {
    title: "zone lab - Building software that helps you level up",
    description: "AI-augmented product studio based in Taiwan. We build software that helps you level up.",
    type: "website",
    locale: "en_US",
  },
  robots: "index, follow"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-['DM_Sans'] antialiased bg-[#0F172A] text-[#F8FAFC] selection:bg-[#22C55E] selection:text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}