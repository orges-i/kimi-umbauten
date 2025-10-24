import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Phone, Droplets, Gauge, Wrench, Shield } from 'lucide-react'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pumpensysteme & Dienstleistungen | Pumpentechnik Bauer",
  description:
    "Professionelle Pumpensysteme für Abwasser, Regenwasser und Druckerhöhung. Komplettlösungen von Planung bis Wartung.",
}

export default function ServicesPage() {
  const services = [
    { name: "Übersicht", href: "/services/umbauten" },
    { name: "Abwasserpumpen", href: "/services/abwasserpumpen" },
    { name: "Regenwasserpumpen", href: "/services/regenwasserpumpen" },
    { name: "Druckerhöhungsanlagen", href: "/services/druckerhoehung" },
    { name: "Wartung & Service", href: "/services/wartung" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 px-4 py-20 text-secondary-foreground">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Unsere Dienstleistungen
          </h1>
          <p className="mt-6 text-pretty text-lg sm:text-xl text-secondary-foreground/80">
            Komplettlösungen für Pumpentechnik und Entwässerungssysteme
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Sidebar Navigation */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <Card className="border-border">
              <CardContent className="p-4">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Dienstleistungen
                </h2>
                <nav className="space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      {service.name}
                    </Link>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Overview */}
            <section>
              <h2 className="mb-6 text-3xl font-bold">Pumpentechnik für jeden Bedarf</h2>
              <p className="mb-8 text-pretty text-lg text-muted-foreground leading-relaxed">
                Seit über 25 Jahren sind wir Ihr zuverlässiger Partner für professionelle Pumpensysteme in der ganzen
                Schweiz. Von der Planung über die Installation bis zur Wartung – wir bieten Ihnen Komplettlösungen aus
                einer Hand.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <Card className="border-border transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Droplets className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Abwasserpumpen</h3>
                    <p className="text-pretty text-sm text-muted-foreground leading-relaxed">
                      Zuverlässige Hebeanlagen und Abwasserpumpen für Keller, Garagen und tiefliegende Räume.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Droplets className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Regenwasserpumpen</h3>
                    <p className="text-pretty text-sm text-muted-foreground leading-relaxed">
                      Effiziente Systeme zur Regenwassernutzung für Garten, WC und Waschmaschine.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Gauge className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Druckerhöhungsanlagen</h3>
                    <p className="text-pretty text-sm text-muted-foreground leading-relaxed">
                      Optimaler Wasserdruck in Mehrfamilienhäusern und Gewerbeimmobilien.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Wrench className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Wartung & Reparatur</h3>
                    <p className="text-pretty text-sm text-muted-foreground leading-relaxed">
                      Regelmäßige Wartung und schnelle Reparatur für maximale Betriebssicherheit.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Image Gallery */}
            <section className="rounded-lg bg-muted p-8">
              <h2 className="mb-6 text-3xl font-bold">Unsere Referenzprojekte</h2>
              <p className="mb-8 text-pretty text-lg text-muted-foreground leading-relaxed">
                Professionelle Installation und Wartung von Pumpensystemen für private und gewerbliche Kunden.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="group overflow-hidden rounded-lg">
                  <Image
                    src="/images/pump-system-1.jpg"
                    alt="Professionelle Abwasserpumpstation"
                    width={600}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="group overflow-hidden rounded-lg">
                  <Image
                    src="/images/pump-system-2.jpg"
                    alt="Moderne Wasseraufbereitungsanlage"
                    width={600}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="group overflow-hidden rounded-lg">
                  <Image
                    src="/images/pump-tanks-outdoor.jpg"
                    alt="Regenwasserspeicher und Tanks"
                    width={600}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="group overflow-hidden rounded-lg">
                  <Image
                    src="/images/pump-components.jpg"
                    alt="Hochwertige Pumpenkomponenten"
                    width={600}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section>
              <h2 className="mb-6 text-3xl font-bold">Warum Pumpentechnik Bauer?</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Über 25 Jahre Erfahrung</h3>
                    <p className="text-sm text-muted-foreground">Bewährte Expertise in Pumpentechnik</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Qualitätsprodukte</h3>
                    <p className="text-sm text-muted-foreground">Nur hochwertige Markenpumpen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">24/7 Notdienst</h3>
                    <p className="text-sm text-muted-foreground">Immer für Sie erreichbar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Schweizweiter Service</h3>
                    <p className="text-sm text-muted-foreground">Schnelle Reaktionszeiten</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Komplettlösungen</h3>
                    <p className="text-sm text-muted-foreground">Von Planung bis Wartung</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">Faire Preise</h3>
                    <p className="text-sm text-muted-foreground">Transparente Kostenvoranschläge</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Process */}
            <section className="rounded-lg border border-border bg-card p-8">
              <h2 className="mb-6 text-3xl font-bold">Unser Serviceprozess</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">Beratung & Planung</h3>
                    <p className="text-pretty text-muted-foreground">
                      Kostenlose Vor-Ort-Beratung und individuelle Planung Ihrer Pumpenanlage.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">Angebot & Auswahl</h3>
                    <p className="text-pretty text-muted-foreground">
                      Transparentes Angebot mit Produktauswahl passend zu Ihren Anforderungen.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">Installation</h3>
                    <p className="text-pretty text-muted-foreground">
                      Fachgerechte Installation durch erfahrene Techniker mit Qualitätsgarantie.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">Wartung & Support</h3>
                    <p className="text-pretty text-muted-foreground">
                      Regelmäßige Wartung und 24/7-Notdienst für maximale Betriebssicherheit.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="rounded-lg bg-secondary p-8 text-center text-secondary-foreground">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="mb-4 text-2xl font-bold">Bereit für Ihr Pumpenprojekt?</h2>
              <p className="mb-6 text-pretty text-secondary-foreground/80">
                Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Angebot
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <a href="tel:+41788940949">
                    <Phone className="mr-2 h-5 w-5" />
                    +41 78 894 09 49
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-secondary-foreground/20 hover:bg-secondary-foreground/10 bg-transparent"
                >
                  <Link href="/contact">Kontaktformular</Link>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
