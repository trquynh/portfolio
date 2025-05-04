import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Download,
  Send,
  Terminal,
  Globe,
  Coffee,
  MessageSquare,
} from "lucide-react";

export function ContactSection() {
  const [messageSent, setMessageSent] = useState(false);
  const [typing, setTyping] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Simulate sending a message
  const handleSubmit = (e) => {
    e.preventDefault();
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessageSent(true);
      // Reset after 3 seconds
      setTimeout(() => {
        setMessageSent(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefon",
      value: "0162 / 9508515",
      href: "tel:+4916295085515",
    },
    {
      icon: Mail,
      label: "E-Mail",
      value: "trquynh2010@gmail.com",
      href: "mailto:trquynh2010@gmail.com",
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: "Siemensstraße 10, 64289 Darmstadt",
      href: "https://maps.google.com/?q=Siemensstraße+10,+64289+Darmstadt",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/trquynh",
      href: "https://github.com/trquynh",
    },
  ];

  return (
    <section id="contact" className="pt-32 pb-20 relative overflow-hidden">
      {/* Background with grid pattern - OHNE Farbübergang */}
      <div className="absolute inset-0 bg-black/90">
        {" "}
        {/* Hier einfache schwarze Hintergrundfarbe */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Floating code blocks */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-40 left-20 transform -rotate-12">
          <pre className="bg-black/5 p-3 rounded-lg font-mono text-xs">
            {`const contact = () => {
  return new Connection({
    status: 'open',
    ready: true
  });
}`}
          </pre>
        </div>
        <div className="absolute bottom-5 left-10 transform -rotate-3">
          <pre className="bg-black/5 p-3 rounded-lg font-mono text-xs">
            {`function sendMessage(text) {
  if(text.length > 0) {
    return 'Message sent!';
  }
}`}
          </pre>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Terminal-style header matching other sections */}
          <div className="flex items-center gap-2 text-primary justify-center mb-8">
            <Terminal className="w-6 h-6" />
            <span className="font-mono">/contact</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Kontakt
          </h2>

          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Ich freue mich auf Ihre Nachricht und auf die Möglichkeit, meine
            Fähigkeiten in Ihrem Team einzubringen.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact form in terminal style */}
            <div className="order-2 md:order-1">
              <div className="bg-card border rounded-lg shadow-lg overflow-hidden">
                <div className="flex items-center gap-2 p-3 border-b bg-muted/50">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-sm font-medium">
                    trquynh@contact:~$
                  </span>
                </div>

                <div className="p-6">
                  {!messageSent ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="flex items-center">
                        <span className="text-primary mr-2 font-mono">$</span>
                        <div className="flex-1">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ihr Name"
                            className="w-full bg-transparent border-b border-muted-foreground/30 focus:border-primary outline-none py-2 transition-colors"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex items-center">
                        <span className="text-primary mr-2 font-mono">$</span>
                        <div className="flex-1">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Ihre E-Mail"
                            className="w-full bg-transparent border-b border-muted-foreground/30 focus:border-primary outline-none py-2 transition-colors"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex items-start">
                        <span className="text-primary mr-2 font-mono mt-2">
                          $
                        </span>
                        <div className="flex-1">
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Ihre Nachricht"
                            rows={4}
                            className="w-full bg-transparent border-b border-muted-foreground/30 focus:border-primary outline-none py-2 transition-colors"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4">
                        <Button
                          type="submit"
                          className="ml-6 group"
                          disabled={typing}
                        >
                          {typing ? (
                            <span className="flex items-center gap-2">
                              <span className="animate-pulse">Sending</span>
                              <span className="animate-bounce delay-100">
                                .
                              </span>
                              <span className="animate-bounce delay-200">
                                .
                              </span>
                              <span className="animate-bounce delay-300">
                                .
                              </span>
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              Senden
                              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                          )}
                        </Button>
                        <span className="text-xs text-muted-foreground">
                          Drücken Sie Enter zum Senden
                        </span>
                      </div>
                    </form>
                  ) : (
                    <div className="h-[220px] flex flex-col items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                          <Send className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-xl font-semibold">
                          Nachricht gesendet!
                        </p>
                        <p className="text-muted-foreground">
                          Vielen Dank für Ihre Nachricht. Ich werde mich
                          schnellstmöglich bei Ihnen melden.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Contact cards and CV download */}
            <div className="order-1 md:order-2 space-y-8">
              {/* Contact info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-3xl shadow-sm hover:shadow transition-shadow p-6"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-6"
                    >
                      <div>
                        <p className="text-base text-gray-500 dark:text-gray-400 mb-1">
                          {item.label}
                        </p>
                        <p className="font-medium text-l">
                          {item.value.includes("Siemensstraße") ? (
                            <>
                              Siemensstraße 10
                              <br />
                              64289 Darmstadt
                            </>
                          ) : (
                            item.value
                          )}
                        </p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>

              {/* CV download and collaboration card */}
              <div className="space-y-4">
                <div className="bg-white dark:bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 dark:border-gray-800">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <Download className="w-5 h-5 text-primary" />
                        Lebenslauf herunterladen
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 mt-2">
                        Laden Sie meinen vollständigen Lebenslauf im PDF-Format
                        herunter.
                      </p>
                    </div>
                  </div>
                  <Button
                    className="w-full mt-4 bg-primary hover:bg-primary/90 transition-colors"
                    size="lg"
                  >
                    <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    CV Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements - matching other sections */}
      <div className="absolute -top-64 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-64 -left-64 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
    </section>
  );
}
