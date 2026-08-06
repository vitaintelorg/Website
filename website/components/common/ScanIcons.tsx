type IconProps = { className?: string };

/** Mammography — compression plates around a breast-tissue cross-section. */
export function MammographyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <rect x="10" y="12" width="44" height="7" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="10" y="45" width="44" height="7" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M18 19 C18 30, 22 34, 32 34 C42 34, 46 30, 46 19"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M18 45 C18 34, 22 30, 32 30 C42 30, 46 34, 46 45"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <ellipse cx="32" cy="32" rx="6" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}

/** MRI — head profile with internal brain-fold lines. */
export function MriIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <path
        d="M20 44 C14 40, 12 32, 15 24 C18 15, 27 10, 36 11 C46 12, 52 20, 51 29 C51 32, 53 33, 53 36 C53 39, 50 39, 49 41 C49 45, 46 47, 43 47 L41 52 L34 52 L33 47 C26 47, 21 46, 20 44 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M23 26 C27 22, 31 27, 27 30 C33 28, 34 34, 29 35 C35 35, 37 40, 32 42"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.7"
      />
    </svg>
  );
}

/** CT — circular cross-section slice with nested organ-like contours. */
export function CtIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <circle cx="32" cy="32" r="21" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M22 28 C24 20, 34 19, 38 25 C43 24, 45 30, 41 33 C44 37, 39 42, 34 40 C31 45, 23 43, 23 37 C18 36, 18 30, 22 28 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.75"
      />
      <circle cx="32" cy="32" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}

/** Ultrasound — probe point with a sector-scan fan and depth arcs. */
export function UltrasoundIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <path d="M32 10 L14 50 A38 38 0 0 0 50 50 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M20 38 A20 20 0 0 0 44 38" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path d="M23.5 30 A13 13 0 0 0 40.5 30" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <circle cx="32" cy="10" r="2.5" fill="currentColor" />
    </svg>
  );
}
