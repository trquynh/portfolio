import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Trophy,
  Terminal,
  BookOpen,
  Calendar,
  Code,
  MapPin,
  School,
} from "lucide-react";

export function EducationSection() {
  const education = [
    {
      id: "bachelor",
      degree: "Bachelor Informatik",
      school: "Hochschule Darmstadt",
      location: "Darmstadt, Deutschland",
      period: "2021 - Heute",
      description:
        "Fundierte Kenntnisse in objektorientierter Programmierung und Softwareentwicklung",
      highlights: ["Aktueller Notenschnitt: 1,9"],
      modules: [
        "Webbasierte Anwendungen",
        "Datenbanken + Data Warehouse Technology",
        "Künstliche Intelligenz",
        "Software Engineering",
        "Visual Computing",
        "Wirtschaftsinformatik",
        "IT-Sicherheit",
      ],
    },
    {
      id: "studienkolleg",
      degree: "Studienkolleg",
      school: "Goethe-Institut Frankfurt am Main",
      location: "Frankfurt, Deutschland",
      period: "2019 - 2020",
      description: "Vorbereitung auf ein technisches Studium in Deutschland",
      highlights: ["Erfolgreich abgeschlossen mit Note 1,8"],
      modules: ["Deutsch", "Mathematik", "Physik", "Informatik"],
    },
    {
      id: "law",
      degree: "Rechtswissenschaften",
      school: "Universität Ho-Chi-Minh-Stadt",
      location: "Ho-Chi-Minh-Stadt, Vietnam",
      period: "2018-2019",
      description:
        "Grundlegende Kenntnisse in Zivilrecht, Verfassungsrecht und Rechtsmethodik",
      highlights: ["Analytisches Denken", "Präzises Argumentieren"],
      modules: [
        "Zivilrecht",
        "Öffentliches Recht",
        "Strafrecht",
        "Rechtsphilosophie",
      ],
    },
  ];

  return (
    <section id="education" className="pt-32 pb-20 relative overflow-hidden">
      {/* Background with grid pattern - OHNE Farbübergang */}
      <div className="absolute inset-0 bg-gradient-to-br">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808030,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      {/* Floating code blocks - shorter version for education section */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute lg:top-20 sm:top-10 md:top-30 left-4 sm:left-10 md:left-2 lg:left-40 transform -rotate-12 max-w-[160px] sm:max-w-none">
          <pre className="p-2 sm:p-3 md:p-4 rounded-lg font-mono text-[10px] xs:text-[10px] sm:text-xs md:text-sm">
            {`function learn(subject) {
  knowledge++;
  return growth;
}`}
          </pre>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Terminal-style header */}
          <div className="flex items-center gap-2 text-primary justify-center mb-8">
            <Terminal className="w-6 h-6" />
            <span className="font-mono">/education</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Mein Bildungsweg
          </h2>

          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Eine Reise des kontinuierlichen Lernens – von Vietnam nach
            Deutschland, von Rechtswissenschaften zur Informatik.
          </p>

          {/* Education Cards Container */}
          <div className="grid gap-8">
            {education.map((edu) => (
              <Card key={edu.id} className="overflow-hidden border shadow">
                <CardHeader className="pb-2">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      </div>
                      <CardDescription className="text-base font-medium flex items-center gap-1.5">
                        <School className="w-4 h-4 inline-block" />
                        {edu.school}
                      </CardDescription>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                  <p className="text-muted-foreground">{edu.description}</p>

                  {edu.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, index) => (
                        <Badge
                          key={index}
                          variant="default"
                          className="flex items-center gap-1"
                        >
                          <Trophy className="w-3 h-3" />
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {edu.modules && edu.modules.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium flex items-center gap-1.5 text-primary">
                        <BookOpen className="w-4 h-4" />
                        Relevante Module:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.modules.map((module, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-sm flex items-center"
                          >
                            <Code className="w-3 h-3 mr-1 inline-block" />
                            {module}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
