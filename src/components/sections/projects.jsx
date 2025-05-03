import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Rocket, Camera, Smartphone } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  const projects = [
    {
      title: "TrailMate",
      description:
        "Eine Reiseplanungsplattform mit React.js, Next.js und PostgreSQL. Ermöglicht Benutzern, Reisen zu planen und zu teilen.",
      icon: Rocket,
      image: "/projects/trailmate.png",
      tech: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Railway",
      ],
      features: [
        "RESTful API für effiziente Datenverwaltung",
        "CI/CD-Integration für automatisierte Deployments",
        "Moderne UI mit Tailwind CSS",
        "Authentifizierung und Benutzerverwaltung",
      ],
      github: "https://github.com/trquynh/trailmate",
      demo: null,
      date: "02/2025 - Heute",
    },
    {
      title: "LEGO Smart Train mit Raspberry Pi",
      description:
        "Intelligentes Zugmodell mit Pi-Kamera und Sensorintegration. Inklusive Echtzeitbildverarbeitung und Datenauswertung.",
      icon: Camera,
      image: "/projects/lego-train.png",
      tech: ["Python", "Raspberry Pi", "Computer Vision", "Sensorik"],
      features: [
        "Ansteuerung über Raspberry Pi",
        "Kamerabild-Auswertung in Echtzeit",
        "Sensordaten-Aggregation",
        "Modulare Architektur für Erweiterungen",
      ],
      github: "https://github.com/trquynh/lego-smart-train",
      demo: null,
      date: "04/2025 - Heute",
    },
    {
      title: "Biker App",
      description:
        "Mobile Anwendung für Fahrradsegment-Management mit Funktion für Kunden, Mitarbeiter und Geschäftsführung.",
      icon: Smartphone,
      image: "/projects/biker-app.png",
      tech: ["Dart", "Android Studio", "Flutter"],
      features: [
        "Reparaturfunktion und Terminkalender",
        "Statistikauswertung für Management",
        "Multi-User-System mit Rollenverwaltung",
        "iOS- und Android-kompatibel",
      ],
      github: "https://github.com/trquynh/biker-app",
      demo: null,
      date: "04/2023 - 08/2023",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ausgewählte Projekte
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <project.icon className="w-8 h-8" />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <span className="text-sm text-muted-foreground">
                      {project.date}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Technologien:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    </Button>
                    {project.demo && (
                      <Button size="sm" variant="outline" className="flex-1">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
