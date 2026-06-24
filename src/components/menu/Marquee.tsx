import { Sparkles, Award, Utensils, Heart } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export function InfiniteMarquee() {
  const { language } = useLanguage();

  const badgesEn = [
    { text: "100% HALAL MEATS", icon: <Award className="h-4.5 w-4.5" /> },
    { text: "AUTHENTIC MAGHREBI SPICES", icon: <Sparkles className="h-4.5 w-4.5" /> },
    { text: "FRESHLY COOKED EVERY DAY", icon: <Utensils className="h-4.5 w-4.5" /> },
    { text: "DELIVERED WARM IN HCMC", icon: <Heart className="h-4.5 w-4.5" /> },
    { text: "SLOW-SIMMERED FLAVORS", icon: <Sparkles className="h-4.5 w-4.5" /> },
  ];

  const badgesVi = [
    { text: "100% THỊT HALAL SẠCH", icon: <Award className="h-4.5 w-4.5" /> },
    { text: "GIA VỊ BẢN XỨ ĐẬM ĐÀ", icon: <Sparkles className="h-4.5 w-4.5" /> },
    { text: "NẤU MỚI MỖI NGÀY", icon: <Utensils className="h-4.5 w-4.5" /> },
    { text: "GIAO NÓNG TẬN NƠI TP. HCM", icon: <Heart className="h-4.5 w-4.5" /> },
    { text: "HẦM CHẬM CHUẨN VỊ", icon: <Sparkles className="h-4.5 w-4.5" /> },
  ];

  const badgesAr = [
    { text: "لحوم حلال ١٠٠٪", icon: <Award className="h-4.5 w-4.5" /> },
    { text: "توابل مغاربية أصيلة", icon: <Sparkles className="h-4.5 w-4.5" /> },
    { text: "مطهي طازجاً يومياً", icon: <Utensils className="h-4.5 w-4.5" /> },
    { text: "يصلك ساخناً في سايغون", icon: <Heart className="h-4.5 w-4.5" /> },
    { text: "نكهات مطهوة ببطء", icon: <Sparkles className="h-4.5 w-4.5" /> },
  ];

  const list = language === "vi" ? badgesVi : language === "ar" ? badgesAr : badgesEn;

  // Duplicate items to ensure smooth infinite loop scroll
  const duplicatedList = [...list, ...list, ...list];

  return (
    <div className="relative w-full overflow-hidden border-y border-gold/30 bg-card py-3.5 shadow-sm transition-colors duration-300">
      {/* Soft gradient fade on left and right edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

      {/* Marquee Container */}
      <div className="flex w-max animate-marquee gap-8 pr-8">
        {duplicatedList.map((badge, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-ink font-sans"
          >
            <span className="text-gold shrink-0">{badge.icon}</span>
            <span className="whitespace-nowrap">{badge.text}</span>
            <span className="text-gold/40 pl-6 select-none">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
