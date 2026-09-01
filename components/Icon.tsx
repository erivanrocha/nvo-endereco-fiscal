type IconName = "pin" | "mail" | "package" | "building" | "clock" | "check" | "arrow" | "message" | "home" | "plus" | "minus";

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const common = { className: `h-5 w-5 ${className}`, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (name) {
    case "pin": return <svg {...common}><path d="M20 10.5c0 5-8 11-8 11s-8-6-8-11a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10.5" r="2.5"/></svg>;
    case "mail": return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>;
    case "package": return <svg {...common}><path d="m21 8-9 5-9-5 9-5 9 5Z"/><path d="M3 8v8l9 5 9-5V8M12 13v8"/></svg>;
    case "building": return <svg {...common}><path d="M4 21V4h11v17M15 9h5v12M8 8h3M8 12h3M8 16h3M18 13h1M18 17h1"/></svg>;
    case "clock": return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case "check": return <svg {...common}><path d="m5 12 4 4L19 6"/></svg>;
    case "arrow": return <svg {...common}><path d="M5 12h13M13 6l6 6-6 6"/></svg>;
    case "message": return <svg {...common}><path d="M20 11.5a7 7 0 0 1-7.4 7L7 20l1.5-3.2A7 7 0 1 1 20 11.5Z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/></svg>;
    case "home": return <svg {...common}><path d="m3 11 9-7 9 7"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></svg>;
    case "plus": return <svg {...common}><path d="M12 5v14M5 12h14"/></svg>;
    case "minus": return <svg {...common}><path d="M5 12h14"/></svg>;
  }
}
