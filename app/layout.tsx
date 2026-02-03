import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vivek Radadiya | Data Scientist Portfolio",
  description:
    "Portfolio of Vivek Radadiya — Data Scientist specializing in ML systems, GenAI evaluation, and MLOps.",

  openGraph: {
    title: "Vivek Radadiya | Data Scientist Portfolio",
    description:
      "ML systems, GenAI evaluation, and production pipelines. View projects, experience, and skills.",
    url: "https://vivek-radadiya.vercel.app",
    siteName: "Vivek Radadiya Portfolio",
    images: [
      {
        url: "https://vivek-radadiya.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Vivek Radadiya | Data Scientist Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vivek Radadiya | Data Scientist Portfolio",
    description:
      "ML systems, GenAI evaluation, and production pipelines. View projects, experience, and skills.",
    images: ["https://vivek-radadiya.vercel.app/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
