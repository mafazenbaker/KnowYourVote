// Simple monochrome line icons (stroke-based, no fill) — they inherit color
// from `currentColor` and size from the `className` you pass.

type IconProps = { className?: string };

const base = (className?: string) => ({
  className: className ?? "h-6 w-6",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  xmlns: "http://www.w3.org/2000/svg",
});

// --- Issue icons ----------------------------------------------------------

function Healthcare({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 21C12 21 4 14.5 4 8.8A4.3 4.3 0 0 1 12 6a4.3 4.3 0 0 1 8 2.8C20 14.5 12 21 12 21Z" />
      <path d="M12 9.5v5M9.5 12h5" />
    </svg>
  );
}

function Economy({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v10M14.5 9.3c0-1-1.1-1.8-2.5-1.8s-2.5.8-2.5 1.9c0 2.6 5 1.4 5 4 0 1.1-1.1 1.9-2.5 1.9s-2.5-.8-2.5-1.8" />
    </svg>
  );
}

function Immigration({ className }: IconProps) {
  // Flag on a pole
  return (
    <svg {...base(className)}>
      <path d="M6 3v18" />
      <path d="M6 4h11l-2.2 3.3L17 10.6H6" />
    </svg>
  );
}

function Education({ className }: IconProps) {
  // Graduation cap
  return (
    <svg {...base(className)}>
      <path d="M12 4 2.5 8.5 12 13l9.5-4.5L12 4Z" />
      <path d="M6.5 10.7v4.1c0 1.2 2.5 2.7 5.5 2.7s5.5-1.5 5.5-2.7v-4.1" />
      <path d="M21.5 8.5v4.5" />
    </svg>
  );
}

function Climate({ className }: IconProps) {
  // Leaf
  return (
    <svg {...base(className)}>
      <path d="M5 19c9 2 15-3 15-13-7 0-13 2-13 8 0 2 .7 3.6 2 5Z" />
      <path d="M8 16c2.5-3 5.5-4.5 8.5-5.2" />
    </svg>
  );
}

function Justice({ className }: IconProps) {
  // Scales of justice
  return (
    <svg {...base(className)}>
      <path d="M12 4v16M7 20h10M4.5 8.5h15L12 5 4.5 8.5Z" />
      <path d="M4.5 8.5 2 14a2.5 2.5 0 0 0 5 0L4.5 8.5ZM19.5 8.5 17 14a2.5 2.5 0 0 0 5 0l-2.5-5.5Z" />
    </svg>
  );
}

function Social({ className }: IconProps) {
  // Two people
  return (
    <svg {...base(className)}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 6.2a3 3 0 0 1 0 5.6" />
      <path d="M17 14.2A5.5 5.5 0 0 1 20.5 19" />
    </svg>
  );
}

function Foreign({ className }: IconProps) {
  // Globe
  return (
    <svg {...base(className)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.3 3.8 5.3 3.8 8.5s-1.3 6.2-3.8 8.5c-2.5-2.3-3.8-5.3-3.8-8.5S9.5 5.8 12 3.5Z" />
    </svg>
  );
}

function Housing({ className }: IconProps) {
  // Home
  return (
    <svg {...base(className)}>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 9.5V20h12V9.5" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

const ISSUE_ICONS: Record<string, (p: IconProps) => JSX.Element> = {
  healthcare: Healthcare,
  economy: Economy,
  immigration: Immigration,
  education: Education,
  climate: Climate,
  justice: Justice,
  social: Social,
  foreign: Foreign,
  housing: Housing,
};

/** Renders the line icon for a given issue id. */
export function IssueIcon({ id, className }: { id: string; className?: string }) {
  const Cmp = ISSUE_ICONS[id];
  return Cmp ? <Cmp className={className} /> : null;
}

// --- App icons ------------------------------------------------------------

/** Ballot box with a checkmark (used on the results empty state). */
export function BallotIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M4 10.5 12 7l8 3.5v7.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7.5Z" />
      <path d="M9.5 12.2 11.2 14l3.3-3.6" />
    </svg>
  );
}

/** Simple line star (brand mark + "closest match"). */
export function StarIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5Z" />
    </svg>
  );
}
