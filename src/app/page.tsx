import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { About } from "@/components/sections/about";
import { StatsBand } from "@/components/sections/stats-band";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Panels } from "@/components/sections/panels";
import { Hours } from "@/components/sections/hours";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Gallery } from "@/components/sections/gallery";
import { Contact } from "@/components/sections/contact";
import { SiteFooter } from "@/components/sections/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />
        {/* 2. 3-card highlight strip overlapping hero */}
        <Highlights />
        {/* 3. About — vision & mission */}
        <About />
        {/* 4. Counter band (4 metrics) */}
        <StatsBand />
        {/* 5. Full services grid */}
        <Services />
        {/* 6. Why choose us — 2-column image + bullet list */}
        <WhyUs />
        {/* 7. Panel partners marquee */}
        <Panels />
        {/* 8. Operating hours table */}
        <Hours />
        {/* 10. Testimonials */}
        <Testimonials />
        {/* 11. Promo CTA banner */}
        <CtaBanner
          title="Jaga Kesihatan Keluarga Anda Hari Ini!"
          text="Datang ke Uniklinik Perpaduan atau tempah temujanji anda dengan mudah melalui WhatsApp. Kami buka setiap hari untuk anda."
          cta="Tempah Sekarang"
        />
        {/* 12. Gallery */}
        <Gallery />
        {/* 13. Consultation CTA */}
        <CtaBanner
          title="Ada Pertanyaan? Kami Sedia Membantu"
          text="Dapatkan nasihat kesihatan daripada pasukan perubatan kami. Hubungi kami untuk sesi konsultasi."
          cta="Hubungi Kami"
        />
        {/* 14. Contact — 3-column method cards + map */}
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
