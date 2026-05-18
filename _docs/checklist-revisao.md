# Checklist de Revisão — Antes de Mostrar ao Cliente

**Cliente:** _______________  
**Data:** _______________

## Visual e Conteúdo
- [ ] Todos os placeholders foram substituídos (nenhum `___` ou TODO visível)
- [ ] Logo está aparecendo corretamente
- [ ] Cores da marca aplicadas corretamente
- [ ] Todos os textos revisados (sem erros de digitação)
- [ ] Fotos carregando sem erro (sem broken images)
- [ ] Galeria com pelo menos 6 imagens

## Funcionalidades
- [ ] Botão de WhatsApp abre conversa com mensagem pré-preenchida
- [ ] Link "Como chegar" abre o Google Maps corretamente
- [ ] Iframe do mapa carregando
- [ ] Botão flutuante do WhatsApp visível e funcionando
- [ ] Links de redes sociais abrindo correto

## Mobile
- [ ] Testado no celular (Chrome mobile ou DevTools)
- [ ] Hero responsivo (texto legível, botões não cortados)
- [ ] Grade de serviços quebrando corretamente
- [ ] Galeria responsiva
- [ ] Footer sem overflow horizontal

## Performance e SEO
- [ ] Title e meta description preenchidos no siteConfig
- [ ] Schema LocalBusiness preenchido (endereço, telefone)
- [ ] Imagens com alt text
- [ ] OG Image definida (1200x630px em /public/og-image.jpg)
- [ ] Favicon definido em /public/favicon.ico

## Deploy (Vercel)
- [ ] Build sem erros (`npm run build`)
- [ ] Preview da Vercel funcionando
- [ ] Domínio configurado e HTTPS ativo
- [ ] Google Analytics / Meta Pixel ativos (se aplicável)
