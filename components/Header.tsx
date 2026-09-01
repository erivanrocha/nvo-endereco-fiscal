import Image from "next/image";
import { WhatsAppCta } from "./WhatsAppCta";

export function Header() {
  return (
    <header className="border-b border-[#332e2f]/10 bg-white">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <a href="#inicio" aria-label="NVO Coworking — início" className="shrink-0">
          <Image src="/images/logo-nvo.svg" alt="NVO Coworking" width={112} height={92} className="h-16 w-auto object-contain" priority />
        </a>
        <div className="hidden sm:block"><WhatsAppCta /></div>
      </div>
    </header>
  );
}
