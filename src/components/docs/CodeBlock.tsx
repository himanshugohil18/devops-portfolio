import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = "bash", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-border/50 bg-[#0d1117] overflow-hidden">
      {title && (
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/30 bg-muted/10">
          <span className="text-xs font-mono text-muted-foreground">{title}</span>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60">{language}</span>
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg hover:bg-muted/20 transition-colors text-muted-foreground hover:text-foreground"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      )}
      {!title && (
        <div className="absolute top-2 right-2 z-10">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg hover:bg-muted/20 transition-colors text-muted-foreground hover:text-foreground"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      )}
      <div className="relative">
        {!title && (
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 p-1.5 rounded-lg hover:bg-muted/20 transition-colors text-muted-foreground hover:text-foreground z-10"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        )}
        <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
          <code className="text-emerald-300/90 font-mono text-[13px]">{code}</code>
        </pre>
      </div>
    </div>
  );
}
