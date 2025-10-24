"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    { label: "Umbauten", href: "/services/umbauten" },
    { label: "Natursteinverlegungen", href: "/services/natursteinverlegung" },
    { label: "Maurerarbeiten", href: "/services/maurerarbeiten" },
    { label: "Gipsarbeiten", href: "/services/gipsarbeiten" },
    { label: "Sanitärarbeiten", href: "/services/sanitararbeiten" },
    { label: "Malerarbeiten", href: "/services/malerarbeiten" },
    { label: "Plattenlegerarbeiten", href: "/services/plattenlegerarbeiten" },
  ]

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={handleNavClick}>
            <Image
              src="/logo.png"
              alt="KIMI Umbauten Logo"
              width={180}
              height={60}
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={handleNavClick}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={handleNavClick}
            >
              Über Uns
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
                Dienstleistungen
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link href={service.href} className="cursor-pointer" onClick={handleNavClick}>
                      {service.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/projects"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={handleNavClick}
            >
              Referenzen
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={handleNavClick}
            >
              Kontakt
            </Link>

            <LanguageSwitcher />

            <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
              <a href="tel:+41788940949">
                <Phone className="mr-2 h-4 w-4" />
                <span className="hidden xl:inline">Jetzt anrufen</span>
                <span className="xl:hidden">Anrufen</span>
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-border py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium" onClick={handleNavClick}>
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium" onClick={handleNavClick}>
                Über Uns
              </Link>
              <div className="flex flex-col gap-2 pl-4">
                <p className="text-sm font-medium text-muted-foreground">Dienstleistungen</p>
                {services.map((service) => (
                  <Link key={service.href} href={service.href} className="text-sm" onClick={handleNavClick}>
                    {service.label}
                  </Link>
                ))}
              </div>
              <Link href="/projects" className="text-sm font-medium" onClick={handleNavClick}>
                Referenzen
              </Link>
              <Link href="/contact" className="text-sm font-medium" onClick={handleNavClick}>
                Kontakt
              </Link>
              <Button asChild size="sm" className="w-full bg-primary hover:bg-primary/90">
                <a href="tel:+41788940949">
                  <Phone className="mr-2 h-4 w-4" />
                  Jetzt anrufen
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
