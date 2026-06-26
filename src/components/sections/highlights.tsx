import { Card, CardContent } from "@/components/ui/card";
import { HealthIcon } from "@/components/health-icon";
import { HIGHLIGHTS } from "@/lib/site-data";

const ACCENTS = [
  "bg-brand/10 text-brand",
  "bg-brand-blue/10 text-brand-blue",
  "bg-brand-teal/20 text-teal-600",
];

export function Highlights() {
  return (
    <section className="relative z-10 -mt-10 bg-transparent md:-mt-16">
      <div className="mx-auto grid w-[92%] max-w-6xl gap-5 md:grid-cols-3">
        {HIGHLIGHTS.map((h, i) => (
          <Card
            key={h.title}
            className="bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_40px_-18px_rgba(28,54,105,0.35)]"
          >
            <CardContent className="flex items-start gap-4">
              <div className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${ACCENTS[i % ACCENTS.length]}`}>
                <HealthIcon icon={h.icon} className="size-7" />
              </div>
              <div>
                <h4 className="font-semibold text-brand-navy">{h.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
