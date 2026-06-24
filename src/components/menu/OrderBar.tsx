import { ShoppingBag } from "lucide-react";

import { useCart } from "@/lib/cart";
import { formatVnd } from "@/lib/order";
import { useLanguage } from "@/lib/LanguageContext";

export function OrderBar({ onOpen }: { onOpen: () => void }) {
  const { count, total } = useCart();
  const { t } = useLanguage();

  if (count === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
      <button
        type="button"
        onClick={onOpen}
        className="pointer-events-auto mx-auto flex w-full max-w-lg items-center justify-between gap-4 rounded-2xl bg-primary px-5 py-4 text-primary-foreground shadow-[var(--shadow-soft)] transition-transform active:scale-[0.99] cursor-pointer"
      >
        <span className="flex items-center gap-3">
          <span className="relative grid h-9 w-9 place-items-center rounded-full bg-[oklch(1_0_0_/_0.12)]">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[11px] font-bold text-gold-foreground">
              {count}
            </span>
          </span>
          <span className="font-display text-base font-semibold">{t.viewOrder}</span>
        </span>
        <span className="font-display text-lg font-semibold">{formatVnd(total)}</span>
      </button>
    </div>
  );
}
