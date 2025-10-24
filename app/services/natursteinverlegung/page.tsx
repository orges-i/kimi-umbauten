import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Natursteinverlegungen | KIMI Umbauten",
  description:
    "Exklusive Natursteinarbeiten für Innen- und Außenbereiche. Professionelle Natursteinverlegung in der ganzen Schweiz.",
}

export default function NatursteinverlegungPage() {
  const services = [
    { name: "Umbauten", href: "/services/umbauten" },
    { name: "Natursteinverlegungen", href: "/services/natursteinverlegung" },
    { name: "Maurerarbeiten", href: "/services/maurerarbeiten" },
    { name: "Gipsarbeiten", href: "/services/gipsarbeiten" },
    { name: "Sanitärarbeiten", href: "/services/sanitararbeiten" },
    { name: "Malerarbeiten", href: "/services/malerarbeiten" },
    { name: "Plattenlegerarbeiten", href: "/services/plattenlegerarbeiten" },
  ]

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 px-4 py-20 text-secondary-foreground">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Natursteinverlegungen
          </h1>
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

          <div className="space-y-8">
            <section>
              <h2 className="mb-4 text-3xl font-bold">Natursteinverlegungen</h2>
              <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
                Exklusive Natursteinarbeiten für Innen- und Außenbereiche. Wir verlegen hochwertige Natursteine wie
                Granit, Marmor, Schiefer und Kalkstein mit höchster Präzision und Sorgfalt. Ob für Terrassen,
                Eingangsbereiche, Küchen oder Bäder – Naturstein verleiht jedem Raum eine edle und zeitlose Atmosphäre.
              </p>
            </section>

            <section className="rounded-lg bg-secondary p-8 text-center text-secondary-foreground">
              <h2 className="mb-4 text-2xl font-bold">Interessiert an Natursteinverlegungen?</h2>
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
