/**
 * CHARLIMAR ROCHA — EDITORIAL GALLERY ENGINE
 */

document.addEventListener('DOMContentLoaded', () => {
  initGalleryMarquee();
  initGalleryFilter();
  initLightbox();
  initConsultationSelector();
  initCleanFaq();
});

const galleryItemsData = [
  {
    title: "Blonde Champagne Glow",
    category: "loiros",
    categoryLabel: "Loiros & Blondes",
    src: "assets/blonde.jpg",
    alt: "Loiro Champagne com Ondas Luminosas por Charlimar Rocha",
    desc: "Clareamento gradual e personalizado sem agressão à fibra capilar. Mantém o balanço e a elasticidade natural dos fios com luminosidade vibrante.",
    treatment: "Sebastian Penetraitt & Wella Blondorplex"
  },
  {
    title: "Camadas em Movimento",
    category: "cortes",
    categoryLabel: "Cortes Visagistas",
    src: "assets/corte.jpg",
    alt: "Corte Visagista em Camadas Fluidas por Charlimar Rocha",
    desc: "Corte estruturado para trazer volume nos pontos certos e leveza ao contorno do rosto. Prático para estilizar em casa com naturalidade.",
    treatment: "Visagismo Consultivo & Finalização Texturizada"
  },
  {
    title: "Platinum Ice Radiance",
    category: "loiros",
    categoryLabel: "Loiros & Blondes",
    src: "assets/platinum.jpg",
    alt: "Platinum Ice Blonde com Textura de Seda por Charlimar Rocha",
    desc: "Platinado de alta precisão com fundo frio uniforme. Cuidado extremo para preservar a integridade estrutural e o toque sedoso dos fios.",
    treatment: "Nutrição Lipídica & Proteção Anti-Quebra"
  },
  {
    title: "Iluminação Avelã & Mel",
    category: "morena",
    categoryLabel: "Morena Iluminada",
    src: "assets/morena.jpg",
    alt: "Morena Iluminada em Tons Avelã e Mel por Charlimar Rocha",
    desc: "Contraste sutil e elegante ideal para quem deseja luminosidade mantendo a profundidade e a praticidade da raiz natural.",
    treatment: "Tonalização Quente & Brilho Espelhado"
  },
  {
    title: "Charlimar Rocha no Atelier",
    category: "cortes",
    categoryLabel: "A Especialista",
    src: "assets/charlimar.jpg",
    alt: "Charlimar Rocha no Atelier Spetacollare Sul",
    desc: "Com 24 anos de dedicação em Fortaleza, cada atendimento é conduzido de forma individualizada com foco em transformar beleza em confiança.",
    treatment: "Atendimento 1 a 1 com Hora Marcada"
  },
  {
    title: "Atelier Spetacollare Sul",
    category: "espaco",
    categoryLabel: "O Espaço",
    src: "assets/salao.jpg",
    alt: "O Salão Spetacollare Sul em Fortaleza",
    desc: "Estrutura moderna, ambiente climatizado, espelhos de corpo inteiro com iluminação planejada, estacionamento privativo e cafés especiais.",
    treatment: "Fortaleza · Ceará"
  },
  {
    title: "Presença no Atelier",
    category: "cortes",
    categoryLabel: "A Especialista",
    src: "assets/charlimar1.jpg",
    alt: "Charlimar Rocha em atendimento no Spetacollare Sul",
    desc: "Atendimento exclusivo, sem interrupções, com leitura visagista do rosto e da fibra antes de qualquer corte ou química.",
    treatment: "Hora marcada · Spetacollare Sul"
  },
  {
    title: "Olhar Editorial",
    category: "cortes",
    categoryLabel: "Cortes Visagistas",
    src: "assets/charlimar2.jpg",
    alt: "Retrato editorial de Charlimar Rocha",
    desc: "A mesma precisão que aparece nas fotos: corte com movimento, acabamento de salão e presença que transmite confiança.",
    treatment: "Visagismo & Finalização Autoral"
  }
];

// Opcional: Adiciona um leve efeito de escala ao rolar
window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.method-clean-card');

  cards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    // Se o card de cima estiver sobrepondo
    if (rect.top <= 130 && index < cards.length - 1) {
      card.style.transform = 'scale(0.95)';
      card.style.filter = 'brightness(0.95)';
    } else {
      card.style.transform = 'scale(1)';
      card.style.filter = 'brightness(1)';
    }
  });
});

let currentFilteredIndexes = [0, 1, 2, 3, 4, 5, 6, 7];
let activeLightboxIndex = 0;

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function originalCards(track) {
  return [...track.querySelectorAll('.gallery-card:not([data-clone])')];
}

function duplicateTrack(track) {
  track.querySelectorAll('[data-clone]').forEach((node) => node.remove());
  const originals = originalCards(track).filter((card) => card.style.display !== 'none');
  const copies = originals.length < 4 ? 3 : 1;

  for (let i = 0; i < copies; i += 1) {
    originals.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute('data-clone', 'true');
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });
  }
}

function fillReverseTrack() {
  const source = document.getElementById('gallery-track-a');
  const reverse = document.getElementById('gallery-track-b');
  if (!source || !reverse) return;

  reverse.innerHTML = '';
  const visible = originalCards(source).filter((card) => card.style.display !== 'none');
  const reversed = [...visible].reverse();

  reversed.forEach((card) => {
    const copy = card.cloneNode(true);
    copy.removeAttribute('data-clone');
    reverse.appendChild(copy);
  });

  duplicateTrack(reverse);
}

function initGalleryMarquee() {
  const forward = document.getElementById('gallery-track-a');
  if (!forward) return;
  duplicateTrack(forward);
  fillReverseTrack();
}

function applyCategory(selectedCategory) {
  const forward = document.getElementById('gallery-track-a');
  const cards = originalCards(forward);
  currentFilteredIndexes = [];

  cards.forEach((card) => {
    const cardCat = card.getAttribute('data-category');
    const globalIdx = parseInt(card.getAttribute('data-index'), 10);
    const match = selectedCategory === 'all' || cardCat === selectedCategory;
    card.style.display = match ? '' : 'none';
    if (match) currentFilteredIndexes.push(globalIdx);
  });

  duplicateTrack(forward);
  fillReverseTrack();
}

function initGalleryFilter() {
  const filterTabs = document.querySelectorAll('.filter-tab');

  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      filterTabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      applyCategory(tab.getAttribute('data-category'));
    });
  });
}

function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close');
  const backdrop = document.getElementById('lightbox-backdrop');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const ribbon = document.getElementById('gallery-ribbon');

  const imgEl = document.getElementById('lightbox-img');
  const tagEl = document.getElementById('lightbox-tag');
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-desc');
  const treatmentEl = document.getElementById('lightbox-treatment');
  const counterEl = document.getElementById('lightbox-counter');
  const ctaBtn = document.getElementById('lightbox-whatsapp-cta');

  function openLightbox(index) {
    activeLightboxIndex = index;
    renderLightboxData();
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    ribbon?.classList.add('is-paused');
  }

  function closeLightbox() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    ribbon?.classList.remove('is-paused');
  }

  function renderLightboxData() {
    const dataIndex = currentFilteredIndexes[activeLightboxIndex];
    const data = galleryItemsData[dataIndex];
    if (!data) return;

    imgEl.src = data.src;
    imgEl.alt = data.alt;
    tagEl.textContent = data.categoryLabel;
    titleEl.textContent = data.title;
    descEl.textContent = data.desc;
    treatmentEl.textContent = data.treatment;
    counterEl.textContent = `${activeLightboxIndex + 1} / ${currentFilteredIndexes.length}`;

    const text = `Olá Charlimar! Vi a foto do estilo "${data.title}" na sua galeria e gostaria de agendar uma avaliação no Spetacollare Sul.`;
    ctaBtn.href = `https://wa.me/5585988424512?text=${encodeURIComponent(text)}`;
  }

  function nextPhoto() {
    activeLightboxIndex = (activeLightboxIndex + 1) % currentFilteredIndexes.length;
    renderLightboxData();
  }

  function prevPhoto() {
    activeLightboxIndex = (activeLightboxIndex - 1 + currentFilteredIndexes.length) % currentFilteredIndexes.length;
    renderLightboxData();
  }

  document.addEventListener('click', (event) => {
    const card = event.target.closest('.gallery-card');
    if (!card) return;
    const globalIdx = parseInt(card.getAttribute('data-index'), 10);
    const filteredPos = currentFilteredIndexes.indexOf(globalIdx);
    if (filteredPos !== -1) {
      openLightbox(filteredPos);
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', nextPhoto);
  if (prevBtn) prevBtn.addEventListener('click', prevPhoto);

  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextPhoto();
    if (e.key === 'ArrowLeft') prevPhoto();
  });

  if (prefersReducedMotion()) {
    ribbon?.classList.add('is-paused');
  }
}

function initConsultationSelector() {
  const serviceInputs = document.querySelectorAll('input[name="service"]');
  const lengthInputs = document.querySelectorAll('input[name="length"]');
  const dayInputs = document.querySelectorAll('input[name="day"]');
  const previewBox = document.getElementById('message-preview-text');
  const submitBtn = document.getElementById('dynamic-whatsapp-submit');
  const basePhoneNumber = '5585988424512';

  function updateWhatsAppMessage() {
    const selectedService = document.querySelector('input[name="service"]:checked')?.value || 'Loiro de Alta Definição';
    const selectedLength = document.querySelector('input[name="length"]:checked')?.value || 'Curto / Chanel';
    const selectedDay = document.querySelector('input[name="day"]:checked')?.value || 'Durante a semana (Terça a Quinta)';
    const textMessage = `Olá Charlimar! Gostaria de agendar uma consultoria exclusiva para ${selectedService}. Meu cabelo é ${selectedLength} e tenho preferência por atendimento ${selectedDay} no Spetacollare Sul.`;

    if (previewBox) {
      previewBox.textContent = `"${textMessage}"`;
    }
    if (submitBtn) {
      submitBtn.href = `https://wa.me/${basePhoneNumber}?text=${encodeURIComponent(textMessage)}`;
    }
  }

  [...serviceInputs, ...lengthInputs, ...dayInputs].forEach((input) => {
    input.addEventListener('change', updateWhatsAppMessage);
  });

  updateWhatsAppMessage();
}

function initCleanFaq() {
  const btns = document.querySelectorAll('.clean-faq-btn');

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const panelId = btn.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);
      const parent = btn.closest('.clean-accordion-item');

      btns.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          const otherId = otherBtn.getAttribute('aria-controls');
          const otherPanel = document.getElementById(otherId);
          if (otherPanel) otherPanel.hidden = true;
          otherBtn.closest('.clean-accordion-item')?.classList.remove('active');
        }
      });

      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        if (panel) panel.hidden = true;
        parent?.classList.remove('active');
      } else {
        btn.setAttribute('aria-expanded', 'true');
        if (panel) panel.hidden = false;
        parent?.classList.add('active');
      }
    });
  });
}
