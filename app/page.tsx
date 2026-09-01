import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Situations } from "@/components/Situations";
import { Solution } from "@/components/Solution";
import { Features } from "@/components/Features";
import { Trust } from "@/components/Trust";
import { HowItWorks } from "@/components/HowItWorks";
import { Offer } from "@/components/Offer";
import { FAQ } from "@/components/FAQ";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { WhatsAppCta } from "@/components/WhatsAppCta";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Situations />
        <Solution />
        <Features />
        <Trust />
        <HowItWorks />
        <Offer />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#332e2f]/10 bg-white/95 p-3 shadow-[0_-8px_30px_rgba(51,46,47,0.10)] backdrop-blur sm:hidden">
        <WhatsAppCta fullWidth />
      </div>
    </>
  );
}
