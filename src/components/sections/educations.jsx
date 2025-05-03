import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Trophy } from "lucide-react";

export function EducationSection() {
  const education = [
    {
      id: 1,
      degree: "Bachelor Informatik",
      school: "Hochschule Darmstadt",
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
      id: 2,
      degree: "Studienkolleg",
      school: "Goethe-Institut Frankfurt am Main",
      period: "2019 - 2020",
      description: "Vorbereitung auf ein technisches Studium in Deutschland",
      highlights: [],
    },
    {
      id: 3,
      degree: "Rechtswissenschaften",
      school: "Universität Ho-Chi-Minh-Stadt, Vietnam",
      period: "2016-2018",
      description:
        "Grundlegende Kenntnisse in Zivilrecht, Verfassungsrecht und Rechtsmethodik",
      highlights: [],
    },
  ];

  return (
    <section id="education" className="py-16 sm:py-24">
      <div className="space-y-12">
        <div className="space-y-4">
          <div className="text-center mb-4">
            {" "}
            <div className="mx-auto mb-2 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10">
              <GraduationCap className="w-5 h-5 text-primary" />{" "}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Bildungsweg</h2>{" "}
          </div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Mein akademischer Werdegang und die erworbenen Qualifikationen
          </p>
        </div>

        <div className="space-y-6 px-4 sm:px-6 md:px-8">
          {education.map((item) => (
            <Card
              key={item.id}
              className="transition-shadow hover:shadow-md duration-200"
            >
              <CardHeader className="pb-3">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{item.degree}</CardTitle>
                    <CardDescription className="text-base font-medium">
                      {item.school}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    {item.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{item.description}</p>

                {item.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight, index) => (
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

                {item.modules && item.modules.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-muted-foreground">
                      Relevante Module:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.modules.map((module, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-sm"
                        >
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
    </section>
  );
}
