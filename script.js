// Menu lateral (off-canvas) — camada escura + barra deslizante
document.addEventListener('DOMContentLoaded', function () {
  const hero = document.querySelector('.hero'); // funciona tanto no header da home quanto na barra compacta das páginas internas
  const menuBtn = document.getElementById('menuBtn');
  const overlay = document.getElementById('heroOverlay');
  const navLinks = document.querySelectorAll('.site-nav .nav-link, .site-nav .btn-round');

  function toggleMenu() {
    const isOpen = hero.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  function closeMenu() {
    hero.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  menuBtn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);

  // fecha o menu ao clicar em qualquer link (útil ao navegar entre seções)
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
});