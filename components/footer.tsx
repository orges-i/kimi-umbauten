import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <Image src="/logo.png" alt="KIMI Umbauten Logo" width={160} height={53} className="h-10 w-auto" />
            <p className="text-sm text-secondary-foreground/80">
              Ihr professioneller Partner für exzellente Bauarbeiten in der ganzen Schweiz.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  Römerstrasse 13A
                  <br />
                  8552 Felben-Wellhausen
                  <br />
                  Switzerland
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+41788940949" className="hover:text-primary transition-colors">
                  +41 78 894 09 49
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@kimiumbauten.ch" className="hover:text-primary transition-colors">
                  info@kimiumbauten.ch
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Schnellzugriff</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  Über Uns
                </Link>
              </li>
              <li>
                <Link href="/services/umbauten" className="hover:text-primary transition-colors">
                  Dienstleistungen
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary transition-colors">
                  Referenzen
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Öffnungszeiten</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Montag–Freitag:</span>
                <span className="font-medium">07:00–17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Samstag:</span>
                <span className="font-medium">Geschlossen</span>
              </li>
              <li className="flex justify-between">
                <span>Sonntag:</span>
                <span className="font-medium">Geschlossen</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; 2025 KIMI UMBAUTEN. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
