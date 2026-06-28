import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { CLINIC } from "@/lib/site-data";

export function WhatsAppFloat() {
  return (
    <a
      href={CLINIC.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-[#25d366]/40 transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
