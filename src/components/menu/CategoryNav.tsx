import { useEffect, useState } from "react";

import type { MenuCategory } from "@/data/menu";
import { useLanguage } from "@/lib/LanguageContext";

export function CategoryNav({ categories }: { categories: MenuCategory[] }) {
  const [active, setActive] = useState(categories[0]?.id ?? "");
  const { language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    categories.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [categories]);

  function go(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 116;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  return (
    <nav className="sticky top-16 z-30 border-b border-border bg-background/85 backdrop-blur-md transition-colors duration-300">
      <div className="no-scrollbar mx-auto flex max-w-2xl gap-2 overflow-x-auto px-4 py-3 sm:justify-center">
        {categories.map((c) => {
          const isActive = active === c.id;
          const label = language === "vi" ? c.titleVi : language === "ar" ? c.titleAr : c.title;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => go(c.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
