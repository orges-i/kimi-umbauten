"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplets, ArrowRight } from "lucide-react"

const pumpImages = [
  {
    src: "/images/pump-indoor-1.jpg",
    title: "Hebeanlage Installation",
    description: "Professionelle Installation von Hebeanlagen für Abwasser in Kellern und Untergeschossen",
  },
  {
    src: "/images/pump-outdoor-tanks.jpg",
    title: "Abwassertanks",
    description: "Hochwertige Abwassertanks und Speichersysteme für private und gewerbliche Anwendungen",
  },
  {
    src: "/images/pump-indoor-2.jpg",
    title: "Pumpensysteme",
    description: "Moderne Pumpensysteme mit automatischer Steuerung für zuverlässigen Betrieb",
  },
  {
    src: "/images/pump-outdoor-pallets.jpg",
    title: "Großprojekte",
    description: "Komplette Abwasserlösungen für Mehrfamilienhäuser und Gewerbeimmobilien",
  },
]

export function PumpShowcaseModal() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="bg-gradient-to-br from-secondary/10 to-secondary/5 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 sm:mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Droplets className="h-4 w-4" />
            <span>Spezialisierung</span>
          </div>
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Abwasser- und Pumpentechnik
          </h2>
          <p className="mt-4 sm:mt-6 text-pretty text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Wir sind spezialisiert auf die Installation und Wartung von Hebeanlagen, Abwasserpumpen und kompletten
            Entwässerungssystemen. Professionelle Lösungen für Privat- und Gewerbekunden.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8 sm:mb-12">
          {pumpImages.map((pump, index) => (
            <Dialog
              key={index}
              open={selectedImage === index}
              onOpenChange={(open) => setSelectedImage(open ? index : null)}
            >
              <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden border-border transition-all hover:shadow-xl hover:-translate-y-2 duration-300">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={pump.src || "/placeholder.svg"}
                      alt={pump.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-base sm:text-lg font-semibold mb-1">{pump.title}</h3>
                      <p className="text-xs sm:text-sm text-white/80 line-clamp-2">{pump.description}</p>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-xl sm:text-2xl">{pump.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="relative aspect-video sm:aspect-[16/10] overflow-hidden rounded-lg">
                    <Image src={pump.src || "/placeholder.svg"} alt={pump.title} fill className="object-cover" />
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{pump.description}</p>
                  <div className="space-y-3 pt-4">
                    <h4 className="font-semibold text-base sm:text-lg">Unsere Leistungen:</h4>
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                        <span>Beratung und Planung von Abwassersystemen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                        <span>Installation von Hebeanlagen und Pumpensystemen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                        <span>Wartung und Reparatur bestehender Anlagen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                        <span>24/7 Notdienst bei Störungen</span>
                      </li>
                    </ul>
                  </div>
                  <Button asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                    <a href="tel:+41788940949">Jetzt Beratung anfragen</a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
            <a href="/services/sanitararbeiten">
              Mehr über Sanitärarbeiten
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
