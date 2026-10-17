---
name: Charlimar Rocha
description: Onde técnica encontra transformação · Editorial Clean & Parallax Stage
colors:
  primary: "#d4af37"
  primary-light: "#f5e4a8"
  primary-dark: "#b38b2d"
  slate-stage: "#3a5462"
  panel-black: "#000000"
  clean-bg: "#ffffff"
  clean-subtle: "#f8f7f5"
  clean-text: "#121518"
  clean-secondary: "#58636d"
  clean-muted: "#828e99"
  footer-muted: "#9aa5b1"
  footer-link: "#c4cdd5"
  footer-sub: "#7b8794"
  status-green: "#22c55e"
typography:
  display:
    fontFamily: "'PX Sans', 'Inter', 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 46px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Italiana', 'Marcellus', Georgia, serif"
    fontSize: "clamp(2rem, 3.5vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1.15
  title:
    fontFamily: "'Italiana', 'Marcellus', Georgia, serif"
    fontSize: "1.35rem"
    fontWeight: 400
    lineHeight: 1.3
  subheading:
    fontFamily: "'Italiana', 'Marcellus', Georgia, serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "'Inter', 'Urbanist', -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "'Inter', 'Urbanist', -apple-system, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Roboto Mono', 'PX Mono', monospace"
    fontSize: "0.85rem"
    fontWeight: 500
    letterSpacing: "-0.025em"
  caption:
    fontFamily: "'Roboto Mono', 'PX Mono', monospace"
    fontSize: "0.75rem"
    fontWeight: 500
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.panel-black}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "15px 30px"
  button-primary-hover:
    backgroundColor: "#ffffff"
    textColor: "{colors.panel-black}"
  button-secondary:
    backgroundColor: "{colors.clean-bg}"
    textColor: "{colors.clean-text}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
---

# Design System: Charlimar Rocha

## Overview

**Creative North Star: "Architectural Editorial & Clean Luminescence"**

O sistema de design de Charlimar Rocha integra a vanguarda geométrica de uma primeira dobra cinematográfica (palco Parallax em ardósia, 12 anéis concêntricos matemáticos e tipografia monospaçada e grotesca) a uma experiência limpa, arejada e de altíssimo luxo editorial para a galeria de fotos e consultoria.

A transição entre o palco de entrada e o corpo claro da página transmite imediatismo conceitual e clareza funcional: o visitante é impactado pela escala escultural da arte e, ao rolar, navega com facilidade por transformações reais, filtragem por categorias, visualizador modal interativo e agendamento descomplicado no WhatsApp.

**Key Characteristics:**
- Hero Parallax arquitetural com proporções responsivas (--sc e --u) e 12 anéis de precisão geométrica.
- Galeria de fotos interativa com filtragem dinâmica e Lightbox Modal com navegação entre fotos.
- Paleta limpa e contrastante: ardósia (#3a5462), preto puro (#000000), branco luminoso (#ffffff) e dourado champanhe (#d4af37).
- Tipografia que une o rigor técnico (PX Sans / Inter / Roboto Mono) à nobreza italiana (Italiana / Marcellus).

## Colors

### Primary
- **Champagne Gold** (#d4af37): Acento de excelência e joalheria para badges, detalhes de filtro e realces de luz.
- **Pure Black Panel** (#000000): O fundo dos botões da hero e barra de navegação superior.
- **Slate Blue Stage** (#3a5462): O tom de ardósia característico do palco Parallax de abertura.

### Neutral
- **Pure White** (#ffffff): Fundo das superfícies de galeria e leitura principal.
- **Alabaster Warm Surface** (#f8f7f5): Fundo de suporte para alternância suave de seções.
- **Deep Ink Text** (#121518): Tipografia primária com máximo contraste e conforto óptico.
- **Slate Secondary** (#58636d): Texto de suporte, descrições e legendas.
- **Status Green** (#22c55e): Ponto indicador de disponibilidade em tempo real para agendamento.

### Named Rules
**The Clean Canvas Rule.** As áreas de galeria e catálogo utilizam fundos brancos e off-white para que as tonalidades de cor e nuances de corte das fotos reais brilhem com fidelidade absoluta de salão.

## Typography

**Display Font:** PX Sans / Inter
**Serif Headings:** Italiana / Marcellus
**Mono Metadata:** Roboto Mono / PX Mono

### Hierarchy
- **Display** (400, clamp(2rem, 5vw, 46px), 1): Título monolítico de abertura "PARALLAX".
- **Headline** (400, clamp(2rem, 3.5vw, 2.75rem), 1.15): Títulos de seções na galeria e consultoria.
- **Title** (400, 1.25rem - 1.35rem, 1.3): Títulos de cards da galeria e etapas do método.
- **Subheading** (400, 1.15rem, 1.3): Títulos secundários e acordions.
- **Body** (400, 1rem, 1.6): Parágrafos informativos, especificações e respostas do FAQ.
- **Body Small** (400, 0.95rem, 1.6): Descrições de cartões e previews.
- **Label** (500, max(11px, 14px), -0.025em): Micro-textos monospaçados nos cantos do palco e botões.
- **Caption** (500, 0.75rem, normal): Badges e contadores de galeria.

## Layout

- Palco Parallax de viewport total (100dvh) com escala base 1280x800 e cálculo dinâmico de cobertura (`--sc`) e proporção de interface (`--u`).
- Galeria em faixas horizontais em loop contínuo (duas fileiras em sentidos opostos), com pausa no hover e lightbox ao clique.
- Espaçamentos verticais de 5.5rem entre seções para um ritmo editorial arejado.

## Elevation & Depth

- Profundidade plana e refinada com elevações limpas de sombra suave (`0 4px 20px rgba(0,0,0,0.06)`), sem brilhos fluorescentes ou halos artificiais.
- Modal Lightbox com backdrop em desfoque translúcido (`backdrop-filter: blur(8px)`) e sombra de imersão profunda.

## Shapes

- Raio cirúrgico de 4px para botões e cards de formulário.
- Pílulas perfeitas (9999px) para abas de filtro e indicador flutuante de WhatsApp.

## Components

### Hero Parallax Stage
- Palco cinematográfico com imagem em tela cheia, 12 arcos de elipse SVG e animação de entrada com Web Animations API.

### Galeria Interativa com Filtros & Lightbox
- Abas de filtro instantâneo por categoria (Todas, Loiros, Cortes, Morena Iluminada, O Espaço).
- Modal Lightbox com foto ampliada, dados do serviço (produtos, tempo, especialista) e botão de agendamento personalizado no WhatsApp.

### Seletor de Consultoria
- Seleção de serviço, tamanho de fios e dias, com geração dinâmica do texto de WhatsApp.

## Do's and Don'ts

### Do:
- **Do** preservar todos os 12 arcos SVG da hero em ordem exata.
- **Do** garantir que todo texto funcional permaneça com tamanho mínimo de 11px.
- **Do** manter a resposta rápida e navegação acessível por teclado (Esc, setas) no Lightbox.

### Don't:
- **Don't** utilizar halos coloridos ou glow saturado em caixas.
- **Don't** aplicar gradiente em textos.
- **Don't** remover os atributos aria de acessibilidade nos modais e acordeons.
