"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { HASIL_KAMI } from "@/lib/site-data";

export function HasilKami() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    // scroll by roughly one card width (incl. gap)
    scroller.scrollBy({ left: direction * (scroller.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section id="hasil-kami" className="bg-secondary/40 py-20 md:py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionHeading
          tag="Hasil Kami"
          title="Hasil Kerja Kami"
          subtitle="Lihat hasil rawatan dan khidmat yang telah kami berikan kepada pesakit kami."
          center
        />

        <div className="relative">
          {/* prev / next buttons (hidden on small screens — swipe instead) */}
          <button
            type="button"
            aria-label="Sebelumnya"
            onClick={() => scrollBy(-1)}
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 text-brand-navy shadow-lg ring-1 ring-border transition hover:bg-brand hover:text-white md:flex"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Seterusnya"
            onClick={() => scrollBy(1)}
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 text-brand-navy shadow-lg ring-1 ring-border transition hover:bg-brand hover:text-white md:flex"
          >
            <ChevronRight className="size-5" />
          </button>

          {/* scrollable track */}
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {HASIL_KAMI.map((src) => (
              <div
                key={src}
                className="relative aspect-[4/5] w-64 shrink-0 snap-center overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-border sm:w-72"
              >
                <Image
                  src={src}
                  alt="Hasil rawatan Uniklinik Perpaduan"
                  fill
                  sizes="(max-width: 640px) 16rem, 18rem"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
