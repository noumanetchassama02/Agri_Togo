// Données d’actualités




const news = [
  {
    titre: "Foire agricole régionale",
    date: "10/08/2026",
    img: "images/foire.jpeg",
    extrait: "Participation des producteurs AGRI-TOGO à la foire agricole de Lomé.",
    lien: "foire.html",
    classe: "foire-card"
  },
  {
    titre: "Formation en techniques durables",
    date: "02/08/2026",
    img: "images/formation.jpeg",
    extrait: "Atelier sur l’agriculture durable pour les membres de la coopérative.",
    lien: "formation.html",
    classe: "formation-card"
  },
  {
    titre: "Récolte de manioc",
    date: "25/07/2026",
    img: "images/manioc_js.jpeg",
    extrait: "La campagne de récolte du manioc a débuté dans la région des Plateaux.",
    lien: "manioc.html",
    classe: "manioc-card"
  }
];


// Injection dans la page
const newsList = document.getElementById('news-list');
if (newsList) {
  news.forEach(item => {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.innerHTML = `
      <img src="${item.img}" alt="${item.titre}">
      <div class="news-content">
        <h3>${item.titre}</h3>
        <p><em>${item.date}</em></p>
        <p>${item.extrait}</p>
        <a href="${item.lien}">Lire la suite</a>
      </div>
    `;
    newsList.appendChild(card);
  });
}

// Données produits
const produits = [
  { nom: "Maïs", desc: "Céréale de base cultivée localement.", img: "images/Maïs.jpeg", cat: "cereales" },
  { nom: "Manioc", desc: "Tubercule transformé en gari et farine.", img: "images/manioc.jpeg", cat: "tubercules" },
  { nom: "Ananas", desc: "Fruit tropical sucré et juteux.", img: "images/annanas.jpeg", cat: "fruits" },
  { nom: "Farine de maïs", desc: "Produit transformé issu du maïs.", img: "images/Farine.jpg", cat: "transformes" },
  { nom: "Jus d’ananas", desc: "Boisson naturelle et rafraîchissante.", img: "images/jus.jpg", cat: "transformes" },
  { nom: "Gari", desc: "Semoule de manioc très consommée.", img: "images/gari.jpeg", cat: "transformes" }
];

// Fonction d’affichage
function displayProducts(list) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.nom}">
      <h3>${p.nom}</h3>
      <p>${p.desc}</p>
    `;
    gallery.appendChild(card);
  });
}

// Filtre
function filterProducts(cat) {
  if (cat === 'all') {
    displayProducts(produits);
  } else {
    const filtered = produits.filter(p => p.cat === cat);
    displayProducts(filtered);
  }
}

// Affichage initial
displayProducts(produits);

// Exemple : menu responsive
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});
// Exemple de données
const actualites = [
  { titre: "Nouvelle récolte de maïs", date: "01/08/2026" },
  { titre: "Partenariat avec ONG locale", date: "25/07/2026" },
  { titre: "Lancement du jus d’ananas", date: "15/07/2026" }
];

// Injection dans la page
const actusList = document.getElementById('actus-list');
actualites.forEach(actu => {
  const div = document.createElement('div');
  div.className = 'actu';
  div.innerHTML = `<h3>${actu.titre}</h3><p>${actu.date}</p>`;
  actusList.appendChild(div);
});


// Validation formulaire contact
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const sujet = document.getElementById('sujet').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!nom || !email || !sujet || !message) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Vérification email simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Veuillez entrer un email valide.");
      return;
    }

    alert("Merci, votre message a été envoyé !");
    form.reset();
  });
}
