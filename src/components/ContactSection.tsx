import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github, FileText, Instagram } from "lucide-react";

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/himanshugohil18" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/himanshugohil4/" },
  { icon: XIcon, label: "X", href: "https://x.com/himanshu_g4", isComponent: true },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/himanshu.gohil18" },
  { icon: FileText, label: "Resume", href: "/resume.pdf" },
];

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="section-padding relative">
      <div className="container-tight">
        <div className={`relative rounded-3xl overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Background */}
          <div className="absolute inset-0 cta-section" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px]" />
          </div>
          
          <div className="relative p-8 md:p-12 lg:p-16 text-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
              Let's Build Scalable Systems <span className="gradient-text">Together.</span>
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Open to DevOps, cloud and MERN roles, internships and freelance projects. 
              If you need someone to own CI/CD, infrastructure and full-stack delivery, let's talk.
            </p>

            {/* CTA Button */}
            <a 
              href="mailto:himanshu828@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-base rounded-xl transition-all duration-300 glow-button hover:scale-[1.02] mb-10"
            >
              <Mail className="mr-2 w-5 h-5" />
              Email Me
            </a>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl transition-all duration-300 hover:border-primary/30 hover:bg-card/50 hover:scale-105"
                >
                  {'isComponent' in link ? <XIcon /> : <link.icon className="w-4 h-4" />}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
