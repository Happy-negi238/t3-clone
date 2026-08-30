import { ChatShowcase } from "@/modules/home/chat-showcase";
import { DashboardShowcase } from "@/modules/home/dashboard-showcase";
import { HeroSection } from "@/modules/home/hero-section";
import { ApproachSection } from "@/modules/home/approach-section";
import { PricingSection } from "@/modules/home/pricing-section";
import { SiteFooter } from "@/modules/home/site-footer";

export default function Home() {
  return (
    <main className="bg-black">
      <HeroSection />
      <DashboardShowcase />
      <ChatShowcase />
      <ApproachSection />
      <PricingSection />
      <SiteFooter />
    </main>
  );
}
