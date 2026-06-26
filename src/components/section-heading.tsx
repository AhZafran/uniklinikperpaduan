import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  tag,
  title,
  subtitle,
  center = false,
  className,
}: {
  tag: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-12 animate-fade-up",
        center && "mx-auto max-w-2xl text-center",
        className
      )}
    >
      <Badge className="mb-3 rounded-full bg-secondary px-3 py-1 font-semibold text-brand-blue hover:bg-secondary">
        {tag}
      </Badge>
      <h2 className="text-3xl font-extrabold leading-tight text-brand-navy md:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
