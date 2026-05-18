// ============================================================
// CONFIGURAÇÃO DO SITE — edite este arquivo para cada cliente
// ============================================================

export const siteConfig = {
  // --- Empresa ---
  nome: "Nome da Empresa",
  slogan: "Slogan principal da empresa",
  descricao: "Descrição curta para SEO e meta tags (até 160 caracteres).",
  segmento: "gráfica", // ex: ótica, gráfica, assistência técnica...
  cor: {
    primaria: "#1a2b4a",   // cor principal (hex)
    secundaria: "#2c4a8c", // cor de destaque
  },

  // --- Contato ---
  whatsapp: "5581999999999", // somente números, com DDI+DDD
  whatsappMensagem: "Olá! Vim pelo site e gostaria de mais informações.",
  email: "contato@empresa.com.br",
  telefone: "(81) 9 9999-9999",

  // --- Endereço ---
  endereco: {
    rua: "Rua Exemplo, 123",
    bairro: "Bairro",
    cidade: "Recife",
    estado: "PE",
    cep: "50000-000",
    googleMapsUrl: "https://maps.google.com/?q=...",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=...",
  },

  // --- Horário ---
  horario: [
    { dias: "Segunda a Sexta", horas: "08h às 18h" },
    { dias: "Sábado", horas: "08h às 13h" },
    { dias: "Domingo", horas: "Fechado" },
  ],

  // --- Redes Sociais ---
  redes: {
    instagram: "https://instagram.com/empresa",
    facebook: "",
    youtube: "",
  },

  // --- SEO ---
  seo: {
    titulo: "Nome da Empresa | Segmento em Recife",
    descricao: "Descrição para Google (até 160 caracteres).",
    keywords: ["segmento recife", "empresa recife", "serviço perto de mim"],
    ogImage: "/og-image.jpg", // 1200x630px, salvar em /public
  },

  // --- Serviços ---
  // Preencher com os serviços reais da empresa
  servicos: [
    {
      titulo: "Serviço 1",
      descricao: "Descrição curta do serviço.",
      icone: "printer", // nome do ícone lucide-react
    },
    {
      titulo: "Serviço 2",
      descricao: "Descrição curta do serviço.",
      icone: "scan",
    },
    {
      titulo: "Serviço 3",
      descricao: "Descrição curta do serviço.",
      icone: "layers",
    },
  ],

  // --- Diferenciais ---
  diferenciais: [
    { titulo: "Anos de experiência", valor: "30+" },
    { titulo: "Clientes atendidos", valor: "5.000+" },
    { titulo: "Satisfação garantida", valor: "100%" },
  ],

  // --- Avaliações (Google) ---
  avaliacoes: {
    nota: 4.8,
    total: 127,
    destaques: [
      {
        nome: "Nome do Cliente",
        nota: 5,
        texto: "Texto da avaliação do cliente.",
        data: "2024-11",
      },
      {
        nome: "Nome do Cliente",
        nota: 5,
        texto: "Texto da avaliação do cliente.",
        data: "2024-10",
      },
      {
        nome: "Nome do Cliente",
        nota: 5,
        texto: "Texto da avaliação do cliente.",
        data: "2024-09",
      },
    ],
  },

  // --- Galeria / Portfólio ---
  // Salvar imagens em /public/galeria/
  galeria: [
    { src: "/galeria/1.jpg", alt: "Descrição da imagem 1" },
    { src: "/galeria/2.jpg", alt: "Descrição da imagem 2" },
    { src: "/galeria/3.jpg", alt: "Descrição da imagem 3" },
    { src: "/galeria/4.jpg", alt: "Descrição da imagem 4" },
    { src: "/galeria/5.jpg", alt: "Descrição da imagem 5" },
    { src: "/galeria/6.jpg", alt: "Descrição da imagem 6" },
  ],

  // --- Analytics ---
  googleAnalyticsId: "", // ex: G-XXXXXXXXXX
  metaPixelId: "",       // ex: 1234567890
};

export type SiteConfig = typeof siteConfig;
