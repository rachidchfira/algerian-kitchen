import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "vi" | "ar";

export interface Translations {
  startOrder: string;
  seeFullMenu: string;
  halalTag: string;
  prideTag: string;
  todaySpecial: string;
  chefSelection: string;
  chefSelectionDesc: string;
  seasonalPrice: string;
  hours: string;
  zaloWa: string;
  delivery: string;
  freshHalalMeals: string;
  authenticFlavors: string;
  addButton: string;
  addedToast: string;
  viewOrder: string;
  items: string;
  item: string;
  basketEmpty: string;
  yourOrder: string;
  addDishesPrompt: string;
  notePlaceholder: string;
  clearAll: string;
  total: string;
  orderZalo: string;
  orderWhatsApp: string;
  copyOrder: string;
  copied: string;
  zaloInfo: string;
  deliveryInfoTitle: string;
  customerName: string;
  phoneNumber: string;
  deliveryAddress: string;
  deliveryTime: string;
  deliveryASAP: string;
  deliverySchedule: string;
  savedLocally: string;
  heritageTitle: string;
  heritageSubtitle: string;
  heritageClose: string;
  navMenu: string;
  navHeritage: string;
  navFAQ: string;
  navReviews: string;
  halalLabel: string;
  optionalNote: string;
}

const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    startOrder: "Start your order",
    seeFullMenu: "See the full menu",
    halalTag: "100% Halal · Ho Chi Minh City",
    prideTag: "Made with Algerian Pride",
    todaySpecial: "Today's Special",
    chefSelection: "Chef's Daily Selection",
    chefSelectionDesc:
      "Ask us about today's unique traditional dish, prepared fresh with changing daily ingredients.",
    seasonalPrice: "Seasonal Price",
    hours: "Hours",
    zaloWa: "Zalo / WhatsApp",
    delivery: "Delivery",
    freshHalalMeals: "Fresh Halal meals across HCMC",
    authenticFlavors: "Authentic Flavors · Made With Care",
    addButton: "Add",
    addedToast: "added",
    viewOrder: "View Order",
    items: "items",
    item: "item",
    basketEmpty: "Your basket is empty.",
    yourOrder: "Your Order",
    addDishesPrompt: "Add a few dishes to get started.",
    notePlaceholder: "Delivery address, floor/apt, special instructions...",
    clearAll: "Clear all",
    total: "Total",
    orderZalo: "Order on Zalo",
    orderWhatsApp: "Order on WhatsApp",
    copyOrder: "Copy order summary",
    copied: "Copied to clipboard",
    zaloInfo: "Zalo opens with our chat — your order is copied, just paste & send to",
    deliveryInfoTitle: "Delivery Details",
    customerName: "Your Name",
    phoneNumber: "Phone Number",
    deliveryAddress: "Delivery Address",
    deliveryTime: "Preferred Delivery Time",
    deliveryASAP: "As soon as possible",
    deliverySchedule: "Specific time (write in notes)",
    savedLocally: "Details saved locally for future orders.",
    heritageTitle: "Algerian Culinary Heritage",
    heritageSubtitle:
      "A culinary crossroad of Berber, Arab, Roman, Mediterranean, and French cultures.",
    heritageClose: "Close",
    navMenu: "Menu",
    navHeritage: "Our Heritage",
    navFAQ: "Logistics & FAQ",
    navReviews: "Saigon Reviews",
    halalLabel: "حلال",
    optionalNote: "Additional Notes (e.g. less spicy, no olives...)",
  },
  vi: {
    startOrder: "Bắt đầu đặt món",
    seeFullMenu: "Xem thực đơn",
    halalTag: "100% Halal · Tp. Hồ Chí Minh",
    prideTag: "Đậm đà Bản sắc Algeria",
    todaySpecial: "Món đặc biệt hôm nay",
    chefSelection: "Lựa chọn từ Đầu bếp",
    chefSelectionDesc:
      "Hãy hỏi chúng tôi về món ăn truyền thống đặc sắc trong ngày, chế biến tươi ngon từ nguyên liệu tuyển chọn.",
    seasonalPrice: "Giá theo mùa",
    hours: "Giờ phục vụ",
    zaloWa: "Zalo / WhatsApp",
    delivery: "Giao hàng",
    freshHalalMeals: "Món ăn Halal nóng hổi giao toàn Tp. HCM",
    authenticFlavors: "Hương vị bản xứ · Chế biến tận tâm",
    addButton: "Thêm",
    addedToast: "đã được thêm",
    viewOrder: "Xem đơn hàng",
    items: "món",
    item: "món",
    basketEmpty: "Giỏ hàng của bạn đang trống.",
    yourOrder: "Đơn hàng của bạn",
    addDishesPrompt: "Chọn thêm vài món để bắt đầu thưởng thức nhé.",
    notePlaceholder: "Địa chỉ giao hàng chi tiết, số tầng/căn hộ, chỉ dẫn thêm...",
    clearAll: "Xóa tất cả",
    total: "Tổng cộng",
    orderZalo: "Đặt món qua Zalo",
    orderWhatsApp: "Đặt món qua WhatsApp",
    copyOrder: "Sao chép đơn hàng",
    copied: "Đã sao chép đơn hàng",
    zaloInfo:
      "Zalo sẽ mở đoạn chat — thông tin đơn hàng đã được sao chép, bạn chỉ cần dán và gửi cho",
    deliveryInfoTitle: "Thông tin Giao hàng",
    customerName: "Họ và tên",
    phoneNumber: "Số điện thoại",
    deliveryAddress: "Địa chỉ giao hàng",
    deliveryTime: "Thời gian mong muốn",
    deliveryASAP: "Giao càng sớm càng tốt",
    deliverySchedule: "Giờ cụ thể (ghi chú bên dưới)",
    savedLocally: "Thông tin được lưu tự động cho lần đặt sau.",
    heritageTitle: "Di sản Ẩm thực Algeria",
    heritageSubtitle:
      "Giao lộ ẩm thực độc đáo giữa các nền văn hóa Berber, Ả Rập, Địa Trung Hải và Pháp.",
    heritageClose: "Đóng",
    navMenu: "Thực đơn",
    navHeritage: "Di sản ẩm thực",
    navFAQ: "Hỏi đáp & Giao hàng",
    navReviews: "Đánh giá tại Sài Gòn",
    halalLabel: "حلال",
    optionalNote: "Ghi chú thêm (ít cay, không lấy ô liu...)",
  },
  ar: {
    startOrder: "ابدأ طلبك الآن",
    seeFullMenu: "عرض القائمة كاملة",
    halalTag: "حلال 100% · مدينة هو شي منه",
    prideTag: "صُنع بفخر جزائري أصيل",
    todaySpecial: "طبق اليوم الخاص",
    chefSelection: "اختيار الشيف اليومي",
    chefSelectionDesc:
      "اسألنا عن طبقنا التقليدي المميز لهذا اليوم، المحضر طازجاً بمكونات يومية مختارة.",
    seasonalPrice: "سعر موسمي",
    hours: "أوقات العمل",
    zaloWa: "زالو / واتساب",
    delivery: "التوصيل",
    freshHalalMeals: "وجبات حلال طازجة في جميع أنحاء سايغون",
    authenticFlavors: "نكهات أصيلة · صنعت بكل حب ورعاية",
    addButton: "إضافة",
    addedToast: "تمت إضافته",
    viewOrder: "عرض الطلب",
    items: "عناصر",
    item: "عنصر",
    basketEmpty: "سلتك فارغة حالياً.",
    yourOrder: "تفاصيل طلبك",
    addDishesPrompt: "أضف بعض الأطباق الشهية للبدء.",
    notePlaceholder: "عنوان التوصيل بالتفصيل، رقم الشقة/الطابق، تعليمات خاصة...",
    clearAll: "مسح الكل",
    total: "المجموع الكلي",
    orderZalo: "اطلب عبر زالو",
    orderWhatsApp: "اطلب عبر واتساب",
    copyOrder: "نسخ ملخص الطلب",
    copied: "تم نسخ الملخص بنجاح",
    zaloInfo: "سيفتح تطبيق زالو محادثتنا — تم نسخ تفاصيل طلبك، فقط قم بلصقها وإرسالها إلى",
    deliveryInfoTitle: "بيانات التوصيل",
    customerName: "الاسم الكريم",
    phoneNumber: "رقم الهاتف",
    deliveryAddress: "عنوان التوصيل",
    deliveryTime: "وقت التوصيل المفضل",
    deliveryASAP: "في أقرب وقت ممكن (طازج وسريع)",
    deliverySchedule: "وقت محدد (اكتبه في الملاحظات)",
    savedLocally: "تم حفظ بياناتك محلياً لتسهيل طلبك القادم.",
    heritageTitle: "التراث العريق للمطبخ الجزائري",
    heritageSubtitle:
      "ملتقى حضاري ساحر يجمع بين الثقافات الأمازيغية، العربية، المتوسطية، والعثمانية.",
    heritageClose: "إغلاق",
    navMenu: "القائمة",
    navHeritage: "تراثنا الأصيل",
    navFAQ: "الأسئلة الشائعة",
    navReviews: "آراء عملائنا في سايغون",
    halalLabel: "حلال",
    optionalNote: "ملاحظات إضافية (مثل: قليل التوابل، بدون زيتون...)",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("tak-lang");
    if (saved === "en" || saved === "vi" || saved === "ar") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("tak-lang", lang);
  };

  const t = TRANSLATIONS[language];
  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      <div dir={dir}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
