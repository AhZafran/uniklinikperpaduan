import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { TESTIMONIALS } from "@/lib/site-data";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-surface py-20 md:py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionHeading
          tag="Testimoni"
          title="Apa Kata Pesakit Kami"
          subtitle="Penilaian 4.9 berdasarkan 85+ ulasan Google."
          center
        />
        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Card key={i} className="relative">
              <CardContent>
                <span className="absolute right-5 top-2 font-heading text-6xl leading-none text-brand/15">
                  &rdquo;
                </span>
                <div className="mb-3 flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-5 fill-current" />
                  ))}
                </div>
                <p className="relative italic text-brand-navy/90">{t.text}</p>
                <span className="mt-4 block text-sm font-semibold text-brand-blue">
                  — {t.name}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
