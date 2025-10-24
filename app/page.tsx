import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, CheckCircle2, Home, Hammer, Paintbrush } from "lucide-react"
import { HeroSlideshow } from "@/components/hero-slideshow"
import { PumpShowcaseModal } from "@/components/pump-showcase-modal"

export default function HomePage() {
  const specializations = [
    {
      icon: Home,
      title: "Beratung",
      description:
        "Wir beraten Sie kompetent bei Umbauten, Neubauten und Renovationen für Haus, Wohnung oder Geschäftsräume.",
    },
    {
      icon: Hammer,
      title: "Planung",
      description:
        "Von Statik bis Form und Gestaltung – wir kombinieren Struktur und Design, um Ihr Traumprojekt zu realisieren.",
    },
    {
      icon: Paintbrush,
      title: "Ausführung",
      description:
        "Qualitativ, pünktlich und gewissenhaft: Wir begleiten Sie vom ersten Schritt bis zur Fertigstellung Ihres Bauprojekts.",
    },
  ]

  const recentProjects = [
    { image: "/images/hero-3.jpg", title: "Komplette Badsanierung" },
    { image: "/images/hero-2.jpg", title: "Hochwertige Fliesenarbeiten" },
    { image: "/images/hero-1.jpg", title: "Exklusive Wandgestaltung" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Slideshow */}
      <HeroSlideshow />

      {/* Specialization Section */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Unsere Spezialisierung
            </h2>
            <p className="mt-4 text-pretty text-base sm:text-lg lg:text-xl text-muted-foreground px-4">
              Ihr Partner für exzellente Bauarbeiten in der ganzen Schweiz
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {specializations.map((item, index) => (
              <Card
                key={index}
                className="border-border transition-all hover:shadow-xl hover:-translate-y-2 duration-300"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4 sm:mb-6 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-semibold">{item.title}</h3>
                  <p className="text-pretty text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <PumpShowcaseModal />

      {/* Recent Projects Section */}
      <section className="bg-muted px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Vor kurzem fertiggestellt
            </h2>
            <p className="mt-4 text-pretty text-base sm:text-lg lg:text-xl text-muted-foreground px-4">
              Einblick in unsere letzten Projekte
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {recentProjects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border transition-all hover:shadow-xl hover:-translate-y-2 duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-balance text-lg sm:text-xl font-semibold">{project.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="shadow-sm bg-transparent">
              <Link href="/projects">Alle Referenzen ansehen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Unsere Dienstleistungen
            </h2>
            <p className="mt-4 text-pretty text-base sm:text-lg lg:text-xl text-muted-foreground px-4">
              Umfangreiche Bau- und Renovationsdienstleistungen
            </p>
          </div>

          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Umbauten", link: "/services/umbauten" },
              { name: "Natursteinverlegungen", link: "/services/natursteinverlegung" },
              { name: "Maurerarbeiten", link: "/services/maurerarbeiten" },
              { name: "Gipsarbeiten", link: "/services/gipsarbeiten" },
              { name: "Sanitärarbeiten", link: "/services/sanitararbeiten" },
              { name: "Malerarbeiten", link: "/services/malerarbeiten" },
              { name: "Plattenlegerarbeiten", link: "/services/plattenlegerarbeiten" },
            ].map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 sm:p-5 transition-all hover:bg-accent hover:shadow-md hover:-translate-y-1 duration-200"
              >
                <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-primary" />
                <span className="text-sm sm:text-base font-medium">{service.name}</span>
              </Link>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
              <Link href="/services/umbauten">Mehr erfahren</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-muted px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Warum KIMI Umbauten?
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Seit 2011", description: "Über 10 Jahre Erfahrung in Bauarbeiten" },
              { title: "Schweizweiter Service", description: "Zuverlässig in der ganzen Schweiz" },
              { title: "Qualitätsarbeit", description: "Höchste Standards bei jedem Projekt" },
              { title: "Komplettservice", description: "Von Planung bis Fertigstellung" },
            ].map((item, index) => (
              <Card key={index} className="border-border text-center">
                <CardContent className="p-5 sm:p-6">
                  <h3 className="mb-2 text-lg sm:text-xl font-bold text-primary">{item.title}</h3>
                  <p className="text-pretty text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden px-4 py-16 sm:py-24">
        <div className="absolute inset-0">
          <Image src="/images/hero-5.jpg" alt="Kontaktieren Sie uns" fill className="object-cover" />
          <div className="absolute inset-0 bg-secondary/90" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center text-secondary-foreground px-4">
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Bereit für Ihr Bauprojekt?
          </h2>
          <p className="mt-4 sm:mt-6 text-pretty text-base sm:text-lg lg:text-xl text-secondary-foreground/90">
            Kontaktieren Sie uns noch heute für eine kostenlose Beratung und ein unverbindliches Angebot
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl"
            >
              <a href="tel:+41788940949">
                <Phone className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                +41 78 894 09 49
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto border-secondary-foreground/30 hover:bg-secondary-foreground/10 bg-transparent text-secondary-foreground shadow-xl"
            >
              <Link href="/contact">Kontaktformular</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
