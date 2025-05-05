import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Code,
  Globe,
  Heart,
  Rocket,
  Sparkles,
  Terminal,
  Zap,
  Coffee,
  Brain,
} from "lucide-react";

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
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background with grid pattern - matching hero section */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Floating code blocks - subtle version for about section */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 lg:left-20 md:left-10 transform -rotate-6 hidden sm:block">
          <pre className="p-2 md:p-3 rounded-lg font-mono text-[8px] xs:text-[10px] sm:text-xs md:text-sm">
            {`const person = {
  passion: 'technology',
  goal: 'grow and learn'
}`}
          </pre>
        </div>
        <div className="absolute bottom-10 right-5 transform rotate-6 hidden lg:block">
          <pre className="p-3 rounded-lg font-mono text-sm">
            {`if (challenge) {
  findSolution();
}`}
          </pre>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Title with similar styling to hero section */}
          <div className="flex items-center gap-2 text-primary justify-center mb-8">
            <Terminal className="w-6 h-6" />
            <span className="font-mono">/about-me</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Über mich
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                <span className="text-primary font-semibold">
                  Hey! Ich bin Quynh
                </span>
                , Informatikstudentin an der Hochschule Darmstadt. Von Vietnam
                nach Deutschland – für meine Träume habe ich{" "}
                <span className="text-primary">mutig den Sprung gewagt</span>.
              </p>
              <p className="text-lg leading-relaxed">
                Was es brauchte?{" "}
                <span className="text-primary font-semibold">Mut, Neugier</span>{" "}
                und eine große Portion Lernbereitschaft. Doch jede
                Herausforderung hat mich{" "}
                <span className="text-primary font-semibold">
                  stärker gemacht
                </span>
                . Heute sind diese Erfahrungen mein Fundament – sowohl im Alltag
                als auch in der Softwareentwicklung.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                <span className="text-primary font-semibold">
                  Meine Mission
                </span>
                ? Eine leidenschaftliche{" "}
                <span className="font-mono bg-primary/10 px-2 py-1 rounded">
                  Entwicklerin
                </span>{" "}
                zu werden, die echte Probleme{" "}
                <span className="text-primary">kreativ löst</span>. Vom ersten{" "}
                <span className="font-mono bg-primary/10 px-2 py-1 rounded">
                  &lt;click&gt;
                </span>{" "}
                bis zur Logik dahinter.
              </p>
              <p className="text-lg leading-relaxed">
                <span className="text-primary font-semibold">Nebenbei</span>?
                Ich{" "}
                <span className="text-primary font-semibold">
                  experimentiere
                </span>{" "}
                mit neuen Ideen, arbeite an Projekten und wachse Schritt für
                Schritt in meine Rolle als{" "}
                <span className="font-mono bg-primary/10 px-2 py-1 rounded">
                  Entwicklerin
                </span>{" "}
                hinein.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow duration-300 border bg-card"
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
