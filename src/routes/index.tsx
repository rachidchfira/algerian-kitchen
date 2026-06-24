import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, Clock, MapPin, Phone } from "lucide-react";
import { Toaster } from "sonner";

import { MENU, RESTAURANT } from "@/data/menu";
import { CartProvider } from "@/lib/cart";
import { zaloLink } from "@/lib/order";
import { Hero } from "@/components/menu/Hero";
import { AlgerianFlag } from "@/components/menu/AlgerianFlag";
import { MenuItemCard } from "@/components/menu/MenuItemCard";
import { CartSheet } from "@/components/menu/CartSheet";
import { OrderBar } from "@/components/menu/OrderBar";
import { CategoryNav } from "@/components/menu/CategoryNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Algerian Kitchen · Authentic Algerian Cuisine in Ho Chi Minh City" },
      {
        name: "description",
        content:
          "Order authentic, homemade Halal Algerian dishes — Gratin, Ftir, Chorba, Borek, Baghrir and more — delivered fresh in Ho Chi Minh City. Order easily on Zalo.",
      },
      { property: "og:title", content: "The Algerian Kitchen" },
      {
        property: "og:description",
        content: "Authentic Algerian & Arabic cuisine, delivered fresh in Ho Chi Minh City.",
      },
      { property: "og:type", content: "restaurant" },
    ],
  }),
  component: Index,
});

function Index() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background pb-28">
        <Hero onOrder={() => setCartOpen(true)} />

        <CategoryNav categories={MENU} />

        <main id="menu" className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
          {MENU.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-20 pt-6 first:pt-0"
            >
              <div className="mb-5 text-center">
                <div className="gold-rule mx-auto max-w-xs">
                  <span className="text-sm">✦</span>
                </div>
                <h2 className="mt-3 font-display text-3xl font-bold text-primary">
                  {category.title}
                </h2>
                <p className="mt-1 font-serif text-xl text-muted-foreground" dir="rtl">
                  {category.arabic}
                </p>
              </div>

              <div className="space-y-4">
                {category.items.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          ))}

          {/* Today's special */}
          <section className="mt-12 overflow-hidden rounded-3xl border border-gold/30 bg-secondary p-6 text-center shadow-[var(--shadow-soft)]">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              <Sparkles className="h-4 w-4" /> Today&apos;s Special
            </span>
            <h3 className="mt-3 font-display text-2xl font-semibold text-primary">Chef&apos;s Daily Selection</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-snug text-muted-foreground">
              Ask us about today&apos;s unique traditional dish, prepared fresh with changing daily
              ingredients.
            </p>
            <p className="mt-3 font-serif text-lg text-gold">Seasonal Price</p>
          </section>
        </main>

        <Footer />

        <OrderBar onOpen={() => setCartOpen(true)} />
        <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
        <Toaster
          position="top-center"
          toastOptions={{
            classNames: {
              toast: "!bg-card !text-card-foreground !border-border !font-sans",
            },
          }}
        />
      </div>
    </CartProvider>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-2xl px-6 py-12 text-center">
        <div className="gold-rule mx-auto max-w-[10rem]">
          <span className="font-serif text-sm font-semibold tracking-[0.3em] text-gold">حلال</span>
        </div>
        <h2 className="mt-4 font-display text-2xl font-bold text-primary">{RESTAURANT.name}</h2>
        <p className="mt-1 font-serif text-lg text-muted-foreground">{RESTAURANT.tagline}</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-secondary px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold">
          <AlgerianFlag className="h-3.5 w-5 rounded-[2px] shadow-sm" />
          Made with Algerian Pride
        </div>

        <dl className="mx-auto mt-8 grid max-w-sm gap-4 text-left">
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 shrink-0 text-gold" />
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">Hours</dt>
              <dd className="font-medium text-foreground">{RESTAURANT.hours}</dd>
            </div>
          </div>
          <a href={zaloLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
            <Phone className="h-5 w-5 shrink-0 text-gold" />
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                Zalo / WhatsApp
              </dt>
              <dd className="font-medium text-foreground">{RESTAURANT.zalo}</dd>
            </div>
          </a>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 shrink-0 text-gold" />
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">Delivery</dt>
              <dd className="font-medium text-foreground">
                Fresh Halal meals across {RESTAURANT.city}
              </dd>
            </div>
          </div>
        </dl>

        <p className="mt-10 text-xs text-muted-foreground">
          Authentic Flavors · Made With Care
        </p>
      </div>
    </footer>
  );
}
