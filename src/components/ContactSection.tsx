import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github, FileText, Send } from "lucide-react";

const contactCards = [
  { icon: Github, label: "GitHub", value: "himanshugohil18", href: "https://github.com/himanshugohil18" },
  { icon: Linkedin, label: "LinkedIn", value: "himanshugohil4", href: "https://linkedin.com/in/himanshugohil4/" },
  { icon: Mail, label: "Email", value: "himanshu828@gmail.com", href: "mailto:himanshu828@gmail.com" },
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
      <div className="container-wide">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Let's Build Scalable Systems <span className="gradient-text">Together.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Open for DevOps Freelance & Cloud Projects
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left - Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-xl font-display font-semibold mb-6 text-foreground">Send a Message</h3>
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); window.location.href = "mailto:himanshu828@gmail.com"; }}>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                <input type="text" placeholder="Your name" className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-2xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-2xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                <textarea rows={4} placeholder="Tell me about your project..." className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-2xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-2xl glow-button hover:scale-[1.02] transition-all duration-300 w-full justify-center">
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>

          {/* Right - Info Cards + Resume */}
          <div className="space-y-5">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 glass-card transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_25px_hsla(250,80%,65%,0.12)]"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <card.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">{card.label}</h4>
                  <p className="text-sm text-muted-foreground">{card.value}</p>
                </div>
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 w-full justify-center bg-card border border-border/50 text-foreground font-semibold rounded-2xl transition-all duration-300 hover:border-primary/30 hover:bg-card/80 hover:scale-[1.02]"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
