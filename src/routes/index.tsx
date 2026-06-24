import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, Clock, MapPin, Phone } from "lucide-react";
import { Toaster } from "sonner";

import { MENU, RESTAURANT } from "@/data/menu";
import { CartProvider } from "@/lib/cart";
import { zaloLink } from "@/lib/order";
import { useLanguage } from "@/lib/LanguageContext";
import { Hero } from "@/components/menu/Hero";
import { AlgerianFlag } from "@/components/menu/AlgerianFlag";
import { MenuItemCard } from "@/components/menu/MenuItemCard";
import { CartSheet } from "@/components/menu/CartSheet";
import { OrderBar } from "@/components/menu/OrderBar";
import { CategoryNav } from "@/components/menu/CategoryNav";
import { Header } from "@/components/menu/Header";
import { HeritageSection } from "@/components/menu/HeritageSection";
import { FaqSection } from "@/components/menu/FaqSection";
import { ReviewsSection } from "@/components/menu/ReviewsSection";
import { InfiniteMarquee } from "@/components/menu/Marquee";

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
      { property: "og:image", content: "https://algerian-kitchen.vercel.app/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "800" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "The Algerian Kitchen · Authentic Algerian Cuisine" },
      {
        name: "twitter:description",
        content: "Authentic Algerian & Arabic cuisine, delivered fresh in Ho Chi Minh City.",
      },
      { name: "twitter:image", content: "https://algerian-kitchen.vercel.app/og-image.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  const [cartOpen, setCartOpen] = useState(false);
  const { language, t } = useLanguage();

  return (
    <CartProvider>
      <div className="min-h-screen bg-background pb-28 transition-colors duration-300">
        {/* Header */}
        <Header />

        {/* Hero Banner */}
        <Hero onOrder={() => setCartOpen(true)} />

        {/* Infinite Marquee */}
        <InfiniteMarquee />

        {/* Category Navigation */}
        <CategoryNav categories={MENU} />

        {/* Menu Listings */}
        <main id="menu" className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
          {MENU.map((category) => {
            const catTitle =
              language === "vi"
                ? category.titleVi
                : language === "ar"
                  ? category.titleAr
                  : category.title;
            return (
              <section key={category.id} id={category.id} className="scroll-mt-28 pt-8 first:pt-0">
                <div className="mb-6 text-center">
                  <div className="gold-rule mx-auto max-w-xs">
                    <span className="text-sm">✦</span>
                  </div>
                  <h2 className="mt-3 font-display text-3xl font-bold text-primary">{catTitle}</h2>
                  <p className="mt-1 font-serif text-xl text-muted-foreground" dir="rtl">
                    {category.titleAr}
                  </p>
                </div>

                <div className="space-y-4">
                  {category.items.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            );
          })}

          {/* Today's special */}
          <section className="mt-16 overflow-hidden rounded-3xl border border-gold/30 bg-card p-6 text-center shadow-[var(--shadow-soft)] transition-colors duration-300">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <Sparkles className="h-4 w-4" /> {t.todaySpecial}
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold text-primary">{t.chefSelection}</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t.chefSelectionDesc}
            </p>
            <p className="mt-3 font-serif text-lg font-bold text-gold">{t.seasonalPrice}</p>
          </section>
        </main>

        {/* Heritage Section */}
        <HeritageSection />

        {/* Reviews Section */}
        <ReviewsSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Footer */}
        <Footer />

        {/* Sticky Actions */}
        <OrderBar onOpen={() => setCartOpen(true)} />
        <CartSheet open={cartOpen} onOpenChange={setCartOpen} />

        <Toaster
          position="top-center"
          toastOptions={{
            classNames: {
              toast: "!bg-card !text-card-foreground !border-border !font-sans shadow-lg",
            },
          }}
        />
      </div>
    </CartProvider>
  );
}

function Footer() {
  const { language, t } = useLanguage();

  const taglineText =
    language === "vi"
      ? RESTAURANT.taglineVi
      : language === "ar"
        ? RESTAURANT.taglineAr
        : RESTAURANT.tagline;

  const cityName =
    language === "vi" ? RESTAURANT.cityVi : language === "ar" ? RESTAURANT.cityAr : RESTAURANT.city;

  const hoursVal = language === "ar" ? RESTAURANT.hoursAr : RESTAURANT.hours;

  return (
    <footer className="border-t border-border bg-card transition-colors duration-300">
      <div className="mx-auto max-w-2xl px-6 py-12 text-center">
        <div className="gold-rule mx-auto max-w-[10rem]">
          <span className="font-serif text-sm font-semibold tracking-[0.3em] text-gold">
            {t.halalLabel}
          </span>
        </div>
        <h2 className="mt-4 font-display text-2xl font-bold text-primary">{RESTAURANT.name}</h2>
        <p className="mt-1 font-serif text-lg text-muted-foreground">{taglineText}</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-secondary px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold">
          <AlgerianFlag className="h-3.5 w-5 rounded-[2px] shadow-sm" />
          {t.prideTag}
        </div>

        <dl className="mx-auto mt-8 grid max-w-sm gap-4 text-left">
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 shrink-0 text-gold" />
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">{t.hours}</dt>
              <dd className="font-medium text-foreground">{hoursVal}</dd>
            </div>
          </div>
          <a
            href={zaloLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-primary"
          >
            <Phone className="h-5 w-5 shrink-0 text-gold" />
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">{t.zaloWa}</dt>
              <dd className="font-medium text-foreground">{RESTAURANT.zalo}</dd>
            </div>
          </a>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 shrink-0 text-gold" />
            <div>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                {t.delivery}
              </dt>
              <dd className="font-medium text-foreground">{t.freshHalalMeals}</dd>
            </div>
          </div>
        </dl>

        <p className="mt-10 text-xs text-muted-foreground">{t.authenticFlavors}</p>
      </div>
    </footer>
  );
}
