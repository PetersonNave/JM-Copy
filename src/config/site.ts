// ============================================================
// CONFIGURAÇÃO DO SITE — JM Copy (Gráfica Rápida e Personalizados)
// Preenchido a partir do relatório de investigação e da análise
// das imagens em /public/assets/images. Itens marcados "PENDENTE"
// devem ser confirmados com o cliente — ver _docs/checklist-kickoff.md
// ============================================================

export const siteConfig = {
  // --- Empresa ---
  nome: "JM Copy",
  slogan: "Você pensa e a gente realiza!",
  descricao:
    "Gráfica rápida e personalizados na Boa Vista, Recife — pertinho da UNICAP. Cópias, impressão, encadernação e brindes sob medida.",
  segmento: "gráfica",

  // Responsável pelo negócio
  responsavel: "Juliana Moura",

  // Cor — paleta oficial da marca (hex fornecido pelo cliente)
  cor: {
    primaria: "#e014b5",   // rosa/magenta — cor de marca dominante
    secundaria: "#4614ab", // azul/roxo — apoio e contraste
  },
  paleta: {
    azulClaro: "#33b6e0",
    rosa: "#e014b5",
    amarelo: "#f4ea0c",
    azul: "#4614ab",
    rosaClaro: "#f2bfc5",
    vinho: "#d94663",
  },

  // --- Contato ---
  whatsapp: "5581983091209", // (81) 98309-1209
  whatsappMensagem:
    "Olá, JM Copy! Vim pelo site e gostaria de um orçamento.",
  email: "julianacopiadora332@gmail.com", // PENDENTE: confirmar e-mail comercial atual
  telefone: "(81) 98309-1209",

  // --- Endereço ---
  endereco: {
    rua: "Rua Afonso Pena, 43",
    bairro: "Boa Vista",
    cidade: "Recife",
    estado: "PE",
    cep: "50050-130",
    referencia: "Próximo à UNICAP",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Jm+COPY+R.+Afonso+Pena+43+Boa+Vista+Recife+PE",
    googleMapsEmbed:
      "https://www.google.com/maps?q=R.+Afonso+Pena,+43+-+Boa+Vista,+Recife+-+PE,+50050-130&output=embed",
  },

  // --- Horário --- grade confirmada pela cliente.
  horario: [
    { dias: "Segunda a Sexta", horas: "06h às 22h" },
    { dias: "Sábado", horas: "06h às 15h" },
    { dias: "Domingo", horas: "09h às 15h" },
  ],

  // --- Redes Sociais ---
  redes: {
    instagram: "https://instagram.com/jmcopy.grafica",
    facebook: "",
    youtube: "",
  },

  // --- SEO ---
  seo: {
    titulo: "JM Copy | Gráfica Rápida e Personalizados em Recife",
    descricao:
      "Gráfica na Boa Vista, Recife, pertinho da UNICAP. Cópias, impressão, encadernação de TCC, cartões de visita e brindes personalizados. Você pensa e a gente realiza!",
    keywords: [
      "gráfica recife",
      "gráfica boa vista recife",
      "cópias perto da unicap",
      "cartão de visita recife",
      "encadernação tcc recife",
      "gráfica rápida recife",
    ],
    ogImage: "/og-image.jpg", // 1200x630px — PENDENTE: gerar e salvar em /public
  },

  // --- Serviços --- serviços principais informados pela cliente
  servicos: [
    {
      titulo: "DTF UV",
      descricao:
        "Impressão DTF UV para personalizar canecas, garrafas, eletrônicos e brindes com cores vivas, textura em relevo e acabamento resistente.",
      icone: "Sticker",
    },
    {
      titulo: "Plotagem",
      descricao:
        "Impressão em grande formato com qualidade e acabamento profissional.",
      icone: "Printer",
    },
    {
      titulo: "Banner",
      descricao:
        "Banners para lojas, eventos e divulgação — prontos com rapidez.",
      icone: "Flag",
    },
    {
      titulo: "Personalizados para Aniversário",
      descricao:
        "Itens e artes personalizadas para deixar a festa de aniversário com a sua cara.",
      icone: "Cake",
    },
    {
      titulo: "Personalizados para Eventos",
      descricao:
        "Brindes e materiais personalizados para eventos, empresas e confraternizações.",
      icone: "Gift",
    },
    {
      titulo: "Impressão Colorida e P&B",
      descricao:
        "Impressão e cópias coloridas ou em preto e branco, em qualquer tiragem.",
      icone: "Copy",
    },
  ],

  // --- Diferenciais ---
  // CNPJ registrado desde 2018; mais de 9 anos de atuação no mercado gráfico.
  diferenciais: [
    { titulo: "Anos de experiência", valor: "9+" },
    { titulo: "Avaliação no Google", valor: "4,7★" },
    { titulo: "Atendimento na semana", valor: "7 dias" },
  ],

  // --- Avaliações (Google) ---
  avaliacoes: {
    nota: 4.7, // confirmado no Google Meu Negócio
    total: 0, // PENDENTE: número total não acessível sem login no GMB — confirmar
    // PENDENTE: substituir os destaques abaixo por avaliações REAIS do Google
    // (nome, nota e texto). Os textos atuais são placeholders.
    destaques: [
      {
        nome: "Avaliação pendente",
        nota: 5,
        texto: "Coletar 3 avaliações reais do Google Meu Negócio com o cliente.",
        data: "2026-05",
      },
      {
        nome: "Avaliação pendente",
        nota: 5,
        texto: "Coletar 3 avaliações reais do Google Meu Negócio com o cliente.",
        data: "2026-05",
      },
      {
        nome: "Avaliação pendente",
        nota: 5,
        texto: "Coletar 3 avaliações reais do Google Meu Negócio com o cliente.",
        data: "2026-05",
      },
    ],
  },

  // --- Galeria / Portfólio ---
  // Imagens selecionadas da análise e copiadas para /public/galeria/
  galeria: [
    { src: "/galeria/01-cartao-visita-dourado.jpg", alt: "Cartões de visita com acabamento dourado" },
    { src: "/galeria/02-encadernacao-capa-dura.jpg", alt: "Encadernação capa dura para TCC" },
    { src: "/galeria/03-cartao-hot-stamping.jpg", alt: "Cartões de visita com hot stamping dourado" },
    { src: "/galeria/04-ecobag-personalizada.jpg", alt: "Ecobags personalizadas para eventos" },
    { src: "/galeria/05-crachas-cordao.jpg", alt: "Crachás personalizados com cordão" },
    { src: "/galeria/06-cracha-personalizado.jpg", alt: "Crachá personalizado com identidade visual" },
    { src: "/galeria/07-caneta-personalizada.jpg", alt: "Canetas personalizadas com gravação a laser" },
    { src: "/galeria/08-marca-texto-papel.jpg", alt: "Marca-texto de papel personalizado" },
    { src: "/galeria/09-mosaico-produtos.jpg", alt: "Mosaico de produtos e serviços da JM Copy" },
  ],

  // --- Analytics --- PENDENTE: preencher após confirmar acessos com o cliente
  googleAnalyticsId: "",
  metaPixelId: "",
};

export type SiteConfig = typeof siteConfig;
