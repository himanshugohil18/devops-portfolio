import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  title: string;
}

interface StickyTOCProps {
  items: TOCItem[];
}

export function StickyTOC({ items }: StickyTOCProps) {
  const [activeId, setActiveId] = useState(items[0]?.id || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0.1 }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="hidden xl:block sticky top-28 w-60 shrink-0 self-start">
      <div className="glass-card rounded-2xl border border-border/50 p-5 hover:translate-y-0 hover:scale-100">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">On this page</p>
        <ul className="space-y-1.5">
          {items.map(({ id, title }, i) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`text-left w-full text-xs px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeId === id
                    ? "bg-primary/10 text-primary font-medium border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                }`}
              >
                <span className="mr-2 text-[10px] text-muted-foreground/50">{i + 1}.</span>
                {title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
