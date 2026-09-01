import Image from "next/image";

export function Footer() {
  return <footer className="border-t border-[#332e2f]/10 bg-white px-5 py-10 sm:px-8 lg:px-10"><div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-4"><Image src="/images/logo-nvo.svg" alt="NVO Coworking" width={92} height={75} className="h-14 w-auto object-contain"/><div><p className="font-bold text-[#332e2f]">NVO Coworking</p><p className="text-sm text-[#332e2f]/60">Endereço Fiscal em Natal/RN.</p></div></div><p className="text-sm text-[#332e2f]/50">16 anos de mercado.</p></div></footer>;
}
