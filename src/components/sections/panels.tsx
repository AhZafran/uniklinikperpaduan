import Image from "next/image";
import { Heart } from "lucide-react";
import { PANELS } from "@/lib/site-data";

export function Panels() {
  return (
    <section className="bg-gradient-to-b from-violet-100 via-violet-50 to-violet-100 py-16 md:py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        {/* heading */}
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <span className="inline-block rounded-full border border-violet-300 bg-violet-50/70 px-4 py-1 text-sm font-semibold text-violet-700">
            Panel
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-violet-800 md:text-4xl">
            Panel Klinik Kami
          </h2>
          <p className="mt-3 text-muted-foreground">
            Kami menerima panel insurans dan korporat yang berikut. Hubungi
            kami untuk maklumat lanjut.
          </p>
        </div>

        {/* logo grid */}
        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {PANELS.map((logo) => (
            <div
              key={logo.name}
              className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-white p-6 shadow-[0_12px_30px_-14px_rgba(91,33,182,0.35)] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="relative h-16 w-full">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="200px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* footnote */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 shadow-[0_12px_30px_-14px_rgba(91,33,182,0.35)]">
            <Heart className="size-5 shrink-0 fill-pink-500 text-pink-500" />
            <p className="text-sm font-semibold text-violet-800">
              Tidak pasti sama ada panel anda diterima? Hubungi kami untuk
              pengesahan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
