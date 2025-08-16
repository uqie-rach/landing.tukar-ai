import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Tukar - AI Translation App for Brunei",
  description:
    "Bridge language barriers with AI translation. PDF translation, contextual chat AI with Bruneian dialects, and instant image translation.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} antialiased`}>
      <body className="font-sans" autoCapitalize="sentences">{children}</body>
    </html>
  )
}
