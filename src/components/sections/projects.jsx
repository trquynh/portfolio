import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Rocket,
  Camera,
  Smartphone,
  Terminal,
  TrainFront,
  ChevronRight,
  Code,
  Globe,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Meine persönliche Portfolio-Website mit React.js, Next.js und Tailwind CSS, die meine Projekte, Fähigkeiten und meinen Bildungsweg präsentiert.",
      icon: Code,
      image: "/portfolio-seite.png",
      tech: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
        "Framer Motion",
      ],
      features: [
        "Responsives Design für alle Geräte",
        "Dunkelmodus-Unterstützung",
        "Moderne UI mit interaktiven Elementen",
        "SEO-optimierte Struktur",
        "Einfach erweiterbare Komponenten-Architektur",
      ],
      github: "https://github.com/trquynh/portfolio",
      demo: "https://trquynh.vercel.app", // Falls du es bereits deployt hast
      date: "05/2025",
    },
    {
      title: "TrailMate",
      description:
        "Eine Reiseplanungsplattform mit React.js, Next.js und PostgreSQL. Ermöglicht Benutzern, Reisen zu planen und zu teilen.",
      icon: Rocket,
      image: "/trailmate.png",
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
      icon: TrainFront,
      image: "/smart-train.jpg",
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
      image: "/biker-app.png",
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
    {
      title: "Business Website mit WordPress",
      description:
        "Entwicklung und Anpassung einer Unternehmenswebsite mit WordPress, inklusive maßgeschneiderten Themes und Funktionen für verbesserte Benutzererfahrung.",
      icon: Globe, // Importiere Globe von lucide-react
      image: "/wordpress-seite.png", // Bild deiner WordPress-Seite
      tech: [
        "WordPress",
        "PHP",
        "MySQL",
        "CSS/SASS",
        "Elementor",
        "WooCommerce",
      ],
      features: [
        "Responsives benutzerdefiniertes Theme",
        "E-Commerce Integration mit WooCommerce",
        "Kontaktformular und Newsletter-Anbindung",
        "Suchmaschinenoptimierung (SEO)",
        "Performance-Optimierung",
      ],
      github: null, // Falls du keinen GitHub-Link hast
      liveSeite: "https://meisterbetrieb-asmussen.de/",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background with grid pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Floating code blocks in background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 opacity-20 transform rotate-3">
          <pre className="bg-black/5 p-4 rounded-lg font-mono text-sm">
            {`class Project {
  constructor(vision) {
    this.code = translate(vision);
    this.impact = deliver(this.code);
  }
}`}
          </pre>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Terminal-style header - matching other sections */}
          <div className="flex items-center gap-2 text-primary justify-center mb-8">
            <Terminal className="w-6 h-6" />
            <span className="font-mono">/projects</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Meine ausgewählten Projekte
          </h2>

          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
            Von der <span className="text-primary font-medium">Idee</span> zum{" "}
            <span className="text-primary font-medium">Code</span> zur{" "}
            <span className="text-primary font-medium">Lösung</span>. Hier sind
            einige meiner Projekte, die meine Leidenschaft für innovative
            Technologielösungen widerspiegeln.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:border-primary/20"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardHeader className="p-0">
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <project.icon className="w-8 h-8" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle
                    className={`text-xl font-bold mb-3 transition-colors duration-500 ${
                      hoveredIndex === index ? "text-primary" : ""
                    }`}
                  >
                    {project.title}
                  </CardTitle>

                  <p className="text-muted-foreground mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="space-y-5 mb-6">
                    {/* Tech stack with elegant hover effect */}
                    <div>
                      <h4 className="font-medium mb-3 text-primary/80 text-sm uppercase tracking-wider">
                        Technologien
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant={
                              hoveredIndex === index ? "default" : "secondary"
                            }
                            className={`transition-all duration-500 ${
                              hoveredIndex === index
                                ? "bg-primary/10 hover:bg-primary/20 text-primary"
                                : ""
                            }`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Features with elegant styling */}
                    <div>
                      <h4 className="font-medium mb-3 text-primary/80 text-sm uppercase tracking-wider">
                        Key Features
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {project.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-2"
                          >
                            <ChevronRight
                              className={`w-4 h-4 mt-0.5 transition-colors duration-500 ${
                                hoveredIndex === index
                                  ? "text-primary"
                                  : "text-muted-foreground"
                              }`}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      className={`flex-1 group transition-all duration-500 ${
                        hoveredIndex === index
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "bg-primary/80"
                      }`}
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 w-full justify-center"
                      >
                        <Github
                          className={`w-4 h-4 transition-transform duration-300 ${
                            hoveredIndex === index ? "scale-110" : ""
                          }`}
                        />
                        GitHub
                      </a>
                    </Button>
                    {project.liveSeite && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 group border-primary/20 hover:border-primary/50"
                      >
                        <a
                          href={project.liveSeite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 w-full justify-center"
                        >
                          <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          Kundenseite
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

      {/* Animated background elements - matching other sections */}
      <div className="absolute -top-64 -right-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-64 -left-64 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
    </section>
  );
}
