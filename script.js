/* =============================================
   AGRI-TOGO — Scripts du site
   ============================================= */

/* Active le mode JS (permet les fades progressifs, etc.) */
document.documentElement.classList.add('js');

/* ---------- Données des actualités ---------- */
const news = [
  {
    titre: "Foire agricole régionale",
    date: "10/08/2026",
    img: "images/Market-agricole.jpeg",
    extrait: "Participation des producteurs AGRI-TOGO à la foire agricole de Lomé.",
    lien: "foire.html"
  },
  {
    titre: "Formation en techniques durables",
    date: "02/08/2026",
    img: "images/formation.jpeg",
    extrait: "Atelier sur l’agriculture durable pour les membres de la coopérative.",
    lien: "formation.html"
  },
  {
    titre: "Récolte de manioc",
    date: "25/07/2026",
    img: "images/manioc_js.jpeg",
    extrait: "La campagne de récolte du manioc a débuté dans la région des Plateaux.",
    lien: "manioc.html"
  }
];

/* ---------- Injection des actualités ---------- */
const newsList = document.getElementById('news-list');
if (newsList) {
  news.forEach(item => {
    const card = document.createElement('article');
    card.className = 'news-card';
    card.innerHTML = `
      <img src="${item.img}" alt="${item.titre}" loading="lazy">
      <div class="news-content">
        <h3>${item.titre}</h3>
        <p><em>${item.date}</em></p>
        <p>${item.extrait}</p>
        <a href="${item.lien}">Lire la suite</a>
      </div>
    `;
    newsList.appendChild(card);
  });
  armLazyImages(newsList);
}

/* ---------- Données produits ---------- */
const produits = [
  { nom: "Maïs", desc: "Céréale de base cultivée localement.", img: "images/Maïs.jpeg", cat: "cereales" },
  { nom: "Maïs", desc: "Céréale de base cultivée localement.", img: "images/M2.jpeg", cat: "cereales" },
  { nom: "Maïs", desc: "Céréale de base cultivée localement.", img: "images/M1.jpeg", cat: "cereales" },
  { nom: "Maïs", desc: "Céréale de base cultivée localement.", img: "images/M4.jpeg", cat: "cereales" },
  { nom: "Manioc", desc: "Tubercule transformé en gari et farine.", img: "images/manioc.jpeg", cat: "tubercules" },
  { nom: "Manioc", desc: "Tubercule transformé en gari et farine.", img: "images/manioc5.jpg", cat: "tubercules" },
  { nom: "Manioc", desc: "Tubercule transformé en gari et farine.", img: "images/manioc4.jpg", cat: "tubercules" },
  { nom: "Manioc", desc: "Tubercule transformé en gari et farine.", img: "images/manioc3.jpg", cat: "tubercules" },
  { nom: "Manioc", desc: "Tubercule transformé en gari et farine.", img: "images/manioc2.jpg", cat: "tubercules" },
  { nom: "Manioc", desc: "Tubercule transformé en gari et farine.", img: "images/manioc&.jpeg", cat: "tubercules" },
  { nom: "Manioc", desc: "Tubercule transformé en gari et farine.", img: "images/manioc_js.jpeg", cat: "tubercules" },
  { nom: "Ananas", desc: "Fruit tropical sucré et juteux.", img: "images/annanas.jpeg", cat: "fruits" },
  { nom: "Ananas", desc: "Fruit tropical sucré et juteux.", img: "images/ananas2.jpeg", cat: "fruits" },
  { nom: "Ananas", desc: "Fruit tropical sucré et juteux.", img: "images/ananas1.jpeg", cat: "fruits" },
  { nom: "Farine de maïs", desc: "Produit transformé issu du maïs.", img: "images/Farine.jpg", cat: "transformes" },
  { nom: "Jus d’ananas", desc: "Boisson naturelle et rafraîchissante.", img: "images/jus.jpg", cat: "transformes" },
  { nom: "Jus d’ananas", desc: "Boisson naturelle et rafraîchissante.", img: "images/jus_ananas1.jpg", cat: "transformes" },
  { nom: "Jus d’ananas", desc: "Boisson naturelle et rafraîchissante.", img: "images/jus_ananas.jpg", cat: "transformes" },
  { nom: "Gari", desc: "Semoule de manioc très consommée.", img: "images/gari.jpeg", cat: "transformes" },
  { nom: "Gari", desc: "Semoule de manioc très consommée.", img: "images/Gari.jpg", cat: "transformes" },
];

/* ---------- Galerie produits + filtres ---------- */
const gallery = document.getElementById('gallery');

function displayProducts(list) {
  if (!gallery) return;
  gallery.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.nom}" loading="lazy">
      <h3>${p.nom}</h3>
      <p>${p.desc}</p>
    `;
    gallery.appendChild(card);
  });
  armLazyImages(gallery);
}

function filterProducts(cat, btn) {
  const list = cat === 'all' ? produits : produits.filter(p => p.cat === cat);
  displayProducts(list);
  document.querySelectorAll('.filters button').forEach(b => {
    const active = b === btn;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', String(active));
  });
}

const filterBar = document.querySelector('.filters');
if (filterBar) {
  filterBar.addEventListener('click', e => {
    const btn = e.target.closest('button[data-filter]');
    if (btn) filterProducts(btn.dataset.filter, btn);
  });
}

if (gallery) displayProducts(produits);

/* ---------- Formulaire de contact ---------- */
const form = document.getElementById('contactForm');
if (form) {
  const messageBox = document.getElementById('form-message');

  const showMessage = (text, type) => {
    if (!messageBox) return;
    messageBox.textContent = text;
    messageBox.className = 'form-message ' + type;
  };

  form.addEventListener('submit', e => {
    e.preventDefault();

    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const sujet = document.getElementById('sujet').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!nom || !email || !sujet || !message) {
      showMessage("Veuillez remplir tous les champs.", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showMessage("Veuillez saisir une adresse email valide.", "error");
      return;
    }

    showMessage(
      "Merci, votre message a bien été envoyé ! Nous vous répondrons dans les plus brefs délais.",
      "success"
    );
    form.reset();
  });
}

/* ---------- Année dynamique dans le pied de page ---------- */
const yearEl = document.getElementById('annee');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- Apparition progressive des images ---------- */
function armLazyImages(scope) {
  const root = scope || document;
  root.querySelectorAll('img[loading="lazy"]').forEach(img => {
    if (img.classList.contains('is-loaded')) return;
    const show = () => img.classList.add('is-loaded');
    if (img.complete) {
      show();
      return;
    }
    img.addEventListener('load', show, { once: true });
    img.addEventListener('error', show, { once: true });
    // Filet de sécurité : une image chargée sans événement ne doit jamais rester invisible
    setTimeout(() => {
      if (img.complete) show();
    }, 2000);
  });
}

armLazyImages();
