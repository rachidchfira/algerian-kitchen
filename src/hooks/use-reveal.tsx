import { useEffect, useRef } from "react";

/**
 * Adds the `is-visible` class to an element the first time it scrolls into
 * view, driving the `.ak-reveal` entrance transition defined in styles.css.
 * Respects `prefers-reduced-motion` (the CSS guard makes content visible
 * immediately) and degrades gracefully without IntersectionObserver.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
