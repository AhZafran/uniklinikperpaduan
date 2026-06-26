import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { PANELS } from "@/lib/site-data";

export function Panels() {
  const logos = [...PANELS, ...PANELS]; // duplicate for seamless loop

  return (
    <section className="bg-surface py-16">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionHeading tag="Rakan Panel" title="Panel & Rakan Kami" center />
      </div>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max gap-6 animate-marquee group-hover:[animation-play-state:paused]">
          {logos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl border border-border bg-white px-6 shadow-sm"
            >
              <div className="relative h-14 w-full">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="160px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
