import { useState } from "react";
import { Trash2, ShoppingBag, Copy, Check } from "lucide-react";
import { toast } from "sonner";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/lib/cart";
import { RESTAURANT } from "@/data/menu";
import { buildOrderMessage, formatVnd, whatsappLink, zaloLink } from "@/lib/order";
import { QuantityStepper } from "./QuantityStepper";
import { ZaloIcon, WhatsAppIcon } from "./icons";

export function CartSheet({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const { lines, total, count, increment, decrement, remove, clear } = useCart();
  const [note, setNote] = useState("");
  const [copied, setCopied] = useState(false);

  const message = buildOrderMessage(lines, total, note);

  async function copyOrder() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      toast.success("Order copied — paste it in Zalo chat");
      setTimeout(() => setCopied(false), 2500);
      return true;
    } catch {
      toast.error("Could not copy. Please screenshot your order.");
      return false;
    }
  }

  async function orderViaZalo() {
    await copyOrder();
    window.open(zaloLink(), "_blank", "noopener,noreferrer");
  }

  function orderViaWhatsApp() {
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className="flex max-h-[92dvh] flex-col rounded-t-3xl border-border bg-background p-0 sm:mx-auto sm:max-w-lg"
      >
        <SheetHeader className="border-b border-border px-5 py-4 text-left">
          <SheetTitle className="font-display text-2xl font-semibold text-foreground">
            Your Order
          </SheetTitle>
          <SheetDescription className="text-muted-foreground">
            {count > 0
              ? `${count} item${count > 1 ? "s" : ""} · ${RESTAURANT.name}`
              : "Your basket is empty."}
          </SheetDescription>
        </SheetHeader>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-16 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-secondary text-primary">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <p className="font-serif text-lg text-muted-foreground">
              Add a few dishes to get started.
            </p>
          </div>
        ) : (
          <>
            <div className="no-scrollbar flex-1 space-y-3 overflow-y-auto px-5 py-4">
              {lines.map((line) => (
                <div
                  key={line.key}
                  className="flex items-center gap-3 rounded-xl border border-border/70 bg-card p-3"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-base font-semibold text-foreground">
                      {line.name}
                    </p>
                    {line.optionLabel && (
                      <p className="text-xs text-muted-foreground">{line.optionLabel}</p>
                    )}
                    <p className="mt-0.5 text-sm font-medium text-gold">
                      {formatVnd(line.qty * line.price)}
                    </p>
                  </div>
                  <QuantityStepper
                    size="sm"
                    qty={line.qty}
                    onInc={() => increment(line.key)}
                    onDec={() => decrement(line.key)}
                  />
                  <button
                    type="button"
                    aria-label={`Remove ${line.name}`}
                    onClick={() => remove(line.key)}
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}

              <Textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add a note (delivery address, less spicy, time…)"
                className="min-h-20 resize-none rounded-xl bg-card"
              />

              <button
                type="button"
                onClick={() => {
                  clear();
                  toast("Order cleared");
                }}
                className="text-xs font-medium text-muted-foreground underline-offset-4 hover:underline"
              >
                Clear all
              </button>
            </div>

            <div className="space-y-3 border-t border-border bg-card px-5 py-4">
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg text-muted-foreground">Total</span>
                <span className="font-display text-2xl font-semibold text-foreground">
                  {formatVnd(total)}
                </span>
              </div>

              <Button variant="gold" size="xl" className="w-full" onClick={orderViaZalo}>
                <ZaloIcon className="h-5 w-5" />
                Order on Zalo
              </Button>
              <Button variant="outline" size="lg" className="w-full" onClick={orderViaWhatsApp}>
                <WhatsAppIcon className="h-5 w-5" />
                Order on WhatsApp
              </Button>

              <button
                type="button"
                onClick={copyOrder}
                className="flex w-full items-center justify-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied to clipboard" : "Copy order summary"}
              </button>
              <p className="text-center text-[11px] leading-snug text-muted-foreground">
                Zalo opens with our chat — your order is copied, just paste &amp; send to{" "}
                <span className="font-semibold text-foreground">{RESTAURANT.zalo}</span>.
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
