import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://developer-resume-site.netlify.app"),
  title: {
    default: "Eleonora Nocentini Sköldebrink | Developer Resume",
    template: "%s | Eleonora Nocentini",
  },
  description:
    "Professional developer resume for Eleonora Nocentini Sköldebrink — frontend and full-stack experience, education, and technical skills.",
  keywords: [
    "developer resume",
    "frontend developer",
    "full stack developer",
    "Next.js",
    "React",
    "TypeScript",
    "web developer",
    "CV",
    "portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Developer Resume",
    title: "Eleonora Nocentini Sköldebrink | Developer Resume",
    description:
      "Professional developer resume with experience, education, and technical skills.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
