import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Eduardo Calderon",
  description: "Software engineer from the Dominican Republic specializing in backend development and scalable systems.",
  keywords: ["software engineer", "backend developer", "Dominican Republic", "APIs", "microservices"],
  authors: [{ name: "Eduardo Calderon" }],
  creator: "Eduardo Calderon",
  metadataBase: new URL('https://educr.dev'),
  openGraph: {
    title: "Eduardo Calderon - Software Engineer",
    description: "Software engineer from the Dominican Republic.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Eduardo Calderon - Software Engineer",
    description: "Software engineer from the Dominican Republic.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
