import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export function ReviewsSection() {
  const { language } = useLanguage();

  const title =
    language === "vi"
      ? "Đánh giá từ Thực khách"
      : language === "ar"
        ? "آراء عملائنا في سايغون"
        : "What Our Diners Say";

  const subtitle =
    language === "vi"
      ? "Cảm nhận từ khách hàng bản xứ và người nước ngoài sinh sống tại Tp. Hồ Chí Minh."
      : language === "ar"
        ? "شهادات حقيقية من زبائننا المحليين والمغتربين في مدينة هو شي منه."
        : "Hear from our local and expat community across Ho Chi Minh City.";

  const reviews = [
    {
      name: "Sarah M.",
      avatar: "SM",
      locationEn: "Thao Dien, D2",
      locationVi: "Thảo Điền, Q2",
      locationAr: "تاو دين، المنطقة ٢",
      stars: 5,
      favoriteEn: "Gratin",
      favoriteVi: "Món đút lò Gratin",
      favoriteAr: "غراتان",
      textEn:
        "Oh my goodness! The Gratin is absolutely to die for. Tastes just like the ones I had in Algiers. So warm, cheesy, and comforting. Ordering via Zalo was incredibly quick!",
      textVi:
        "Trời ơi! Món Gratin thực sự ngon tuyệt đỉnh. Vị chuẩn xác như món tôi từng ăn ở Algiers. Béo ngậy phô mai, nóng hổi và rất vừa miệng. Đặt hàng qua Zalo cực kỳ nhanh gọn!",
      textAr:
        "يا إلهي! الغراتان لذيذ جداً ولا يقاوم. طعمه تماماً مثل الغراتان الذي أكلته في الجزائر العاصمة. دافئ ومليء بالجبن ومريح. الطلب عبر زالو كان سريعاً جداً!",
    },
    {
      name: "Tuan Anh Nguyen",
      avatar: "TA",
      locationEn: "Binh Thanh District",
      locationVi: "Quận Bình Thạnh",
      locationAr: "منطقة بين ثانه",
      stars: 5,
      favoriteEn: "Stuffed Ftir",
      favoriteVi: "Ftir kẹp nhân thịt phô mai",
      favoriteAr: "فطير محشي",
      textEn:
        "First time trying Stuffed Ftir and Chorba soup. Absolutely amazing! The flaky bread with beef and cheese is perfect, and the soup is so comforting. I will be ordering regularly.",
      textVi:
        "Lần đầu tiên thử bánh Ftir nhân thịt phô mai và súp Chorba. Thực sự xuất sắc! Vỏ bánh xếp lớp kẹp thịt bò đậm đà, súp nóng hổi đầy thảo mộc. Chắc chắn sẽ ủng hộ quán thường xuyên.",
      textAr:
        "أول مرة أجرب فيها الفطير المحشي وشوربة الشوربة. مذهل بكل معنى الكلمة! الخبز المورق مع اللحم والجبن مثالي، والشوربة مهدئة جداً. سأطلب بانتظام.",
    },
    {
      name: "Amina Al-Mansour",
      avatar: "AA",
      locationEn: "District 1, HCMC",
      locationVi: "Quận 1, Tp. HCM",
      locationAr: "المنطقة ١، سايغون",
      stars: 5,
      favoriteEn: "Baghrir & Soufflé",
      favoriteVi: "Pancake Baghrir & Bánh nướng Soufflé",
      favoriteAr: "البغرير والسوفلي",
      textEn:
        "The best Baghrir I have had outside of Algeria! Spongy, light, and perfectly cooked. The chicken soufflés are also incredibly tasty and filled generously with olives.",
      textVi:
        "Bánh Baghrir ngon nhất tôi từng ăn ngoài Algeria! Mềm xốp, nhẹ tênh và chuẩn vị. Bánh nướng Soufflé nhân gà và ô liu cũng siêu đậm đà, vỏ bánh nướng vàng ươm rất ngon.",
      textAr:
        "أفضل بغرير تناولته خارج الجزائر! إسفنجي وخفيف ومطهو بشكل مثالي. سوفلي الدجاج أيضاً لذيذ للغاية ومحشو بسخاء بالزيتون والجبن.",
    },
    {
      name: "David K.",
      avatar: "DK",
      locationEn: "District 7, HCMC",
      locationVi: "Quận 7, Tp. HCM",
      locationAr: "المنطقة ٧، سايغون",
      stars: 5,
      favoriteEn: "Karan",
      favoriteVi: "Bánh đậu gà Karan",
      favoriteAr: "كاران",
      textEn:
        "Algerian street food Karan is a wonderful discovery. Soft baked chickpea cake with great spices. Very authentic Halal food and superb friendly service via Zalo.",
      textVi:
        "Món ăn đường phố Karan của Algeria là một khám phá tuyệt vời. Bột đậu gà nướng mềm mịn nêm nếm rất thơm. Đồ ăn Halal chuẩn vị cùng dịch vụ chăm sóc khách hàng cực kỳ thân thiện qua Zalo.",
      textAr:
        "أكلة الكاران الشعبية الجزائرية كانت اكتشافاً رائعاً بالنسبة لي. حمص مطحون ومخبوز بقوام ناعم وتوابل رائعة. طعام حلال أصيل وخدمة ودودة للغاية عبر زالو.",
    },
  ];

  return (
    <section
      id="reviews"
      className="scroll-mt-24 py-16 bg-secondary/20 transition-colors duration-300"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        {/* Title */}
        <div className="mb-10 text-center">
          <div className="gold-rule mx-auto max-w-xs">
            <span className="text-sm">✦</span>
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary">{title}</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">{subtitle}</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {reviews.map((rev, idx) => {
            const loc =
              language === "vi"
                ? rev.locationVi
                : language === "ar"
                  ? rev.locationAr
                  : rev.locationEn;
            const fav =
              language === "vi"
                ? rev.favoriteVi
                : language === "ar"
                  ? rev.favoriteAr
                  : rev.favoriteEn;
            const text =
              language === "vi" ? rev.textVi : language === "ar" ? rev.textAr : rev.textEn;

            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-card)] hover:border-gold/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-0.5 text-gold mb-3">
                    {Array.from({ length: rev.stars }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>

                  {/* Quote content */}
                  <p className="text-[13px] leading-relaxed text-foreground italic mb-4 relative z-10">
                    &ldquo;{text}&rdquo;
                  </p>
                </div>

                {/* Footer Info */}
                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-secondary text-primary font-display text-xs font-bold">
                      {rev.avatar}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-foreground leading-tight">
                        {rev.name}
                      </h4>
                      <p className="text-[10px] text-muted-foreground">{loc}</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-gold-ink max-w-[120px] truncate">
                    {fav}
                  </span>
                </div>

                {/* Visual quote icon in bg */}
                <Quote className="absolute right-4 top-4 h-12 w-12 text-secondary/15 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
