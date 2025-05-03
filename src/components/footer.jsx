import { Github, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 lg:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Truc Quynh Nguyen</h3>
            <p className="text-sm text-muted-foreground">
              Informatikstudentin mit Leidenschaft für Full-Stack-Entwicklung
              und innovative Lösungen.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontakt</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:trquynh2010@gmail.com"
                  className="hover:text-foreground transition-colors"
                >
                  trquynh2010@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+4916295085515"
                  className="hover:text-foreground transition-colors"
                >
                  0162 / 9508515
                </a>
              </li>
              <li className="text-muted-foreground">
                Siemensstraße 10, 64289 Darmstadt
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#about"
                  className="hover:text-foreground transition-colors"
                >
                  Über mich
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-foreground transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-foreground transition-colors"
                >
                  Projekte
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="hover:text-foreground transition-colors"
                >
                  Bildung
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-foreground transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Social Media</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/trquynh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:trquynh2010@gmail.com"
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Truc Quynh Nguyen. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Gebaut mit</span>
            <Heart className="w-4 h-4 text-primary inline mx-1" />
            <span>using Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
