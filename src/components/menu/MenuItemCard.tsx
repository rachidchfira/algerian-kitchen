import { Plus } from "lucide-react";
import { toast } from "sonner";

import type { MenuItem } from "@/data/menu";
import { useCart } from "@/lib/cart";
import { formatK, formatVnd } from "@/lib/order";
import { QuantityStepper } from "./QuantityStepper";

export function MenuItemCard({ item }: { item: MenuItem }) {
  const { lines, add, increment, decrement } = useCart();

  const singleKey = item.id;
  const singleLine = lines.find((l) => l.key === singleKey);

  function addSingle() {
    add({
      key: singleKey,
      itemId: item.id,
      name: item.name,
      price: item.price!,
    });
    toast.success(`${item.name} added`);
  }

  return (
    <article className="group flex gap-4 rounded-2xl border border-border/70 bg-card p-3 shadow-[var(--shadow-card)] transition-shadow sm:p-4">
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-28">
        <img
          src={item.image}
          alt={item.name}
          width={1024}
          height={1024}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="truncate font-display text-lg font-semibold text-foreground">
            {item.name}
          </h3>
          {item.price !== undefined && (
            <span className="shrink-0 font-display text-lg font-semibold text-gold">
              {formatK(item.price)}
            </span>
          )}
        </div>
        <span className="font-serif text-base leading-none text-muted-foreground" dir="rtl">
          {item.arabic}
        </span>

        <p className="mt-1.5 line-clamp-3 text-[13px] leading-snug text-muted-foreground">
          {item.description}
        </p>

        {item.note && (
          <p className="mt-1.5 text-[11px] font-medium uppercase tracking-wide text-gold">
            {item.note}
          </p>
        )}

        <div className="mt-auto pt-3">
          {item.options ? (
            <div className="flex flex-wrap gap-2">
              {item.options.map((opt) => {
                const key = `${item.id}:${opt.id}`;
                const line = lines.find((l) => l.key === key);
                const active = line && line.qty > 0;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      add({
                        key,
                        itemId: item.id,
                        name: item.name,
                        optionLabel: opt.label,
                        price: opt.price,
                      });
                      toast.success(`${item.name} · ${opt.label} added`);
                    }}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-semibold transition-colors active:scale-95 ${
                      active
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-gold/40 bg-secondary text-foreground hover:border-gold hover:bg-accent"
                    }`}
                  >
                    {active ? (
                      <span className="grid h-4 min-w-4 place-items-center rounded-full bg-primary-foreground px-1 text-[10px] font-bold text-primary">
                        {line.qty}
                      </span>
                    ) : (
                      <Plus className="h-3.5 w-3.5 text-gold" />
                    )}
                    <span>{opt.label}</span>
                    <span className={active ? "font-bold" : "font-bold text-gold"}>
                      {formatK(opt.price)}
                    </span>
                  </button>
                );
              })}
            </div>
          ) : singleLine ? (
            <QuantityStepper
              size="sm"
              qty={singleLine.qty}
              onInc={() => increment(singleKey)}
              onDec={() => decrement(singleKey)}
            />
          ) : (
            <button
              type="button"
              onClick={addSingle}
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:brightness-110 active:scale-95"
            >
              <Plus className="h-3.5 w-3.5" /> Add · {formatVnd(item.price!)}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
