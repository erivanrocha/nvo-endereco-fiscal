import { WHATSAPP_URL } from "@/lib/contact";
import { Icon } from "./Icon";

export function WhatsAppCta({ className = "", fullWidth = false }: { className?: string; fullWidth?: boolean }) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:brightness-95 ${fullWidth ? "w-full" : ""} ${className}`;
  if (!WHATSAPP_URL) {
    return <span className={classes} aria-disabled="true" title="Destino do WhatsApp ainda não configurado"><Icon name="message" />Falar com um consultor pelo WhatsApp</span>;
  }
  return <a className={classes} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><Icon name="message" />Falar com um consultor pelo WhatsApp</a>;
}
