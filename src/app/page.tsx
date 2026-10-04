import InteractiveNeuralVortex from "@/components/ui/interactive-neural-vortex-background";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Catalog } from "@/components/sections/Catalog";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <InteractiveNeuralVortex>
        <Hero />
      </InteractiveNeuralVortex>

      <main className="relative bg-[#0A0A0A]">
        <Features />
        <Catalog />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}