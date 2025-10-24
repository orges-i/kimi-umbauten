import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KIMI Umbauten | Bauarbeiten in der Schweiz",
  description:
    "KIMI Umbauten ist Ihr professioneller Partner für exzellente Bauarbeiten in der ganzen Schweiz. Umbauten, Maurerarbeiten, Gipsarbeiten, Natursteinverlegungen, Sanitärarbeiten, Malerarbeiten und mehr.",
  keywords: [
    "Umbauten Schweiz",
    "Renovationen",
    "Bauunternehmen Schweiz",
    "KIMI Umbauten",
    "Maurerarbeiten",
    "Sanitärarbeiten",
    "Natursteinverlegung",
    "Felben-Wellhausen",
  ],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="dark">
      <body className={`${inter.className} font-sans antialiased`}>
        <LanguageProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
