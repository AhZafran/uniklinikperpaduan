import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CLINIC, HOURS } from "@/lib/site-data";

export function Hours() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto grid w-[92%] max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="animate-fade-up">
          <Badge className="mb-3 rounded-full bg-secondary px-3 py-1 font-semibold text-brand-blue hover:bg-secondary">
            Waktu Operasi
          </Badge>
          <h2 className="text-3xl font-extrabold leading-tight text-brand-navy md:text-4xl">
            Kami Buka Setiap Hari Untuk Anda
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uniklinik Perpaduan beroperasi seawal 7:00 pagi hingga 12:00 tengah
            malam setiap hari — termasuk hujung minggu dan cuti umum. Datang
            bila-bila masa yang sesuai untuk anda.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Button
              size="lg"
              nativeButton={false}
              render={<a href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" />}
              className="rounded-full bg-brand px-7 shadow-lg shadow-brand/30 hover:bg-brand-dark"
            >
              Tempah Temujanji
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_10px_30px_-12px_rgba(28,54,105,0.18)]">
          <div className="flex items-center gap-2 bg-brand-navy px-6 py-4 text-white">
            <Clock className="size-5 text-brand-teal" />
            <span className="font-semibold">Jadual Waktu Operasi</span>
          </div>
          <ul>
            {HOURS.map((row, i) => (
              <li
                key={row.day}
                className={`flex items-center justify-between px-6 py-3.5 text-sm ${
                  i % 2 === 1 ? "bg-surface" : "bg-white"
                }`}
              >
                <span className="font-semibold text-brand-navy">{row.day}</span>
                <span className="text-muted-foreground">{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
