document.getElementById('year').textContent = new Date().getFullYear();

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ==========================================================================
   i18n — English / Spanish, zero dependencies
   ========================================================================== */
const translations = {
  en: {
    'nav.about': 'About',
    'nav.work': 'Work',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.toggleAria': 'Toggle menu',
    'lang.toggleAria': 'Switch to Spanish',
    'hero.eyebrow': 'Hi, I’m Magaly —',
    'hero.line1': 'Journalist.',
    'hero.line2': 'Storyteller.',
    'hero.line3': 'AI Media Creator.',
    'hero.sub': 'Fifteen years of newsrooms, edit bays and field notes — now channelled into generative video and stories that move between Peru, Cyprus and Hungary.',
    'hero.cta1': 'Let’s Collaborate',
    'hero.cta2': 'See the work ↓',
    'hero.scroll': 'Scroll',
    'about.kicker': 'About',
    'about.title': 'Three places, one thread.',
    'about.statLabel': 'Years in newsrooms,<br>edit bays &amp; the field',
    'about.placePeru': 'Peru',
    'about.placeCyprus': 'Cyprus',
    'about.placeHungary': 'Hungary',
    'about.lead': 'I’m Magaly, a video editor and travel content creator from Peru, based between Cyprus and Hungary. I turn raw footage — mine and my clients’ — into polished, scroll-stopping short-form content, enhanced with AI tools where it adds real value.',
    'about.body': 'I work with creators who have footage but no time to edit, and with small businesses and travel brands who need content that actually looks professional. Fifteen-plus years in newsrooms, edit bays, and international content teams sit behind every edit — alongside <strong>Understory</strong>, my independent environmental storytelling podcast named for the forest layer that grows quietly beneath the canopy, uncovering the stories that often go untold.',
    'about.italic': 'Communication, video production and digital storytelling — that’s the thread. Everything else is just the place I’m telling it from.',
    'about.toolJournalism': 'Multimedia Journalism',
    'work.kicker': 'Selected Work',
    'work.title': 'Stories, in motion.',
    'work.sub': 'A cross-section of journalism, place-storytelling and AI-driven production.',
    'work.card1.title': 'The Understory Podcast',
    'work.card1.body': 'Independent environmental storytelling — the layer beneath the canopy, and the stories that don’t make the highlight reel.',
    'work.card2.title': 'AI-Generated Video Work',
    'work.card2.body': 'Generative video with Higgsfield, Kling and Google Veo, layered onto a classic Premiere Pro finish.',
    'work.card3.title': 'Europe: Places You Must Visit',
    'work.card3.body': 'A running travel series — scroll-stopping short-form content from two adopted homes and everywhere in between.',
    'work.card4.genTitle': 'Peru: Places & Projects',
    'work.card4.genSub': 'Where I’m from — the places and projects that shaped the work.',
    'work.card4.title': 'Peru: Places & Projects',
    'work.card4.body': 'Home ground — the landscapes, communities and projects across Peru that shaped how I tell stories.',
    'work.card5.title': 'Articles on Medium',
    'work.card5.body': 'Climate, culture, and longer-form stories worth slowing down for — where the newsroom instinct still lives.',
    'mediakit.kicker': 'Media Kit',
    'mediakit.title': 'What I bring to the table.',
    'mediakit.stat1': 'Years of experience',
    'mediakit.stat2': 'Audience growth, independent practice',
    'mediakit.stat3': 'Viewers reached, environmental storytelling',
    'mediakit.pricingKicker': 'Services & Pricing',
    'mediakit.pricingTitle': 'Pick a starting point — every project is scoped to fit.',
    'mediakit.cat1.title': 'Web Design & Development',
    'mediakit.cat1.item1.title': 'Sleek Landing Page',
    'mediakit.cat1.item1.body': 'A high-converting, responsive single-page website. Ideal for portfolios, links-in-bio, or launching a new service.',
    'mediakit.cat1.item2.title': 'Full Multi-Page Website',
    'mediakit.cat1.item2.body': 'A comprehensive 3–5 page website (Home, About, Services, Contact). Beautifully designed, optimised for mobile, and built to convert visitors into clients.',
    'mediakit.cat2.title': 'Video Editing & Production',
    'mediakit.cat2.item1.title': 'Single Reel Edit',
    'mediakit.cat2.item1.body': '15–60 seconds, clean cuts, engaging captions, trending audio, and basic colour grading.',
    'mediakit.cat2.item2.title': 'Reel Bundle (×4)',
    'mediakit.cat2.item2.body': '4 dynamic edits created from a single footage batch. Perfect for a month of consistent posting.',
    'mediakit.cat2.item3.title': 'AI-Enhanced Edit',
    'mediakit.cat2.item3.body': 'Standard edit upgraded with AI b-roll, advanced transitions, or AI voiceover.',
    'mediakit.cat2.item4.title': 'UGC-style Brand Video',
    'mediakit.cat2.item4.body': 'Talking-head or organic demo-style video designed specifically for brand ad campaigns.',
    'mediakit.cat3.title': 'Photography Services',
    'mediakit.cat3.item1.title': 'Brand & Lifestyle Session',
    'mediakit.cat3.item1.body': 'High-end portraits, lifestyle shots, and behind-the-scenes images for your website and social grids.',
    'mediakit.cat3.item2.title': 'Product & UGC Photography',
    'mediakit.cat3.item2.body': 'Clean, aesthetic product shots or authentic, user-generated-style images for ads and social proof.',
    'price.from': 'From',
    'cta.whatsapp': 'Chat on WhatsApp',
    'cta.email': 'Or send an email →',
    'contact.kicker': 'Contact',
    'contact.title': 'Let’s make something.',
    'contact.sub': 'Have a project, a campaign, or a story that needs telling? I’d love to hear about it.',
    'contact.location': 'Based between Nicosia & Budapest — working worldwide',
    'contact.quote': '“Every place has a postcard version. I’m interested in everything else.”',
    'contact.form.name': 'Name',
    'contact.form.namePh': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.emailPh': 'you@email.com',
    'contact.form.message': 'Message',
    'contact.form.messagePh': 'Tell me about your project…',
    'contact.form.submit': 'Send Message',
    'footer.tagline': 'Journalist · Storyteller · AI Media Creator.',
    'footer.privacy': 'Privacy Policy',
    'footer.cookieSettings': 'Cookie Settings',
    'fab.backToTop': 'Back to top',
    'fab.whatsapp': 'Chat with Magaly on WhatsApp',
    'form.invalid': 'Please fill in every field with a valid email.',
    'form.sending': 'Sending…',
    'form.success': 'Thanks, {name}! Your message has been sent.',
    'form.error': 'Something went wrong — please try again or email itismagaly@gmail.com directly.',
    'cookies.text': 'I use cookies to understand how visitors use this site (Google Analytics). You can accept or decline — see the <a href="/privacy.html">Privacy Policy</a> for details.',
    'cookies.accept': 'Accept',
    'cookies.reject': 'Decline',
    'newsletter.kicker': 'Stay in the loop',
    'newsletter.title': 'Stories, before anyone else sees them.',
    'newsletter.sub': 'Behind-the-scenes from Understory, AI video experiments, and the occasional slot opening up for new projects.',
    'newsletter.label': 'Email address',
    'newsletter.placeholder': 'you@email.com',
    'newsletter.submit': 'Subscribe',
    'newsletter.note': 'No spam, ever — unsubscribe anytime.'
  },
  es: {
    'nav.about': 'Sobre mí',
    'nav.work': 'Trabajo',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'nav.toggleAria': 'Alternar menú',
    'lang.toggleAria': 'Switch to English',
    'hero.eyebrow': 'Hola, soy Magaly —',
    'hero.line1': 'Periodista.',
    'hero.line2': 'Narradora.',
    'hero.line3': 'Creadora de Medios con IA.',
    'hero.sub': 'Quince años entre redacciones, salas de edición y notas de campo — ahora canalizados en video generativo e historias que se mueven entre Perú, Chipre y Hungría.',
    'hero.cta1': 'Colaboremos',
    'hero.cta2': 'Ver el trabajo ↓',
    'hero.scroll': 'Desliza',
    'about.kicker': 'Sobre mí',
    'about.title': 'Tres lugares, un mismo hilo.',
    'about.statLabel': 'Años en redacciones,<br>salas de edición y el terreno',
    'about.placePeru': 'Perú',
    'about.placeCyprus': 'Chipre',
    'about.placeHungary': 'Hungría',
    'about.lead': 'Soy Magaly, editora de video y creadora de contenido de viajes de Perú, radicada entre Chipre y Hungría. Convierto material en bruto — mío y de mis clientes — en contenido corto, pulido y que atrapa, potenciado con herramientas de IA cuando realmente aporta valor.',
    'about.body': 'Trabajo con creadores que tienen material pero no tiempo para editar, y con pequeños negocios y marcas de viaje que necesitan contenido que realmente luzca profesional. Más de quince años en redacciones, salas de edición y equipos internacionales de contenido respaldan cada edición — junto a <strong>Understory</strong>, mi podcast independiente de narrativa ambiental, nombrado por la capa del bosque que crece en silencio bajo el dosel, revelando las historias que muchas veces no se cuentan.',
    'about.italic': 'Comunicación, producción de video y narrativa digital — ese es el hilo. Todo lo demás es solo el lugar desde el que lo cuento.',
    'about.toolJournalism': 'Periodismo Multimedia',
    'work.kicker': 'Trabajo Seleccionado',
    'work.title': 'Historias en movimiento.',
    'work.sub': 'Una muestra de periodismo, narrativa de lugares y producción impulsada por IA.',
    'work.card1.title': 'The Understory Podcast',
    'work.card1.body': 'Narrativa ambiental independiente — la capa bajo el dosel, y las historias que no llegan al resumen destacado.',
    'work.card2.title': 'Video Generado con IA',
    'work.card2.body': 'Video generativo con Higgsfield, Kling y Google Veo, integrado con un acabado clásico en Premiere Pro.',
    'work.card3.title': 'Europa: Lugares que Debes Visitar',
    'work.card3.body': 'Una serie de viajes en curso — contenido corto que atrapa desde dos hogares adoptivos y todo lo que hay entre medio.',
    'work.card4.genTitle': 'Perú: Lugares & Proyectos',
    'work.card4.genSub': 'De donde vengo — los lugares y proyectos que dieron forma al trabajo.',
    'work.card4.title': 'Perú: Lugares & Proyectos',
    'work.card4.body': 'Terreno propio — los paisajes, comunidades y proyectos en todo el Perú que moldearon mi forma de contar historias.',
    'work.card5.title': 'Artículos en Medium',
    'work.card5.body': 'Clima, cultura e historias más extensas que vale la pena leer con calma — donde el instinto de redacción sigue vivo.',
    'mediakit.kicker': 'Kit de Prensa',
    'mediakit.title': 'Lo que aporto.',
    'mediakit.stat1': 'Años de experiencia',
    'mediakit.stat2': 'Crecimiento de audiencia, práctica independiente',
    'mediakit.stat3': 'Espectadores alcanzados, narrativa ambiental',
    'mediakit.pricingKicker': 'Servicios & Precios',
    'mediakit.pricingTitle': 'Elige un punto de partida — cada proyecto se ajusta a tu medida.',
    'mediakit.cat1.title': 'Diseño & Desarrollo Web',
    'mediakit.cat1.item1.title': 'Landing Page Elegante',
    'mediakit.cat1.item1.body': 'Un sitio web de una sola página, responsivo y de alta conversión. Ideal para portafolios, links-in-bio o el lanzamiento de un nuevo servicio.',
    'mediakit.cat1.item2.title': 'Sitio Web Multipágina Completo',
    'mediakit.cat1.item2.body': 'Un sitio web completo de 3 a 5 páginas (Inicio, Sobre mí, Servicios, Contacto). Bellamente diseñado, optimizado para móvil y creado para convertir visitantes en clientes.',
    'mediakit.cat2.title': 'Edición & Producción de Video',
    'mediakit.cat2.item1.title': 'Edición de un Reel',
    'mediakit.cat2.item1.body': '15 a 60 segundos, cortes limpios, subtítulos atractivos, audio en tendencia y corrección de color básica.',
    'mediakit.cat2.item2.title': 'Paquete de Reels (×4)',
    'mediakit.cat2.item2.body': '4 ediciones dinámicas creadas a partir de un solo lote de material. Perfecto para un mes de publicaciones constantes.',
    'mediakit.cat2.item3.title': 'Edición Mejorada con IA',
    'mediakit.cat2.item3.body': 'Edición estándar mejorada con b-roll de IA, transiciones avanzadas o voz en off generada por IA.',
    'mediakit.cat2.item4.title': 'Video de Marca estilo UGC',
    'mediakit.cat2.item4.body': 'Video de tipo talking-head o demo orgánico, diseñado específicamente para campañas publicitarias de marca.',
    'mediakit.cat3.title': 'Servicios de Fotografía',
    'mediakit.cat3.item1.title': 'Sesión de Marca y Estilo de Vida',
    'mediakit.cat3.item1.body': 'Retratos de alta gama, fotos de estilo de vida e imágenes detrás de cámaras para tu sitio web y redes sociales.',
    'mediakit.cat3.item2.title': 'Fotografía de Producto y UGC',
    'mediakit.cat3.item2.body': 'Fotos de producto limpias y estéticas, o imágenes auténticas estilo contenido generado por usuarios para anuncios y prueba social.',
    'price.from': 'Desde',
    'cta.whatsapp': 'Chatea por WhatsApp',
    'cta.email': 'O envía un correo →',
    'contact.kicker': 'Contacto',
    'contact.title': 'Hagamos algo juntos.',
    'contact.sub': '¿Tienes un proyecto, una campaña o una historia que contar? Me encantaría escucharla.',
    'contact.location': 'Con base entre Nicosia & Budapest — trabajando en todo el mundo',
    'contact.quote': '“Cada lugar tiene su versión de postal. A mí me interesa todo lo demás.”',
    'contact.form.name': 'Nombre',
    'contact.form.namePh': 'Tu nombre',
    'contact.form.email': 'Correo electrónico',
    'contact.form.emailPh': 'tu@correo.com',
    'contact.form.message': 'Mensaje',
    'contact.form.messagePh': 'Cuéntame sobre tu proyecto…',
    'contact.form.submit': 'Enviar Mensaje',
    'footer.tagline': 'Periodista · Narradora · Creadora de Medios con IA.',
    'footer.privacy': 'Política de Privacidad',
    'footer.cookieSettings': 'Configuración de Cookies',
    'fab.backToTop': 'Volver arriba',
    'fab.whatsapp': 'Chatea con Magaly por WhatsApp',
    'form.invalid': 'Por favor completa todos los campos con un correo válido.',
    'form.sending': 'Enviando…',
    'form.success': '¡Gracias, {name}! Tu mensaje ha sido enviado.',
    'form.error': 'Algo salió mal — intenta de nuevo o escribe directamente a itismagaly@gmail.com.',
    'cookies.text': 'Uso cookies para entender cómo se usa este sitio (Google Analytics). Puedes aceptar o rechazar — mira la <a href="/privacy.html">Política de Privacidad</a> para más detalles.',
    'cookies.accept': 'Aceptar',
    'cookies.reject': 'Rechazar',
    'newsletter.kicker': 'Mantente al tanto',
    'newsletter.title': 'Historias, antes que nadie más las vea.',
    'newsletter.sub': 'Detrás de cámaras de Understory, experimentos con video de IA, y algún cupo que se abra para nuevos proyectos.',
    'newsletter.label': 'Correo electrónico',
    'newsletter.placeholder': 'tu@correo.com',
    'newsletter.submit': 'Suscribirme',
    'newsletter.note': 'Sin spam, nunca — cancela cuando quieras.'
  }
};

const LANG_STORAGE_KEY = 'itismagaly-lang';
let currentLang = localStorage.getItem(LANG_STORAGE_KEY) === 'es' ? 'es' : 'en';

const applyLanguage = (lang) => {
  currentLang = lang;
  const dict = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
  });

  document.getElementById('flagGB').classList.toggle('is-active', lang === 'en');
  document.getElementById('flagES').classList.toggle('is-active', lang === 'es');

  document.documentElement.lang = lang;
  document.getElementById('langCode').textContent = lang.toUpperCase();
  localStorage.setItem(LANG_STORAGE_KEY, lang);
};

document.getElementById('langToggle').addEventListener('click', () => {
  applyLanguage(currentLang === 'en' ? 'es' : 'en');
});

applyLanguage(currentLang);

/* Scroll progress bar */
const scrollProgress = document.getElementById('scrollProgress');
let progressTicking = false;

const setScrollProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  scrollProgress.style.width = `${progress}%`;
  progressTicking = false;
};

window.addEventListener('scroll', () => {
  if (!progressTicking) {
    requestAnimationFrame(setScrollProgress);
    progressTicking = true;
  }
}, { passive: true });
setScrollProgress();

/* Mobile nav toggle */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* Shrink/shadow nav on scroll + back-to-top visibility */
const nav = document.getElementById('nav');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 20
    ? '0 8px 30px rgba(28,26,20,0.12)'
    : 'none';
  backToTop.classList.toggle('visible', window.scrollY > 600);
}, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* Active nav-link tracking */
const navLinkEls = Array.from(navLinks.querySelectorAll('.nav-link'));
const trackedSections = navLinkEls
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = `#${entry.target.id}`;
      navLinkEls.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

trackedSections.forEach((section) => sectionObserver.observe(section));

/* Count-up numbers */
const animateCount = (el) => {
  const target = Number(el.dataset.countTo);
  if (prefersReducedMotion) {
    el.textContent = target;
    return;
  }
  const duration = 1400;
  const start = performance.now();
  const step = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(target * eased);
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

/* Scroll-reveal animations */
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      entry.target.querySelectorAll('.count').forEach(animateCount);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i % 6, 5) * 0.08}s`;
  observer.observe(el);
});

/* Hero blob parallax — follows the cursor */
const hero = document.querySelector('.hero');
const heroBlobs = document.querySelector('.hero-blobs');

if (hero && heroBlobs && !prefersReducedMotion) {
  hero.addEventListener('pointermove', (e) => {
    const rect = hero.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const py = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    heroBlobs.style.setProperty('--px', (px * 18).toFixed(1));
    heroBlobs.style.setProperty('--py', (py * 18).toFixed(1));
  });
  hero.addEventListener('pointerleave', () => {
    heroBlobs.style.setProperty('--px', 0);
    heroBlobs.style.setProperty('--py', 0);
  });
}

/* Card & price-card cursor spotlight */
if (!prefersReducedMotion) {
  document.querySelectorAll('.card, .price-card').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      el.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  });
}

/* Contact form — submits to Web3Forms so messages arrive by email */
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  status.classList.remove('error');

  if (!name || !message || !emailPattern.test(email)) {
    status.textContent = translations[currentLang]['form.invalid'];
    status.classList.add('error');
    return;
  }

  submitBtn.disabled = true;
  status.textContent = translations[currentLang]['form.sending'];

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: form.access_key.value,
        subject: form.subject.value,
        name,
        email,
        message,
        botcheck: form.botcheck.checked,
      }),
    });
    const result = await response.json();

    if (result.success) {
      status.textContent = translations[currentLang]['form.success'].replace('{name}', name.split(' ')[0]);
      form.reset();
    } else {
      throw new Error(result.message || 'Submission failed');
    }
  } catch (err) {
    status.textContent = translations[currentLang]['form.error'];
    status.classList.add('error');
  } finally {
    submitBtn.disabled = false;
  }
});

/* Cookie consent — Google Analytics only loads after explicit accept */
const GA_MEASUREMENT_ID = 'G-E2ERMTDMHC';
const COOKIE_CONSENT_KEY = 'itismagaly-cookie-consent';

const loadAnalytics = () => {
  if (document.getElementById('ga-script')) return;
  const script = document.createElement('script');
  script.id = 'ga-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
};

const cookieConsent = document.getElementById('cookieConsent');
const cookieAccept = document.getElementById('cookieAccept');
const cookieReject = document.getElementById('cookieReject');
const cookieSettingsLink = document.getElementById('cookieSettingsLink');

const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
if (storedConsent === 'granted') {
  loadAnalytics();
} else if (storedConsent !== 'denied') {
  cookieConsent.classList.add('visible');
}

cookieAccept.addEventListener('click', () => {
  localStorage.setItem(COOKIE_CONSENT_KEY, 'granted');
  loadAnalytics();
  cookieConsent.classList.remove('visible');
});

cookieReject.addEventListener('click', () => {
  localStorage.setItem(COOKIE_CONSENT_KEY, 'denied');
  cookieConsent.classList.remove('visible');
});

cookieSettingsLink.addEventListener('click', () => {
  cookieConsent.classList.add('visible');
});
