import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileText, Instagram } from "lucide-react";

// X (Twitter) icon component
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="section-padding">
      <div className="container-tight">
        <div className={`cta-section rounded-3xl p-8 md:p-12 lg:p-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6 text-primary-foreground">
            Let's build something <span className="italic">reliable</span> together.
          </h2>

          {/* Description */}
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Open to DevOps, cloud and MERN roles, internships and freelance projects. 
            If you need someone to own CI/CD, infrastructure and full-stack delivery, let's talk.
          </p>

          {/* CTA Button */}
          <Button variant="cta" size="xl" asChild className="mb-10">
            <a href="mailto:himanshu828@gmail.com">
              <Mail className="mr-2" />
              Email Me
            </a>
          </Button>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a
                href="https://github.com/himanshugohil18"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a
                href="https://linkedin.com/in/himanshugohil4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a
                href="https://x.com/himanshu_g4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon />
                <span className="ml-2">X</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a
                href="https://instagram.com/himanshu.gohil18"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 w-5 h-5" />
                Instagram
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 w-5 h-5" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
