interface ProgressIndicatorProps {
  label: string;
  value: number;
}

export function ProgressIndicator({ label, value }: ProgressIndicatorProps) {
  const filled = Math.round(value / 10);
  const empty = 10 - filled;

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground w-40 shrink-0">{label}</span>
      <div className="flex-1 flex items-center gap-2">
        <span className="font-mono text-xs text-primary/80">
          {"█".repeat(filled)}
          <span className="text-muted-foreground/30">{"░".repeat(empty)}</span>
        </span>
        <span className="text-xs font-medium text-primary">{value}%</span>
      </div>
    </div>
  );
}
