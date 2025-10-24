import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sanitärarbeiten | KIMI Umbauten",
  description:
    "Professionelle Sanitärinstallationen für private und gewerbliche Objekte. Sanitärarbeiten in der ganzen Schweiz.",
}

export default function SanitararbeitenPage() {
  const services = [
    { name: "Umbauten", href: "/services/umbauten" },
    { name: "Natursteinverlegungen", href: "/services/natursteinverlegung" },
    { name: "Maurerarbeiten", href: "/services/maurerarbeiten" },
    { name: "Gipsarbeiten", href: "/services/gipsarbeiten" },
    { name: "Sanitärarbeiten", href: "/services/sanitararbeiten" },
    { name: "Malerarbeiten", href: "/services/malerarbeiten" },
    { name: "Plattenlegerarbeiten", href: "/services/plattenlegerarbeiten" },
  ]

  const sanitaryServices = [
    "Badezimmerinstallationen",
    "Kücheninstallationen",
    "Heizungsinstallationen",
    "Wasserversorgungssysteme",
    "Entwässerungssysteme",
    "Sanitärreparaturen",
  ]

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 px-4 py-20 text-secondary-foreground">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Sanitärarbeiten</h1>
          <p className="mt-6 text-pretty text-lg text-secondary-foreground/90">
            Professionelle Sanitärinstallationen für private und gewerbliche Objekte
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-[250px_1fr]">
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

          <div className="space-y-12">
            <section>
              <h2 className="mb-4 text-3xl font-bold">Sanitärarbeiten</h2>
              <p className="text-pretty text-lg text-muted-foreground leading-relaxed mb-6">
                Professionelle Sanitärinstallationen für private und gewerbliche Objekte. Von der Planung bis zur
                Installation – wir kümmern uns um alle Sanitärarbeiten. Bäder, Küchen, Heizungen und
                Entwässerungssysteme werden fachgerecht installiert und gewartet.
              </p>

              <div className="grid gap-3 sm:grid-cols-2 mt-8">
                {sanitaryServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:bg-accent"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Special Section: Badabläufe und Duschrinnen with Pump Images */}
            <section className="rounded-lg border border-border bg-muted p-8">
              <h2 className="mb-4 text-3xl font-bold">Badabläufe und Duschrinnen</h2>
              <p className="text-pretty text-lg text-muted-foreground leading-relaxed mb-8">
                Bedarfsgerechte Entwässerung im Bad. Wir bieten moderne Lösungen für Bäder, Wellnessanlagen und
                Schwimmbäder – von praktischen bis zu designorientierten Systemen. Unsere Expertise umfasst die
                Installation von Hebeanlagen, Pumpensystemen und modernen Entwässerungslösungen.
              </p>

              {/* Pump Systems Gallery */}
              <div className="grid gap-6 sm:grid-cols-2 mb-8">
                <Card className="overflow-hidden border-border group">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/pump-system-1.jpg"
                      alt="Professionelle Hebeanlage für Badezimmer"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">Hebeanlage für Badezimmer</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Moderne Pumpensysteme für effiziente Abwasserentsorgung
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-border group">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/pump-system-2.jpg"
                      alt="Kompakte Entwässerungssysteme"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">Kompakte Entwässerungssysteme</h3>
                    <p className="text-sm text-muted-foreground mt-1">Platzsparende Lösungen für jeden Raum</p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-border group">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/pump-tanks-outdoor.jpg"
                      alt="Großvolumige Speichersysteme"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">Speichersysteme</h3>
                    <p className="text-sm text-muted-foreground mt-1">Hochwertige Tanks für Abwasser und Regenwasser</p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-border group">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/pump-components.jpg"
                      alt="Professionelle Komponenten"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">Hochwertige Komponenten</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Qualitätsprodukte für langlebige Installationen
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-lg bg-background p-6">
                <h3 className="mb-3 text-xl font-semibold">Unsere Entwässerungslösungen umfassen:</h3>
                <ul className="space-y-2">
                  {[
                    "Moderne Duschrinnen und Bodenabläufe",
                    "Hebeanlagen für Kellerräume und Souterrains",
                    "Pumpensysteme für Abwasser und Grauwasser",
                    "Regenwassernutzungssysteme",
                    "Wartung und Service bestehender Anlagen",
                    "Beratung für optimale Entwässerungslösungen",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="rounded-lg bg-secondary p-8 text-center text-secondary-foreground">
              <h2 className="mb-4 text-2xl font-bold">Interessiert an Sanitärarbeiten?</h2>
              <p className="mb-6 text-pretty text-secondary-foreground/80">
                Kontaktieren Sie uns für eine kostenlose Beratung
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <a href="tel:+41788940949">
                    <Phone className="mr-2 h-5 w-5" />
                    Jetzt anrufen
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
