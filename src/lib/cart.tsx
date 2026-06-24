import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";

export interface CartLine {
  /** Unique key: itemId or itemId:optionId */
  key: string;
  itemId: string;
  name: string;
  /** Selected option label, e.g. "Full Portion" */
  optionLabel?: string;
  /** Unit price in thousands of VND */
  price: number;
  qty: number;
}

type CartState = Record<string, CartLine>;

type Action =
  | { type: "add"; line: Omit<CartLine, "qty">; qty?: number }
  | { type: "increment"; key: string }
  | { type: "decrement"; key: string }
  | { type: "remove"; key: string }
  | { type: "clear" }
  | { type: "hydrate"; state: CartState };

const STORAGE_KEY = "tak-cart-v1";

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "add": {
      const existing = state[action.line.key];
      const qty = (existing?.qty ?? 0) + (action.qty ?? 1);
      return { ...state, [action.line.key]: { ...action.line, qty } };
    }
    case "increment": {
      const line = state[action.key];
      if (!line) return state;
      return { ...state, [action.key]: { ...line, qty: line.qty + 1 } };
    }
    case "decrement": {
      const line = state[action.key];
      if (!line) return state;
      if (line.qty <= 1) {
        const next = { ...state };
        delete next[action.key];
        return next;
      }
      return { ...state, [action.key]: { ...line, qty: line.qty - 1 } };
    }
    case "remove": {
      const next = { ...state };
      delete next[action.key];
      return next;
    }
    case "clear":
      return {};
    case "hydrate":
      return action.state;
    default:
      return state;
  }
}

interface CartContextValue {
  lines: CartLine[];
  count: number;
  total: number;
  qtyForItem: (itemId: string) => number;
  add: (line: Omit<CartLine, "qty">, qty?: number) => void;
  increment: (key: string) => void;
  decrement: (key: string) => void;
  remove: (key: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "hydrate", state: JSON.parse(raw) });
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state]);

  const value = useMemo<CartContextValue>(() => {
    const lines = Object.values(state).sort((a, b) => a.name.localeCompare(b.name));
    const count = lines.reduce((s, l) => s + l.qty, 0);
    const total = lines.reduce((s, l) => s + l.qty * l.price, 0);
    return {
      lines,
      count,
      total,
      qtyForItem: (itemId: string) =>
        lines.filter((l) => l.itemId === itemId).reduce((s, l) => s + l.qty, 0),
      add: (line, qty) => dispatch({ type: "add", line, qty }),
      increment: (key) => dispatch({ type: "increment", key }),
      decrement: (key) => dispatch({ type: "decrement", key }),
      remove: (key) => dispatch({ type: "remove", key }),
      clear: () => dispatch({ type: "clear" }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
