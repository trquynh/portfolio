import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Palette, Server, Database, Box, BookOpen } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
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
      icon: Database,
      title: "Datenbanken",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "SparQL", level: 65 },
      ],
    },
    {
      icon: Box,
      title: "Entwicklungsmethoden",
      skills: [
        { name: "Agile Development", level: 85 },
        { name: "Scrum", level: 80 },
        { name: "Software Engineering", level: 75 },
        { name: "RESTful APIs", level: 85 },
      ],
    },
    {
      icon: BookOpen,
      title: "Sprachkenntnisse",
      skills: [
        { name: "Vietnamesisch", level: 100 },
        { name: "Deutsch", level: 85 },
        { name: "Englisch", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meine Fähigkeiten
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-primary">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{skill.name}</span>
                          <span className="text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
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
