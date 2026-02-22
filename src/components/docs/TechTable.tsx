interface TechTableProps {
  rows: { layer: string; technology: string }[];
}

export function TechTable({ rows }: TechTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border/50">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted/20 border-b border-border/50">
            <th className="text-left px-4 py-3 font-semibold text-foreground">Layer</th>
            <th className="text-left px-4 py-3 font-semibold text-foreground">Technology</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/30 last:border-0 hover:bg-muted/10 transition-colors">
              <td className="px-4 py-3 font-medium text-foreground">{row.layer}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.technology}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
