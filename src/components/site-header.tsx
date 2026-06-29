"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { CLINIC, NAV_LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur transition-shadow",
        scrolled && "shadow-sm"
      )}
    >
      <div className="mx-auto flex h-18 w-[92%] max-w-6xl items-center justify-between py-3">
        <a href="#home" className="flex items-center" aria-label={CLINIC.name}>
          <Image
            src="/logo/logo.png"
            alt={CLINIC.name}
            width={600}
            height={260}
            priority
            className="h-10 w-auto md:h-12"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <Button
            nativeButton={false}
            render={<a href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" />}
            className="rounded-full bg-brand px-5 hover:bg-brand-dark"
          >
            <WhatsAppIcon className="size-4" />
            Hubungi Kami
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          aria-label="Buka menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6 text-brand" /> : <Menu className="size-6 text-brand" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-border bg-background px-[4%] py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 font-medium text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button
            nativeButton={false}
            render={<a href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" />}
            className="mt-4 w-full rounded-full bg-brand hover:bg-brand-dark"
          >
            <WhatsAppIcon className="size-4" />
            Hubungi Kami
          </Button>
        </nav>
      )}
    </header>
  );
}
