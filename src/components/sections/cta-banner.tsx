import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { CLINIC } from "@/lib/site-data";

export function CtaBanner({
  title,
  text,
  cta = "Hubungi Kami",
}: {
  title: string;
  text: string;
  cta?: string;
}) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand to-brand-dark px-8 py-14 text-center text-white shadow-xl md:px-16">
          <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 size-56 rounded-full bg-brand-amber/20 blur-2xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">{title}</h2>
            <p className="mt-4 text-white/90">{text}</p>
            <div className="mt-8 flex justify-center">
              <Button
                size="lg"
                nativeButton={false}
                render={<a href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" />}
                className="rounded-full bg-white px-7 text-brand hover:bg-white/90"
              >
                <WhatsAppIcon className="size-5" />
                {cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
