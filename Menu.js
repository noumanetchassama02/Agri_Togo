/* =============================================
   AGRI-TOGO — Menu mobile
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('nav ul');

  if (!hamburger || !navList) return;

  const setMenu = (open) => {
    navList.classList.toggle('show', open);
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  };

  hamburger.setAttribute('aria-controls', navList.id || 'nav-menu');
  setMenu(false);

  hamburger.addEventListener('click', () => {
    setMenu(!navList.classList.contains('show'));
  });

  // Ferme le menu après un clic sur un lien
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
  });

  // Ferme le menu en cliquant à l'extérieur
  document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) setMenu(false);
  });

  // Ferme le menu avec la touche Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
  });
});
