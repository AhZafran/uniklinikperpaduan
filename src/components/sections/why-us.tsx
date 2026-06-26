import Image from "next/image";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { WHY_LIST } from "@/lib/site-data";

const PHOTOS = [
  "/mengapakami/APS08264.jpg",
  "/mengapakami/APS08301.jpg",
  "/mengapakami/APS08311.jpg",
  "/mengapakami/APS08332.jpg",
];

export function WhyUs() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto grid w-[92%] max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* image side — 2×2 grid of equal-size photos */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {PHOTOS.map((src) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-2xl shadow-md ring-1 ring-border"
              >
                <Image
                  src={src}
                  alt="Uniklinik Perpaduan"
                  fill
                  sizes="(max-width: 768px) 45vw, 22vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white px-6 py-4 shadow-lg">
            <p className="font-heading text-3xl font-extrabold text-brand">4.9★</p>
            <p className="text-xs text-muted-foreground">Penilaian Google</p>
          </div>
        </div>

        {/* text side */}
        <div className="animate-fade-up">
          <Badge className="mb-3 rounded-full bg-secondary px-3 py-1 font-semibold text-brand-blue hover:bg-secondary">
            Mengapa Kami
          </Badge>
          <h2 className="text-3xl font-extrabold leading-tight text-brand-navy md:text-4xl">
            Apa Yang Membuatkan Kami Berbeza?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uniklinik Perpaduan komited memberikan pengalaman rawatan yang
            terbaik untuk anda dan keluarga — gabungan layanan mesra, kepakaran
            dan kemudahan moden.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {WHY_LIST.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Check className="size-4" strokeWidth={3} />
                </span>
                <span className="text-sm text-brand-navy">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
