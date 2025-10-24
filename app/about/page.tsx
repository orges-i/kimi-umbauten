import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, TrendingUp, History } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Über Uns | KIMI Umbauten",
  description:
    "KIMI Umbauten ist Ihr professioneller Partner für exzellente Bauarbeiten in der ganzen Schweiz. Fachliche Handwerksarbeiten und fundierte Kompetenz garantieren Ihnen perfekte Innen- und Außenbauten in höchster Qualität.",
}

export default function AboutPage() {
  const sections = [
    {
      icon: Target,
      title: "Mission",
      content: "Wir machen aus Bauideen reale Projekte – mit Engagement, Qualität und Erfahrung.",
    },
    {
      icon: Eye,
      title: "Vision",
      content:
        "Wir finden neue Ideen und machen Ihre Wohnträume wahr – ob Dachstühle, Holzverkleidungen oder Naturstein.",
    },
    {
      icon: TrendingUp,
      title: "Strategien",
      content: "Tradition, Fachwissen und Präzision – das Fundament unserer nachhaltigen Bauqualität.",
    },
    {
      icon: History,
      title: "Unsere Geschichte",
      content:
        "Gegründet 2011, steht KIMI Umbauten für Qualität, Zuverlässigkeit und Innovation in der Schweizer Bauwelt.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 px-4 py-20 text-secondary-foreground">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Über Uns</h1>
          <p className="mt-6 text-pretty text-lg sm:text-xl text-secondary-foreground/80">
            KIMI Umbauten ist Ihr professioneller Partner für exzellente Bauarbeiten in der ganzen Schweiz. Fachliche
            Handwerksarbeiten und fundierte Kompetenz garantieren Ihnen perfekte Innen- und Außenbauten in höchster
            Qualität.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Strategy, History */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {sections.map((section, index) => (
              <Card key={index} className="border-border transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <section.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="mb-3 text-2xl font-bold">{section.title}</h2>
                  <p className="text-pretty text-muted-foreground leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Unsere Werte</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">Was uns auszeichnet</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Qualität", description: "Höchste Standards in jedem Projekt" },
              { title: "Zuverlässigkeit", description: "Pünktlich und gewissenhaft" },
              { title: "Erfahrung", description: "Über 10 Jahre Expertise" },
              { title: "Innovation", description: "Moderne Lösungen und Techniken" },
              { title: "Kundenzufriedenheit", description: "Ihre Zufriedenheit ist unser Ziel" },
              { title: "Nachhaltigkeit", description: "Umweltbewusste Bauweise" },
            ].map((value, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                  <p className="text-pretty text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Unser Team</h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground leading-relaxed">
            Unser erfahrenes Team besteht aus qualifizierten Fachkräften, die mit Leidenschaft und Präzision arbeiten.
            Von der Planung bis zur Ausführung stehen wir Ihnen mit Rat und Tat zur Seite und sorgen dafür, dass Ihr
            Bauprojekt termingerecht und in höchster Qualität umgesetzt wird.
          </p>
        </div>
      </section>
    </div>
  )
}
