import { Header } from "@/components/sections/Header";
import { Ticker } from "@/components/sections/Ticker";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Servicos } from "@/components/sections/Servicos";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { Sobre } from "@/components/sections/Sobre";
import { Galeria } from "@/components/sections/Galeria";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Avaliacoes } from "@/components/sections/Avaliacoes";
import { Localizacao } from "@/components/sections/Localizacao";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Ticker
        items={[
          "Você pensa, a gente realiza",
          "DTF UV",
          "Plotagem",
          "Banner",
          "Adesivo em vinil",
          "Impressão colorida e P&B",
          "Encadernação",
          "Brindes",
          "Carimbos",
          "Personalizados",
          "Recife · Boa Vista",
        ]}
        className="bg-ink text-paper"
        speed={40}
      />

      <Header />

      <main>
        <Hero />

        <Ticker
          items={[
            "Orçamento rápido no WhatsApp",
            "Pertinho da UNICAP",
            "+9 anos de gráfica",
            "Acabamento caprichado",
            "Aberto a semana toda",
          ]}
          className="bg-magenta text-paper"
          speed={32}
          reverse
        />

        <Stats />
        <Servicos />
        <ComoFunciona />

        <Ticker
          items={[
            "TCC",
            "Cartão de visita",
            "Crachá",
            "Convite",
            "Caneca",
            "Camiseta",
            "Carimbo",
            "Folder",
            "Ecobag",
            "Calendário",
            "Encadernação",
            "Fardamento",
            "Garrafa",
          ]}
          className="bg-sun text-ink"
          speed={46}
        />

        <Sobre />
        <Galeria />
        <Diferenciais />
        <Avaliacoes />
        <Localizacao />
        <CtaFinal />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
