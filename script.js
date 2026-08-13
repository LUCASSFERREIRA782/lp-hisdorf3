/**
 * Orquestra a página: aplica a configuração central e inicializa módulos.
 */
(function initializeSite() {
  const { business, navigation, hero, about, services, differentials, hours } = siteConfig;
  const whatsappUrl = createWhatsAppUrl(business.whatsapp, siteConfig.whatsappMessage);

  const setText = (selector, value) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
    });
  };

  const setLink = (selector, value) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.href = value;
    });
  };

  setText('[data-business-name]', business.name);
  setText('[data-hero-eyebrow]', hero.eyebrow);
  setText('[data-hero-title]', hero.title);
  setText('[data-hero-subtitle]', hero.subtitle);
  setText('[data-hero-primary]', hero.primaryAction);
  setText('[data-hero-secondary]', hero.secondaryAction);
  setText('[data-about-title]', about.title);
  setText('[data-about-text]', about.text);
  setText('[data-address]', business.address);
  setText('[data-current-year]', new Date().getFullYear());

  document.querySelector('[data-hero-image]').style.backgroundImage = `url("${hero.image}")`;
  document.querySelector('[data-about-image]').style.backgroundImage = `url("${about.image}")`;
  document.querySelector('[data-about-image]').setAttribute('aria-label', `Ambiente da ${business.name}`);

  setLink('[data-booking-link]', business.bookingUrl);
  setLink('[data-whatsapp-link]', whatsappUrl);
  setLink('[data-maps-link]', business.mapsUrl);
  setLink('[data-instagram-link]', business.social.instagram);

  document.querySelector('[data-navigation]').innerHTML = navigation
    .map(({ label, target }) => `<li><a href="${target}">${label}</a></li>`)
    .join('');

  document.querySelector('[data-services]').innerHTML = services
    .map(
      ({ name, description, price, icon }) => `
        <article class="service-card">
          <span class="service-card__icon" aria-hidden="true">${icon}</span>
          <h3>${name}</h3>
          <p class="service-card__description">${description}</p>
          <div class="service-card__footer"><span class="service-card__price">${price}</span><a class="text-link" href="${business.bookingUrl}" target="_blank" rel="noopener">Agendar</a></div>
        </article>`
    )
    .join('');

  document.querySelector('[data-differentials]').innerHTML = differentials.map((item) => `<li>${item}</li>`).join('');
  document.querySelector('[data-hours]').innerHTML = hours.map(({ days, hours: openingHours }) => `<div><dt>${days}</dt><dd>${openingHours}</dd></div>`).join('');

  const menuButton = document.querySelector('.menu-toggle');
  const navigationMenu = document.querySelector('.main-navigation');
  menuButton.addEventListener('click', () => {
    const isOpen = navigationMenu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  navigationMenu.addEventListener('click', (event) => {
    if (!event.target.matches('a')) return;
    navigationMenu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
  });

  initializeGallery(siteConfig.gallery);
  initializeReviewSlider(siteConfig.reviews);
  initializeRevealAnimations();
  window.addEventListener('load', () => document.querySelector('.loader').classList.add('is-hidden'));
})();