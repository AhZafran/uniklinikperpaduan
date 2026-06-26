import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { GALLERY } from "@/lib/site-data";

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20 md:py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionHeading tag="Galeri" title="Galeri Klinik" center />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {GALLERY.map((src) => (
            <div
              key={src}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-border"
            >
              <Image
                src={src}
                alt="Galeri Uniklinik Perpaduan"
                fill
                sizes="(max-width: 768px) 45vw, 30vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
