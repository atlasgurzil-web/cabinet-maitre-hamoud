/* ═══════════════════════════════════════════════════════════
   TEMPLATE « SITE IMMERSIF » — content.js
   ► L'UNIQUE FICHIER À RÉÉCRIRE pour produire un nouveau site.
   Renommer en content.js dans le projet cible. La partie
   « injection » en bas de fichier est le moteur de remplissage :
   la copier TELLE QUELLE, ne réécrire que window.SITE_CONTENT.

   Schéma narratif (rôle de conversion de chaque bloc) :
   1. ACCROCHE       — hook : promesse + identité en 3 secondes
   2. POSITIONNEMENT — positioning : ce que je fais, pour qui, où
   3. DÉMARCHE       — manifesto : pourquoi moi (différenciation)
   4. PREUVE         — proof : réalisations (masonry) OU features (bento)
   5. DEVISE         — motto : 3 mots-clés géants + légendes
   6-7. PROCESSUS    — universes : « X en 3 étapes » + visuels posés
   8. PREUVE SOCIALE — testimonial : un client parle
   9. OBJECTIONS     — objections : « Pas de… Juste… »
   10. CONVERSION    — contact : e-mail + réassurance
   ═══════════════════════════════════════════════════════════ */

window.SITE_CONTENT = {

  brand: {
    name: 'Maître Hamoud',
    title: "Cabinet d'Architecture du Grand Maître Hamoud — Villas & Résidences d'Exception",
    description: "Cabinet d'architecture du Grand Maître Hamoud : conception architecturale sur mesure, villas contemporaines, résidences d'exception et réhabilitations patrimoniales, de l'esquisse à la remise des clés.",
    kicker: "CABINET D'ARCHITECTURE DU GRAND MAÎTRE HAMOUD",
    copyright: "© 2026 — CABINET D'ARCHITECTURE DU GRAND MAÎTRE HAMOUD",
    signature: 'BÂTI POUR TRAVERSER LE TEMPS',
    socials: [
      { label: 'INSTAGRAM ↗', url: 'https://www.instagram.com/maitre.hamoud.archi' },
      { label: 'LINKEDIN ↗', url: 'https://www.linkedin.com/company/cabinet-maitre-hamoud' }
    ]
  },

  /* 2 ancres + CTA du header — un mot chacun, CAPS */
  nav: { proof: 'PROJETS', universes: 'MÉTHODE', cta: 'CONTACT' },

  /* 1 · ACCROCHE — « line1 / line2a [image qui naît et devient
     plein écran] line2b ». Total line2a+line2b : court (nowrap). */
  hook: {
    line1: 'Des lieux taillés dans la lumière,',
    line2a: 'pensés pour',
    line2b: 'durer.',
    image: 'images/hero.jpg',
    imageAlt: 'Villa contemporaine en béton brut et verre ouverte sur un miroir d’eau au crépuscule',
    floaters: [
      'images/fl-01.jpg',
      'images/fl-02.jpg',
      'images/fl-03.jpg',
      'images/fl-04.jpg',
      'images/fl-05.jpg',
      'images/fl-06.jpg',
      'images/fl-07.jpg',
      'images/fl-08.jpg',
      'images/fl-09.jpg',
      'images/fl-10.jpg'
    ]
  },

  /* 2 · POSITIONNEMENT — ≤ 42 caractères (affiché nowrap, en blanc
     sur l'image plein écran) */
  positioning: 'Villas sur mesure & lieux d’exception.',

  /* 3 · DÉMARCHE — [[…]] = ce qu'entoure l'ovale dessiné :
     2 à 3 MOTS MAXIMUM, JAMAIS une phrase entière (l'ovale est un tracé
     à la main : au-delà de 3 mots il s'étire et cesse d'être lisible). */
  manifesto: {
    text: 'Le Cabinet du Grand Maître Hamoud dessine des architectures où la matière brute dialogue avec la course du soleil. Chaque volume, chaque portée et chaque détail constructif cherchent [[la juste mesure]] — cet équilibre rare entre audace structurelle et sérénité domestique.'
  },

  /* 4 · PREUVE — layout: 'masonry' (8 photos de réalisations)
     ou 'bento' (4 features illustrées : big, tall, tall, big) */
  proof: {
    layout: 'masonry',
    kicker: 'RÉALISATIONS CHOISIES',
    title: 'Villas, résidences & réhabilitations',
    sub: 'Huit œuvres bâties où la géométrie des volumes rencontre la noblesse des matériaux.',
    meta: 'HUIT LIVRAISONS — 2019 → 2026',
    /* — layout 'masonry' : exactement 8 items — */
    projects: [
      { img: 'images/proj-01.jpg', title: 'Villa Horizon Blanc', meta: 'RÉSIDENCE PRIVÉE — 2025' },
      { img: 'images/proj-02.jpg', title: 'Pavillon des Cèdres', meta: 'VILLA CONTEMPORAINE — 2024' },
      { img: 'images/proj-03.jpg', title: 'Cour Minérale', meta: 'RÉHABILITATION PATRIMONIALE — 2025' },
      { img: 'images/proj-04.jpg', title: 'Maison en Porte-à-Faux', meta: 'ARCHITECTURE SUR MESURE — 2023' },
      { img: 'images/proj-05.jpg', title: 'Palais d’Ocre & Verre', meta: 'RÉSIDENCE D’EXCEPTION — 2024' },
      { img: 'images/proj-06.jpg', title: 'Galerie Monolithe', meta: 'ESPACE CULTUREL PRIVÉ — 2023' },
      { img: 'images/proj-07.jpg', title: 'Villa Belvédère', meta: 'VILLA BIOCLIMATIQUE — 2025' },
      { img: 'images/proj-08.jpg', title: 'Demeure du Patio', meta: 'RESTAURATION HISTORIQUE — 2022' }
    ],
    features: []
  },

  /* 5 · DEVISE — 3 mots (train horizontal scrubé), hint d'une ligne */
  motto: {
    kicker: 'CE QUI GUIDE CHAQUE TRAIT',
    words: [
      { word: 'Matière', hint: 'Le béton banché, la pierre de taille et le bois massif vieillissent avec noblesse.' },
      { word: 'Lumière', hint: 'Cadrer le zénith et sculpter l’ombre au fil des saisons.' },
      { word: 'Mesure', hint: 'La justesse d’une proportion qui traverse les décennies sans vieillir.' }
    ]
  },

  /* 6-7 · PROCESSUS — « introA introB [visuel] introC » puis les étapes.
     Scène 100 % TYPOGRAPHIQUE : compteur géant, aucune image.
     SEULE `image` est utilisée — c'est le visuel du zoom d'intro,
     1800×1200 (3:2), celui que le rideau de lames vient couper. */
  universes: {
    introA: 'Une',
    introB: 'œuvre,',
    introC: '3 étapes.',
    cta: 'Confier votre projet →',
    image: 'images/process.jpg',
    items: [
      { name: 'Esquisse & Volumétrie', meta: 'ÉTAPE — 01', desc: 'Immersion sur le site, étude d’ensoleillement et premiers tracés spatiaux pour révéler le potentiel caché du terrain ou du bâti existant.' },
      { name: 'Permis & Ingénierie', meta: 'ÉTAPE — 02', desc: 'Modélisation BIM intégrale, sélection des matériaux au millimètre, dépôt administratif et chiffrage rigoureux par corps d’état.' },
      { name: 'Chantier & Remise des clés', meta: 'ÉTAPE — 03', desc: 'Direction d’exécution hebdomadaire avec nos artisans compagnons jusqu’aux finitions sur mesure et à la réception définitive.' }
    ]
  },

  /* 8 · PREUVE SOCIALE — un avis client, court et crédible. */
  testimonial: {
    kicker: 'VILLA CONTEMPORAINE & PISCINE MIROIR — 480 M²',
    figure: '+42',
    unit: 'm²',
    quote: 'Le Grand Maître Hamoud a su lire notre terrain escarpé là où tout le monde voyait une contrainte. La maison capte la lumière du matin au soir et le chantier a été tenu au jour près, sans aucun dépassement.',
    author: 'KARIM & LEÏLA B. — MAÎTRES D’OUVRAGE PRIVÉS'
  },

  /* 9 · OBJECTIONS — 3 freins + la chute (pill = mot entouré) */
  objections: {
    items: ['Pas de plans standardisés.', 'Pas de sous-traitance opaque.', 'Pas de dérive budgétaire.'],
    finale: 'Juste votre lieu,',
    pill: 'bâti.'
  },

  /* 10 · CONVERSION */
  contact: {
    kicker: 'UN TERRAIN, UNE DEMEURE, UNE AMBITION ?',
    email: 'cabinet@maitre-hamoud-archi.com',
    reassurance: 'PREMIER ENTRETIEN D’ORIENTATION SOUS 48 H — CONFIDENTIALITÉ ABSOLUE'
  },

  /* traînée sous la souris (finale) — 20 visuels, petits formats mixtes */
  trail: [
    'images/trail-01.jpg', 'images/trail-02.jpg',
    'images/trail-03.jpg', 'images/trail-04.jpg',
    'images/trail-05.jpg', 'images/trail-06.jpg',
    'images/trail-07.jpg', 'images/trail-08.jpg',
    'images/trail-09.jpg', 'images/trail-10.jpg',
    'images/trail-11.jpg', 'images/trail-12.jpg',
    'images/trail-13.jpg', 'images/trail-14.jpg',
    'images/trail-15.jpg', 'images/trail-16.jpg',
    'images/trail-17.jpg', 'images/trail-18.jpg',
    'images/trail-19.jpg', 'images/trail-20.jpg'
  ]
};

/* ═══════════════════════════════════════════════════════════
   INJECTION — NE PAS MODIFIER (remplit le DOM avant app.js)
   ═══════════════════════════════════════════════════════════ */
(() => {
  const C = window.SITE_CONTENT;
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const set = (sel, txt) => { const el = $(sel); if (el) el.textContent = txt; };

  document.title = C.brand.title;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content', C.brand.description);

  // chrome
  set('.loader-wordmark', C.brand.name);
  set('.dock-wordmark', C.brand.name);
  set('.dock-link[href="#travaux"]', C.nav.proof);
  set('.dock-link[href="#explorer"]', C.nav.universes);
  set('.dock-cta', C.nav.cta);

  // 1 · accroche
  set('#heroKicker', C.brand.kicker);
  set('#heroLine1', C.hook.line1);
  const hls = $$('#heroLine2 .hl');
  if (hls.length === 2) { hls[0].textContent = C.hook.line2a; hls[1].textContent = C.hook.line2b; }
  const g1 = $('#grow1 img');
  if (g1) { g1.src = C.hook.image; g1.alt = C.hook.imageAlt; }
  $$('.floaters .fl img').forEach((img, i) => { if (C.hook.floaters[i]) img.src = C.hook.floaters[i]; });

  // 2 · positionnement (un span par mot)
  const intro = $('#spotIntro');
  if (intro) intro.innerHTML = C.positioning.split(' ').map((w) => `<span>${w}</span>`).join(' ');

  // 3 · démarche
  const fill = $('#fillText');
  if (fill) {
    fill.innerHTML = C.manifesto.text.replace(
      /\[\[(.+?)\]\]/,
      '<span class="boxed" id="boxedPhrase">$1<svg class="box-svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path id="boxPath" d="M50,6 C88,4 98,22 97,50 C96,82 76,96 49,95 C16,94 3,76 4,48 C5,18 20,7 50,6 Z"/></svg></span>'
    );
  }

  // 4 · preuve : masonry (8 photos) ou bento (4 features big/tall/tall/big)
  const head = $$('.coll-head > *');
  if (head.length === 4) {
    head[0].textContent = C.proof.kicker;
    head[1].textContent = C.proof.title;
    head[2].textContent = C.proof.sub;
    head[3].textContent = C.proof.meta;
  }
  const grid = $('#collGrid');
  if (grid && C.proof.layout === 'bento') {
    grid.className = 'bento-grid';
    grid.innerHTML = C.proof.features.map((f) =>
      `<figure class="card${f.size ? ' b-' + f.size : ''}"><div class="card-img"><img src="${f.illu}" alt="${f.title}"></div><figcaption>${f.title}<span class="mono">${f.meta}</span></figcaption></figure>`
    ).join('');
  } else if (grid) {
    grid.className = 'coll-grid';
    const SPEEDS = [-0.05, 0.06, -0.028, 0.085];
    grid.innerHTML = SPEEDS.map((s, ci) =>
      `<div class="col" data-pspeed="${s}">` +
      C.proof.projects.slice(ci * 2, ci * 2 + 2).map((p) =>
        `<figure class="card"><div class="card-img"><img src="${p.img}" alt="${p.title} — ${p.meta}"></div><figcaption>${p.title}<span class="mono">${p.meta}</span></figcaption></figure>`
      ).join('') + '</div>'
    ).join('');
  }

  // 5 · devise (train de mots-clés)
  set('#mottoKicker', C.motto.kicker);
  const mtrack = $('#mottoTrack');
  if (mtrack) mtrack.innerHTML = C.motto.words.map((w) => `<span class="mw">${w.word}</span>`).join('');

  // 6-7 · processus immersif (visuels posés un à un)
  set('#nw1', C.universes.introA);
  set('#nw2', C.universes.introB);
  set('#nw3', C.universes.introC);
  const g2 = $('#grow2 img');
  if (g2) g2.src = C.universes.image || (C.universes.items[0] || {}).img || g2.src;
  const psteps = $('#psteps');
  if (psteps) {
    psteps.innerHTML = C.universes.items.map((u) =>
      `<div class="pstep"><span class="pstep-meta mono ash">${u.meta}</span><h3>${u.name}</h3><p>${u.desc || ''}</p></div>`
    ).join('');
  }
  const sCta = $('#stepsCtaLink');
  if (sCta) sCta.childNodes[0].textContent = C.universes.cta;

  // 8 · preuve sociale — le chiffre qui frappe
  set('#figKicker', C.testimonial.kicker || '');
  const figM = String(C.testimonial.figure || '').trim().match(/^([^\d.,+-]*[+\u2212-]?)\s*(-?[\d.,]+)/);
  set('#figPre', figM ? figM[1] : '');
  set('#figVal', figM ? figM[2] : '');
  set('#figUnit', C.testimonial.unit || '');
  set('#quoteText', C.testimonial.quote);
  set('#quoteAuthor', C.testimonial.author);

  // 9 · objections
  C.objections.items.forEach((t, i) => set('#fs' + (i + 1), t));
  const fs4 = $('#fs4');
  if (fs4) {
    fs4.innerHTML = `${C.objections.finale} <span class="pill" id="pillPhrase">${C.objections.pill}<svg class="pill-svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path id="pillPath" d="M50,6 C88,4 98,22 97,50 C96,82 76,96 49,95 C16,94 3,76 4,48 C5,18 20,7 50,6 Z"/></svg></span>`;
  }
  $$('#trail img').forEach((img, i) => { img.src = C.trail[i % C.trail.length]; });

  // 10 · conversion
  set('.footer-kicker', C.contact.kicker);
  const mail = $('.footer-mail');
  if (mail) { mail.href = 'mailto:' + C.contact.email; mail.querySelector('.footer-mail-text').textContent = C.contact.email; }
  set('.footer-reassurance', C.contact.reassurance);
  const fname = $('#footerName');
  if (fname) { fname.textContent = C.brand.name; fname.setAttribute('aria-label', C.brand.name); }
  const bottom = $$('.footer-bottom > p');
  if (bottom.length === 3) {
    bottom[0].textContent = C.brand.copyright;
    bottom[1].innerHTML = C.brand.socials.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`).join('&nbsp;&nbsp;&nbsp;');
    bottom[2].textContent = C.brand.signature;
  }
})();
