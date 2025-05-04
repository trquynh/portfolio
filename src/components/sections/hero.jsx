"use client";
import { Button } from "@/components/ui/button";
import {
  Terminal,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Code2,
  Brain,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export function HeroSection() {
  const [terminalText, setTerminalText] = useState("");
  const [showBlinkingCursor, setShowBlinkingCursor] = useState(true);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);

  const currentCharIndexRef = useRef(0);

  const commands = [
    {
      text: "echo 'Hi, I’m Quynh – curious, focused, and ready to grow.'",
      type: "command",
    },
    { text: "git init quynh-career", type: "command" },
    {
      text: "echo 'I turn challenges into code and ideas into results.'",
      type: "command",
    },
    { text: "./apply --role=junior-dev --mindset=proactive", type: "command" },
  ];

  useEffect(() => {
    let timeoutId;

    const typeCommand = () => {
      if (currentCommandIndex < commands.length) {
        const currentCommand = commands[currentCommandIndex];
        const i = currentCharIndexRef.current;

        if (i < currentCommand.text.length) {
          setTerminalText((prev) => {
            if (i === 0 && currentCommand.type === "command") {
              return prev + "\n$ " + currentCommand.text[0];
            }
            return prev + currentCommand.text[i];
          });

          currentCharIndexRef.current++;
          timeoutId = setTimeout(typeCommand, 35);
        } else {
          if (currentCommand.type === "output") {
            setTerminalText((prev) => prev + "\n");
          }

          timeoutId = setTimeout(() => {
            if (currentCommandIndex < commands.length - 1) {
              setCurrentCommandIndex((prev) => prev + 1);
              currentCharIndexRef.current = 0;
            }
          }, 1000);
        }
      }
    };

    typeCommand();

    const cursorInterval = setInterval(() => {
      setShowBlinkingCursor((prev) => !prev);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(cursorInterval);
    };
  }, [currentCommandIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background with grid pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Floating code blocks in background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 opacity-25 transform -rotate-12">
          <pre className="bg-black/5 p-4 rounded-lg font-mono text-sm">
            {`function mission() {
  return 'Grow, build, and make a difference';
  }`}
          </pre>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 transform -rotate-6">
          <pre className="bg-black/5 p-4 rounded-lg font-mono text-sm">
            {`const dream = true;
  while(dream) {
    code();
  }`}
          </pre>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Centered and vertically stacked layout */}
          <div className="flex flex-col items-center text-center space-y-12">
            {/* Profile Image - Top */}
            <div className="w-64 h-64 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background">
                <Image
                  src="/profile.jpg"
                  alt="Truc Quynh Nguyen"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Content - Center */}
            <div className="space-y-8 max-w-3xl">
              <div className="flex items-center gap-2 text-primary justify-center mb-4">
                <Terminal className="w-6 h-6" />
                <span className="font-mono">/home/portfolio</span>
              </div>

              <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                Hey, ich bin <br />
                <span className="bg-gradient-to-r from-primary rgb(216, 191, 216) to-secondary text-transparent bg-clip-text animate-gradient bg-[length:200%_200%]">
                  Quynh Nguyen
                </span>
              </h1>

              <div className="flex items-center justify-center gap-2 text-2xl text-muted-foreground">
                <Code2 className="w-6 h-6 text-primary" />
                <span className="font-mono">Soon: Full-Stack Developer</span>
                <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
              </div>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Wo andere
                <span className="text-primary font-semibold">
                  {" "}
                  Probleme
                </span>{" "}
                sehen, denke ich in
                <span className="text-primary font-semibold"> Lösungen</span>
                .
                <br />
                Mit einem Fokus auf Klarheit, Qualität und Wirkung.
              </p>
            </div>

            {/* Terminal - Below text */}
            <div className="w-full max-w-3xl">
              <div className="bg-card border rounded-lg shadow-2xl">
                <div className="flex items-center gap-2 p-3 border-b bg-muted/50 rounded-t-lg">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-sm font-medium">
                    trquynh@portfolio
                  </span>
                </div>
                <div className="p-6 font-mono text-base min-h-[180px]">
                  <div className="font-mono text-sm text-muted-foreground whitespace-pre-wrap">
                    {terminalText}
                    {showBlinkingCursor && (
                      <span className="animate-pulse">_</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons - Bottom */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                <a href="#projects" className="flex items-center gap-2">
                  Projekte ansehen
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline">
                <a href="#contact">Kontakt aufnehmen</a>
              </Button>
            </div>

            {/* Social Icons - Bottom */}
            <div className="flex gap-4 pt-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href="https://github.com/trquynh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href="https://linkedin.com/in/trquynh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a href="mailto:trquynh2010@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute -top-64 -right-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-64 -left-64 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
    </section>
  );
}

export default HeroSection;
