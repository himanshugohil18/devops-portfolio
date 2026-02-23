import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socials = [
  { icon: Github, href: "https://github.com/himanshugohil18", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/himanshugohil4/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:himanshu828@gmail.com", label: "Email" },
  { icon: Instagram, href: "https://instagram.com/himanshu.gohil18", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container-wide flex flex-col items-center gap-5">
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-9 h-9 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
          <a
            href="https://x.com/himanshu_g4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="w-9 h-9 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
          >
            <XIcon />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center space-y-1">
          <p className="text-sm text-muted-foreground">© 2026 Himanshu Gohil</p>
          <p className="text-xs text-muted-foreground/60">DevOps Engineer | Cloud Enthusiast</p>
        </div>
      </div>
    </footer>
  );
}
