import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 hover:border-primary/40 transition-colors">
                <Image
                  src="/profile.jpg"
                  alt="Truc Quynh Nguyen"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 pointer-events-none blur-3xl" />
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi, ich bin{" "}
                <span className="text-primary">Truc Quynh Nguyen</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Informatikstudentin und auf dem Weg, eine leidenschaftliche
                Softwareentwicklerin zu werden
              </p>
              <div className="space-y-4 mb-8">
                <p className="text-lg">
                  Wo andere Probleme sehen, denke ich in Lösungen. Mit
                  Begeisterung für moderne Webtechnologien und dem Ziel,
                  exzellente Software zu entwickeln.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="group">
                  <a href="#projects" className="flex items-center gap-2">
                    Projekte ansehen
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button size="lg" variant="outline">
                  <a href="#contact">Kontakt aufnehmen</a>
                </Button>
              </div>

              <div className="flex gap-4 justify-center md:justify-start">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com/trquynh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://linkedin.com/in/trquynh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:trquynh2010@gmail.com">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 -right-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
