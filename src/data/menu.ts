import gratin from "@/assets/dishes/gratin.jpg";
import ftir from "@/assets/dishes/ftir.jpg";
import stuffedFtir from "@/assets/dishes/stuffed-ftir.jpg";
import souffle from "@/assets/dishes/souffle.jpg";
import chorba from "@/assets/dishes/chorba.jpg";
import karan from "@/assets/dishes/karan.jpg";
import borek from "@/assets/dishes/borek.jpg";
import salad from "@/assets/dishes/salad.jpg";
import baghrir from "@/assets/dishes/baghrir.jpg";
import halawa from "@/assets/dishes/halawa.jpg";

export interface MenuOption {
  /** Stable id used in the cart key */
  id: string;
  /** Short label shown on the chip, e.g. "Full" */
  label: string;
  labelVi: string;
  labelAr: string;
  /** Price in thousands of VND (k). 50 -> 50,000₫ */
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  nameVi: string;
  arabic: string;
  description: string;
  descriptionVi: string;
  descriptionAr: string;
  image: string;
  /** Single price (in thousands) when there are no options */
  price?: number;
  /** Multiple sizes/portions */
  options?: MenuOption[];
  /** Small note shown under the item, e.g. minimum order rules */
  note?: string;
  noteVi?: string;
  noteAr?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  titleVi: string;
  titleAr: string;
  items: MenuItem[];
}

export const MENU: MenuCategory[] = [
  {
    id: "main",
    title: "Main Dishes",
    titleVi: "Món chính",
    titleAr: "الأطباق الرئيسية",
    items: [
      {
        id: "gratin",
        name: "Gratin",
        nameVi: "Món đút lò Gratin",
        arabic: "غراتان",
        price: 165,
        image: gratin,
        description:
          "A rich, comforting baked dish layered with potatoes, tender chicken (~250g), velvety béchamel, portion cheese, melted grated cheese, and golden french fries.",
        descriptionVi:
          "Món đút lò thơm ngon béo ngậy với các lớp khoai tây, thịt gà mềm (~250g), sốt bơ sữa béchamel mịn màng, phô mai miếng, phô mai sợi bào tan chảy và khoai tây chiên vàng giòn.",
        descriptionAr:
          "طبق غراتان غني ودافئ محضر من طبقات البطاطس والدجاج الطري (حوالي ٢٥٠ غرام)، مع صلصة البشاميل المخملية، شرائح الجبن، الجبن المبشور الذائب، والبطاطس المقلية الذهبية.",
      },
      {
        id: "ftir",
        name: "Ftir",
        nameVi: "Bánh mì dẹt Ftir",
        arabic: "فطير",
        image: ftir,
        description: "Traditional Algerian flaky, layered flatbread.",
        descriptionVi: "Bánh mì dẹt xếp lớp truyền thống kiểu Algeria giòn tan, thơm ngậy bơ.",
        descriptionAr: "فطير جزائري تقليدي مورق ومقرمش مخبوز على الطريقة الأصيلة.",
        options: [
          { id: "quarter", label: "¼ Portion", labelVi: "¼ Phần", labelAr: "ربع قطعة", price: 15 },
          { id: "half", label: "½ Portion", labelVi: "½ Phần", labelAr: "نصف قطعة", price: 30 },
          {
            id: "full",
            label: "Full Portion",
            labelVi: "Cả Phần",
            labelAr: "قطعة كاملة",
            price: 50,
          },
        ],
      },
      {
        id: "stuffed-ftir",
        name: "Stuffed Ftir",
        nameVi: "Ftir kẹp nhân thịt phô mai",
        arabic: "فطير محشي",
        image: stuffedFtir,
        description:
          "Our signature traditional flatbread, generously filled with savory beef and melted cheese.",
        descriptionVi:
          "Bánh mì dẹt truyền thống đặc trưng của chúng tôi, kẹp nhân thịt bò băm đậm đà và phô mai kéo sợi béo ngậy.",
        descriptionAr:
          "فطيرنا المحشي التقليدي المميز، محشو بسخاء بلحم البقر المفروم المتبل والجبن اللذيذ الذائب.",
        options: [
          { id: "half", label: "½ Portion", labelVi: "½ Phần", labelAr: "نصف قطعة", price: 60 },
          {
            id: "full",
            label: "Full Portion",
            labelVi: "Cả Phần",
            labelAr: "قطعة كاملة",
            price: 115,
          },
        ],
      },
      {
        id: "souffle",
        name: "Soufflé",
        nameVi: "Bánh nướng Soufflé",
        arabic: "سوفلي",
        price: 100,
        image: souffle,
        description:
          "Fluffy, golden baked pastries stuffed with a savory blend of chicken, potatoes, portion cheese, rich grated cheese, and green olives.",
        descriptionVi:
          "Bánh nướng xốp vàng ươm nhân thịt gà, khoai tây, phô mai miếng, phô mai sợi bào béo ngậy và ô liu xanh.",
        descriptionAr:
          "معجنات سوفلي ذهبية وهشة محشوة بخليط لذيذ من الدجاج، البطاطس، شرائح الجبن، الجبن المبشور الغني، والزيتون الأخضر.",
        note: "Sold exclusively as 3 pieces per order.",
        noteVi: "Bán theo phần 3 chiếc.",
        noteAr: "تباع حصرياً ٣ قطع لكل طلب.",
      },
    ],
  },
  {
    id: "soups",
    title: "Soups & Sides",
    titleVi: "Súp & Món phụ",
    titleAr: "الحساء والمقبلات",
    items: [
      {
        id: "chorba",
        name: "Chorba",
        nameVi: "Súp Chorba truyền thống",
        arabic: "شوربة",
        price: 40,
        image: chorba,
        description:
          "A deeply aromatic, traditional Algerian vegetarian soup slow-simmered with potatoes, fresh tomatoes, carrots, zucchini, parsley, coriander, and hearty regional spices.",
        descriptionVi:
          "Món súp chay truyền thống của Algeria thơm lừng hương vị thảo mộc, hầm chậm từ khoai tây, cà chua tươi, cà rốt, bí ngòi, ngò tây, ngò rí cùng các loại gia vị đặc trưng vùng Maghreb.",
        descriptionAr:
          "شوربة جزائرية تقليدية نباتية عطرية للغاية، مطهوة على نار هادئة مع البطاطس، الطماطم الطازجة، الجزر، الكوسا، البقدونس، الكزبرة، والتوابل الإقليمية الغنية.",
        note: "Served by the bowl.",
        noteVi: "Phục vụ theo bát.",
        noteAr: "تقدم بالوعاء.",
      },
      {
        id: "karan",
        name: "Karan",
        nameVi: "Bánh đậu gà Karan",
        arabic: "كاران",
        image: karan,
        description:
          "A beloved cultural street food dish made from seasoned, baked ground chickpeas with a beautifully soft texture.",
        descriptionVi:
          "Món ăn đường phố văn hóa được yêu thích làm từ bột đậu gà nướng gia vị với kết cấu mềm mịn độc đáo.",
        descriptionAr:
          "أكلة شعبية محبوبة جداً مصنوعة من الحمص المطحون والمتبل المخبوز في الفرن بقوام طري فريد.",
        options: [
          { id: "small", label: "Small Plate", labelVi: "Đĩa nhỏ", labelAr: "طبق صغير", price: 45 },
          { id: "large", label: "Large Plate", labelVi: "Đĩa lớn", labelAr: "طبق كبير", price: 80 },
        ],
      },
      {
        id: "borek",
        name: "Borek",
        nameVi: "Bánh cuộn chiên Borek",
        arabic: "بوريك",
        image: borek,
        description:
          "Crispy, golden-fried Algerian pastry rolls filled with a perfectly seasoned potato and beef filling.",
        descriptionVi:
          "Bánh cuộn chiên giòn vàng kiểu Algeria với nhân khoai tây nghiền và thịt bò được nêm nếm hoàn hảo.",
        descriptionAr:
          "أصابع البوريك المقرمشة الذهبية المحشوة بخليط متبل بعناية من البطاطس ولحم البقر المفروم.",
        options: [
          { id: "three", label: "3 Pieces", labelVi: "Phần 3 chiếc", labelAr: "٣ قطع", price: 65 },
          { id: "five", label: "5 Pieces", labelVi: "Phần 5 chiếc", labelAr: "٥ قطع", price: 100 },
        ],
      },
      {
        id: "salad",
        name: "Fresh Salad",
        nameVi: "Salad tươi mát",
        arabic: "سلطة",
        price: 20,
        image: salad,
        description: "A crisp, light, and refreshing accompaniment.",
        descriptionVi: "Rau củ giòn ngọt, tươi mát ăn kèm giúp cân bằng vị giác.",
        descriptionAr: "سلطة خضار طازجة ومقرمشة مرافقة خفيفة ومنعشة للوجبات.",
      },
    ],
  },
  {
    id: "sweets",
    title: "Sweet Treats",
    titleVi: "Món ngọt",
    titleAr: "الحلويات",
    items: [
      {
        id: "baghrir",
        name: "Baghrir",
        nameVi: "Bánh pancake Baghrir",
        arabic: "بغرير",
        price: 75,
        image: baghrir,
        description:
          'Traditional Algerian "thousand-hole" pancakes. Tender, spongy, light, and beautifully authentic.',
        descriptionVi:
          "Bánh pancake 'ngàn lỗ' truyền thống của Algeria. Kết cấu mềm, xốp, nhẹ như bông và chuẩn vị truyền thống.",
        descriptionAr:
          "البغرير الجزائري التقليدي أو ما يعرف بـ 'باني كيك الألف ثقب'. طري، إسفنجي، خفيف، ومحضر بأصالة.",
        note: "Served as 5 pieces.",
        noteVi: "Phục vụ phần 5 cái.",
        noteAr: "تقدم ٥ قطع لكل حصة.",
      },
      {
        id: "halawa",
        name: "Halawa",
        nameVi: "Bánh ngọt chiên Halawa",
        arabic: "حلاوة",
        price: 50,
        image: halawa,
        description: "A sweet, delicately crispy traditional Algerian fried pastry cake.",
        descriptionVi: "Bánh ngọt chiên giòn truyền thống của Algeria, thơm lừng ngọt ngào.",
        descriptionAr: "حلاوة تقليدية جزائرية، معجنات حلوة ومقرمشة مقلية بلون ذهبي.",
      },
    ],
  },
];

export const RESTAURANT = {
  name: "The Algerian Kitchen",
  tagline: "Authentic Algerian & Arabic Cuisine",
  taglineVi: "Ẩm thực Algeria & Ả Rập chuẩn vị",
  taglineAr: "المطبخ الجزائري والعربي الأصيل",
  city: "Ho Chi Minh City",
  cityVi: "Tp. Hồ Chí Minh",
  cityAr: "مدينة هو شي منه",
  hours: "9:00 AM – 9:00 PM",
  hoursAr: "٩:٠٠ صباحاً – ٩:٠٠ مساءً",
  zalo: "0866551546",
  /** E.164 without + for wa.me / zalo deep links */
  phoneIntl: "84866551546",
};
