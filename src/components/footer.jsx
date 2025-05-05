import { Github, Mail, Heart, Code, ArrowUp, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t">
      {/* Back to top button */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-30">
        <a
          href="#home"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
        >
          <ArrowUp className="w-5 h-5" />
        </a>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Footer main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-medium">Truc Quynh Nguyen</h3>
            </div>
            <p className="text-muted-foreground">
              Informatikstudentin mit Leidenschaft für Full-Stack-Entwicklung
              und innovative Lösungen.
            </p>

            {/* Social links */}
            <div className="flex gap-3 pt-2">
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

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:trquynh2010@gmail.com">trquynh2010@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <ExternalLink className="w-4 h-4 text-primary" />
                <span>Siemensstraße 10, 64289 Darmstadt</span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Über mich
              </a>
              <a
                href="#skills"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projekte
              </a>
              <a
                href="#education"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Bildung
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Kontakt
              </a>
            </div>
          </div>

          {/* Newsletter/Resume download */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">CV herunterladen</h3>
            <p className="text-muted-foreground">
              Laden Sie meinen vollständigen Lebenslauf im PDF-Format herunter.
            </p>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
            >
              <span>CV Download</span>
              <ArrowUp className="w-4 h-4 rotate-45" />
            </a>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
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

      {/* Background pattern - subtle grid like in other sections */}
      <div className="absolute inset-0 -z-10 opacity-5 bg-[linear-gradient(to_right,#80808022_1px,transparent_1px),linear-gradient(to_bottom,#80808022_1px,transparent_1px)] bg-[size:24px_24px]" />
    </footer>
  );
}
