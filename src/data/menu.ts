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
  /** Price in thousands of VND (k). 50 -> 50,000₫ */
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  arabic: string;
  description: string;
  image: string;
  /** Single price (in thousands) when there are no options */
  price?: number;
  /** Multiple sizes/portions */
  options?: MenuOption[];
  /** Small note shown under the item, e.g. minimum order rules */
  note?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  arabic: string;
  items: MenuItem[];
}

export const MENU: MenuCategory[] = [
  {
    id: "main",
    title: "Main Dishes",
    arabic: "الأطباق الرئيسية",
    items: [
      {
        id: "gratin",
        name: "Gratin",
        arabic: "غراتان",
        price: 165,
        image: gratin,
        description:
          "A rich, comforting baked dish layered with potatoes, tender chicken (~250g), velvety béchamel, portion cheese, melted grated cheese, and golden french fries.",
      },
      {
        id: "ftir",
        name: "Ftir",
        arabic: "فطير",
        image: ftir,
        description: "Traditional Algerian flaky, layered flatbread.",
        options: [
          { id: "quarter", label: "¼ Portion", price: 15 },
          { id: "half", label: "½ Portion", price: 30 },
          { id: "full", label: "Full Portion", price: 50 },
        ],
      },
      {
        id: "stuffed-ftir",
        name: "Stuffed Ftir",
        arabic: "فطير محشي",
        image: stuffedFtir,
        description:
          "Our signature traditional flatbread, generously filled with savory beef and melted cheese.",
        options: [
          { id: "half", label: "½ Portion", price: 60 },
          { id: "full", label: "Full Portion", price: 115 },
        ],
      },
      {
        id: "souffle",
        name: "Soufflé",
        arabic: "سوفلي",
        price: 100,
        image: souffle,
        description:
          "Fluffy, golden baked pastries stuffed with a savory blend of chicken, potatoes, portion cheese, rich grated cheese, and green olives.",
        note: "Sold exclusively as 3 pieces per order.",
      },
    ],
  },
  {
    id: "soups",
    title: "Soups & Sides",
    arabic: "الحساء والمقبلات",
    items: [
      {
        id: "chorba",
        name: "Chorba",
        arabic: "شوربة",
        price: 40,
        image: chorba,
        description:
          "A deeply aromatic, traditional Algerian vegetarian soup slow-simmered with potatoes, fresh tomatoes, carrots, zucchini, parsley, coriander, and hearty regional spices.",
        note: "Served by the bowl.",
      },
      {
        id: "karan",
        name: "Karan",
        arabic: "كاران",
        image: karan,
        description:
          "A beloved cultural street food dish made from seasoned, baked ground chickpeas with a beautifully soft texture.",
        options: [
          { id: "small", label: "Small Plate", price: 45 },
          { id: "large", label: "Large Plate", price: 80 },
        ],
      },
      {
        id: "borek",
        name: "Borek",
        arabic: "بوريك",
        image: borek,
        description:
          "Crispy, golden-fried Algerian pastry rolls filled with a perfectly seasoned potato and beef filling.",
        options: [
          { id: "three", label: "3 Pieces", price: 65 },
          { id: "five", label: "5 Pieces", price: 100 },
        ],
      },
      {
        id: "salad",
        name: "Fresh Salad",
        arabic: "سلطة",
        price: 20,
        image: salad,
        description: "A crisp, light, and refreshing accompaniment.",
      },
    ],
  },
  {
    id: "sweets",
    title: "Sweet Treats",
    arabic: "الحلويات",
    items: [
      {
        id: "baghrir",
        name: "Baghrir",
        arabic: "بغرير",
        price: 75,
        image: baghrir,
        description:
          'Traditional Algerian "thousand-hole" pancakes. Tender, spongy, light, and beautifully authentic.',
        note: "Served as 5 pieces.",
      },
      {
        id: "halawa",
        name: "Halawa",
        arabic: "حلاوة",
        price: 50,
        image: halawa,
        description: "A sweet, delicately crispy traditional Algerian fried pastry cake.",
      },
    ],
  },
];

export const RESTAURANT = {
  name: "The Algerian Kitchen",
  tagline: "Authentic Algerian & Arabic Cuisine",
  city: "Ho Chi Minh City",
  hours: "9:00 AM – 9:00 PM",
  zalo: "0866551546",
  /** E.164 without + for wa.me / zalo deep links */
  phoneIntl: "84866551546",
};
