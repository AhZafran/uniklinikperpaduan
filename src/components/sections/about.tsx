import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-24">
      <div className="mx-auto grid w-[92%] max-w-6xl items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-border">
          <Image
            src="/tentangkami/about-crop.jpg"
            alt="Kaunter pendaftaran Uniklinik Perpaduan"
            width={2000}
            height={1684}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="animate-fade-up">
          <Badge className="mb-3 rounded-full bg-secondary px-3 py-1 font-semibold text-brand-blue hover:bg-secondary">
            Tentang Kami
          </Badge>
          <h2 className="text-3xl font-extrabold leading-tight text-brand-navy md:text-4xl">
            Komited memberikan rawatan kesihatan berkualiti
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uniklinik Perpaduan di Taman Bercham Raya hadir untuk menjaga
            kesihatan keluarga anda dengan rawatan yang teliti, peralatan moden
            dan layanan yang mesra. Kami percaya setiap pesakit berhak mendapat
            penjelasan yang jelas dan rawatan yang berpatutan.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card className="border-0 bg-secondary shadow-none">
              <CardContent>
                <h3 className="font-semibold text-brand-blue">Visi</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Menjadi klinik keluarga pilihan utama komuniti Bercham dan
                  sekitarnya.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 bg-secondary shadow-none">
              <CardContent>
                <h3 className="font-semibold text-brand-blue">Misi</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Menyediakan perkhidmatan kesihatan yang berkualiti, mampu
                  milik dan menyeluruh.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
