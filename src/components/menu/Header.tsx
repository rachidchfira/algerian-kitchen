import { Sun, Moon, BookOpen, Globe, MessageSquare, Star, HelpCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { AlgerianFlag } from "./AlgerianFlag";

export function Header() {
  const { language, setLanguage, t, dir } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const isRtl = dir === "rtl";

  const scrollSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Offset for sticky Header (64px) + sticky CategoryNav (48px)
      const top = el.getBoundingClientRect().top + window.scrollY - 116;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 h-16 w-full border-b border-border bg-background/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2">
          <AlgerianFlag className="h-6 w-9 rounded-sm shadow-sm ring-1 ring-border" />
          <span className="font-display text-lg font-bold tracking-tight text-primary sm:text-xl">
            {language === "ar" ? "المطبخ الجزائري" : "The Algerian Kitchen"}
          </span>
        </div>

        {/* Desktop Quick Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <button
            onClick={() => scrollSection("menu")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            {t.navMenu}
          </button>
          <button
            onClick={() => scrollSection("heritage")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            {t.navHeritage}
          </button>
          <button
            onClick={() => scrollSection("reviews")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            {t.navReviews}
          </button>
          <button
            onClick={() => scrollSection("faq")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            {t.navFAQ}
          </button>
        </nav>

        {/* Actions (Language Selection + Dark Mode) */}
        <div className="flex items-center gap-3">
          {/* Language Selector Pill */}
          <div className="flex items-center gap-0.5 rounded-full bg-secondary/80 p-1 border border-border/80">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                language === "en"
                  ? "bg-primary text-primary-foreground shadow-smScale"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("vi")}
              className={`px-2 py-0.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                language === "vi"
                  ? "bg-primary text-primary-foreground shadow-smScale"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              VI
            </button>
            <button
              onClick={() => setLanguage("ar")}
              className={`px-2.5 py-0.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                language === "ar"
                  ? "bg-primary text-primary-foreground shadow-smScale"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              عربي
            </button>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground active:scale-95 transition-all cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4 text-primary animate-in fade-in zoom-in duration-300" />
            ) : (
              <Sun className="h-4 w-4 text-gold animate-in fade-in zoom-in duration-300" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
