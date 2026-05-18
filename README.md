# Landing Page — Scaffold

Projeto base para desenvolvimento de landing pages institucionais para pequenos negócios locais.

## Stack

- **Next.js 15** — App Router
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Lucide Icons**

---

## Como usar este scaffold

### 1. Instalar dependências

```bash
npm install
```

### 2. Preencher o siteConfig

Todo o conteúdo do site vive em um único arquivo:

```
src/config/site.ts
```

Preencha com as informações do cliente antes de qualquer outra coisa.
O agente de IA deve começar por aqui.

### 3. Adicionar assets

| Arquivo | Onde colocar |
|---|---|
| Logo | `/public/logo.png` |
| Hero (banner) | `/public/hero.jpg` |
| OG Image (1200x630) | `/public/og-image.jpg` |
| Favicon | `/public/favicon.ico` |
| Fotos da galeria | `/public/galeria/1.jpg`, `2.jpg`... |

### 4. Ajustar cores

As cores primária e secundária são definidas em `siteConfig.cor`.
Para aplicá-las nos CSS Variables, edite `src/app/globals.css` e substitua
os valores de `--primary` pelo HSL equivalente da cor do cliente.

### 5. Rodar localmente

```bash
npm run dev
```

### 6. Deploy

```bash
# Vercel CLI
npx vercel
```

---

## Estrutura de arquivos

```
src/
  app/
    layout.tsx        ← metadata, fonts, schema LocalBusiness
    page.tsx          ← monta as seções em ordem
    globals.css       ← variáveis CSS (cores, radius)
  config/
    site.ts           ← FONTE DA VERDADE — tudo começa aqui
  components/
    sections/
      Hero.tsx        ← banner principal + CTAs
      Servicos.tsx    ← cards de serviços
      Diferenciais.tsx← números/stats da empresa
      Galeria.tsx     ← grid de fotos
      Avaliacoes.tsx  ← avaliações do Google
      Localizacao.tsx ← mapa + endereço + horário
      Footer.tsx      ← rodapé com redes e contato
    ui/
      WhatsAppFloat.tsx ← botão flutuante fixo
      button.tsx        ← componente shadcn/ui

_docs/
  checklist-kickoff.md   ← o que coletar do cliente antes de começar
  checklist-revisao.md   ← revisar antes de mostrar ao cliente
  checklist-entrega.md   ← encerramento e entrega
```

---

## Seções disponíveis

| Seção | Descrição |
|---|---|
| `Hero` | Banner com slogan, CTA WhatsApp e botão de mapa |
| `Servicos` | Grid de cards com ícone, título e descrição |
| `Diferenciais` | Números destacados (anos, clientes, etc.) |
| `Galeria` | Grid de fotos do portfólio |
| `Avaliacoes` | Cards com avaliações do Google |
| `Localizacao` | Endereço, horário e embed do mapa |
| `Footer` | Contato, redes sociais e CTA WhatsApp |
| `WhatsAppFloat` | Botão flutuante fixo no canto inferior direito |

Para remover uma seção, basta comentar/deletar a linha correspondente em `page.tsx`.

---

## Pipeline do projeto

```
Cliente aprovou orçamento
        ↓
Kickoff — checklist-kickoff.md
        ↓
Preencher src/config/site.ts
        ↓
Adicionar assets em /public
        ↓
Desenvolvimento / ajustes visuais
        ↓
Revisão — checklist-revisao.md
        ↓
Apresentar ao cliente
        ↓
Ajustes da 1ª rodada
        ↓
Aprovação final
        ↓
Deploy (Vercel + domínio)
        ↓
Entrega — checklist-entrega.md
```
