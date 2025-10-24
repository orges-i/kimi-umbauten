"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    image: "/images/hero-1.jpg",
    title: "Exklusive Innengestaltung",
    subtitle: "Hochwertige Malerarbeiten und Wandgestaltung",
  },
  {
    image: "/images/hero-2.jpg",
    title: "Professionelle Plattenlegerarbeiten",
    subtitle: "Präzise Verlegung von Fliesen und Naturstein",
  },
  {
    image: "/images/hero-3.jpg",
    title: "Komplette Badumbauten",
    subtitle: "Von der Planung bis zur Fertigstellung",
  },
  {
    image: "/images/hero-4.jpg",
    title: "Fachgerechte Fliesenverlegung",
    subtitle: "Perfekte Ergebnisse für Boden und Wand",
  },
  {
    image: "/images/hero-5.jpg",
    title: "Moderne Heizsysteme",
    subtitle: "Installation von Fußbodenheizungen",
  },
]

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative flex min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] items-center justify-center overflow-hidden">
      {/* Slideshow Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/85 to-secondary/75" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-5xl space-y-6 sm:space-y-8 text-center px-4 py-12 sm:py-16 lg:py-20">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-primary-foreground backdrop-blur-sm">
          <span>Seit 2011 Ihr Partner für Bauarbeiten</span>
        </div>

        <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-secondary-foreground animate-fade-in-up">
          KIMI Umbauten
        </h1>

        <p className="mx-auto max-w-3xl text-balance text-lg sm:text-xl lg:text-2xl text-secondary-foreground/90 font-medium px-4">
          {slides[currentSlide].title}
        </p>

        <p className="mx-auto max-w-2xl text-pretty text-base sm:text-lg text-secondary-foreground/80 px-4">
          {slides[currentSlide].subtitle}
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 pt-4 sm:flex-row px-4">
          <Button
            size="lg"
            asChild
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
          >
            <a href="tel:+41788940949">
              <Phone className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
              Jetzt anrufen
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="w-full sm:w-auto bg-background/10 backdrop-blur-sm border-secondary-foreground/20 hover:bg-background/20"
          >
            <Link href="/contact">Kostenlose Beratung</Link>
          </Button>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="hidden lg:block absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/20 p-3 backdrop-blur-sm transition-all hover:bg-background/30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-secondary-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden lg:block absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/20 p-3 backdrop-blur-sm transition-all hover:bg-background/30"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-secondary-foreground" />
      </button>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-6 sm:w-8" : "bg-secondary-foreground/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
