import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/lib/LanguageContext";

export function FaqSection() {
  const { language } = useLanguage();

  const title =
    language === "vi"
      ? "Câu hỏi thường gặp"
      : language === "ar"
        ? "الأسئلة الشائعة والخدمات"
        : "Frequently Asked Questions";

  const subtitle =
    language === "vi"
      ? "Mọi thông tin cần biết về quy trình nấu ăn Halal và vận chuyển tại Sài Gòn."
      : language === "ar"
        ? "كل ما تريد معرفته عن الطهي الحلال وخدمات التوصيل في سايغون."
        : "Everything you need to know about our Halal cooking and Saigon delivery logistics.";

  const faqs = [
    {
      qEn: "Is everything 100% Halal?",
      qVi: "Món ăn có đảm bảo 100% Halal không?",
      qAr: "هل كل شيء حلال بنسبة ١٠٠٪؟",
      aEn: "Yes, absolutely. We source certified Halal meats (chicken, beef) and prepare all dishes in strict adherence to Halal cooking guidelines, without any alcohol or non-halal cross-contamination.",
      aVi: "Đúng vậy, 100%. Chúng tôi sử dụng thịt (gà, bò) đạt chứng nhận Halal và chế biến tất cả các món ăn theo quy chuẩn nghiêm ngặt, đảm bảo không cồn và không nhiễm chéo phi-halal.",
      aAr: "نعم، بالتأكيد. نحن نحصل على لحوم حلال معتمدة (الدجاج، البقر) ونقوم بإعداد جميع أطباقنا بالتزام صارم بإرشادات الطهي الحلال الخالية تماماً من الكحول أو أي تلامس مع مواد غير حلال.",
    },
    {
      qEn: "How does ordering via Zalo or WhatsApp work?",
      qVi: "Đặt món qua Zalo hoặc WhatsApp như thế nào?",
      qAr: "كيف تعمل طريقة الطلب عبر زالو أو واتساب؟",
      aEn: "Simply add your favorite dishes to the cart, fill in your delivery name, phone, and address, then click 'Order on Zalo/WhatsApp'. It will auto-copy the prefilled order summary, open our chat, and you can just paste and send to us!",
      aVi: "Chỉ cần chọn các món ăn yêu thích vào giỏ hàng, điền thông tin người nhận (tên, sđt, địa chỉ), sau đó bấm 'Đặt qua Zalo/WhatsApp'. Hệ thống sẽ tự động sao chép tóm tắt đơn hàng, mở ô chat để bạn chỉ việc dán và gửi!",
      aAr: "ما عليك سوى إضافة أطباقك المفضلة إلى السلة، وملء بيانات الاسم والهاتف والعنوان، ثم النقر فوق 'طلب عبر زالو/واتساب'. سيقوم النظام بنسخ تفاصيل الطلب تلقائياً وفتح المحادثة لتلصقها وترسلها لنا بسهولة!",
    },
    {
      qEn: "What are your delivery zones and fees in Saigon?",
      qVi: "Khu vực giao hàng và phí ship tại Sài Gòn thế nào?",
      qAr: "ما هي مناطق التوصيل والرسوم في سايغون؟",
      aEn: "We deliver across all districts in Ho Chi Minh City (District 1, 2/Thao Dien, 3, 7, Binh Thanh, Go Vap, etc.) via local riders (Grab/Ahamove). The delivery fee depends on the distance from our kitchen; we will confirm the exact delivery charge when you send your order.",
      aVi: "Chúng tôi giao hàng khắp các quận huyện ở TP. Hồ Chí Minh (Quận 1, Quận 2/Thảo Điền, Quận 3, Quận 7, Bình Thạnh, Gò Vấp...) thông qua đối tác vận chuyển Ahamove/Grab. Phí giao hàng tính theo khoảng cách thực tế; chúng tôi sẽ báo giá cụ thể khi nhận được đơn hàng của bạn.",
      aAr: "نوفر التوصيل لجميع مناطق مدينة هو شي منه (المنطقة ١، المنطقة ٢/تاو دين، المنطقة ٣، المنطقة ٧، بين ثانه...) عبر خدمات التوصيل المحلية. تُحتسب الرسوم بناءً على المسافة؛ وسنؤكد لك الرسوم المحددة بعد استلام الطلب مباشرة.",
    },
    {
      qEn: "Can I pre-order or schedule for a party/event?",
      qVi: "Tôi có thể đặt trước cho bữa tiệc hoặc sự kiện không?",
      qAr: "هل يمكنني الطلب مسبقاً أو جدولة الطلب لمناسبة خاصة؟",
      aEn: "Absolutely! For large gatherings or specific scheduled times, select the 'Specific time' option and write the preferred time in the notes. We recommend ordering at least 2-3 hours in advance for large orders.",
      aVi: "Chắc chắn rồi! Đối với các bữa tiệc hoặc thời gian hẹn cụ thể, hãy chọn 'Giờ cụ thể' và điền thời gian mong muốn vào ô ghi chú. Chúng tôi khuyên bạn nên đặt trước ít nhất 2-3 tiếng đối với các đơn hàng số lượng lớn.",
      aAr: "بالتأكيد! للجمعات الكبيرة أو الأوقات المجدولة، يرجى اختيار 'وقت محدد' وكتابة الساعة المفضلة في الملاحظات. نوصي بالطلب قبل ساعتين إلى ٣ ساعات على الأقل للطلبات الكبيرة لضمان أعلى جودة.",
    },
    {
      qEn: "What payment methods do you accept?",
      qVi: "Cửa hàng chấp nhận những hình thức thanh toán nào?",
      qAr: "ما هي وسائل الدفع المقبولة لديكم؟",
      aEn: "We support Cash on Delivery (COD) and fast Bank Transfer (Vietnamese bank account or QR code scan). Bank details will be shared in Zalo/WhatsApp when confirming your order.",
      aVi: "Chúng tôi nhận thanh toán tiền mặt khi nhận hàng (COD) và Chuyển khoản ngân hàng nhanh (qua số tài khoản hoặc quét mã QR). Thông tin tài khoản sẽ được gửi trong Zalo/WhatsApp khi xác nhận đơn hàng.",
      aAr: "ندعم الدفع نقداً عند الاستلام (COD) والتحويل البنكي السريع (الحسابات البنكية الفيتنامية أو الدفع عبر رمز QR). سنشارك معك بيانات الحساب عبر زالو/واتساب لتأكيد طلبك.",
    },
  ];

  return (
    <section id="faq" className="scroll-mt-24 py-16 transition-colors duration-300">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        {/* Title */}
        <div className="mb-8 text-center">
          <div className="gold-rule mx-auto max-w-xs">
            <span className="text-sm">✦</span>
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary">{title}</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">{subtitle}</p>
        </div>

        {/* Accordions */}
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => {
            const question = language === "vi" ? faq.qVi : language === "ar" ? faq.qAr : faq.qEn;
            const answer = language === "vi" ? faq.aVi : language === "ar" ? faq.aAr : faq.aEn;

            return (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/70 rounded-2xl bg-card px-4 shadow-[var(--shadow-card)] hover:border-gold/30 transition-all duration-300"
              >
                <AccordionTrigger className="font-display text-sm font-semibold text-foreground hover:no-underline py-4 text-left">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-[13px] leading-relaxed text-muted-foreground pt-1 pb-4">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
