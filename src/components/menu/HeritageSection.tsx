import { Sparkles, Map, Leaf, Flame } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export function HeritageSection() {
  const { language } = useLanguage();

  const title =
    language === "vi"
      ? "Khám phá Di sản Ẩm thực"
      : language === "ar"
        ? "اكتشف تراثنا الغذائي العريق"
        : "Discover Our Culinary Heritage";

  const subtitle =
    language === "vi"
      ? "Hương vị nguyên bản được định hình qua hàng ngàn năm lịch sử giao lưu văn hóa."
      : language === "ar"
        ? "نكهات أصيلة تشكلت عبر آلاف السنين من التفاعل الثقافي الغني."
        : "Authentic flavors shaped by thousands of years of rich cultural crossroad.";

  const items = [
    {
      icon: <Leaf className="h-6 w-6 text-gold" />,
      titleEn: "Berber Foundations",
      titleVi: "Cội nguồn Berber",
      titleAr: "الجذور الأمازيغية",
      descEn:
        "Dating back millennia, Berber culture gave Algeria staples like Ftir and Baghrir—crafted from semolina and reflecting ancient nomadic tradition.",
      descVi:
        "Có niên đại hàng thiên niên kỷ, văn hóa Berber đã mang đến cho Algeria các món ăn chủ đạo như bánh dẹt Ftir và pancake Baghrir được làm từ bột lúa mì semolina.",
      descAr:
        "يمتد تاريخها لآلاف السنين، وتعتبر أساس الطبخ الجزائري؛ حيث منحتنا الأطباق المصنوعة من السميد مثل الفطير والبغرير التقليدي.",
    },
    {
      icon: <Flame className="h-6 w-6 text-gold" />,
      titleEn: "Arab-Islamic Spice Trade",
      titleVi: "Thương cảng gia vị Ả Rập",
      titleAr: "التوابل العربية الإسلامية",
      descEn:
        "The Arab trade routes introduced deeply aromatic spices to the region—saffron, cumin, coriander, and the iconic Maghrebi spice mix: Ras el Hanout.",
      descVi:
        "Các tuyến giao thương của người Ả Rập đã đưa những loại gia vị thơm nồng nàn vào khu vực như nghệ tây, thì là, ngò rí và hỗn hợp gia vị Ras el Hanout đặc trưng.",
      descAr:
        "أدخلت طرق التجارة العربية التوابل العطرية والدافئة إلى المنطقة مثل الكمون، الكزبرة، الزعفران، ومزيج التوابل المغاربي الشهير: رأس الحانوت.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-gold" />,
      titleEn: "Ottoman Empire Pastries",
      titleVi: "Lò bánh ngọt Ottoman",
      titleAr: "الإرث العثماني",
      descEn:
        "Centuries of Ottoman rule left a sweet legacy, introducing the art of puff pastry rolls like Borek, layered honey sweets, and delicate phyllo dough.",
      descVi:
        "Hàng thế kỷ thuộc triều đại Ottoman đã để lại di sản ngọt ngào, giới thiệu nghệ thuật cuốn bánh phồng Borek, bánh mật ong xếp lớp và bột bánh phyllo mỏng mịn.",
      descAr:
        "ترك الحكم العثماني بصمة واضحة في المعجنات والحلويات؛ حيث أدخل فن رقائق العجين الرقيقة مثل البوريك والحلويات الملتفة بالعسل.",
    },
    {
      icon: <Map className="h-6 w-6 text-gold" />,
      titleEn: "Mediterranean & French Blend",
      titleVi: "Sự giao thoa Địa Trung Hải & Pháp",
      titleAr: "اللمسة المتوسطية والفرنسية",
      descEn:
        "With 1,200km of coastline, Algeria blends Mediterranean olive oils and fresh herbs with European baking techniques, creating modern favorites like Gratin.",
      descVi:
        "Với hơn 1.200km bờ biển, Algeria hòa quyện dầu ô liu Địa Trung Hải và thảo mộc tươi với kỹ thuật đút lò châu Âu, tạo nên món Gratin trứ danh.",
      descAr:
        "مع ساحل يمتد لـ ١٢٠٠ كم، يمتزج زيت الزيتون المتوسطي والأعشاب الطازجة مع تقنيات الطهي والخبز الأوروبية ليثمر أطباقاً دافئة مثل الغراتان.",
    },
  ];

  return (
    <section
      id="heritage"
      className="scroll-mt-24 py-16 bg-secondary/35 border-y border-border/60 transition-colors duration-300"
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

        {/* Grid cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item, idx) => {
            const heading =
              language === "vi" ? item.titleVi : language === "ar" ? item.titleAr : item.titleEn;
            const paragraph =
              language === "vi" ? item.descVi : language === "ar" ? item.descAr : item.descEn;

            return (
              <div
                key={idx}
                className="group p-5 rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-card)] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1.5">{heading}</h3>
                <p className="text-[12.5px] leading-relaxed text-muted-foreground">{paragraph}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
