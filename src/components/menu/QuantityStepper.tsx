import { Minus, Plus } from "lucide-react";

interface StepperProps {
  qty: number;
  onInc: () => void;
  onDec: () => void;
  size?: "sm" | "md";
}

export function QuantityStepper({ qty, onInc, onDec, size = "md" }: StepperProps) {
  const dim = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={onDec}
        className={`${dim} grid place-items-center rounded-full text-primary transition-colors hover:bg-secondary active:scale-95`}
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-6 text-center font-sans text-sm font-semibold tabular-nums text-foreground">
        {qty}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={onInc}
        className={`${dim} grid place-items-center rounded-full bg-primary text-primary-foreground transition-colors hover:brightness-110 active:scale-95`}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
