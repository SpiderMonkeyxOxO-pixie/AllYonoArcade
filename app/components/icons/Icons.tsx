type IconProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

const base = (size = 20) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
});

export function MenuIcon({ size = 22, className, strokeWidth = 2 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth} strokeLinecap="round">
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

export function XIcon({ size = 22, className, strokeWidth = 2 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth} strokeLinecap="round">
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

export function ChevronDownIcon({ size = 16, className, strokeWidth = 2 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function ChevronRightIcon({ size = 16, className, strokeWidth = 2 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

export function DownloadIcon({ size = 18, className, strokeWidth = 2 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12" />
      <polyline points="7 10 12 15 17 10" />
      <path d="M4 19h16" />
    </svg>
  );
}

export function GamepadIcon({ size = 18, className, strokeWidth = 2 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="10" x2="7" y2="14" />
      <line x1="5" y1="12" x2="9" y2="12" />
      <circle cx="16" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="18.5" cy="13" r="1" fill="currentColor" stroke="none" />
      <path d="M4.5 8h15a3 3 0 0 1 3 3.4l-.9 6.1a2.4 2.4 0 0 1-4.2 1.2L15.5 16h-7l-1.9 2.7a2.4 2.4 0 0 1-4.2-1.2l-.9-6.1A3 3 0 0 1 4.5 8Z" />
    </svg>
  );
}

export function ShieldCheckIcon({ size = 18, className, strokeWidth = 2 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v6c0 4.4-3 8.2-7 9-4-.8-7-4.6-7-9V6l7-3Z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

export function GiftIcon({ size = 18, className, strokeWidth = 2 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="9" width="16" height="4" rx="0.5" />
      <rect x="5.5" y="13" width="13" height="8" rx="0.5" />
      <line x1="12" y1="9" x2="12" y2="21" />
      <path d="M12 9c-1.2 0-3.2-.5-3.2-2.4A2 2 0 0 1 12 5c0 1.9-2 3.2-3.2 3.2" />
      <path d="M12 9c1.2 0 3.2-.5 3.2-2.4A2 2 0 0 0 12 5c0 1.9 2 3.2 3.2 3.2" />
    </svg>
  );
}

export function PhoneIcon({ size = 18, className, strokeWidth = 2 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 3h3l1.5 4.5-2.2 1.6a11 11 0 0 0 5.1 5.1l1.6-2.2L20 13.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" />
    </svg>
  );
}

export function LogInIcon({ size = 18, className, strokeWidth = 2 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 3H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6" />
      <polyline points="15 8 19 12 15 16" />
      <line x1="19" y1="12" x2="9" y2="12" />
    </svg>
  );
}

export function StoreIcon({ size = 18, className, strokeWidth = 2 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9l1-5h14l1 5" />
      <path d="M4 9a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0 2.8 1.7V9" />
      <path d="M5 10.5V20h14v-9.5" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

export function SwapIcon({ size = 18, className, strokeWidth = 2 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="7 3 3 7 7 11" />
      <line x1="3" y1="7" x2="21" y2="7" />
      <polyline points="17 13 21 17 17 21" />
      <line x1="21" y1="17" x2="3" y2="17" />
    </svg>
  );
}

export function CoinIcon({ size = 18, className, strokeWidth = 2 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="7" rx="7" ry="3.2" />
      <path d="M5 7v10c0 1.8 3.1 3.2 7 3.2s7-1.4 7-3.2V7" />
      <path d="M5 12c0 1.8 3.1 3.2 7 3.2s7-1.4 7-3.2" />
    </svg>
  );
}

export function AlertIcon({ size = 18, className, strokeWidth = 2 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3.5 21 19H3L12 3.5Z" />
      <line x1="12" y1="9.5" x2="12" y2="13.5" />
      <circle cx="12" cy="16.3" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 16, className, strokeWidth = 2 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="14 6 20 12 14 18" />
    </svg>
  );
}

export function SearchIcon({ size = 18, className, strokeWidth = 2 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.2" y2="16.2" />
    </svg>
  );
}

export function SlidersIcon({ size = 18, className, strokeWidth = 2 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="6" x2="20" y2="6" />
      <circle cx="9" cy="6" r="2" fill="currentColor" stroke="none" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <circle cx="15" cy="12" r="2" fill="currentColor" stroke="none" />
      <line x1="4" y1="18" x2="20" y2="18" />
      <circle cx="11" cy="18" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ExternalLinkIcon({ size = 12, className, strokeWidth = 2 }: IconProps) {
  return (
    <svg {...base(size)} className={className} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3" />
      <polyline points="14 4 20 4 20 10" />
      <line x1="10" y1="14" x2="20" y2="4" />
    </svg>
  );
}
