import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eduardo Calderon",
  description: "Software engineer from the Dominican Republic specializing in backend development and scalable systems.",
  keywords: ["software engineer", "backend developer", "Dominican Republic", "APIs", "microservices"],
  authors: [{ name: "Eduardo Calderon" }],
  creator: "Eduardo Calderon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
