import Image from "next/image";
import { Camera, Music2, Share2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { CLINIC } from "@/lib/site-data";

const SOCIALS = [
  { icon: Camera, label: "Instagram" },
  { icon: Music2, label: "TikTok" },
  { icon: Share2, label: "Facebook" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#0b1730] pt-14 text-slate-300">
      <div className="mx-auto grid w-[92%] max-w-6xl gap-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <span className="inline-flex rounded-xl bg-white px-4 py-3 shadow-sm">
            <Image
              src="/logo-perpaduan.png"
              alt={CLINIC.name}
              width={1088}
              height={371}
              className="h-10 w-auto"
            />
          </span>
          <p className="mt-4 text-sm">
            Klinik keluarga anda di Taman Bercham Raya, Ipoh — rawatan
            berkualiti, mesra dan mampu milik.
          </p>
          <div className="mt-4 flex gap-2.5">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-white">Perkhidmatan</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#services" className="hover:text-white">Rawatan Am</a></li>
            <li><a href="#services" className="hover:text-white">Pemeriksaan Kesihatan</a></li>
            <li><a href="#services" className="hover:text-white">Vaksinasi</a></li>
            <li><a href="#services" className="hover:text-white">Rawatan Luka</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-white">Waktu Operasi</h4>
          <ul className="space-y-2.5 text-sm">
            <li>Isnin – Ahad</li>
            <li>7:00 Pagi – 12:00 Tengah Malam</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-white">Hubungi</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white"><WhatsAppIcon className="size-4" />WhatsApp Kami</a></li>
            <li>{CLINIC.phone}</li>
            <li>Taman Bercham Raya, Ipoh</li>
          </ul>
        </div>
      </div>

      <div className="mt-11 border-t border-white/15 py-6 text-center text-sm">
        © 2026 Uniklinik Perpaduan. Hak cipta terpelihara.
      </div>
    </footer>
  );
}
