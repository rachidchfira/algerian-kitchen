import type { CartLine } from "./cart";
import { RESTAURANT } from "@/data/menu";

/** Format a price given in thousands of VND, e.g. 165 -> "165,000₫" */
export function formatVnd(thousands: number): string {
  return `${(thousands * 1000).toLocaleString("en-US")}₫`;
}

/** Compact menu-style price, e.g. 165 -> "165k" */
export function formatK(thousands: number): string {
  return `${thousands}k`;
}

export interface DeliveryDetails {
  name: string;
  phone: string;
  address: string;
  time: string;
}

export function buildOrderMessage(
  lines: CartLine[],
  total: number,
  delivery?: DeliveryDetails,
  note?: string,
): string {
  const parts: string[] = [];
  parts.push(`🍽️ New Order — ${RESTAURANT.name}`);
  parts.push("");

  if (delivery && (delivery.name || delivery.phone || delivery.address)) {
    parts.push("👤 CUSTOMER DETAILS:");
    if (delivery.name.trim()) parts.push(`• Name: ${delivery.name.trim()}`);
    if (delivery.phone.trim()) parts.push(`• Phone: ${delivery.phone.trim()}`);
    if (delivery.address.trim()) parts.push(`• Address: ${delivery.address.trim()}`);
    if (delivery.time) parts.push(`• Preferred Time: ${delivery.time}`);
    parts.push("");
  }

  parts.push("🛒 ITEMS ORDERED:");
  for (const line of lines) {
    const label = line.optionLabel ? `${line.name} (${line.optionLabel})` : line.name;
    parts.push(`• ${line.qty}× ${label} — ${formatVnd(line.qty * line.price)}`);
  }
  parts.push("");
  parts.push(`💰 TOTAL AMOUNT: ${formatVnd(total)}`);

  if (note && note.trim()) {
    parts.push("");
    parts.push(`✍️ NOTE: ${note.trim()}`);
  }

  parts.push("");
  parts.push("Sent from the online menu 🌙");
  return parts.join("\n");
}

/** Zalo personal chat deep link. Zalo does not support a prefilled message,
 *  so the caller copies the order text to the clipboard first. */
export function zaloLink(): string {
  return `https://zalo.me/${RESTAURANT.phoneIntl}`;
}

/** WhatsApp link with prefilled order text. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${RESTAURANT.phoneIntl}?text=${encodeURIComponent(message)}`;
}
