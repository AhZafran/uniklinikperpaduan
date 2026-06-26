"use client";

import { useEffect, useRef, useState } from "react";
import { COUNTERS } from "@/lib/site-data";

function Counter({ value, suffix }: { value: string; suffix: string }) {
  const target = parseFloat(value);
  const isDecimal = value.includes(".");
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(target * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  const display = isDecimal ? n.toFixed(1) : Math.round(n).toString();

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl font-extrabold text-white md:text-5xl">
        {display}
        <span className="text-brand-teal">{suffix}</span>
      </div>
    </div>
  );
}

export function StatsBand() {
  return (
    <section className="bg-gradient-to-r from-brand-navy to-brand-blue py-14 md:py-16">
      <div className="mx-auto grid w-[92%] max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
        {COUNTERS.map((c) => (
          <div key={c.label}>
            <Counter value={c.value} suffix={c.suffix} />
            <p className="mt-2 text-center text-sm font-medium text-blue-100">
              {c.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
