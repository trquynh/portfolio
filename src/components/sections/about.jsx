import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Code, Globe, Heart, Rocket, Sparkles } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Heart,
      title: "Leidenschaftlich",
      description:
        "Begeisterung für moderne Webtechnologien und das Ziel, exzellente Software zu entwickeln.",
    },
    {
      icon: Rocket,
      title: "Proaktiv",
      description:
        "Eigeninitiative bei Projekten und selbstständiges Arbeiten sind für mich selbstverständlich.",
    },
    {
      icon: Globe,
      title: "Anpassungsfähig",
      description:
        "Als internationale Studentin adaptiere ich mich schnell an neue Umgebungen und Teams.",
    },
    {
      icon: Code,
      title: "Problemlöser",
      description:
        "Wo andere Probleme sehen, denke ich in Lösungen und finde kreative Ansätze.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Über mich
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Hallo! Ich bin Truc Quynh Nguyen, Informatikstudentin an der
                Hochschule Darmstadt. Meine Reise begann in Vietnam, bevor ich
                nach Deutschland kam, um hier meine Träume zu verfolgen.
              </p>
              <p className="text-lg leading-relaxed">
                Dieser Schritt erforderte Mut und Anpassungsfähigkeit, war aber
                eine der wertvollsten Erfahrungen meines Lebens. Heute bin ich
                auf der Suche nach einem Praktikum ab Februar 2025, um meine
                bisherigen Kenntnisse in einem professionellen Umfeld weiter
                auszubauen.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Besonders fasziniert mich die Webentwicklung, von React und
                Next.js bis hin zu Backend-Technologien wie Node.js und
                PostgreSQL. In meiner Freizeit arbeite ich an persönlichen
                Projekten und lerne kontinuierlich neue Technologien.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <feature.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
