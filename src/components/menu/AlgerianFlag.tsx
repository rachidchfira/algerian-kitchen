import type { CSSProperties } from "react";

type FlagProps = {
  className?: string;
  title?: string;
  style?: CSSProperties;
};

/** A clean, accurate rendering of the Algerian flag (green/white with red crescent & star). */
export function AlgerianFlag({ className, title = "Flag of Algeria", style }: FlagProps) {
  return (
    <svg
      viewBox="0 0 60 40"
      role="img"
      aria-label={title}
      className={className}
      style={style}
      preserveAspectRatio="xMidYMid meet"
    >
      <title>{title}</title>
      <rect width="30" height="40" fill="#006233" />
      <rect x="30" width="30" height="40" fill="#ffffff" />
      {/* Red crescent: outer disc minus an offset disc */}
      <g fill="#d21034">
        <circle cx="28" cy="20" r="9" />
      </g>
      <circle cx="30.5" cy="20" r="7.4" fill="#ffffff" />
      {/* Five-pointed star nestled in the crescent's opening */}
      <polygon
        fill="#d21034"
        points="33.00,16.40 33.88,18.79 36.42,18.89 34.43,20.46 35.12,22.91 33.00,21.50 30.88,22.91 31.57,20.46 29.58,18.89 32.12,18.79"
      />
    </svg>
  );
}
