import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { HealthIcon } from "@/components/health-icon";
import { SERVICES } from "@/lib/site-data";

const ACCENTS = [
  "bg-brand/10 text-brand",
  "bg-brand-blue/10 text-brand-blue",
  "bg-brand-teal/20 text-teal-600",
];

export function Services() {
  return (
    <section id="services" className="bg-surface py-20 md:py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionHeading
          tag="Perkhidmatan"
          title="Servis yang Kami Tawarkan"
          subtitle="Pelbagai rawatan di bawah satu bumbung untuk seluruh keluarga anda."
          center
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Card
              key={s.title}
              className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_40px_-18px_rgba(28,54,105,0.35)]"
            >
              <CardContent>
                <div className={`mb-4 flex size-14 items-center justify-center rounded-2xl ${ACCENTS[i % ACCENTS.length]}`}>
                  <HealthIcon icon={s.icon} className="size-8" />
                </div>
                <h4 className="text-base font-semibold text-brand-navy">{s.title}</h4>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
