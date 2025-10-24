import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Referenzen | KIMI Umbauten",
  description: "Einige unserer erfolgreich abgeschlossenen Projekte. Bauarbeiten in der ganzen Schweiz.",
}

export default function ProjectsPage() {
  const projects = [
    {
      title: "Sanitärarbeiten & Entwässerungssysteme",
      description: "Installation moderner Pumpensysteme und Entwässerungslösungen",
      image: "/images/pump-system-1.jpg",
      category: "Sanitärarbeiten",
    },
    {
      title: "Professionelle Pumpensysteme",
      description: "Komplette Sanitärinstallation mit hochwertigen Komponenten",
      image: "/images/pump-system-2.jpg",
      category: "Sanitärarbeiten",
    },
    {
      title: "Moderne Abwassertechnik",
      description: "Installation von Abwassertanks und Speichersystemen",
      image: "/images/pump-tanks-outdoor.jpg",
      category: "Sanitärarbeiten",
    },
    {
      title: "Hochwertige Pumpenkomponenten",
      description: "Lieferung und Installation von Pumpenkomponenten",
      image: "/images/pump-components.jpg",
      category: "Sanitärarbeiten",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 px-4 py-20 text-secondary-foreground">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Referenzen</h1>
          <p className="mt-6 text-pretty text-lg sm:text-xl text-secondary-foreground/80">
            Einige unserer erfolgreich abgeschlossenen Projekte
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {project.category}
                  </div>
                  <h3 className="mb-2 text-balance text-xl font-semibold">{project.title}</h3>
                  <p className="text-pretty text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
