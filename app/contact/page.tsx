"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 px-4 py-12 sm:py-16 lg:py-20 text-secondary-foreground">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
            Kontakt
          </h1>
          <p className="mt-4 sm:mt-6 text-pretty text-base sm:text-lg lg:text-xl text-secondary-foreground/80 px-4">
            Kontaktieren Sie uns für Fragen, Angebote oder Beratung. Wir freuen uns auf Ihre Anfrage.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold">Kontaktinformationen</h2>
                <div className="space-y-4 sm:space-y-6">
                  <Card className="border-border">
                    <CardContent className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="mb-1 text-sm sm:text-base font-semibold">Adresse</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground break-words">
                          Römerstrasse 13A
                          <br />
                          8552 Felben-Wellhausen
                          <br />
                          Switzerland
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="mb-1 text-sm sm:text-base font-semibold">Telefon</h3>
                        <a
                          href="tel:+41788940949"
                          className="text-xs sm:text-sm text-primary hover:underline break-all"
                        >
                          +41 78 894 09 49
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="mb-1 text-sm sm:text-base font-semibold">E-Mail</h3>
                        <a
                          href="mailto:info@kimiumbauten.ch"
                          className="text-xs sm:text-sm text-primary hover:underline break-all"
                        >
                          info@kimiumbauten.ch
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="mb-2 text-sm sm:text-base font-semibold">Öffnungszeiten</h3>
                        <div className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                          <div className="flex justify-between gap-2 sm:gap-4">
                            <span className="shrink-0">Montag–Freitag:</span>
                            <span className="font-medium text-foreground">07:00–17:00</span>
                          </div>
                          <div className="flex justify-between gap-2 sm:gap-4">
                            <span className="shrink-0">Samstag:</span>
                            <span className="font-medium text-foreground">Geschlossen</span>
                          </div>
                          <div className="flex justify-between gap-2 sm:gap-4">
                            <span className="shrink-0">Sonntag:</span>
                            <span className="font-medium text-foreground">Geschlossen</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <Button size="lg" asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                  <a href="tel:+41788940949">
                    <Phone className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                    Jetzt anrufen
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-border">
              <CardContent className="p-6 sm:p-8">
                <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold">Nachricht senden</h2>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm sm:text-base">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ihr Name"
                      className="text-sm sm:text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm sm:text-base">
                      E-Mail *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ihre.email@beispiel.ch"
                      className="text-sm sm:text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm sm:text-base">
                      Telefon
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+41 XX XXX XX XX"
                      className="text-sm sm:text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm sm:text-base">
                      Nachricht *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Beschreiben Sie Ihr Projekt..."
                      rows={6}
                      className="text-sm sm:text-base resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Nachricht senden
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-muted px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2754.8362856500735!2d8.9377129767732!3d47.574448371163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ac9dc55555555%3A0xaaaaaaaaaaaaaaa!2sR%C3%B6merstrasse%2013A%2C%208552%20Felben-Wellhausen%2C%20Switzerland!5e0!3m2!1sen!2sch!4v1698411111111!5m2!1sen!2sch"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KIMI Umbauten Location"
              className="sm:h-[400px]"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
