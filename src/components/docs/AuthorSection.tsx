import { Github, Linkedin, Mail } from "lucide-react";

export function AuthorSection() {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/10 border border-border/30">
      <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg">
        H
      </div>
      <div className="flex-1">
        <p className="font-semibold text-foreground">Himanshu Gohil</p>
        <p className="text-xs text-muted-foreground">DevOps & Cloud Engineer</p>
      </div>
      <div className="flex gap-2">
        <a href="https://github.com/himanshugohil18" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-muted/20 text-muted-foreground hover:text-foreground transition-colors">
          <Github className="w-4 h-4" />
        </a>
        <a href="https://linkedin.com/in/himanshugohil18" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-muted/20 text-muted-foreground hover:text-foreground transition-colors">
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
