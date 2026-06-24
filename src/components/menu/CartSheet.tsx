import { useState, useEffect } from "react";
import { Trash2, ShoppingBag, Copy, Check, MapPin, User, Phone, Clock } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { useCart } from "@/lib/cart";
import { RESTAURANT } from "@/data/menu";
import { useLanguage } from "@/lib/LanguageContext";
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
  const { language, t } = useLanguage();

  const [deliveryName, setDeliveryName] = useState(
    () => localStorage.getItem("tak-delivery-name") || "",
  );
  const [deliveryPhone, setDeliveryPhone] = useState(
    () => localStorage.getItem("tak-delivery-phone") || "",
  );
  const [deliveryAddress, setDeliveryAddress] = useState(
    () => localStorage.getItem("tak-delivery-address") || "",
  );
  const [deliveryTime, setDeliveryTime] = useState(
    () => localStorage.getItem("tak-delivery-time") || "asap",
  );
  const [note, setNote] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    localStorage.setItem("tak-delivery-name", deliveryName);
  }, [deliveryName]);

  useEffect(() => {
    localStorage.setItem("tak-delivery-phone", deliveryPhone);
  }, [deliveryPhone]);

  useEffect(() => {
    localStorage.setItem("tak-delivery-address", deliveryAddress);
  }, [deliveryAddress]);

  useEffect(() => {
    localStorage.setItem("tak-delivery-time", deliveryTime);
  }, [deliveryTime]);

  const deliveryTimeLabel = deliveryTime === "asap" ? t.deliveryASAP : t.deliverySchedule;

  const orderMessage = buildOrderMessage(
    lines,
    total,
    {
      name: deliveryName,
      phone: deliveryPhone,
      address: deliveryAddress,
      time: deliveryTimeLabel,
    },
    note,
  );

  async function copyOrder() {
    try {
      await navigator.clipboard.writeText(orderMessage);
      setCopied(true);
      toast.success(t.copied);
      setTimeout(() => setCopied(false), 2500);
      return true;
    } catch {
      toast.error("Could not copy. Please screenshot your order.");
      return false;
    }
  }

  async function orderViaZalo() {
    // Validate basics
    if (!deliveryName.trim() || !deliveryPhone.trim() || !deliveryAddress.trim()) {
      toast.error(
        language === "vi"
          ? "Vui lòng nhập đầy đủ Tên, Số điện thoại và Địa chỉ để giao hàng."
          : language === "ar"
            ? "يرجى ملء الاسم ورقم الهاتف والعنوان للتوصيل."
            : "Please fill in Name, Phone, and Address for delivery.",
      );
      return;
    }
    await copyOrder();
    window.open(zaloLink(), "_blank", "noopener,noreferrer");
  }

  function orderViaWhatsApp() {
    if (!deliveryName.trim() || !deliveryPhone.trim() || !deliveryAddress.trim()) {
      toast.error(
        language === "vi"
          ? "Vui lòng nhập đầy đủ Tên, Số điện thoại và Địa chỉ để giao hàng."
          : language === "ar"
            ? "يرجى ملء الاسم ورقم الهاتف والعنوان للتوصيل."
            : "Please fill in Name, Phone, and Address for delivery.",
      );
      return;
    }
    window.open(whatsappLink(orderMessage), "_blank", "noopener,noreferrer");
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className="flex max-h-[95dvh] flex-col rounded-t-3xl border-border bg-background p-0 sm:mx-auto sm:max-w-lg transition-colors duration-300"
      >
        <SheetHeader className="border-b border-border px-5 py-4 text-left">
          <SheetTitle className="font-display text-2xl font-semibold text-foreground">
            {t.yourOrder}
          </SheetTitle>
          <SheetDescription className="text-muted-foreground">
            {count > 0
              ? `${count} ${count > 1 ? t.items : t.item} · ${RESTAURANT.name}`
              : t.basketEmpty}
          </SheetDescription>
        </SheetHeader>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-16 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-secondary text-primary">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <p className="font-serif text-lg text-muted-foreground">{t.addDishesPrompt}</p>
          </div>
        ) : (
          <>
            <div className="no-scrollbar flex-1 space-y-4 overflow-y-auto px-5 py-4">
              {/* Cart items */}
              <div className="space-y-2">
                {lines.map((line) => (
                  <div
                    key={line.key}
                    className="flex items-center gap-3 rounded-xl border border-border/70 bg-card p-3 shadow-sm transition-all duration-300"
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
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive cursor-pointer"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Delivery Details Form */}
              <div className="rounded-xl border border-border/70 bg-card p-4 space-y-3 shadow-sm">
                <h4 className="font-display text-sm font-bold text-primary flex items-center gap-1.5 border-b border-border/60 pb-2">
                  <MapPin className="h-4 w-4 text-gold" />
                  {t.deliveryInfoTitle}
                </h4>

                {/* Customer Name */}
                <div className="space-y-1">
                  <label
                    htmlFor="delivery-name"
                    className="text-xs font-semibold text-muted-foreground flex items-center gap-1"
                  >
                    <User className="h-3 w-3 text-gold" />
                    {t.customerName} *
                  </label>
                  <Input
                    id="delivery-name"
                    value={deliveryName}
                    onChange={(e) => setDeliveryName(e.target.value)}
                    placeholder="e.g. Rachid"
                    className="rounded-lg h-9 bg-background/50 focus-visible:ring-1 focus-visible:ring-gold border-border/60 text-sm"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label
                    htmlFor="delivery-phone"
                    className="text-xs font-semibold text-muted-foreground flex items-center gap-1"
                  >
                    <Phone className="h-3 w-3 text-gold" />
                    {t.phoneNumber} *
                  </label>
                  <Input
                    id="delivery-phone"
                    value={deliveryPhone}
                    onChange={(e) => setDeliveryPhone(e.target.value)}
                    placeholder="e.g. 0866551546"
                    className="rounded-lg h-9 bg-background/50 focus-visible:ring-1 focus-visible:ring-gold border-border/60 text-sm"
                  />
                </div>

                {/* Delivery Address */}
                <div className="space-y-1">
                  <label
                    htmlFor="delivery-address"
                    className="text-xs font-semibold text-muted-foreground flex items-center gap-1"
                  >
                    <MapPin className="h-3 w-3 text-gold" />
                    {t.deliveryAddress} *
                  </label>
                  <Input
                    id="delivery-address"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="e.g. 123 Nguyen Hue, District 1, Apt 4B"
                    className="rounded-lg h-9 bg-background/50 focus-visible:ring-1 focus-visible:ring-gold border-border/60 text-sm"
                  />
                </div>

                {/* Preferred Delivery Time */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3 text-gold" />
                    {t.deliveryTime}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDeliveryTime("asap")}
                      className={`h-9 rounded-lg text-xs font-semibold border flex items-center justify-center gap-1 cursor-pointer transition-all ${
                        deliveryTime === "asap"
                          ? "border-primary bg-primary text-primary-foreground shadow-sm"
                          : "border-border/60 bg-background/50 text-muted-foreground hover:bg-accent"
                      }`}
                    >
                      {t.deliveryASAP}
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryTime("schedule")}
                      className={`h-9 rounded-lg text-xs font-semibold border flex items-center justify-center gap-1 cursor-pointer transition-all ${
                        deliveryTime === "schedule"
                          ? "border-primary bg-primary text-primary-foreground shadow-sm"
                          : "border-border/60 bg-background/50 text-muted-foreground hover:bg-accent"
                      }`}
                    >
                      {t.deliverySchedule}
                    </button>
                  </div>
                </div>

                <p className="text-[10px] text-muted-foreground text-center italic pt-1">
                  {t.savedLocally}
                </p>
              </div>

              {/* Textarea note */}
              <div className="space-y-1">
                <span className="text-xs font-semibold text-muted-foreground">
                  {t.optionalNote}
                </span>
                <Textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder={t.notePlaceholder}
                  className="min-h-16 resize-none rounded-xl bg-card border-border/60 text-sm focus-visible:ring-1 focus-visible:ring-gold"
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  clear();
                  toast("Order cleared");
                }}
                className="text-xs font-medium text-muted-foreground underline-offset-4 hover:underline cursor-pointer"
              >
                {t.clearAll}
              </button>
            </div>

            {/* Total and Checkout Actions */}
            <div className="space-y-3 border-t border-border bg-card px-5 py-4 transition-colors duration-300">
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg text-muted-foreground">{t.total}</span>
                <span className="font-display text-2xl font-semibold text-foreground">
                  {formatVnd(total)}
                </span>
              </div>

              <Button
                variant="shimmer"
                size="xl"
                className="w-full cursor-pointer"
                onClick={orderViaZalo}
              >
                <ZaloIcon className="h-5 w-5" />
                {t.orderZalo}
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full cursor-pointer hover:bg-accent/60"
                onClick={orderViaWhatsApp}
              >
                <WhatsAppIcon className="h-5 w-5" />
                {t.orderWhatsApp}
              </Button>

              <button
                type="button"
                onClick={copyOrder}
                className="flex w-full items-center justify-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? t.copied : t.copyOrder}
              </button>

              <p className="text-center text-[11px] leading-snug text-muted-foreground">
                {t.zaloInfo}{" "}
                <span className="font-semibold text-foreground">{RESTAURANT.zalo}</span>.
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
