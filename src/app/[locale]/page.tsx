import { HeroSection } from "@/components/HeroSection";
import { VisionSection } from "@/components/VisionSection";
import { ProductsSection } from "@/components/ProductsSection";
import { TeamSection } from "@/components/TeamSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <ProductsSection />
      <TeamSection />
      <Footer />
    </>
  );
}
