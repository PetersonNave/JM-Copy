import { Hero } from "@/components/sections/Hero";
import { Servicos } from "@/components/sections/Servicos";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Galeria } from "@/components/sections/Galeria";
import { Avaliacoes } from "@/components/sections/Avaliacoes";
import { Localizacao } from "@/components/sections/Localizacao";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

export default function Home() {
  return (
    <main>
      <Hero />
      <Servicos />
      <Diferenciais />
      <Galeria />
      <Avaliacoes />
      <Localizacao />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
