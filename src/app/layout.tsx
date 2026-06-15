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
    default: "Eleonora Nocentini Sköldebrink | Freelance Developer CV",
    template: "%s | Eleonora Nocentini",
  },
  description:
    "Online CV for Eleonora Nocentini Sköldebrink — freelance frontend and full-stack developer. Work history, education, and skills. Project case studies at eleonora-portfolio.netlify.app.",
  keywords: [
    "freelance developer",
    "developer resume",
    "frontend developer",
    "full stack developer",
    "Next.js",
    "React",
    "TypeScript",
    "web developer",
    "CV",
    "Malmö",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Eleonora Nocentini — CV",
    title: "Eleonora Nocentini Sköldebrink | Freelance Developer CV",
    description:
      "Online CV with work history, education, and skills. Project portfolio at eleonora-portfolio.netlify.app.",
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
