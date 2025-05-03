import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Download } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefon",
      value: "0162 / 9508515",
      href: "tel:+4916295085515",
    },
    {
      icon: Mail,
      label: "E-Mail",
      value: "trquynh2010@gmail.com",
      href: "mailto:trquynh2010@gmail.com",
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: "Siemensstraße 10, 64289 Darmstadt",
      href: "https://maps.google.com/?q=Siemensstraße+10,+64289+Darmstadt",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/trquynh",
      href: "https://github.com/trquynh",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Kontakt
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Ich freue mich auf Ihre Nachricht und auf die Möglichkeit, meine
            Fähigkeiten in Ihrem Team einzubringen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6 px-4 sm:px-6 md:px-8">
            {contactInfo.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="p-3 rounded-full bg-primary/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6 px-4 sm:px-6 md:px-8">
            <Card className="bg-primary/5">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-semibold">
                  Lebenslauf herunterladen
                </h3>
                <p className="text-muted-foreground">
                  Laden Sie meinen vollständigen Lebenslauf im PDF-Format
                  herunter.
                </p>
                <Button className="w-full" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Lebenslauf herunterladen
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">
                  Bereit für eine Zusammenarbeit?
                </h3>
                <p className="opacity-90">
                  Ich bin aktuell auf der Suche nach einem Praktikumsplatz in
                  der Softwareentwicklung. Lassen Sie uns gemeinsam an
                  innovativen Projekten arbeiten!
                </p>
                <Button variant="secondary" className="w-full mt-4" size="lg">
                  Nachricht senden
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
