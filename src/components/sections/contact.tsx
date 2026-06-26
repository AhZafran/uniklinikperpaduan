import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { CLINIC } from "@/lib/site-data";

const INFO = [
  { icon: Phone, label: "Telefon", lines: [CLINIC.phone] },
  { icon: Mail, label: "Email", lines: [CLINIC.email] },
  { icon: MapPin, label: "Alamat", lines: [CLINIC.address] },
  { icon: Clock, label: "Waktu Operasi", lines: [CLINIC.hours], note: "Buka setiap hari termasuk hujung minggu" },
];

export function Contact() {
  return (
    <section id="contact" className="bg-surface py-20 md:py-24">
      <div className="mx-auto w-[92%] max-w-6xl">
        <SectionHeading
          tag="Hubungi Kami"
          title="Hubungi Kami"
          subtitle="Kami sedia membantu anda. Hubungi kami untuk sebarang pertanyaan atau tempahan temujanji."
          center
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          {/* Info card */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[0_10px_30px_-12px_rgba(28,54,105,0.18)] md:p-8">
            <h3 className="mb-6 text-xl font-bold text-brand-navy">
              Maklumat Perhubungan
            </h3>

            <ul className="flex-1 space-y-5">
              {INFO.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold text-brand-navy">{item.label}</p>
                      {item.lines.map((line) => (
                        <p key={line} className="text-sm text-muted-foreground">
                          {line}
                        </p>
                      ))}
                      {item.note && (
                        <p className="mt-0.5 text-sm font-medium text-brand">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>

            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-dark"
            >
              <MessageCircle className="size-5" />
              WhatsApp Kami Sekarang
            </a>
          </div>

          {/* Map card */}
          <div className="min-h-90 overflow-hidden rounded-2xl border border-border shadow-[0_10px_30px_-12px_rgba(28,54,105,0.18)]">
            <iframe
              title="Peta Lokasi Uniklinik Perpaduan"
              src={CLINIC.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full min-h-90 border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
