"use client";
import {
  Terminal,
  Code2,
  Palette,
  Server,
  Database,
  Brain,
  Globe,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState(null);
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      id: "programming",
      icon: Code2,
      title: "Programmiersprachen",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
        { name: "C++", level: 70 },
        { name: "Dart", level: 65 },
      ],
    },
    {
      id: "frontend",
      icon: Palette,
      title: "Frontend & Frameworks",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5/CSS3", level: 85 },
        { name: "Figma", level: 70 },
      ],
    },
    {
      id: "backend",
      icon: Server,
      title: "Backend & Tools",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "Linux", level: 75 },
      ],
    },
    {
      id: "database",
      icon: Database,
      title: "Datenbanken",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "SparQL", level: 65 },
      ],
    },
    {
      id: "methods",
      icon: Brain,
      title: "Entwicklungsmethoden",
      skills: [
        { name: "Agile Development", level: 85 },
        { name: "Scrum", level: 80 },
        { name: "Software Engineering", level: 75 },
        { name: "RESTful APIs", level: 85 },
      ],
    },
    {
      id: "languages",
      icon: Globe,
      title: "Sprachkenntnisse",
      skills: [
        { name: "Vietnamesisch", level: 100 },
        { name: "Deutsch", level: 85 },
        { name: "Englisch", level: 75 },
      ],
    },
  ];

  // Animation for skill bars when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-skill");
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillBars = document.querySelectorAll(".skill-bar-fill");
    skillBars.forEach((bar) => {
      observer.observe(bar);
    });

    return () => {
      skillBars.forEach((bar) => {
        observer.unobserve(bar);
      });
    };
  }, []);

  return (
    <section
      id="skills"
      className="pt-32 py-20 relative overflow-hidden bg-gradient-to-br from-background to-background/90"
    >
      {/* Background grid pattern like in hero section */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808030,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Floating code blocks and background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 opacity-20 transform -rotate-6">
          <pre className="bg-black/5 p-4 rounded-lg font-mono text-sm">
            {`const skills = {
  improve: () => true,
  learn: (newTech) => skills.add(newTech),
};`}
          </pre>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-32 right-32 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Terminal-style header */}
          <div className="flex items-center gap-2 text-primary justify-center mb-8">
            <Terminal className="w-6 h-6" />
            <span className="font-mono">/skills</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Mein Tech-Stack
          </h2>

          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
            Ein Überblick über meine technischen Kenntnisse und Fertigkeiten,
            die ich mir im Laufe meiner Reise als Entwickler angeeignet habe.
          </p>

          {/* Skills Terminal Display */}
          <div className="bg-card border rounded-lg shadow-xl mb-16 overflow-hidden">
            <div className="flex items-center gap-2 p-3 border-b bg-muted/50 rounded-t-lg">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-sm font-medium">trquynh@skills</span>
            </div>

            <div className="p-6 font-mono text-sm space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-primary">$</span>
                <span className="text-foreground">ls -la skills/</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillCategories.map((category) => (
                  <div
                    key={category.id}
                    className="border border-muted p-4 rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-colors cursor-pointer"
                    onClick={() =>
                      setActiveSkill(
                        activeSkill === category.id ? null : category.id
                      )
                    }
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <category.icon className="w-5 h-5 text-primary" />
                      <span className="font-bold">{category.title}</span>
                    </div>
                    <div className="pl-4 border-l-2 border-primary/20 space-y-1">
                      {category.skills
                        .slice(
                          0,
                          activeSkill === category.id
                            ? category.skills.length
                            : 3
                        )
                        .map((skill, index) => (
                          <div
                            key={index}
                            className="text-muted-foreground text-xs"
                          >
                            {skill.name}
                          </div>
                        ))}
                      {category.skills.length > 3 &&
                        activeSkill !== category.id && (
                          <div className="text-primary text-xs">
                            +{category.skills.length - 3} mehr...
                          </div>
                        )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-2">
                <span className="text-primary">$</span>
                <span className="text-foreground">cat skills/summary.txt</span>
              </div>
              <div className="pl-4 font-mono text-sm text-muted-foreground space-y-2">
                <p>
                  Fokus auf moderne Webtechnologien mit Schwerpunkt auf
                  Full-Stack-Entwicklung.
                </p>
                <p>
                  Erfahrung mit React-Ökosystem, responsive Design und Clean
                  Code-Praktiken.
                </p>
                <p>
                  Kontinuierliches Lernen neuer Technologien, immer auf dem
                  aktuellen Stand.
                </p>
                <p>
                  Starkes Fundament in Software Engineering-Prinzipien und
                  agilen Methoden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animation */}
    </section>
  );
}

export default SkillsSection;
