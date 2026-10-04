import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  title: "Devarchit Enterprises LLP — Industrial & Engineering Supply Partner",
  description:
    "Devarchit Enterprises LLP, Bengaluru — product distribution for HVAC, Oil & Gas, Metals & Mining, Water, and Infrastructure projects. Industrial valves, electrical goods, piping and sanitary solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
