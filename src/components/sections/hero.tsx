import Image from "next/image";
import { HeartPulse, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC, STATS } from "@/lib/site-data";

const STAT_ACCENTS = ["text-brand", "text-brand-blue", "text-brand-teal"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-secondary via-white to-accent py-16 md:py-24"
    >
      {/* storefront background image, low opacity */}
      <Image
        src="/hero/APS08370.jpg"
        alt="Uniklinik Perpaduan"
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 object-cover opacity-60"
      />
      {/* soften the photo into the gradient for legible text */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/80 via-white/70 to-accent/80" />

      {/* decorative blobs */}
      <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-brand-blue-light/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 size-72 rounded-full bg-brand/15 blur-3xl" />

      <div className="relative mx-auto grid w-[92%] max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-1.5 text-sm font-semibold text-brand-navy shadow-sm ring-1 ring-border">
            <span className="size-2 rounded-full bg-brand-teal" />
            {CLINIC.hoursShort}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] md:text-5xl lg:text-6xl">
            Klinik Keluarga Anda di{" "}
            <span className="text-brand">Bercham, Ipoh</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Uniklinik Perpaduan menyediakan rawatan kesihatan yang mesra, pantas
            dan berkualiti untuk seluruh keluarga anda — buka seawal 7 pagi
            hingga lewat malam setiap hari.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              size="lg"
              nativeButton={false}
              render={<a href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" />}
              className="rounded-full bg-brand px-7 shadow-lg shadow-brand/30 hover:bg-brand-dark"
            >
              Tempah Temujanji
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href="#services" />}
              className="rounded-full border-2 border-brand-blue px-7 text-brand-blue hover:bg-brand-blue hover:text-white"
            >
              Lihat Perkhidmatan
            </Button>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border/70 bg-white/70 p-4 text-center shadow-sm backdrop-blur"
              >
                <strong className={`block text-2xl font-extrabold ${STAT_ACCENTS[i]}`}>
                  {s.value}
                </strong>
                <span className="text-xs text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center animate-fade-up [animation-delay:120ms]">
          <div className="relative w-full max-w-sm">
            {/* soft rounded frame — doctor cropped to roughly the waist */}
            <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-secondary via-white to-accent shadow-xl ring-1 ring-border">
              <Image
                src="/dr-cutout.webp"
                alt="Doktor Uniklinik Perpaduan"
                width={998}
                height={1654}
                priority
                className="size-full object-cover object-top"
              />
            </div>

            {/* category badge (left) */}
            <div className="absolute -left-3 bottom-16 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg">
              <span className="flex size-9 items-center justify-center rounded-full bg-brand/10 text-brand">
                <HeartPulse className="size-5" />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-bold uppercase tracking-wide text-brand-navy">
                  Kesihatan
                </p>
                <p className="text-xs text-muted-foreground">
                  Wanita &amp; Keluarga
                </p>
              </div>
            </div>

            {/* rating badge (right) */}
            <div className="absolute -right-3 bottom-24 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg">
              <span className="flex size-9 items-center justify-center rounded-full bg-brand-teal/20 text-brand-teal">
                <ShieldCheck className="size-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-brand-navy">4.9★ Google</p>
                <p className="text-xs text-muted-foreground">85+ ulasan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
