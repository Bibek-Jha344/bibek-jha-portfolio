import { ArrowRight, ArrowDown } from "lucide-react";

export function ArchitectureFlow({
  items,
  compact = false,
}: {
  items: readonly string[];
  compact?: boolean;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:flex-wrap gap-2.5">
      {items.map((item, index) => (
        <div key={item} className="flex flex-col md:flex-row items-center gap-2.5">
          <div className="architecture-node w-full md:w-auto">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span>{item}</span>
          </div>
          {index < items.length - 1 && (
            <>
              <ArrowDown className="h-4 w-4 text-emerald-400/70 md:hidden my-1" />
              <ArrowRight className="h-4 w-4 text-emerald-400/70 hidden md:block" />
            </>
          )}
        </div>
      ))}
    </div>
  );
}