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

export function buildOrderMessage(lines: CartLine[], total: number, note?: string): string {
  const parts: string[] = [];
  parts.push(`🍽️ New order — ${RESTAURANT.name}`);
  parts.push("");
  for (const line of lines) {
    const label = line.optionLabel ? `${line.name} (${line.optionLabel})` : line.name;
    parts.push(`• ${line.qty}× ${label} — ${formatVnd(line.qty * line.price)}`);
  }
  parts.push("");
  parts.push(`Total: ${formatVnd(total)}`);
  if (note && note.trim()) {
    parts.push("");
    parts.push(`Note: ${note.trim()}`);
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
