import { ShoppingBag, Clock, MapPin, ChevronDown } from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import { AlgerianFlag } from "@/components/menu/AlgerianFlag";
import { Button } from "@/components/ui/button";
import { RESTAURANT } from "@/data/menu";

export function Hero({ onOrder }: { onOrder: () => void }) {
  return (
    <header className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        width={1024}
        height={1536}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[oklch(0.18_0.025_160_/_0.72)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.025_160)] via-transparent to-[oklch(0.16_0.025_160_/_0.5)]" />

      <div className="relative mx-auto flex min-h-[88dvh] max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
        <AlgerianFlag
          className="ak-enter mb-5 h-16 w-24 rounded-md shadow-[0_8px_24px_-6px_oklch(0_0_0_/_0.6)] ring-1 ring-[oklch(1_0_0_/_0.25)]"
          style={{ animationDelay: "0.05s" }}
        />

        <span
          className="ak-enter mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-[oklch(1_0_0_/_0.06)] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold backdrop-blur-sm"
          style={{ animationDelay: "0.12s" }}
        >
          100% Halal · {RESTAURANT.city}
        </span>

        <p
          className="ak-enter mb-2 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[oklch(0.92_0.02_84)]"
          style={{ animationDelay: "0.18s" }}
        >
          Proudly Algerian · جزائري
        </p>

        <div className="ak-enter gold-rule w-40 max-w-full" style={{ animationDelay: "0.24s" }}>
          <span className="text-lg">✦</span>
        </div>

        <h1
          className="ak-enter mt-4 font-display text-5xl font-bold leading-[1.05] text-[oklch(0.97_0.014_84)] sm:text-6xl"
          style={{ animationDelay: "0.3s" }}
        >
          The Algerian
          <br />
          Kitchen
        </h1>

        <p
          className="ak-enter mt-4 max-w-md font-serif text-xl leading-snug text-[oklch(0.92_0.02_84)]"
          style={{ animationDelay: "0.38s" }}
        >
          Home-cooked Algerian classics — slow-simmered, never frozen, and
          delivered warm to your door.
        </p>

        <div
          className="ak-enter mt-8 flex w-full max-w-xs flex-col gap-3"
          style={{ animationDelay: "0.46s" }}
        >
          <Button variant="gold" size="xl" className="w-full" onClick={onOrder}>
            <ShoppingBag className="h-5 w-5" />
            Start your order
          </Button>
          <a
            href="#menu"
            className="rounded-md py-1 text-sm font-medium uppercase tracking-[0.15em] text-[oklch(0.92_0.02_84)] underline-offset-4 hover:underline"
          >
            See the full menu
          </a>
        </div>

        <div
          className="ak-enter mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[oklch(0.9_0.02_84)]"
          style={{ animationDelay: "0.54s" }}
        >
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-gold" aria-hidden="true" /> {RESTAURANT.hours}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-gold" aria-hidden="true" /> {RESTAURANT.city}
          </span>
        </div>

        <a
          href="#menu"
          aria-label="Scroll to the menu"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full p-2 text-[oklch(0.9_0.02_84)] transition-colors hover:text-gold"
        >
          <ChevronDown className="ak-bob h-6 w-6" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
